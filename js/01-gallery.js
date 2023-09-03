import { galleryItems } from './gallery-items.js';

const galleryCallback = ({ preview, original, description }) => {
    return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
};

const galleryElement = document.querySelector('ul.gallery');
const galleryHtml = galleryItems.map(galleryCallback).join('');

galleryElement.insertAdjacentHTML('beforeend', galleryHtml);

const galleryItemLinkCallback = event => {
    event.preventDefault();

    const galleryItemLink = event.currentTarget;
    const previewImage = galleryItemLink.querySelector('img.gallery__image');
    const originalUrl = previewImage.dataset.source;
    const instance = basicLightbox.create(`
        <img src="${originalUrl}" alt="${previewImage.alt}" title="${previewImage.alt}">
    `);

    instance.show();
};

const galleryLinks = document.querySelectorAll('ul.gallery a.gallery__link');

galleryLinks.forEach(linkElement => {
    linkElement.addEventListener('click', galleryItemLinkCallback);
});

