import {refs} from "../refs/refs";

function showSpiner () {
    refs.pagePreloader.classList.remove('done');
}
function hideSpiner () {
    refs.pagePreloader.classList.add('done');;
}

export {
    showSpiner,
    hideSpiner,
};

window.addEventListener('load', () => {
    setTimeout(() => {
    refs.pagePreloader.classList.add('done');
    }, 1000); 
})
