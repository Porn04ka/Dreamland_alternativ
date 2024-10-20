import {setLanguage, getLanguage} from './language.js';

let list_lang = getLanguage();
let set_lang = '';
for(let lang in list_lang) {
    set_lang = set_lang + `<li><a class="dropdown-item" href="#">${list_lang[lang]}</a></li>`;
}
document.getElementById('exLang').innerHTML = set_lang;


setLanguage('ru');