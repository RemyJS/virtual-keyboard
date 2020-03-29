const main = document.createElement("main");
document.body.append(main);


const monitor = document.createElement("div");
monitor.className = "monitor";
const screen = document.createElement("textarea");
screen.className ="screen crt";
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
    ["Tab","Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/","Del"],
    ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
    ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];
const ruCaseDown = [
    ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab","й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\","Del"],
    ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];
const enCaseUp = [
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab","Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|","Del"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];
const enCaseDown = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab","q", "w", "e", "r", "t", "t", "u", "i", "o", "p", "[", "]", "\\","Del"],
    ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
];

function addKeys(row,n){
    for(let i = 0; i < keyCodes[n].length; i++){

        let key = document.createElement("div");
        key.classList.add("key");
        key.classList.add(keyCodes[n][i]);

        let ru = document.createElement("span");
        ru.classList.add("ru");

        let ruKeyCaseUp = document.createElement("span");

        ruKeyCaseUp.classList.add("caseUp");
        ruKeyCaseUp.innerText = ruCaseUp[n][i];
        ru.append(ruKeyCaseUp);

        let ruKeyCaseDown = document.createElement("span");
        ruKeyCaseDown.classList.add("caseDown");
        ruKeyCaseDown.innerText = ruCaseDown[n][i];
        ru.append(ruKeyCaseDown);


        let en = document.createElement("span");
        en.classList.add("en");

        let enKeyCaseUp = document.createElement("span");
        enKeyCaseUp.classList.add("caseUp");
        enKeyCaseUp.innerText = enCaseUp[n][i];
        en.append(enKeyCaseUp);

        let enKeyCaseDown = document.createElement("span");
        enKeyCaseDown.classList.add("caseDown");
        enKeyCaseDown.innerText = enCaseDown[n][i];
        en.append(enKeyCaseDown);

        key.append(ru);
        key.append(en);
        row.append(key);      
    }
}

for(let i = 0; i < 5; i++){//add rows to keyboard 
    let row = document.createElement("div");
    row.className = "row";
    addKeys(row,i);
    keyboard.append(row);
}

const enKeys = document.querySelectorAll(".en");
const ruKeys = document.querySelectorAll(".ru");
enKeys.forEach((el) => el.classList.toggle("hidden"));

const upKeys = document.querySelectorAll(".caseUp");
const downKeys = document.querySelectorAll(".caseDown");
downKeys.forEach((el) => el.classList.toggle("hidden"));

function changeLang(){
    enKeys.forEach((el) => el.classList.toggle("hidden"));
    ruKeys.forEach((el) => el.classList.toggle("hidden"));
}

function caps(){
    upKeys.forEach((el) => el.classList.toggle("hidden"));
    downKeys.forEach((el) => el.classList.toggle("hidden"));
}
//event 
window.addEventListener("keypress",(event)=>{
    console.log(event);
    // event.preventDefault();
    let code = event.code;
    console.log(code);
    keyboard.querySelector(`.${code}`).classList.add("key__press");
});
window.addEventListener("keyup",(event)=>{
    event.preventDefault();
    let code = event.code;
    keyboard.querySelector(`.${code}`).classList.remove("key__press");
});