//funcionamento dos pop-ups
const termos = document.getElementById('terms');
const politica = document.getElementById('policy');

const modalTermos = document.getElementById('popup-termos');
const modalPolitica = document.getElementById('popup-politica');

termos.onclick = function() {
    modalTermos.showModal();
}

politica.onclick = function() {
    modalPolitica.showModal();
}

const btnCloseTerms = document.getElementById('btn_close_terms');
const btnClosePolicy = document.getElementById('btn_close_policy');

btnCloseTerms.onclick = function() {
    modalTermos.close();
}

btnClosePolicy.onclick = function() {
    modalPolitica.close();
}