const photoContainer = document.getElementById("photo-container");

let page = 1;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=${myKey}`
    );
    console.log(response);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

console.log(fetchPhotos());
async function loadMorePhotos() {
  // создание контента
  const responseObj = await fetchPhotos();

  responseObj.forEach((photo) => {
    const imgEl = document.createElement("img");
    imgEl.src = photo.urls.small;
    console.log(imgEl);
    photoContainer.appendChild(imgEl);
  });
}

// window.addEventListener("scroll ", () => {
//   // создание бесконечной прокрутки
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     loadMorePhotos();
//   }
// });

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePhotos();
  }
});

// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();

// photos.forEach(photo => {
//     const photoElement = document.createElement('div');
//     photoElement.classList.add('photo');
//     const img = document.createElement('img');
//     img.src = photo.urls.small;
//     img.alt = photo.alt_description;
//     photoElement.appendChild(img);
//     photoContainer.appendChild(photoElement);
//     });
