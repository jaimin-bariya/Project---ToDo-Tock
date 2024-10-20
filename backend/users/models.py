from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):

    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    img = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'name', 'gender']


# Create your models here.
