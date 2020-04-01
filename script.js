const main = document.createElement("main");
document.body.append(main);


const monitor = document.createElement("div");
monitor.className = "monitor";
const screen = document.createElement("textarea");
screen.disabled = true;
screen.className = "screen crt";
monitor.append(screen);
main.append(monitor);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";

main.append(keyboard);


const keyCodes = [
    ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
    ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete"],
    ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
    ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
    ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"]
];

const ruCaseUp = [
    ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
    ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
    ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];
const ruCaseDown = [
    ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
    ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];
const enCaseUp = [
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];
const enCaseDown = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
    ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];

function addKeys(row, n) {
    for (let i = 0; i < keyCodes[n].length; i++) {

        let key = document.createElement("div");
        key.classList.add("key");
        key.classList.add(keyCodes[n][i]);

        let ru = document.createElement("div");
        ru.classList.add("ru");

        let ruKeyCaseUp = document.createElement("div");

        ruKeyCaseUp.classList.add("caseUp");
        ruKeyCaseUp.innerText = ruCaseUp[n][i];
        ru.append(ruKeyCaseUp);

        let ruKeyCaseDown = document.createElement("div");
        ruKeyCaseDown.classList.add("caseDown");
        ruKeyCaseDown.innerText = ruCaseDown[n][i];
        ru.append(ruKeyCaseDown);


        let en = document.createElement("div");
        en.classList.add("en");

        let enKeyCaseUp = document.createElement("div");
        enKeyCaseUp.classList.add("caseUp");
        enKeyCaseUp.innerText = enCaseUp[n][i];
        en.append(enKeyCaseUp);

        let enKeyCaseDown = document.createElement("div");
        enKeyCaseDown.classList.add("caseDown");
        enKeyCaseDown.innerText = enCaseDown[n][i];
        en.append(enKeyCaseDown);

        key.append(ru);
        key.append(en);
        row.append(key);
    }
}

for (let i = 0; i < 5; i++) {//add rows to keyboard 
    let row = document.createElement("div");
    row.className = "row";
    addKeys(row, i);
    keyboard.append(row);
}
//UpperCase and Language 
const enKeys = document.querySelectorAll(".en");
const ruKeys = document.querySelectorAll(".ru");
const upKeys = document.querySelectorAll(".caseUp");
const downKeys = document.querySelectorAll(".caseDown");

upKeys.forEach((el) => el.classList.toggle("hidden"));

function changeLang() {
    let lang = localStorage.getItem("lang");
    if (!lang) lang = "ru";
    if (lang == "ru") {
        enKeys.forEach((el) => el.classList.remove("hidden"));
        ruKeys.forEach((el) => el.classList.add("hidden"));
        localStorage.setItem("lang", "en");
    } else {
        enKeys.forEach((el) => el.classList.add("hidden"));
        ruKeys.forEach((el) => el.classList.remove("hidden"));
        localStorage.setItem("lang", "ru");
    }
}
function hideLangKeys() {
    let lang = localStorage.getItem("lang");
    if (!lang) lang = "ru";
    if (lang == "ru") {
        enKeys.forEach((el) => el.classList.add("hidden"));
    } else {
        ruKeys.forEach((el) => el.classList.add("hidden"));
    }
}
hideLangKeys();
function caps() {
    upKeys.forEach((el) => el.classList.toggle("hidden"));
    downKeys.forEach((el) => el.classList.toggle("hidden"));
}
//event 
window.addEventListener("keydown", (event) => {
    // console.log(event);
    event.preventDefault();
    let code = event.code;
    if (event.ctrlKey && event.altKey) changeLang();//смена языка 
    if (code == "CapsLock") caps();
    if(event.key == "Shift" && event.shiftKey && !event.repeat)caps();//Если зажат шифт
    let elem = keyboard.querySelector(`.${code}`);
    if (!elem) return false;
    elem.classList.add("key__down");
    printKey(elem);
});
window.addEventListener("keyup", (event) => {
    //  console.log(event);
    event.preventDefault();
    if(event.key == "Shift" && !event.shiftKey)caps();//шифт отпущен 
    let code = event.code;
    let elem = keyboard.querySelector(`.${code}`);
    if (!elem) return false;
    elem.classList.remove("key__down");
});

keyboard.addEventListener("click", (event) => {
    let target = event.target;
    let key = target.closest(".key");
    if(!key)return false;
    switch(key.classList[1]){
        case "CapsLock":
            caps();
            break;           
    }
    printKey(key);
});

const keyControls = ["Backspace", "Tab", "CapsLock", "ShiftLeft", "ControlLeft", "MetaLeft",
    "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight",
    "ArrowUp", "ControlRight", "ShiftRight", "Enter", "Delete", "Backspace"];

function printKey(elem) {
    function findKey(elem) {
        for (let i = 0; i < elem.children.length; i++) {
            let str = elem.children[i].classList.value;
            if (str.indexOf("hidden") == -1) {
                findKey(elem.children[i]);
            }
        }
        return elem.innerText;
    }

    if (keyControls.indexOf(elem.classList[1]) == -1) {
        let char = findKey(elem);
        screen.value += char;
    } else {
        switch (elem.classList[1]) {
            case "Space":
                screen.value += " ";
                break;
            case "Tab":
                screen.value += "     ";
                break;
            case "Backspace":
                screen.value = screen.value.slice(0, -1);
                break;
            case "Delete":
                screen.value = "";
                break;
            case "Enter":
                screen.value += "\n";
                break;
        }
    }

}