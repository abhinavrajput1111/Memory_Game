let images = [
  { src: "img/2.png", name: "burger", show: false },
  { src: "img/3.png", name: "peanut", show: false },
  { src: "img/5.png", name: "plane", show: false },
  { src: "img/11.png", name: "home", show: false },
  { src: "img/8.png", name: "icecream", show: false },
  { src: "img/1.png", name: "burger", show: false },
  { src: "img/14.png", name: "drink", show: false },
  { src: "img/9.png", name: "pizza", show: false },
  { src: "img/4.png", name: "peanut", show: false },
  { src: "img/12.png", name: "home", show: false },
  { src: "img/16.png", name: "car", show: false },
  { src: "img/13.png", name: "drink", show: false },
  { src: "img/6.png", name: "plane", show: false },
  { src: "img/10.png", name: "pizza", show: false },
  { src: "img/7.png", name: "icecream", show: false },
  { src: "img/15.png", name: "car", show: false },
];

const attemptDiv = document.querySelector(".span");

let oneClick = -1;
let second = -1;
let score = 0;
let attempt = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledImages = shuffleArray([...images]);

function renderData() {
  let imagebox = document.getElementById("imagebox");
  imagebox.innerHTML = "";
  shuffledImages.forEach((item, index) => {
    if (item.show == true) {
      let img = document.createElement("img");
      img.src = item.src;
      imagebox.append(img);
    } else {
      let div = document.createElement("div");
      div.classList.add("box");
      div.addEventListener("click", () => handleClick(index));
      imagebox.append(div);
    }
  });
}

function handleClick(index) {
  if (oneClick == -1) {
    shuffledImages[index].show = true;
    renderData();
    oneClick = index;
  } else if (second == -1) {
    shuffledImages[index].show = true;
    renderData();
    second = index;
    setTimeout(checkBothImages, 1000);
  }

  attempt++;
  attemptDiv.innerHTML = attempt;
}

function checkBothImages() {
  if (shuffledImages[oneClick].name == shuffledImages[second].name) {
    oneClick = -1;
    second = -1;
    score += 10;
    document.getElementById("score").innerText = score;
  } else {
    shuffledImages[oneClick].show = false;
    shuffledImages[second].show = false;
    oneClick = -1;
    second = -1;
    renderData();
  }
}

window.onload = function() {
  shuffledImages = shuffleArray([...images]);
  renderData();
};
