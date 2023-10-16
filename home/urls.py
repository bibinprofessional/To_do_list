from django.urls import path
from . import views

urlpatterns=[
    path('',views.home,name='home'),
    path('login_confirmation',views.login_confirmation, name='login_confirmation'),
    path('user',views.user,name='user'),
    path('mark_complete<int:task_id>',views.mark_complete,name='mark_complete'),
    path('task_details<int:task_id>',views.task_details,name='task_details'),
    path('task_delete<int:task_id>',views.task_delete,name='task_delete'),
    path('create_task_confirmation',views.create_task_confirmation, name='create_task_confirmation'),
    
]