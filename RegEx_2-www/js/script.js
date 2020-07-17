 "use strict";

 const a = "Fuck";
 let num = 2456098;
 let num2 = 2.450395

 //  console.log("What the %s", a);
 //  console.log("Is there %i", num);
 //  console.log("fuck %f", num2);

 console.log(`%c I am a Great Master`, `font-size: 30px; color: blue; font-style: italic; font-family: "Operator Mono"; font-weight: 300`);

 //  console.warn(`Attention! Attention!`);

 //  console.error("What the hell are you doing, prick?");

 //  console.info("Some info would be nice!");

 let x = 3;

 let arr = ["", "2", "25", 35, "Nice weather", "bad weather"];

 for (let x = 0; x < arr.length; x++) {
     //  console.assert(arr[x] === "", "Attantion" + x);
 }

 //  console.assert(x !== 3, "What the fuck!");

 //  let first = document.querySelector(".first-div");

 //  console.dir(first);

 const boys = [{
         name: "Dick",
         age: 16,
         body: "Slim"
     },
     {
         name: "Assiz",
         age: 18,
         body: "Skinny"
     },
     {
         name: "Allthere",
         age: 21,
         body: "Athletic Skinny"
     }
 ];

 boys.forEach(boy => {
     console.group(boy.name);
     console.log(`Name: ${boy.name}`);
     console.log(`${boy.name} is ${boy.age} years old and has a beautifyl ${boy.body} body!`);
     console.groupEnd(boy.name);
 });

 boys.forEach(boy => {
     console.groupCollapsed(boy.name);
     console.log(`Name: ${boy.name}`);
     console.log(`${boy.name} is ${boy.age} yo and I love his ${boy.body} body!`);
     console.groupEnd(boy.name);
 });

 let boys2 = [];

 console.table(boys);

 //  console.table(fullSource);

 console.log(fullSource.length);

 for (let x = 0; x < 31; x++) {
     boys2.push(fullSource[x]);
 };

 console.table(boys2);

 /*

 boys2.forEach(boy => {
     console.groupCollapsed(boy.title);
     console.log(`Title: ${boy.title}`);
     console.log(`Image: ${boy.image}`);
     console.log(`Page: ${boy.link}`);
     console.log(`iFrame: ${boy.frame}`);

     console.groupEnd(boy.title);
 });

 */