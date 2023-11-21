const contentEl = document.querySelector(".content");
const btnAdd = document.querySelector(".add");
const btnDel = document.querySelector(".del");
const btnClone = document.querySelector(".clone");
const divEl = document.querySelector(".box");

btnAdd.addEventListener("click", () => {
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  const numberDiv = contentEl.children.length + 1;
  newBox.textContent = numberDiv;
  contentEl.appendChild(newBox);
});

btnDel.addEventListener("click", () => {
  if (contentEl.children.length > 0) {
    const lastBox = contentEl.lastChild;
    contentEl.removeChild(lastBox);
  }
});

btnClone.addEventListener("click", () => {
  const lastBox = contentEl.lastChild;
  const clone = lastBox.cloneNode(true);
  contentEl.appendChild(clone);
});
