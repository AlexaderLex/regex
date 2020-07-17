 "use strict";

 const codeArea = document.getElementById("area-one");
 const res = document.getElementById("area-two");
 const btn = document.getElementById("btn");


 btn.addEventListener("click", function() {
     res.value = eval(codeArea.value);
 });

 //  console.log(fullSource[20].frame);

 //  let num2 = Math.floor(Math.random() * fullSource.length);

 //  console.log(num2);

 //  let sent = "12.12.2019";

 //  let regex = /^\d{1,2}[- /.]\d{1,2}[- /.]\d{2,4}$/;

 //  let result = sent.match(regex);

 //  console.log(result);

 //  console.log(sent);