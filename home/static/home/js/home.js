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

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let con_password = document.getElementById("con_password").value;

    let form_register = document.getElementById("form_register");

    var username1 = username.replaceAll(" ", "");

    if (!username1) {
        return alert("Username Field cannot be empty!!!");
    }

    var check_username = isAlphanum(username1);

    if (!check_username) {
        return alert("Enter a Valid Username!!!");
    }

    if (password.length < 8) {
        return alert("Password should contain at-least 8 characters !!!");
    }

    if (con_password !== password) {
        return alert("Passwords doesn't match");
    }

    form_register.submit();


}

function isAlphanum(str) {
    return /^[a-zA-Z0-9]*$/.test(str);
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