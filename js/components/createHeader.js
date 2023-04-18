import { createElement } from '../helper/createElement.js';

export const createHeader = (parent) => {
    const container = createElement('div', {
        className: 'container header__container'
    });

    const logoLink = createElement('a', {
        href: '#',
        className: 'header__logo-link'
    });
    const logoImg = createElement('img', {
        src: 'img/logo.svg',
        className: 'header__logo',
        alt: 'Логотип сервиса Brain Cards'
    });
    logoLink.append(logoImg);
    const headerSubTitle = createElement('h2', {
        className: 'header__subtitle',
        textContent: 'Категории'
    });
    const headerBtn = createElement('button', {
        className: 'header__btn',
        textContent: 'Добавить категорию'
    });
    container.append(logoLink, headerSubTitle, headerBtn);
    parent.append(container);

    const updateHeaderTitle = title => {
        headerSubTitle.textContent = title;
    }

    return { logoLink, headerBtn, updateHeaderTitle };
}