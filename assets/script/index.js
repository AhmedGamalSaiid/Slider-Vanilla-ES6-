const data = [
  {
    img: "person1.jpeg",
    content:
      "“Ahmed sit amet consectetur adipisicing elit. Ipsam, laudantium numquam accusantium veniamest nulla commodi ratione molestiae ullam magnam dolores exercitationem labore beatae natus omnis delectusquidem, aperiam qui”",
    name: "Katreen Kenny",
    title: "Sector Spictialist",
    link: "https://www.google.com/",
  },
  {
    img: "person2.jpg",
    content:
      "“Gamal  dolor sit amet consectetur adipisicing elit. Ipsam, laudantium numquam accusantium veniamest nulla commodi ratione molestiae ullam magnam dolores exercitationem labore beatae natus omnis delectusquidem, aperiam qui”",
    name: "Saly John",
    title: "Talent Acquisition",
    link: "https://www.youtube.com/",
  },
  {
    img: "person3.jpg",
    content:
      "“Saeed dolor sit amet consectetur adipisicing elit. Ipsam, laudantium numquam accusantium veniamest nulla commodi ratione molestiae ullam magnam dolores exercitationem labore beatae natus omnis delectusquidem, aperiam qui”",
    name: "Ahmed Gamal",
    title: "Front End",
    link: "https://www.twitter.com/",
  },
];
var step = 0;
document.getElementById("left-arrow").addEventListener("click", () => {
  step > 0 ? step-- : (step = data.length - 1);
  slide(step);
});
document.getElementById("right-arrow").addEventListener("click", () => {
  step < data.length - 1 ? step++ : (step = 0);
  slide(step);
});
let slide = (index) => {
  document.slider.src = `./assets/images/${data[index].img}`;
  document.slider.onload=()=>{
    document.querySelector('#content-container').style.animation='image-animate 0.7s';
  }
  document.querySelector('#content-container').style.animation=null;
  document.querySelector(".row-container>p").innerHTML = `${data[index].content}`;
  document.querySelector(".slider-person-name").innerHTML = `${data[index].name}`;
  document.querySelector(".slider-person-title").innerHTML = `${data[index].title}`;
  document.querySelector(".slider-btn").href = `${data[index].link}`;
  document.querySelector(".active").classList.remove("active");
  document.querySelector(`.radio-${index + 1}`).classList.add("active");
};
setInterval(() => {
  slide(step < data.length - 1 ? ++step : (step = 0));
}, 6000);
const dots = document.getElementsByTagName("label");
for (const dotsElement of dots) {
  dotsElement.addEventListener("click", () => {
    slide(dotsElement.className.slice(6, 7) - 1);
  });
}
