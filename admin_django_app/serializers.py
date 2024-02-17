# serializers.py
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
import redis
from django.conf import settings
from admin_app.models import Patient, PatientVisitDashboard, Visit


User = get_user_model()

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user, remember_me=False):
        token = super().get_token(user)

        # Save token to Redis with TTL
        r = redis.Redis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=0)
        ttl = settings.REMEMBER_ME_TTL if remember_me else settings.DEFAULT_TTL
        r.set(f"user_token:{user.id}", str(token.access_token), ex=ttl)

        return token

    def validate(self, attrs):
        # Add a flag for 'remember me' in your request data if needed
        remember_me = attrs.get("remember_me", False)
        data = super().validate(attrs)
        self.get_token(self.user, remember_me=remember_me)
        return data



class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'password', 'password2')
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        if attrs['password'] != attrs.pop('password2'):
            raise serializers.ValidationError("Password fields didn't match.")
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''), 
            last_name=validated_data.get('last_name', '')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


    
class PatientVisitDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientVisitDashboard
        fields = ['id', 'name', 'appointment_date', 'treatment_provided', 'medical_history_notes', 'total_to_pay', 'payment_status', 'reference_number', 'attachments', 'amount_paid']


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'first_name', 'last_name', 'image', 'visits']


class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields = ['id', 'payer', 'patient', 'amount', 'date', 'description', 'payment_method', 'reference_number', 'status', 'attachments']


