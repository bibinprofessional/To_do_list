from django.shortcuts import render
from .forms import LoginForm , RegisterForm
from .models import Users
from django.http import HttpResponse
from phonenumber_field.phonenumber import PhoneNumber


def home(request):
    login_form=LoginForm()
    register_form=RegisterForm()
    context= {'login_form':login_form,'register_form':register_form}

    if request.method=='POST':
        if len(request.POST)==3:
            
            email = request.POST.get('user_email')
            password = request.POST.get('user_password')

            logged_user=Users.objects.filter(user_email=email, user_password=password)

            if logged_user.exists():
                context2={'logged_user_id':logged_user[0].auto_increment_id,'login_success':'Login Successfull !!!'}
                context.update(context2)
                return render(request,'home/home.html',context)
            
            else:
                context['login_failed']='Invalid Credentials !!!'
                return render(request,'home/home.html',context)
            
        else:
            register_form=RegisterForm(request.POST)

            name = request.POST.get('user_name')
            dob = request.POST.get('user_dob')
            phone_0 = request.POST.get('user_phone_number_0')
            phone_1 = request.POST.get('user_phone_number_1')
            email = request.POST.get('user_email')
            password = request.POST.get('user_password')

            number=PhoneNumber.from_string(phone_1,region=phone_0)

            if not number.is_valid():
                context['registered_failed']='Registration Failed !!! Invalid Phone Number.'
                return render(request,'home/home.html',context)
            
            elif Users.objects.filter(user_phone_number=phone_1).exists():
                context['registered_failed']='Registration Failed !!! Employee Phone Number already exists.'
                return render(request,'home/home.html',context)
            
            elif Users.objects.filter(user_email=email).exists():
                context['registered_failed']='Registration Failed !!! Employee Email already exists.'
                return render(request,'home/home.html',context)
            
            else:
                
                try:
                    user=Users(user_name=name,user_dob=dob,user_phone_code=phone_0,user_phone_number=phone_1,user_email=email,user_password=password)
                    user.save()
                    context['registered_success']='Registration Successfull !!!'
                    return render(request,'home/home.html',context)
                except:
                    context['registered_failed']='Registration Failed !!! Try again.'
                    return render(request,'home/home.html',context)


    return render(request,'home/home.html',context)

def user(request,logged_user_id):
    logged_user=Users.objects.get(auto_increment_id=logged_user_id)
    context3={'logged_user':logged_user}

    if request.method=='POST':
        phone_0 = request.POST.get('user_phone_0')
        phone_1 = request.POST.get('user_phone_1')
        email = request.POST.get('user_email')

        number=PhoneNumber.from_string(phone_1,region=phone_0)

        if not number.is_valid():
            context3['edit_failed']='Editing Profile Failed !!! Invalid Phone Number.'
            return render(request,'home/user.html',context3)

        elif Users.objects.filter(user_phone_number=phone_1).exists() and logged_user.user_phone_number!=phone_1:
            context3['edit_failed']='Editing Profile Failed !!! Employee Phone Number already exists.'
            return render(request,'home/user.html',context3)
        
        elif Users.objects.filter(user_email=email).exists() and logged_user.user_email!=email:
            context3['edit_failed']='Editing Profile Failed !!! Employee Email already exists.'
            return render(request,'home/user.html',context3)
        
        else:
            try:
                logged_user.emp_phone_number=phone_1
                logged_user.emp_email=email
                logged_user.save()
                context3['edit_success']='Editing Profile Successfull !!!'
                return render(request,'home/user.html',context3)
            
            except:
                context3['edit_failed']='Editing Profile Failed !!!'
                return render(request,'home/user.html',context3)


    return render(request,'home/user.html',context3)

    
    
    


    
    
