document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    const name1 = document.getElementById('n1');
    const na = document.getElementById('na');
    const email1=document.getElementById('eml');
    const ebl=document.getElementById('ebl');
    na.addEventListener('click', () => {
        if (name1.value === "" || /\d/.test(name1.value)) {
            name1.value = "Enter a valid name";
            name1.style.color="red"
            name1.style.border="1px solid red"
        }
        else{
            name1.style.border="3px solid green" 
        }
        console.log(name1.value);
    });
    name1.addEventListener('click',()=>{
        name1.value=""
    });
    ebl.addEventListener('click',()=>{
        if(!email1.value.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )){
            email1.value="enter valid email"
            email1.style.color="red"
            email1.style.border="1px solid red"
        }
        else{
            email1.style.border="3px solid green"
        }
    });
    email1.addEventListener('click',()=>{
        email1.value=""
    })
});
