const buttonEl = document.querySelector(".button");
const buttonElClose = document.querySelector(".buttonClose");

buttonEl.addEventListener("click", (e) => {
  const boxEl = document.querySelector(".box");
  boxEl.style.display = "block";
});
buttonElClose.addEventListener("click", (e) => {
  const boxEl = document.querySelector(".box");
  boxEl.style.display = "none";
});
