let menu_icon = document.getElementById("menu_icon");
let menu_box = document.getElementById("menu_box");
let menu_box_close = document.getElementById("menu_box_close");
let show_user = document.getElementById("show_user");
let signin_box = document.getElementById("signin_box");
let login_btn = document.getElementById("login_btn");
let login_box = document.getElementById("login_box");
let login_box_close = document.getElementById("login_box_close");
let register_login_btn = document.getElementById("register_login_btn");
let register_btn = document.getElementById("register_btn");
let register_box = document.getElementById("register_box");
let register_box_close = document.getElementById("register_box_close");
let login_register_btn = document.getElementById("login_register_btn");
let register_submit = document.getElementById("register_submit");


menu_icon.onclick = () => {

    if (menu_box.style.visibility == "visible") {
        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";
    } else {
        menu_box.style.top = "30px";
        menu_box.style.visibility = "visible";
    }
}

menu_box_close.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";
}


show_user.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    signin_box.style.top = "-1000px";
    signin_box.style.visibility = "hidden";

    register_box.style.top = "-1000px";
    register_box.style.visibility = "hidden";

    login_box.style.top = "20vh";
    login_box.style.visibility = "visible";
}
login_btn.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    signin_box.style.top = "-1000px";
    signin_box.style.visibility = "hidden";

    login_box.style.top = "20vh";
    login_box.style.visibility = "visible";
}

login_box_close.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    login_box.style.top = "-1000px";
    login_box.style.visibility = "hidden";

    signin_box.style.top = "25vh";
    signin_box.style.visibility = "visible";
}

register_btn.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    signin_box.style.top = "-1000px";
    signin_box.style.visibility = "hidden";

    register_box.style.top = "15vh";
    register_box.style.visibility = "visible";
}

register_box_close.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    register_box.style.top = "-1000px";
    register_box.style.visibility = "hidden";

    signin_box.style.top = "25vh";
    signin_box.style.visibility = "visible";
}

register_login_btn.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    login_box.style.top = "-1000px";
    login_box.style.visibility = "hidden";

    register_box.style.top = "15vh";
    register_box.style.visibility = "visible";
}

login_register_btn.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    register_box.style.top = "-1000px";
    register_box.style.visibility = "hidden";

    login_box.style.top = "20vh";
    login_box.style.visibility = "visible";
}


register_submit.onclick = (e) => {
    e.preventDefault();

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    let name = document.getElementById("id_user_name").value;
    let dob = document.getElementById("id_user_dob").value;
    let phone_number_1 = document.getElementById("id_user_phone_number_1").value;
    let email = document.getElementById("id_user_email").value;
    let password = document.getElementById("id_user_password").value;
    let con_password = document.getElementById("id_user_con_password").value;

    let form_register = document.getElementById("form_register");

    var name1 = name.replaceAll(" ", "");

    if (!name1) {
        return alert("Name Field cannot be empty!!!");
    }

    var check_name = isAlpha(name1);

    if (!check_name) {
        return alert("Enter a Valid Name!!!");
    }

    var dob1 = dob.replace(" ", "");

    if (!dob1) {
        return alert("Date-Of-Birth Field cannot be empty!!!");
    }

    var phone_1 = phone_number_1.replace(" ", "");

    if (!phone_1) {
        return alert("Phone Number Field cannot be empty!!!");
    }

    var check_phone_1 = isNumeric(phone_1);

    if (!check_phone_1) {
        return alert("Enter a Valid Phone Number!!!");
    }

    var email1 = email.replace(" ", "");

    if (!email1) {
        return alert("Email Field cannot be empty!!!");
    }

    var mailFormat = /\S+@\S+\.\S+/;

    if (!email1.match(mailFormat)) {
        return alert("Enter a Valid Email !!!");
    }

    if (password.length < 8) {
        return alert("Password should contain at-least 8 characters !!!");
    }

    if (con_password !== password) {
        return alert("Passwords doesn't match");
    }

    form_register.submit();


}

function isAlpha(str) {
    return /^[a-zA-Z]*$/.test(str);
}

function isNumeric(str) {
    return /^\d+$/.test(str);
}

let registered_success_box = document.getElementById("registered_success_box");
let registered_failed_box = document.getElementById("registered_failed_box");
let login_failed_box = document.getElementById("login_failed_box");

if (registered_success_box != null) {
    let registered_success_box_close_btn = document.getElementById("registered_success_box_close_btn");
    registered_success_box_close_btn.onclick = () => {

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        registered_success_box.style.top = "-1000px";
        registered_success_box.style.visibility = "hidden";

        signin_box.style.top = "-1000px";
        signin_box.style.visibility = "hidden";

        login_box.style.top = "20vh";
        login_box.style.visibility = "visible";
    }
}

if (registered_failed_box != null) {
    let registered_failed_box_close_btn = document.getElementById("registered_failed_box_close_btn");
    registered_failed_box_close_btn.onclick = () => {

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        registered_failed_box.style.top = "-1000px";
        registered_failed_box.style.visibility = "hidden";

        signin_box.style.top = "-1000px";
        signin_box.style.visibility = "hidden";

        register_box.style.top = "15vh";
        register_box.style.visibility = "visible";

    }
}

if (login_failed_box != null) {
    let login_failed_box_close_btn = document.getElementById("login_failed_box_close_btn");
    login_failed_box_close_btn.onclick = () => {

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        login_failed_box.style.top = "-1000px";
        login_failed_box.style.visibility = "hidden";

        signin_box.style.top = "-1000px";
        signin_box.style.visibility = "hidden";

        login_box.style.top = "20vh";
        login_box.style.visibility = "visible";

    }
}



let menu_profile_btn = document.getElementById("menu_profile_btn");
let menu_tasks_btn = document.getElementById("menu_tasks_btn");
let menu_settings_btn = document.getElementById("menu_settings_btn");
let menu_logout_btn = document.getElementById("menu_logout_btn");

menu_profile_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    signin_box.style.top = "-1000px";
    signin_box.style.visibility = "hidden";

    register_box.style.top = "-1000px";
    register_box.style.visibility = "hidden";

    login_box.style.top = "20vh";
    login_box.style.visibility = "visible";

    return alert('Login to use this option !!!');
}


menu_tasks_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    signin_box.style.top = "-1000px";
    signin_box.style.visibility = "hidden";

    register_box.style.top = "-1000px";
    register_box.style.visibility = "hidden";

    login_box.style.top = "20vh";
    login_box.style.visibility = "visible";

    return alert('Login to use this option !!!');
}


menu_settings_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    signin_box.style.top = "-1000px";
    signin_box.style.visibility = "hidden";

    register_box.style.top = "-1000px";
    register_box.style.visibility = "hidden";

    login_box.style.top = "20vh";
    login_box.style.visibility = "visible";

    return alert('Login to use this option !!!');
}


menu_logout_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    signin_box.style.top = "-1000px";
    signin_box.style.visibility = "hidden";

    register_box.style.top = "-1000px";
    register_box.style.visibility = "hidden";

    login_box.style.top = "20vh";
    login_box.style.visibility = "visible";

    return alert('Login to use this option !!!');
}