// Завдання 1:
// Створіть нескінченний генератор ідентифікаторів. 
// Повинен працювати наступним чином:
function * createIdGenerator(){
    let id = 1;
    while(true){
        yield id++
    }
}
const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

// Завдання 2 (advanced)
// Створіть генератор, який буде регулювати розміри шрифту для вашого сайту. 
// (Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)
const lorem = document.querySelector(".text");
const buttonFontSizePlus = document.getElementById("btn++");
const buttonFontSizeMinus = document.getElementById("btn--");

buttonFontSizePlus.addEventListener("click", () => {
    lorem.style.fontSize = `${fontGenerator.next("up").value}px`;
});
buttonFontSizeMinus.addEventListener("click", () => {
    lorem.style.fontSize = `${fontGenerator.next("down").value}px`;
});

function * newFontGenerator(font){
    while(true){
        upDown = yield font;
        if(upDown == "up"){
            font += 2;
        }
        if(upDown == "down"){
            font -= 2;
        }
    }
}
const fontGenerator = newFontGenerator(14);



