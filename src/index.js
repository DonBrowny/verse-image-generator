import * as htmlToImage from "html-to-image";

const elems = [".colorful-div", ".long-text"];

elems.forEach((elem, ind) => {
  const node = document.querySelector(elem);

  htmlToImage
    .toPng(node)
    .then(function (dataUrl) {
      let img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!");
      console.log(error);
    });
});

const fetchVerse = () => {
  fetch(
    "http://localhost:50010/lowerthird/theme6/c/index.html?command=9&value=0?"
  ).then((res) => {
    console.log(res);
  });
};

// Bind event listeners
document.getElementById("fetchVerseBtn").addEventListener("click", fetchVerse);
