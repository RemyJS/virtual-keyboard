const main = document.createElement("main");
main.innerText = "hello";
document.body.append(main);


const screen = document.createElement("textarea");
screen.className = "screen";

main.append(screen);


const keyboard = document.createElement("div");
keyboard.className = "keyboard";

main.append(keyboard); 


let bq = {
    "keyName":"backquote",
    "ru": {
        "caseUp":"Ё",
        "caseDown":"ё"
    },
    "en": {
        "caseUp":"~",
        "caseDown":"`"
    }
};
const allKeys = [
    [bq]
];
function addKeys(row,n){
    for(let i = 0; i < allKeys[n].length; i++){
        let keyInfo = allKeys[n][i];

        let key = document.createElement('div');
        
    }
}

for(let i = 0; i < 5; i++){
    let row = document.createElement("div");
    row.className = "row";
    addKeys(row,i);
    keyboard.append(row);
}