// Отслеживание изменения ориентации экрана:
// Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-страни

const textEl = document.querySelector(".text");

screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  const angle = event.target.angle;

  textEl.textContent = `ScreenOrientation change: ${type}, ${angle} degrees.`;
});

// window.addEventListener("orientationchange", () => {
//     alert('The orientation of the screen is changed ');
//     // Параметр screen.orientation позволяет через свойство angle: 0 узнать угол поворота экрана. Аналогично работает window.orientation
//     // console.log(screen.orientation);
//   });

/**
 * Некоторые устройства не поддерживают событие orientationchange, поэтому можно отловить изменение размера окна:
 */
// window.addEventListener('resize', () => {
//     alert('The size of the screen is changed ');
// })
