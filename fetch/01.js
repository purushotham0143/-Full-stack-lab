// const products=[
//       {
//         "id": 1,
//         "title": "Essence Mascara Lash Princess",
//         "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//         "category": "beauty",
//         "price": 9.99,
//         "discountPercentage": 7.17,
//         "rating": 4.94,
//         "stock": 5,
//         "tags": [
//           "beauty",
//           "mascara"
//         ],
//         "brand": "Essence",
//         "sku": "RCH45Q1A",
//         "weight": 2,
//         "dimensions": {
//           "width": 23.17,
//           "height": 14.43,
//           "depth": 28.01
//         },
//         "warrantyInformation": "1 month warranty",
//         "shippingInformation": "Ships in 1 month",
//         "availabilityStatus": "Low Stock",
//         "reviews": [
//           {
//             "rating": 2,
//             "comment": "Very unhappy with my purchase!",
//             "date": "2024-05-23T08:56:21.618Z",
//             "reviewerName": "John Doe",
//             "reviewerEmail": "john.doe@x.dummyjson.com"
//           },
//           {
//             "rating": 2,
//             "comment": "Not as described!",
//             "date": "2024-05-23T08:56:21.618Z",
//             "reviewerName": "Nolan Gonzalez",
//             "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
//           },
//           {
//             "rating": 5,
//             "comment": "Very satisfied!",
//             "date": "2024-05-23T08:56:21.618Z",
//             "reviewerName": "Scarlett Wright",
//             "reviewerEmail": "scarlett.wright@x.dummyjson.com"
//           }
//         ],
//         "returnPolicy": "30 days return policy",
//         "minimumOrderQuantity": 24,
//         "meta": {
//           "createdAt": "2024-05-23T08:56:21.618Z",
//           "updatedAt": "2024-05-23T08:56:21.618Z",
//           "barcode": "9164035109868",
//           "qrCode": "..."
//         },
//         "thumbnail": "...",
//         "images": ["...", "...", "..."]
//       }
//       // Add other products here
//     ]
  
//     let sum=0;
//     products.map(ele => {
//         ele.reviews.forEach(item => {
//             sum = sum + item.rating;
//         })
//     })
//     console.log(sum);


// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(consolloe.log);


// async function start() {
//     let data = await fetch('https://dummyjson.com/products');
//     let res = await data.json();
//     // let doc=JSON.stringify(res);  // To print  the data in the Document
//     // document.write(doc);
//     let sum = 0;
//     res.products.map(ele => {
//      ele.reviews.forEach(item => {
//          sum += item.rating;
//      })
//    })
//    console.log(sum);
//  }
//  start();


// async function Dowork(){
//  var data= await fetch('https://reqres.in/api/Users?page=1');
//  var ans=await data.json();
//  dom(ans);
// function dom(res)
// {
//     var table = document.createElement('table');
//     table.style.border = '2px solid black';

//     var thead = document.createElement('thead');
//     var tbody = document.createElement('tbody');

//     let hederow=document.createElement('tr');
//     if(res.data.length>0){
//     for(const key in res.data[0]){
//      var th=document.createElement('th');
//      th.style.border=" 2px solid black";
//      th.innerHTML=key;
//      hederow.appendChild(th);
//     }
// }
// thead.appendChild(hederow);


// res.data.forEach((ele)=>{
//     var tr=document.createElement('tr');
//     for(const key in ele){
//         var td=document.createElement('td');
//         td.style.border="1px solid blue";
//         td.innerHTML=ele[key];
//         tr.append(td);
//     }
//     tbody.append(tr);
// })
// table.appendChild(thead);
// table.appendChild(tbody);
// document.body.append(table);
// }
// }
// Dowork();


