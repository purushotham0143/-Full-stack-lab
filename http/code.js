let button=document.createElement('button');
button.innerHTML="Click";
document.body.appendChild(button);
button.addEventListener('click',()=>{
let p=document.createElement('p');
p.innerHTML="Button clicked";
document.body.appendChild(p);
})
