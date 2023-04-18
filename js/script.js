import { createHeader } from "./components/createHeader.js";

const initApp = () => {
    const headerParent = document.querySelector('.header');
    const app = document.querySelector('#app');
    const headerObject = createHeader(headerParent);

    const returnIndex = e => {
        e.preventDefault();
        headerObject.updateHeaderTitle('Категории');
    }

    headerObject.logoLink.addEventListener('click', returnIndex);
    headerObject.headerBtn.addEventListener('click', () => {
        headerObject.updateHeaderTitle('Новая категория');
    });
}

initApp();