console.log('этот js-файл подключён <script src="js/app_.js" type="module"></script>');
console.log(document.documentElement.childNodes);
console.log(document.documentElement.childNodes[2].childNodes);
console.log('--- а дальше первый элемент и последний элемент');
console.log(document.documentElement.childNodes[2].firstChild);
console.log(document.documentElement.childNodes[2].lastChild);
console.log('--- а дальше h1');
console.log(document.documentElement.childNodes[2].childNodes[1]);
console.log('--- а после него какой узел');
console.log(document.documentElement.childNodes[2].childNodes[1].nextSibling);
console.log('--- а перед ним какой узел');
console.log(document.documentElement.childNodes[2].childNodes[1].previousSibling);


console.log('');
console.log('Но лучше без текстовых узлов(или переносов), а это тогда -children-');

console.log(document.documentElement.children);
console.log(document.documentElement.children[1].children);
console.log('--- а дальше первый и последний узел');
console.log(document.documentElement.children[1].firstChild);
console.log(document.documentElement.children[1].lastChild);
console.log('--- а дальше первый элемент и последний элемент, используем поля со словом Element');
console.log(document.documentElement.children[1].firstElementChild);
console.log(document.documentElement.children[1].lastElementChild);

console.log('но они текстовые, а дальше h1');
console.log(document.documentElement.children[1].children[0]);
console.log('--- а после него какой узел');
console.log(document.documentElement.children[1].children[0].nextSibling);
console.log('и этот текстовый, а перед ним такой-же');
console.log(document.documentElement.children[1].children[0].previousSibling);
console.log('ЧТО-БЫ не получать текстовые поля нужно использовать поля со словом Element');
console.log('--- а после него какой элемент(следующий)');
console.log(document.documentElement.children[1].children[0].nextElementSibling);
console.log('это ul, а перед ul какой');
console.log(document.documentElement.children[1].children[1].previousElementSibling);

console.log('С помощью -children(childNodes)- можно добраться до любого элемента(узла) на странице как по дереву');

// TODO: write code here(Задача: написать код здесь)
// перебираем элементы в спике ul
const ul = document.documentElement.children[1].children[1];
console.log(ul.children);
for(const el of ul.children) {
    console.log(el);
}
console.log('------------------------------------------------------');
// 2 способ:
let child = ul.firstElementChild;
while(child) {
    console.log(child);

    child = child.nextElementSibling;
}
