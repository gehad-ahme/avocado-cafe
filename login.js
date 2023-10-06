const forms=document.querySelector(".forms"),
      pwShowHide=document.querySelectorAll(".fa-eye-slash"),
      links=document.querySelectorAll(".link");

console.log(forms,links,pwShowHide);  
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        let pwFields=eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password=>{
            if(password.type==="password"){
                password.type="text";
                eyeIcon.classList.replace("fa-hide","fa-show");
                return;
            }
            password.type="password";
                eyeIcon.classList.replace("fa-show","fa-hide");
        })
    })
})

links.forEach(link=>{
    link.addEventListener("click",e=>{
       e.preventDefault();
       forms.classList.toggle("show-signup");
    })
})