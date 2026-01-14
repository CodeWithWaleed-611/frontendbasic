document.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");
    if(window.scrollY > 0)
    {
        navbar.classList.add("scrolled");
    }
    else
    {
        navbar.classList.remove("scrolled");
    }
});

const menu_btn  = document.querySelector(".menu-btn");
var btn_status = false;
menu_btn.addEventListener("click", () => {
    if(!btn_status)
    {
        btn_status = true;
        const menuList = document.querySelector(".links");
        menuList.classList.remove("links");
        menuList.classList.add("menu-list");
    }
    else{
        btn_status = false;
        const menuList = document.querySelector(".menu-list");
        menuList.classList.remove("menu-list");
        menuList.classList.add("links");
        
    }
})

function sendMail(){
    let params = {
        name : document.getElementById("cname").value,
        email : document.getElementById("cemail").value,
        subject : document.getElementById("csubject").value,
        message : document.getElementById("message-body").value,

    }

    emailjs.send("service_kufe3xo","template_fys03e5", params).then(alert("Email Sent!!"));
}