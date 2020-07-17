 "use strict";

 const main = document.querySelector(".content");


 function show(text = "", reg = "//", res = "", com = "") {
     let content = document.createElement("div");
     content.className = "content__div";
     let sent = document.createElement("p");
     sent.className = "sententce";
     sent.style.borderBottom = "2px double blue";
     let regEx = document.createElement("p");
     regEx.className = "regEx";
     regEx.style.borderTop = "3px dotted rgb(0, 0, 0)";
     regEx.style.borderBottom = "3px dotted rgb(0, 0, 0)";
     regEx.style.textAlign = "center";
     let result = document.createElement("p");
     result.className = "result";
     let comment = document.createElement("span")
     comment.className = "comment";
     comment.innerHTML = `<span>${com}</span>`;
     sent.innerText = "\|" + text + "\|";
     regEx.innerHTML = reg + "<br>" + `<black>${res}</black>`;
     result.innerText = regExecute(text, reg, res);
     content.appendChild(sent);
     content.appendChild(regEx);
     content.appendChild(result);
     content.append(comment);
     main.appendChild(content);

 };

 function comment(head = "", text = "", comment = "") {
     let commentary = document.createElement("div");
     commentary.className = "comment__div";
     let title = document.createElement("p");
     title.className = "comment__title";
     title.innerText = head;
     let comText = document.createElement("p");
     comText.className = "comment__text";
     comText.innerText = text;
     let comComment = document.createElement("p");
     comComment.className = "comment__comment";
     comComment.innerHTML = comment;
     commentary.appendChild(title);
     commentary.appendChild(comText);
     commentary.appendChild(comComment);
     main.appendChild(commentary);

 };

 function getPar(text) {
     let commentary = document.createElement("div");
     commentary.className = "comment__div";
     let comComment = document.createElement("p");
     comComment.className = "comment__comment";
     comComment.innerHTML = text;
     commentary.appendChild(comComment);
     main.appendChild(commentary);
 }


 function regExecute(text, reg, resText) {
     let sent = text;
     let regex = reg;
     let result = eval(resText);
     return `\|${result}\|`;
 };


 //  show("Master and Lex", /lex/gi, "sent.match(regex)", "First Try!");