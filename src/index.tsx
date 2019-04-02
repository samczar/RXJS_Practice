import { Observable } from "rxjs-compat/observable";
import { identity } from "rxjs";

var observable = Observable.create((observer: any) => {
  observer.next("Hey Guys!");
  observer.next("Good Guys!");
  observer.complete("completed");
  observer.next("Continue Guys!");
});
console.log(typeof observable);
var observer = observable.subscribe((x: any) => addItem(x));

const cold = Observable.create((observer: any) => {
  observer.next(Math.random());
});
//Instanciate cold
cold.subscribe((x: any) => addItem(`Subscriber A: ${x}`));
cold.subscribe((y: any) => addItem(`Subscriber B: ${y}`));
/**Create Element */
function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
//USING MAP
var officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" }
];

// const officers_guys = officers.map(el => {
for (var { id: id, name: name } of officers) {
  addItem(`ID is : ${id} and Name is : ${name}`);
}

const officersGroup = officers

  .filter(el => {
    return el.id < 30;
  })
  .map(el => {
    return `${el.id} ${el.name} `;
  });
addItem(`New officers ${officersGroup}`);

/***
 * USING REDUCE
 */
// });
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22
  }
];
const experience = pilots.reduce((acc: any, curr: any) => {
  return acc + curr.years;
}, 0);
addItem(experience);

const MostExp = pilots.reduce((acc: any, cur: any) => {
  return acc.years > cur.years ? acc : cur;
}, {});

console.log(MostExp);
// console.log(officers_guys);
export default class Index {}

const ContDown = (num: number) => {
  if (num === -1) return 0;
  console.log(num);
  ContDown(num - 1);
};

ContDown(10);
