from django import forms 
from .models import Tasks
from django.utils.translation import gettext_lazy as _

class BootstrapModelForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        placeholders = getattr(self.Meta, 'placeholders', dict())

        for field_name, field in self.fields.items():

            if field_name in placeholders:
                field.widget.attrs['placeholder'] = placeholders[field_name]


          

class TaskCreateForm(BootstrapModelForm):
    class Meta:
        model= Tasks
        fields= ['title','description','priority','complete']
        
        labels={
            'title':_('Title'),
            'description':_('Description'),
            'priority':_('Task Priority'),
            'complete':_('Mark Completed')
        }
        placeholders={
            'title':_('Title'),
            'description':_('Description'),
        }

        







