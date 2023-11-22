// Вам необходимо создать навигационное меню для веб-сайта, в котором меняется активный пункт при клике без фактического перехода на другие страницы. Меню должно обладать следующими характеристиками:
// Подсветка активного пункта: При клике на пункт меню он должен становиться активным, и для активного пункта должен применяться определенный стиль (например, изменение цвета фона). Если выбрать другой пункт, предыдущий должен перестать быть активным.
// Эффекты наведения: При наведении курсора на пункты меню должны применяться эффекты (например, изменение цвета текста или фона) для подсказки пользователю, что пункт меню является интерактивным.

document.querySelector("ul").addEventListener("mouseover", (e) => {
  if (e.target.tagName === "A") {
    e.target.style.backgroundColor = "#f0f0f0";
  }
});

document.querySelector("ul").addEventListener("mouseout", (e) => {
  if (e.target.tagName === "A") {
    e.target.style.backgroundColor = "#ffffff";
  }
});

document.querySelector("ul").addEventListener("click", (e) => {
  e.preventDefault();
  const activeEl = document.querySelector(".active");
  if (activeEl) {
    activeEl.classList.remove("active");
  }
  if (e.target.tagName === "A") {
    e.target.classList.add("active");
  }
});
