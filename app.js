const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "web developer",
        img: "images/image3.webp",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni "
    },
    {
        id: 2,
        name: "Alio Smith",
        job: "backend developer",
        img: "images/image4.jpg",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
        id: 3,
        name: "Alexandra Smith",
        job: "Disiner for web",
        img: "images/image5.jpg",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    },
    {
        id: 4,
        name: "Alexandraccccccc Smith",
        job: "Disiner for web14444",
        img: "images/image6.jpg",
        text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    {
        id: 5,
        name: "Alexandraaaaaaa Smith",
        job: "Disiner for web1212",
        img: "images/image7.webp",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }

] ;
// select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelectorAll(".prev-btn");
const nextBtn = document.querySelectorAll(".next-btn");
const randomBtn = document.querySelectorAll(".random-btn");
// set starting item
let currentItem = 0;
// load initial item

window.addEventListener("DOMContentLoaded", function(){
 showPerson();
});
function showPerson() {
    const item = reviews[currentItem];
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text;
}
// Show next person
nextBtn[0].addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});
// show prev person
prevBtn[0].addEventListener("click", function(){
    currentItem--;
    console.log(currentItem);
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})
// show random person
randomBtn[0].addEventListener("click", function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson();
})