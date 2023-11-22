const buttonEl = document.querySelector(".button");

if (buttonEl) {
  document.querySelector(".button").addEventListener("click", (e) => {
    if (e.isTrusted) {
      const text = e.target.textContent;
      e.target.textContent = "Товар добавлен в корзину";
      setTimeout(() => {
        e.target.textContent = text;
      }, 2000);
    }
  });
}
