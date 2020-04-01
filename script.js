const main = document.createElement("main");
document.body.append(main);


const monitor = document.createElement("div");
monitor.className = "monitor";
const screen = document.createElement("textarea");

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
  ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"],
];

const ruCaseUp = [
  ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
  ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
  ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const ruCaseDown = [
  ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
  ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const enCaseUp = [
  ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
  ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const enCaseDown = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];

function addKeys(row, n) {
  for (let i = 0; i < keyCodes[n].length; i += 1) {
    const key = document.createElement("div");
    key.classList.add("key");
    key.classList.add(keyCodes[n][i]);

    const ru = document.createElement("div");
    ru.classList.add("ru");

    const ruKeyCaseUp = document.createElement("div");

    ruKeyCaseUp.classList.add("caseUp");
    ruKeyCaseUp.innerText = ruCaseUp[n][i];
    ru.append(ruKeyCaseUp);

    const ruKeyCaseDown = document.createElement("div");
    ruKeyCaseDown.classList.add("caseDown");
    ruKeyCaseDown.innerText = ruCaseDown[n][i];
    ru.append(ruKeyCaseDown);


    const en = document.createElement("div");
    en.classList.add("en");

    const enKeyCaseUp = document.createElement("div");
    enKeyCaseUp.classList.add("caseUp");
    enKeyCaseUp.innerText = enCaseUp[n][i];
    en.append(enKeyCaseUp);

    const enKeyCaseDown = document.createElement("div");
    enKeyCaseDown.classList.add("caseDown");
    enKeyCaseDown.innerText = enCaseDown[n][i];
    en.append(enKeyCaseDown);

    key.append(ru);
    key.append(en);
    row.append(key);
  }
}
// add rows to keyboard
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
for (let i = 0; i < 5; i += 1) {
  const row = document.createElement("div");
  row.className = "row";
  addKeys(row, i);
  keyboard.append(row);
}
// UpperCase and Language
const enKeys = document.querySelectorAll(".en");
const ruKeys = document.querySelectorAll(".ru");
const upKeys = document.querySelectorAll(".caseUp");
const downKeys = document.querySelectorAll(".caseDown");

upKeys.forEach((el) => el.classList.toggle("hidden"));

function changeLang() {
  let lang = localStorage.getItem("lang");
  if (!lang) lang = "ru";
  if (lang === "ru") {
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
  if (lang === "ru") {
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
// event
const keyControls = ["Backspace", "Tab", "CapsLock", "ShiftLeft", "ControlLeft", "MetaLeft",
  "AltLeft", "Space", "AltRight", "ControlRight", "ShiftRight", "Enter", "Delete", "Backspace"];

function printKey(elem) {
  function findKey(el) {
    for (let i = 0; i < el.children.length; i += 1) {
      const str = el.children[i].classList.value;
      if (str.indexOf("hidden") === -1) {
        findKey(el.children[i]);
      }
    }
    return elem.innerText;
  }
  let returnPointer;
  if (keyControls.indexOf(elem.classList[1]) === -1) {
    const char = findKey(elem);
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
        returnPointer = screen.selectionEnd - 1;
        screen.value = screen.value.substring(0, screen.selectionEnd - 1)
          + screen.value.substring(screen.selectionEnd);
        screen.selectionEnd = returnPointer;
        break;
      case "Delete":
        returnPointer = screen.selectionEnd;
        screen.value = screen.value.substring(0, screen.selectionEnd)
          + screen.value.substring(screen.selectionEnd + 1);
        screen.selectionEnd = returnPointer;
        break;
      case "Enter":
        screen.value += "\n";
        break;
      // no default
    }
  }
}
window.addEventListener("keydown", (event) => {
  // console.log(event);
  event.preventDefault();
  const { code } = event;
  if (event.ctrlKey && event.altKey) changeLang();// смена языка
  if (code === "CapsLock") caps();
  if (event.key === "Shift" && event.shiftKey && !event.repeat) caps();// Если зажат шифт
  const elem = keyboard.querySelector(`.${code}`);
  if (!elem) return false;
  elem.classList.add("key__down");
  printKey(elem);
  return "keydown";
});
window.addEventListener("keyup", (event) => {
  //  console.log(event);
  event.preventDefault();
  if (event.key === "Shift" && !event.shiftKey) caps();// шифт отпущен
  const { code } = event;
  const elem = keyboard.querySelector(`.${code}`);
  if (!elem) return false;
  elem.classList.remove("key__down");
  return "keyup";
});

keyboard.addEventListener("click", (event) => {
  const { target } = event;
  const key = target.closest(".key");
  if (!key) return false;
  switch (key.classList[1]) {
    case "CapsLock":
      caps();
      break;
    // no default
  }
  printKey(key);
  return "click";
});

screen.value = "Wake Up, Neo...\nhttps://github.com/RemyJS\nОС: Windows\nCtrl+Alt Для смены языка\n";
