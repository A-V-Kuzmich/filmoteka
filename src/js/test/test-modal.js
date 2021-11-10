import { getApiData } from '../api/api-service.js';
import modalTmpl from "../../partial/templates/modal-film.hbs"
import { openModalWindow } from "../components/modal.js"

let movieId = 56890;

// const testField = document.querySelector('body');
const headerField = document.querySelector('.header');
headerField.insertAdjacentHTML('afterbegin', '<button class="btn-test">!!!!!!!BUTTON ON MODAL Size Chose !!!!!!</button>');
 
const btnRef = document.querySelector('.btn-test');
btnRef.addEventListener('click', () => {
  
    onFetchById(movieId).then(renderCard);
});

function onFetchById(id) {
    let query = `/movie/${id}?`;

    return getApiData(query).then(result => result);
};

function renderCard(card) {
    let markup = modalTmpl(card)
    
    headerField.insertAdjacentHTML("afterbegin", markup);
    openModalWindow();
}

export function removeRender() {
    const modal = document.querySelector(".modal")
    modal.innerHTML=""
    
}



