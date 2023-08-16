import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryDiv = ({
  preview,
  original,
  description,
}) => `<div class="gallery__item">
  <a class = "gallery__link" href = "${original}">
  <img class = "gallery__image" src = "${preview}"
  data-source = "${original}" 
  alt = "${description}"
   />
  </a></div>`;

const galleryListDiv = galleryItems.map((el) => galleryDiv(el)).join("");
gallery.innerHTML = galleryListDiv;

gallery.addEventListener("click", onClickCollectionGal);

const sizeImg = ({ url, description }) => `
  <img
    class="gallery__image"
    src="${url}"
    width="1280"
    alt="${description}"/>
`;
function onClickCollectionGal(e) {
  e.preventDefault();

  const url = e.target.dataset.source;
  const description = e.target.alt;
  if (!(url && description)) return;
  const instance = basicLightbox.create(sizeImg({ url, description }), {
    close: () => {
      gallery.removeEventListener("keydown", onKeyDownEsc);
    },
  });
  instance.show();
  gallery.addEventListener("keydown", onKeyDownEsc);
}

const onKeyDownEsc = (e) => {
  if (e.key === "Escape" || e.keyCode === 27) {
    instance.close();
  }
  console.log(e.key);
};
