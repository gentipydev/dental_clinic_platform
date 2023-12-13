from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser, PermissionsMixin)
from django.utils.timezone import now   
from django.contrib.auth.models import Group, Permission



class MyUserManager(BaseUserManager):

    def create_user(self, email, password):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError("User must have an email address")
        
        user = self.model(
            email=self.normalize_email(email),
        )
        
        user.set_password(password)
        user.save(using=self._db)
        
        return user 
    
    
    def create_superuser(self, email, password):
        """
        Creates and saves a superuser with the email and password.
        """
        user = self.create_user(
            email,
            password
        )

        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        
        return user 
    
    def get_by_natural_key(self, username):
        return self.get(email=username)



def get_profile_image_filepath(self, filename):
    return f"profile_images/{self.pk}/{'profile_image.png'}"


def get_default_profile_image():
    return "pics/default_pics/logo_1080_1080.png"




class MyUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name="email", max_length=255, unique=True)
    first_name = models.CharField(verbose_name="first name", max_length=255, blank=True)
    last_name = models.CharField(verbose_name="last name", max_length=255, blank=True)
    date_joined = models.DateTimeField(verbose_name="date joined", default=now)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    profile_image = models.ImageField(max_length=255, upload_to=get_profile_image_filepath, null=True, blank=True, default=get_default_profile_image)
    
    groups = models.ManyToManyField(Group, related_name="myuser_set", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="myuser_set", blank=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = MyUserManager()
    
    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Check if the user is active and has the permission
        return self.is_active and super().has_perm(perm, obj)
    
    
    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        return True 
    
    def get_profile_image_filename(self):
        return str(self.profile_image)[str(self.profile_image).index(f'profile_images/{self.pk}/'):]
    
    

    @property
    def visits(self):
        received_transactions = self.transactions.all() 
        transactions = list(received_transactions)
        transactions = sorted(transactions, key=lambda t: t.date, reverse=True)
        
        result = []
        for transaction in transactions:
            result.append(
                {
                    'date': transaction.date,
                    'description': transaction.description,
                    'amount': transaction.amount,
                    'category': transaction.category,
                    'payment_method': transaction.payment_method,
                    'reference_number': transaction.reference_number,
                    'status': transaction.status,
                    'attachments': transaction.attachments,
                }
            )
        
        return result



class Patient(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='patient_images/', blank=True, null=True, default='patient_images/patient_logo.png')
    user = models.OneToOneField(MyUser, on_delete=models.CASCADE, related_name='patient')

    @property
    def visits(self):
        """
        Retrieves all visits related to this patient, sorted by date.
        """
        received_visits = self.visit_set.all() 
        visits = sorted(received_visits, key=lambda v: v.date, reverse=True)

        result = []
        for visit in visits:
            result.append(
                {
                    'date': visit.date,
                    'description': visit.description,
                    'amount': visit.amount,
                    'payment_method': visit.payment_method,
                    'reference_number': visit.reference_number,
                    'status': visit.status,
                    'attachments': visit.attachments,
                }
            )
        
        return result

    def __str__(self):
        if self.user:
            doctor_name = f"Dr. {self.user.first_name} {self.user.last_name}"
            return f"{self.first_name} {self.last_name} (Doctor: {doctor_name})"
        return f"{self.first_name} {self.last_name}"




class Visit(models.Model):
    
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    )
    
    PAYMENT_METHOD_CHOICES = (
        ('debit/credit card', 'Debit/Credit Card'),
        ('cash', 'Cash'),
    )
    
    payer = models.ForeignKey(MyUser, on_delete=models.CASCADE, related_name='transactions')
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='visits', default=None)  # Add this line
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    description = models.CharField(max_length=255)
    payment_method = models.CharField(max_length=50, choices=PAYMENT_METHOD_CHOICES, default='cash')
    reference_number = models.CharField(max_length=50)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    attachments = models.FileField(upload_to='attachments/', blank=True, null=True)
    
    
    class Meta:
        ordering = ['-date']
        
    def __str__(self) -> str:
        return self.description


    



class PatientVisitDashboard(models.Model):
    name = models.CharField(max_length=255)
    appointment_date = models.DateTimeField()
    treatment_provided = models.TextField()
    medical_history_notes = models.TextField(blank=True, null=True)
    total_to_pay = models.DecimalField(max_digits=10, decimal_places=2)
    PAYMENT_STATUS_CHOICES = [
        ('Unpaid', 'Unpaid'),
        ('Partially Paid', 'Partially Paid'),
        ('Paid', 'Paid'),
    ]
    payment_status = models.CharField(
        max_length=15,
        choices=PAYMENT_STATUS_CHOICES,
        default='Unpaid',
    )
    reference_number = models.CharField(max_length=255)
    attachments = models.FileField(upload_to='attachments/', blank=True, null=True)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    
    def __str__(self):
        return self.name
