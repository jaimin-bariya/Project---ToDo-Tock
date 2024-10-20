from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.hashers import make_password

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Make password write-only

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'name', 'password', 'gender', 'img']

    def create(self, validated_data):
        # Hash the password before saving
        validated_data['password'] = make_password(validated_data['password'])
        print("Validated Data:", validated_data)  # Debug line
        return super().create(validated_data)
