let menu_icon = document.getElementById("menu_icon");
let menu_box = document.getElementById("menu_box");
let menu_box_close = document.getElementById("menu_box_close");
let user_name = document.getElementById("user_name");
let user_logout_form_box = document.getElementById("user_logout_form_box");


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


let login_success_box_close_btn = document.getElementById("login_success_box_close_btn");

if (login_success_box_close_btn != null) {
    login_success_box_close_btn.onclick = () => {

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        login_success_box.style.top = "-1000px";
        login_success_box.style.visibility = "hidden";

    }
}



let menu_profile_btn = document.getElementById("menu_profile_btn");
let menu_tasks_btn = document.getElementById("menu_tasks_btn");
let menu_settings_btn = document.getElementById("menu_settings_btn");
let menu_logout_btn = document.getElementById("menu_logout_btn");



menu_profile_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    return alert('This function yet to be implemented !!!');

}


menu_tasks_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";


}


menu_settings_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    return alert('This function yet to be implemented !!!');
}


menu_logout_btn.onclick = () => {

    menu_box.style.top = "-1000px";
    menu_box.style.visibility = "hidden";

    return alert('This function yet to be implemented !!!');
}


let search_icon = document.getElementById("search_icon");

if (search_icon != null) {
    search_icon.onclick = () => {

        let search_task_form = document.getElementById("search_task_form");

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        search_task_form.submit();
    }
}



let add_icon = document.getElementById("add_icon");

if (add_icon != null) {
    add_icon.onclick = () => {

        let create_task_box = document.getElementById("create_task_box");

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        task_box.style.top = "-1000px";
        task_box.style.visibility = "hidden";

        create_task_box.style.top = "0px";
        create_task_box.style.visibility = "visible";

    }

}
let create_task_box_close = document.getElementById("create_task_box_close");

if (create_task_box_close != null) {
    create_task_box_close.onclick = () => {

        let create_task_box = document.getElementById("create_task_box");

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        create_task_box.style.top = "-1000px";
        create_task_box.style.visibility = "hidden";

        task_box.style.top = "20vh";
        task_box.style.visibility = "visible";

    }

}

let create_task_success_box_close_btn = document.getElementById("create_task_success_box_close_btn");

if (create_task_success_box_close_btn != null) {
    create_task_success_box_close_btn.onclick = () => {

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        create_task_success_box.style.top = "-1000px";
        create_task_success_box.style.visibility = "hidden";

    }
}


let edit_task_box_close = document.getElementById("edit_task_box_close");

if (edit_task_box_close != null) {
    edit_task_box_close.onclick = () => {

        let form_edit_task_close = document.getElementById("form_edit_task_close");

        menu_box.style.top = "-1000px";
        menu_box.style.visibility = "hidden";

        form_edit_task_close.submit();
    }
}




