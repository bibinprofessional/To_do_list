from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Users(models.Model):
    
    auto_increment_id = models.AutoField(primary_key=True)
    user_name=models.CharField()
    user_dob=models.DateField()
    user_phone_code=models.CharField()
    user_phone_number=PhoneNumberField(unique=True)
    user_email=models.EmailField(unique=True)
    user_password=models.CharField()
    user_verify=models.BooleanField(default=False)