 "use strict";



 let num;

 let title;

 let img;

 let link;

 let frame;

 function start() {
     num = Math.floor(Math.random() * fullSource.length);

     title = fullSource[num].title + " - index: " + num;

     img = fullSource[num].image + " - index: " + num;

     link = fullSource[num].link + " - index: " + num;

     frame = fullSource[num].frame + " - index: " + num;
 }

 show("Beauty of Regular Expressions!", /beauty/i, "regex.test(sent)");

 show("It rains cats and dogs. Dogs love Cats, but cats love me", /[a-z\W]/mgi, "sent.match(regex)", "Выдаст все буквы в строках");

 show("It rains cats and dogs.\n Dogs love Cats,\n but cats love me....", /[a-z.]+/gmi, "sent.match(regex)", "Выдаст все слова в строках по-отдельности");

 show("It rains cats and dogs.\n Dogs love Cats,\n but cats love me....", /[a-z\s.]+/gmi, "sent.match(regex)", "Выдаст все слова в строках в виде полных строк!");

 show("It rains cats and dogs.\n Dogs love Cats,\n but cats love me....", /c.t/gmi, "sent.match(regex)", "");

 show("It rains cats and dogs.\n Dogs love Cats,\n but cats love me....", /dogs\./gim, "sent.match(regex)", "C <b><lim>\\</lim></b> перед точкой найдет <b><yel>ТОЛЬКО</yel></b> слово <red>dogs</red> с точкой после него.");

 show("It rains cats and dogs.\n Dogs love Cats,\n but cats love me....", /dogs./gim, "sent.match(regex)", "Без <b><lim>\\</lim></b> перед точкой найдет все слова <red>dogs</red> и любые знаки после него(точки, запятые, пробелы)");

 show("It rains caats and dogs.Dogs love Caaats, but caaaaats love me.... and I love the cat", /ca{0,1}t/gmi, "sent.match(regex)", "Буква <yel>a</yel> после <lim>c</lim> или есть или нет");

 show("It rains caats and dogs.Dogs love Caaats, but caaaaats love me.... and I love the cat", /ca{1,2}t/gmi, "sent.match(regex)", "Буква <yel>a</yel> после <lim>c</lim> повсторяется один или два раза");

 show("It rains caats and dogs.Dogs love Caaats, but caaaaats love me.... and I love the cat", /ca{2}t/gmi, "sent.match(regex)", "Буква <yel>a</yel> после <lim>c</lim> точно два раза");

 show("It rains caats and dogs. Dogs love Caaats, but caaaaats love me.... and I love the cat", /ca{1,}t/gmi, "sent.match(regex)", "Буква <yel>a</yel> после <lim>c</lim> повсторяется хотя бы один раз и до бесконечности");

 show("It rains caats and dogs. Ct. Dogs love Caaats, but caaaaats love me.... and I love the cat", /ca?t/gmi, "sent.match(regex)", "<lim> {0,1} </lim><yel> == </yel><red> ? </red>__ <lim> {1,} </lim><yel> == </yel><red> + </red>__ <lim> {0,} </lim><yel> == </yel><red> * </red>. Знаки <red> ? </red>__ <red> + </red>__ <red> * </red> - называются <yel>' Квантификаторы '</yel>");

 show("2015/08/denvdv.html", /^[\d]{4}\/[\w\W]+[html|php]$/, "sent.match(regex)");

 //  let complex = img + "\r\n" + link + "\r\n" + frame;

 //  show(complex, /^https:[\w\W]+?[/]/gm, "sent.match(regex)", ``);
 show("It rains cats and dogs", /c.+s/g, "sent.match(regex)", "<yel>Greedy</yel> regex");

 show("It rains cats and dogs", /c.+?s/g, "sent.match(regex)", "<yel>Lazy</yel> regex");

 show("https://", /^[h,t,t,p]{4}/, "sent.match(regex)");

 show("https://", /[^h,t,t,p]{1,}/, "sent.match(regex)");

 show("165825", /^[1-9][0-9]{5}$/, "regex.test(sent)");

 show("\\s - any whitespace character\n \\S - any NOT whitespace character", "Meaning of symbols", "sent.match(regex)");

 show("\\d - digit \n \\D - NOT digit character\n \\w any alphabetic character \n \\W any NOT alphabetic character", "Meaning of symbols", "sent.match(regex)");

 show("8 (915)318 89 66", /^[+]{0,1}[0-9][\s-\W][(]{0,1}[0-9]{3}[)]{0,1}[\s-\W][0-9]{3}[\s-\W][0-9]{2}[\s-\W][0-9]{2}$/, "regex.test(sent)", "Проверка правильности введения номера телефона");
 show("Иванов Андрей, Иванову Ивану, об Иванове Алеше, про Иванову Глафиру, Александра Ивановна Александрова", /(иванов)[а-я]{0,} [\sа][а-я]*/gi, "sent.match(regex)", "Найти всех Ивановый, чьё имя начинается с <b><yel>А</yel></b>");

 show("^ - Начало строки\n$ - Конец строки\n\\b - граница слова\n\\A - начало данных (независимо от многострочного режима\n\\Z - конец данных (независимо от многостраничного режима)", "Обозначения символов", "sent.match(regex)");

 show("let's let him to let you letting down", /let\b/gi, "sent.match(regex)", "Символ <red>\\b</red> означает, что мы ищем только слово целиком, а не вхождение похожего сочетания букв в других словах.");

 show("Snowie - white shit from the sky\nSnow brings cold\nsnow is white\nsnow is shitty", /^snow[\w]*/gim, "sent.match(regex)");

 show("В лесу родилась ёлочка\nВ лесу она росла\nЗимой и летом стройная зелёная была", /[а-я]{1,3}ла$/gim, "sent.match(regex)");

 show("It rains dogs and bunnies and cats", /(cat|dog)s/gi, "sent.match(regex)", "Знак <b><red>|</red></b> - называется альтернатива (или cats или dogs)");

 show("It rains dogs", /(\w+) (\w+) (\w+)/gi, "sent.replace(regex, '$3, $2, $1')", "<lim>sent.replace(regex, '$3, $2, $1')</lim>");

 show("It rains cats and dogs.", /it (\w+)\s(\w+)/i, "sent.match(regex)", "<lim>sent.match(regex)</lim>");

 show("Now give us some new expirience we did not have here", /Now (?:\w+)\s(\w+)\s(\w+)/, "sent.replace(regex, '$2, $2, $1,$1,$1,$1')", "<lim>sent.replace(regex, '$3, $2, $1,$1,$1,$1')</lim>");

 show("Подмаске (Capturing Groups) можно дать имя\nИспользуем в таком случае\n(?<name>", "В Mozilla НЕ РАБОТАЕТ", "sent.match(regex)");

 show("rain rainbow rainbow", /(\w+)\s\1\w+/g, "sent.match(regex)");

 show("", /check/, "sent.match(regex)");

 console.log("Fuck");