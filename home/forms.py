from django import forms 
from .models import Users
from django.utils.translation import gettext_lazy as _
from phonenumber_field.widgets import PhoneNumberPrefixWidget

class BootstrapModelForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        icons = getattr(self.Meta, 'icons', dict())
        placeholders = getattr(self.Meta, 'placeholders', dict())
        ids = getattr(self.Meta, 'ids', dict())

        for field_name, field in self.fields.items():
            
            if field_name in icons:
                field.icon = icons[field_name]

            if field_name in placeholders:
                field.widget.attrs['placeholder'] = placeholders[field_name]

            if field_name in ids:
                field.widget.attrs['id'] = ids[field_name]

            
            
                

class LoginForm(BootstrapModelForm):
    class Meta:
        model= Users
        fields= ['user_email','user_password']
        
        labels={
            'user_email':_('EMAIL'),
            'user_password':_('PASSWORD')
        }

        placeholders={
            'user_email':_('Email'),
            'user_password':_('Password')
        }
        
        icons={
            'user_email':_('envelope-open'),
            'user_password':_('lock')
        }

        ids={
            'user_email':_('user_email_login'),
            'user_password':_('user_password_login')
        }

        widgets={
            'user_password':forms.PasswordInput()        

        }

        

class RegisterForm(BootstrapModelForm):
    class Meta:
        model= Users
        fields= ['user_name','user_dob','user_phone_number','user_email','user_password']

        placeholders={
            'user_name':_('Name'),
            'user_dob':_('Date Of Birth'),
            'user_phone_number':_('Phone'),
            'user_email':_('Email'),
            'user_password':_('Password')
        }

        labels={
            'user_name':_('NAME'),
            'user_dob':_('DATE OF BIRTH'),
            'user_phone_number':_('PHONE NUMBER'),
            'user_email':_('EMAIL'),
            'user_password':_('PASSWORD')
        }


        icons={
            'user_name':_('user'),
            'user_dob':_('calendar'),
            'user_phone_number':_('phone'),
            'user_email':_('envelope-open'),
            'user_password':_('lock')
        }

        widgets={
            'user_dob':forms.DateInput(attrs={
                'type':'date'
            }),
            'user_password':forms.PasswordInput(),
            'user_phone_number':PhoneNumberPrefixWidget(initial='IN'),
        

        }





