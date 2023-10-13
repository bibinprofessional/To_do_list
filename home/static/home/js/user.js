let menu_icon = document.getElementById("menu_icon");
let menu_box = document.getElementById("menu_box");
let menu_box_close = document.getElementById("menu_box_close");
let user_name = document.getElementById("user_name");
let user_logout_form_box = document.getElementById("user_logout_form_box");

let edit_user_submit = document.getElementById("edit_user_submit");


edit_user_submit.onclick = (e2) => {
    e2.preventDefault();


    let email = document.getElementById("edit_user_email").value;
    let profile_edit_content_form = document.getElementById("profile_edit_content_form");

    var email1 = email.replace(" ", "");

    if (!email1) {
        return alert("Email Field cannot be empty!!!");
    }

    var mailFormat = /\S+@\S+\.\S+/;

    if (!email1.match(mailFormat)) {
        return alert("Enter a Valid Email !!!");
    }

    profile_edit_content_form.submit();


}


menu_icon.onclick = () => {

    if (menu_box.style.visibility == "visible") {
        user_logout_form_box.style.top = "-1000px";
        user_logout_form_box.style.visibility = "hidden";
        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";
    } else {
        user_logout_form_box.style.top = "-1000px";
        user_logout_form_box.style.visibility = "hidden";
        menu_box.style.top = "30px";
        menu_box.style.visibility = "visible";
    }
}

menu_box_close.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";
}

user_name.onclick = () => {
    if (user_logout_form_box.style.visibility == "visible") {
        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";
        user_logout_form_box.style.top = "-1000px";
        user_logout_form_box.style.visibility = "hidden";
    } else {
        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";
        user_logout_form_box.style.top = "-20px";
        user_logout_form_box.style.visibility = "visible";
    }
}

user_logout_form_box.onclick = () => {
    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";
    user_logout_form_box.style.top = "-1000px";
    user_logout_form_box.style.visibility = "hidden";
}

let edit_failed_box_close_btn = document.getElementById("edit_failed_box_close_btn");

if (edit_failed_box_close_btn != null) {
    edit_failed_box_close_btn.onclick = () => {

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        edit_failed_box.style.top = "-1000px";
        edit_failed_box.style.visibility = "hidden";

        task_box.style.top = "-1000px";
        task_box.style.visibility = "hidden";

        profile_box.style.top = "10vh";
        profile_box.style.visibility = "visible";

    }
}

let edit_success_box_close_btn = document.getElementById("edit_success_box_close_btn");

if (edit_success_box_close_btn != null) {
    edit_success_box_close_btn.onclick = () => {

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        edit_success_box.style.top = "-1000px";
        edit_success_box.style.visibility = "hidden";

    }
}



let menu_profile_btn = document.getElementById("menu_profile_btn");
let menu_tasks_btn = document.getElementById("menu_tasks_btn");
let menu_settings_btn = document.getElementById("menu_settings_btn");
let menu_logout_btn = document.getElementById("menu_logout_btn");


let task_box = document.getElementById("task_box");
let profile_box = document.getElementById("profile_box");



menu_profile_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    task_box.style.top = "-1000px";
    task_box.style.visibility = "hidden";

    profile_box.style.top = "10vh";
    profile_box.style.visibility = "visible";
}


menu_tasks_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    profile_box.style.top = "-1000px";
    profile_box.style.visibility = "hidden";

    task_box.style.top = "10vh";
    task_box.style.visibility = "visible";


}


menu_settings_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    profile_box.style.top = "-1000px";
    profile_box.style.visibility = "hidden";

    task_box.style.top = "10vh";
    task_box.style.visibility = "visible";

    return alert('This function yet to be implemented !!!');
}


menu_logout_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    profile_box.style.top = "-1000px";
    profile_box.style.visibility = "hidden";

    task_box.style.top = "10vh";
    task_box.style.visibility = "visible";

    return alert('This function yet to be implemented !!!');
}

let show_tasks_tab = document.getElementById("show_tasks_tab");
let create_task_tab = document.getElementById("create_task_tab");
let edit_task_tab = document.getElementById("edit_task_tab");
let show_tasks_box = document.getElementById("show_tasks_box");
let create_task_box = document.getElementById("create_task_box");
let edit_task_box = document.getElementById("edit_task_box");


show_tasks_tab.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    create_task_box.style.top = "-1000px";
    create_task_box.style.visibility = "hidden";

    edit_task_box.style.top = "-1000px";
    edit_task_box.style.visibility = "hidden";

    show_tasks_box.style.top = "30%";
    show_tasks_box.style.visibility = "visible";


    show_tasks_tab.style.backgroundColor = "#00000059";
    create_task_tab.style.backgroundColor = "#34353534";
    edit_task_tab.style.backgroundColor = "#34353534";

}
create_task_tab.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    show_tasks_box.style.top = "-1000px";
    show_tasks_box.style.visibility = "hidden";

    edit_task_box.style.top = "-1000px";
    edit_task_box.style.visibility = "hidden";

    create_task_box.style.top = "30%";
    create_task_box.style.visibility = "visible";


    show_tasks_tab.style.backgroundColor = "#34353534";
    create_task_tab.style.backgroundColor = "#00000059";
    edit_task_tab.style.backgroundColor = "#34353534";

}
edit_task_tab.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    create_task_box.style.top = "-1000px";
    create_task_box.style.visibility = "hidden";

    show_tasks_box.style.top = "-1000px";
    show_tasks_box.style.visibility = "hidden";

    edit_task_box.style.top = "30%";
    edit_task_box.style.visibility = "visible";


    show_tasks_tab.style.backgroundColor = "#34353534";
    create_task_tab.style.backgroundColor = "#34353534";
    edit_task_tab.style.backgroundColor = "#00000059";

}








