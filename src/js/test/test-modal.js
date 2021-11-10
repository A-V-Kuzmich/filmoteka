import { getApiData } from '../api/api-service.js';
import modalTmpl from "../../partial/templates/modal-film.hbs"
import openModalWindow from "../components/modal.js"
let movieId = 568620;

const testField = document.querySelector('.header');
console.log(testField);
testField.insertAdjacentHTML('afterend', '<button class="btn-test">!!!!!!!BUTTON ON MODAL Size Chose !!!!!!</button>');
 
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
    
    testField.insertAdjacentHTML("beforeend", markup);
    // openModalWindow();
}



