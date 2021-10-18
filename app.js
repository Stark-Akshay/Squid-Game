var iham = document.querySelector('.bars .fa-bars');
var f = true;
var ham = document.querySelector('.bars');



ham.addEventListener('click',()=>{
    if(f==true){
    iham.removeAttribute('class');
    iham.setAttribute('class','fas fa-times');
    f=false;
    }

else{
    f = true;
    iham.removeAttribute('class');
    iham.setAttribute('class','fas fa-bars');
}
}
)