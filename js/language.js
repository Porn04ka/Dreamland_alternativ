export function getLanguage(){
    return ['ru']
}

const LanguageData = {
    "button": { 
        "btnLook": {
            "ru": "Смотреть",
        },
        "btnInv": {
            "ru": "Инвентарь",
        },
        "btnSkills": {
            "ru": "Умения",
        },
        "btnpPractice": {
            "ru": "Практика",
        },
        "btnMagic": {
            "ru": "Магия",
        },
        "btnAssignments": {
            "ru": "Задания",
        },
        "btnCommand": {
            "ru": "Команды",
        },
        "btnEndGame": {
            "ru": "Конец",
        },
        "btnCloth": {
            "ru": "Одежда",
        },
        "btnRunAway": {
            "ru": "Сбежать",
        },
        "btnReturn": {
            "ru": "Возврат",
        },
        "menuNews": {
            "ru": "Новости",
        },
        "menuMaps": {
            "ru": "Карты",
        },
        "menuThings": {
            "ru": "Вещи",
        },
        "menuManual": {
            "ru": "Справка",
        },
        "ViewCurrentMap": {
            "ru": "Карта",
        },
        "ViewSettings": {
            "ru": "Настройки",
        },
        "settingsModalLabel": {
            "ru": "Настройки",
        },
        "selectLanguage":{
            "ru": "Язык",
        }        
    },
    "progress": {
        "prsHealth": {
            "ru": "Здоровье"
        },
        "prsMana": {
            "ru": "Мана"
        },
        "prsStamina": {
            "ru": "Шаги"
        },
        "prsStamina": {
            "ru": "Шаги"
        },
        "prsExperience": {
            "ru": "Опыт"
        },        
    },
};


export function setLanguage(lang) {
    let lang_ar = getLanguage()
    let set_lang = !!~lang_ar.lastIndexOf(lang) ? lang: 'ru';
    // btn
    for (let btn_name in LanguageData.button){
        document.getElementById(btn_name).textContent = LanguageData.button[btn_name][set_lang];
    }

    // progress
    for (let bar_name in LanguageData.progress){
        document.getElementById(bar_name).dataset.typeProgress = LanguageData.progress[bar_name][set_lang]
    }
}
