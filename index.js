function closeNav(){
    document.getElementById("menu").style.display = "none"
}
document.getElementById("menu1").addEventListener("click",()=>{
    console.log("clicked")
    document.getElementById("menu").style.display = " contents"
})
document.getElementById("exit").addEventListener("click",()=>{
    closeNav()
})
document.getElementById("home-btn").addEventListener("click",()=>{
    closeNav()
})
document.getElementById("project-btn").addEventListener("click",()=>{
    closeNav()
})
document.getElementById("about-btn").addEventListener("click",()=>{
    closeNav()
})
document.getElementById("about-btn").addEventListener("click",()=>{
    closeNav()
})
document.getElementById("contact-btn").addEventListener("click",()=>{
    closeNav()
})

document.getElementById("submit").addEventListener("click",()=>{
    const name = document.getElementsByTagName("input").name.value           
    var message = document.myform.message.value;
    if (name==null || name==""){
        alert("Name can't be blank");
        return false;
    }
    if(message == null || message==""){
        alert("message can't be blank");
        return false;
    }
})
function abouUsPageLoad(){
    // 2s 1s backwards
    document.getElementById("about-me-address").style.animationName = "movebottom"
    document.getElementById("about-me-address").style.animationDelay = "2s"
    document.getElementById("about-me-address").style.animationDuration = "1s"
    document.getElementById("about-me-address").style.animationFillMode = "backwards"
}
function commingSoon(){
    window.alert("we are working on this features\ncomming soon....")
}

