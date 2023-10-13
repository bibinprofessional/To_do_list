from django.urls import path
from . import views

urlpatterns=[
    path('',views.home,name='home'),
    path('user<int:logged_user_id>',views.user,name='user'),
]