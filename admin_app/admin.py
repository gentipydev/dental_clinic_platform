from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import MyUser, Patient, PatientVisitDashboard, Visit


class MyUserAdmin(UserAdmin):

    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)



admin.site.register(MyUser, MyUserAdmin)



class PatientAdmin(admin.ModelAdmin):
    list_display = ('name', 'appointment_date', 'treatment_provided', 'medical_history_notes', 'total_to_pay', 'payment_status', 'reference_number', 'attachments', 'amount_paid')
    list_filter = ('payment_status', 'appointment_date')
    search_fields = ('name',)


admin.site.register(PatientVisitDashboard, PatientAdmin)



class VisitInline(admin.TabularInline):
    model = Visit
    extra = 0  # This controls the number of empty forms displayed on the admin page.


class PatientProfileAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'user',) 
    inlines = [VisitInline] 

    def display_visits(self, obj):
        visits = obj.visits
        return ', '.join([f"{visit['date']} - {visit['description']}" for visit in visits])
    
    display_visits.short_description = 'Visits'



admin.site.register(Patient, PatientProfileAdmin)



class VisitAdmin(admin.ModelAdmin):
    list_display = ('payer', 'patient', 'amount', 'date', 'description', 'payment_method', 'reference_number', 'status')
    list_filter = ('status', 'payment_method')
    search_fields = ('payer__email', 'patient__first_name', 'patient__last_name', 'description')
    ordering = ('-date',)

admin.site.register(Visit, VisitAdmin)

