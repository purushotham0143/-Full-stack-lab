const Products = [
    {
        Name: "vivo",
        Price: 1000,
        Image: "https://www.refurbkart.com/cdn/shop/products/VivoY19BLUE.jpg?v=1673869523",
        Dis:"This is first product"
    },
    {Name: "LG Tv",
        Price: 35000,
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6337/6337625ld.jpg",
        Dis:"This is Second product"
    },
    {
        Name: "Realme 10 pro",
        Price: 2700,
         Image:"https://m.media-amazon.com/images/I/512xWF88CnL._AC_UF1000,1000_QL80_.jpg",
        Dis:"This is Third product"
    },
]

localStorage.setItem('key',JSON.stringify(Products));
let data=JSON.parse(localStorage.getItem("key"));
let maindiv=document.createElement('div');
maindiv.style.border="2px solid black";
maindiv.style.width="800px";
maindiv.style.height="500px";
document.body.append(maindiv);
// console.log(data);




function DOM(obj){
// console.log(obj);
var div=document.createElement('div');
div.style.border="1px solid black";
div.style.width="auto";
div.style.height="auto";
maindiv.appendChild(div);
let p1=document.createElement('p');
let p2=document.createElement('p');
let image=document.createElement('img');
image.setAttribute('src',obj.Image);
image.setAttribute('class','img')
let des=document.createElement('button');
des.setAttribute('id','Dis');
des.innerHTML="Discription"

let desc = document.createElement('textarea');
desc.innerHTML = obj.Dis;
desc.style.display = 'none';


let hide=document.createElement('button');
hide.setAttribute('id','hide');
hide.innerHTML=" Hide Discription"
hide.style.display="none";


let Add=document.createElement('button');
Add.innerHTML="Add cart"


p1.innerHTML="Name:"+obj.Name;
p2.innerHTML=obj.Price;
div.append(image);
div.append(p1);
div.append(p2);
div.append(desc);
div.append(des);
div.append(hide);
div.append(Add);

des.addEventListener('click',()=>{
    des.style.display = 'none'
    desc.style.display="block";
    hide.style.display="block";
    
})

hide.addEventListener('click',()=>{
    des.style.display = 'block'
    desc.style.display="none";
    hide.style.display="none";
})

Add.addEventListener('click',()=>{
let cart=JSON.parse(localStorage.getItem('cart'));  // it is initaly null
// console.log(cart);
if(cart==null){
     cart=[];
    obj.count=1;
    cart.push(obj);
    localStorage.setItem('cart',JSON.stringify(cart));
}

else{
let item=cart.find(ele=> {
    if(ele.Name==obj.Name){   // when it is matches then it will return true
    ele.count++;
     return ele;
    }
})

if(item){
    localStorage.setItem('cart',JSON.stringify(cart));
   }else{
    obj.count  = 1;
    cart.push(obj);
    localStorage.setItem('cart',JSON.stringify(cart));
   }
}
})


// This is for searching the product in The  WEbpage
document.querySelector('input').addEventListener('change',(e)=>{
    e.preventDefault();
    let val1=document.querySelector('input').value;
    // console.log(val1)
    maindiv.innerHTML="";
    let h1=document.createElement('h1');
    data.forEach(ele => {
    if(ele.Name.includes(val1)){
   DOM(ele);
    }
})
})



}

 data.forEach(item => { 
    DOM(item);
})


