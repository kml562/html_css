// data-arr is the data of the image, heading,and caption,
let data_arr=[{
    id:1,
    name:"Photo 1",
    caption:"lorem ipsum dolor sit amet, consectet",
    img:"https://source.unsplash.com/1600x900/?nature,water"
},
{
    id:2,
    name:"Photo 2",
    caption:"lorem ipsum dolor sit amet, consectet",
    img:"https://source.unsplash.com/1600x900/?nature,trees"
},
{
    id:3,
    name:"Photo 3",
    caption:"lorem ipsum dolor sit amet, consectet",
    img:"https://source.unsplash.com/1600x900/?nature,flowers"
},
{
    id:4,
    name:"Photo 4",
    caption:"lorem ipsum dolor sit amet, consectet",
    img:"https://source.unsplash.com/1600x900/?nature,animals"
},
{
    id:5,
    name:"Photo 5",
    caption:"lorem ipsum dolor sit amet, consectet",
    img:"https://source.unsplash.com/1600x900/?nature,clouds"
}
];


let data= document.getElementById("data");
data_arr.forEach(function(el){
    let maindiv= document.createElement("div")
    maindiv.id="maindiv"
maindiv.innerHTML=`
<img src= ${el.img} </img>
<h2> ${el.name} </h2>
<p> ${el.caption} </p>
`
let btns= document.createElement("div")
 btns.id="btns"
//  btns.innerHTML=`
//  <svg id="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
//  <p>${count_like}</p>
//  <svg id="dislike" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"/></svg>
//  <p>${count_dis}</p>
//  `
// let count_like=0;
// let count_dis=0;
btns.innerHTML=`
<button  id="like"> <i class="fa-solid fa-heart"></i>  </button>
<button id="dislike"><i class="fa-solid fa-thumbs-down"></i>  </button>
`
// function myFunction(){
//     count_like++;
//     alert("liked")
//     console.log("dfk")
// }
// let like= document.getElementById("like")

maindiv.append(btns)
 data.append(maindiv)
})

let footer= document.getElementById("footer");
footer.innerHTML=` <h1> Get In Touch</h1>
<p>Email or call us to set up a consult</p>
<p>Email: <b>kmlb562@gmail.com</b></p>
<p>Phone: <b>(+91) 8932745600</b></p>`
