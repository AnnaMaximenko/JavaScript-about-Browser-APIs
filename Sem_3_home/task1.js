const photoContainer = document.getElementById("photo-container");
// const cartEl = document.querySelector(".cart");

let page = 1;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=${{
        key,
      }}`
    );
    console.log(response);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}
// console.log(fetchPhotos());

async function loadMore() {
  // создание контента
  const responseObj = await fetchPhotos();

  responseObj.forEach((photo) => {
    const imgEl = document.createElement("img");
    imgEl.classList.add("img");
    imgEl.src = photo.urls.small;

    const checkEl = document.createElement("input");
    checkEl.classList.add("checkbox");
    checkEl.checked = photo.liked_by_user;
    checkEl.type = "checkbox";

    const spanEl = document.createElement("span");
    spanEl.classList.add("like__heart");

    const divEl = document.createElement("div");
    divEl.classList.add("box");

    const labelEl = document.createElement("label");
    divEl.classList.add("label");

    labelEl.textContent = photo.user.first_name;

    photoContainer.appendChild(divEl);
    divEl.appendChild(labelEl);

    labelEl.appendChild(checkEl);

    labelEl.appendChild(spanEl);

    divEl.appendChild(imgEl);
  });
}

async function Append() {}

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMore();
  }
});

loadMore();
