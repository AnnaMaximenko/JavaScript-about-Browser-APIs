"use strict";

// Предупреждение о несохраненных данных:
// Создайте веб-форму с текстовым полем. Реализуйте функционал, при котором при попытке закрыть вкладку браузера появляется диалоговое окно с предупреждением о возможности потери введенных, но несохраненных данных.

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
});
