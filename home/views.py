from django.shortcuts import render,redirect
# from .forms import LoginForm , RegisterForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from .models import Tasks
from .forms import TaskCreateForm
from django.http import HttpResponse

def home(request):
    context={}
    if request.method=='POST':
        if len(request.POST)==3:
            username=request.POST.get('username')
            password=request.POST.get('password')

            user = authenticate(username=username, password=password)

            if user is None:
                context['login_failed']='Invalid Credentials !!!'
                return render(request,'home/home.html',context)
            
            else:
                login(request, user)
                return redirect('login_confirmation')


        else:
            username=request.POST.get('username')
            password=request.POST.get('password')

            if User.objects.filter(username=username).exists():
                context['registered_failed']='Registration Failed !!! Employee Email already exists.'
                return render(request,'home/home.html',context)
            
            else:
                
                try:
                    user = User.objects.create_user(username,'', password)
                    user.save()
                    context['registered_success']='Registration Successfull !!!'
                    return render(request,'home/home.html',context)
                except:
                    context['registered_failed']='Registration Failed !!! Try again.'
                    return render(request,'home/home.html',context)
                
    return render(request,'home/home.html')


def login_confirmation(request):
    context={}
    context['login_success']='Login Successfull !!!'
    if request.method=='POST':
        return redirect('user')
    return render(request, 'home/user.html',context)


def user(request):
    context={}
    context['task_box']=True

    task=Tasks.objects.filter(user=request.user)
    context['task']=task

    create_form=TaskCreateForm()
    context['create_form']=create_form

    count=task.filter(complete=False).count()
    context['count']=count

    search_input = request.GET.get('search-area') or ''
    if search_input:
        context['task'] = context['task'].filter(title__contains=search_input)

        context['search_input'] = search_input

    if request.method=='POST':

        title = request.POST.get('title')
        description = request.POST.get('description')
        priority = request.POST.get('priority')
        complete = request.POST.get('complete')

        if complete is None:
            complete=False
        else:
            complete=True

        new_task=Tasks(user=request.user,title=title,description=description,priority=priority,complete=complete)
        new_task.save()
        return redirect('create_task_confirmation')
   
    return render(request,'home/user.html',context)

def create_task_confirmation(request):
    context={}
    context['create_task_success']='Task Created Successfully !!!'
    if request.method=='POST':
        return redirect('user')
    return render(request,'home/user.html',context)


def mark_complete(request,task_id):
    task=Tasks.objects.get(pk=task_id)
    if task.complete==True:
        task.complete=False
        task.save()

    else:
        task.complete=True
        task.save()
    
    return redirect('user')

def task_details(request,task_id):
    task=Tasks.objects.get(pk=task_id)
    context={}
    context['edit_task']=task
    if request.method=='POST':
        if len(request.POST)==1:
            return redirect('user')
        
        else:
            task.delete()

            edit_title = request.POST.get('edit_title')
            edit_description = request.POST.get('edit_description')
            edit_priority = request.POST.get('edit_priority')
            edit_complete = request.POST.get('edit_complete')

            if edit_complete is None:
                edit_complete=False
            else:
                edit_complete=True

            edit_task=Tasks(user=request.user,title=edit_title,description=edit_description,priority=edit_priority,complete=edit_complete)
            edit_task.save()
            return redirect('user')

    
    return render(request,'home/user.html',context)

def task_delete(request,task_id):
    task=Tasks.objects.get(pk=task_id)
    task.delete()
    return redirect('user')


