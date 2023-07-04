let ranColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let icon = document.querySelector("#icon");
let btnColor = document.querySelector("#btnColor");
let textElement = document.querySelector("#text-element");
let author = document.querySelector("#author");
let bgBtn = document.querySelectorAll("#bg-btn");
let copy = document.querySelector(".copy");
let text = document.querySelector("#text");
// -----------------------------------------

// error
let errorHTML = `
<div class="text-center fs-1">
<i class="fa-solid fa-xmark fa-xl text-danger"></i>
<span class="text-danger fw-bold">Error</span>
</div>
`;

// url by
let url = "https://api.quotable.io/random";

// start project ==============================================

//  get URL by
let getRegions = async () => {
  let respons = await axios.get(url);

  return respons.data;
};

// set project card
let setRegions = async () => {
  try {
    let color = "#";

    for (let i = 1; i <= 6; i++) {
      color += ranColor[randomGenerate()];
    }

    let respons = await getRegions();

    if (respons) {
      textElement.style.color = color;
      author.style.color = color;
      icon.style.color = color;
      bgBtn[0].style.backgroundColor = color;
      bgBtn[1].style.backgroundColor = color;
      bgBtn[0].style.color = "white";
      bgBtn[1].style.color = "white";
      bgBtn[0].style.border = color;
      bgBtn[1].style.border = color;
      document.body.style.backgroundColor = color;
    }

    textElement.innerHTML = respons.content;

    author.innerHTML = "- ";
    author.innerHTML += respons.author;
  } catch (error) {
    console.log("error :" + error);
  }
};

let randomGenerate = () => {
  return Math.floor(Math.random() * ranColor.length);
};

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(textElement.innerHTML);
});

setRegions();
// set project end
