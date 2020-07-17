 "use strict";

 function bi(tag = "", text = "") {
     let bTag = `<${tag}>${text}</${tag}>`;
     return bTag;
 };



 show("Carnegy Hall crashes the car on their carnival pizzazz", /zz/gi, "sent.match(regex)");

 show("The cow, camel, and cat communicated", /cat/g, "sent.match(regex)");

 show("The cow, camel, and cat communicated", /c\w+/gi, "sent.match(regex)");

 show("hat hot hit heat hzt h t h#t h:t h$t", /h.t/g, "sent.match(regex)", "<red>.</red> will match ANY character but <yel>\\n</yel>. So use it carfully");

 show("hat hot hit heat hzt h t h#t h:t h$t ", /h\w{1,2}t/g, "sent.match(regex)", "Instead of <red>.</red> use <red>\\w</red>. It will match any <yel>alphabecitc</yel> character.");


 show("silver sliver slider sider widerer smoter", /s\w{4}r/gi, "sent.match(regex)", "Matching words starting with <lim>s</lim> and ending with <lim>r</lim> and contain only <yel>6</yel> letters.");

 show("9.00 9500 9-00 9,00 9~00 9 00 9$00 9:00", /9.00/g, "sent.match(regex)", "");


 comment("' \\ ' ESCAPING METACHARACTERS\n Allows use metacharacters as literal caracters\n", "Match a perios with \\. ", "<red>\/9\\.00\/ </red>matches <lim>'9.00'</lim> but not <yel>'9500'</yel> or <yel>'9-00'</yel>");

 show("9.00 9500 9-00 9,00 9~00 9 00 9$00 9:00", /9\.00/g, "sent.match(regex)", "");

 show();

 comment("' \\ ' - Only for metacharacters", "Literal caracters should never be escaped, gives them memaning", "<yel>Quotation marks are not metacharacters, do not need to be escaped!</yel>");

 show("resume1.txt resume2.txt resume3_txt.zip", /resume..txt/gi, "sent.match(regex)", "Using <red>..</red> as a wildcards");

 show("resume1.txt resume2.txt resume3_txt.zip", /resume.\.txt/gi, "sent.match(regex)", "Using <red>.\\.</red> as a wildcard");

 show("/home/user/document.txt", /\/home\/user\/document\.txt/, "sent.match(regex)", "");


 comment("OTHER SPECIAL CHARACTERS:", "- Spaces:(\\s)\n- Tabs:(\\t)\n- Line returns:\n (\\r, \\n, \\r\\n)\n - Non-printable characters:\n bell: (\\a), escape: (\\e), form feed: (\\f), vertical tab: (\\v) ", "");

 //  show();

 comment("ASCII or ANSI codes", "Codes that control appearance of a text terminal", "<lim>0xA9</lim> <yel> = </yel><red>\\xA9</red>");

 show("c a t", /cat/, "sent.match(regex)", "");

 show("c a t", /c a t/, "sent.match(regex)", "Matching <yel>spaces</yel>");

 show("abc\ndef", /c\nd/gi, "sent.match(regex)", "Matching <yel>newline</yel>");

 comment("DEFINING A CHARACTER SET", "[ - Begin a character set\n] - End a character set", "Will match <yel>ONE</yel> of several characters. <lim>But</lim> <red>ONLY</red> <yel>ONE</yel> character. <b>Order of characters does not metter</b>");

 show("Aeriogus", /[aeiou]/gi, "sent.match(regex)", "Matches only one vowel");

 show("gray grey", /gr[ea]y/gi, "sent.match(regex)", "matches 'gr<yel>e</yel>y' and 'gr<yel>a</yel>y'");

 show("great", /gr[ea]t/gi, "sent.match(regex)", "Does not match 'gr<yel>ea</yel>'t");

 show("The cow, camel, and cat communicated", /c[aeiou]t/, "sent.match(regex)", "");

 show("Bananas Peaches Apples", /[aeiou]/g, "sent.match(regex)", "");

 show("Hello", /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/, "sent.match(regex)", "");

 show("Hello", /[A-Z]ello/g, "sent.match(regex)", "Match every word in string");

 comment("NEGATIVE CHARACTER SETS - '^'", "Not any one of several characters", "Add <red>^</red> as the first character inside a character set. Still represents one character. <yel>See expamples below</yel>");

 show("seek sees seem seen", /see[^mn]/gi, "sent.match(regex)", "");

 show("CAUtION", "' ^ ' will match any whitespace characters after the word", "sent.match(regex)", "<yel>See expample below ↓</yel>");

 show("See seen seek seew seer see", /see[^wr]/gi, "sent.match(regex)", "Will match <yel>first see</yel> with whitespace after it, but not <yel>last see</yel> without whitespace after it.");

 show("see, see. see% see_ see see- see\n", /see[^a-z]/gi, "sent.match(regex)", "Will match ANY character even <red>\\n</red>");

 comment("METACHARACTERS INSIDE CHARACTER SETS", "Metacharacters inside character sets are already escaped", "<yel>DO NOT NEED ESCAPE THEM AGAIN</yel>");

 show("hat hot hit het hut h.t", /h[abc.xyz]t/g, "sent.match(regex)", "");

 comment("Exceptions", "]\n-\n^\n\\", "Those metacharacters <red>MUST</red> be escaped");

 show("var(328) var(20) var(1) var[13]", /var[[(][0-9]{1,}[\])]/g, "sent.match(regex)", "");

 show("file01 file-1 file\\1 file_1", /file[\d_\-\\]/g, "sent.match(regex)", "");

 comment("Shorthand Character sets", "\\d - Digit: __ [0-9]\n\n\\w - Word Character: __ [a-zA-Z0-9_]\n\n\\s - Whitespace: __ [\\s \\t \\r \\n]\n\n\\D - Not digit: __ [^0-9]\n\n\\W - Not word character: __ [^a-zA-Z0-9_]\n\n\\S - Not whitespace: __ [^\\s \\t \\r \\n]", "Underscore <red>_</red>  <yel>IS</yel> a word character, but  hyphen <red>-</red> <yel>IS NOT</yel>. Please remember it!")

 show("1985 text", /\d\d\d\d/g, "sent.match(regex)", "");

 show("ABC 123 1_A 2-B", /\w\w\w/g, "sent.match(regex)", "");

 show("I am Am I", /\w\s\w\w/, "sent.match(regex)", "");

 comment("CAUTION!", "\/[^\\d\\s]\/ - is not the same as [\\D\\S]", "<yel>\/[^\\d\\s]\/</yel> = <lim>NOT</lim> digit <lim>OR</lim> space character. <red>\/[\\D\\S]\/</red> = <lim>EITHER NOT</lim> digit <lim>OR NOT</lim> space character!");

 show("123 456 789 abc", /[\d\s]/gi, "sent.match(regex)", "");

 show("123 456 789 abc", /[^\d\s]/g, "sent.match(regex)", "");

 show("123 456 789 abc", /[\D\S]/g, "sent.match(regex)", "");

 comment("POSIX BRACKET EXPRESSIONS", "[:alpha:] - Alphabetic characters: - A-Za-z;\n\n[:digit:]: - Numeric characters: - 0-9;\n\n[:alnum:]: Alphanumeric characters: - A-Za-z0-9;\n\n[:lower:]: - Lowercase alphabetic characters: - a-z;\n\n[:upper;]: - Uppercase alphabetic characters: - A-Z;\n\n[:punct:]: - Punctuation characters; \n\n[:space:]: - Space characters: - \\s;\n\n[:blank:]: - Blank characters (spance, tab);\n\n[:print:]: - Printable characters, spaces;\n\n[:graph:]: Printable characters, no spaces;\n\n[:cntrl:]: Control characters (non-trintable);\n\n[:xdigit:]: - Hexadecimal characters: - A-Fa-f0-9.", "Use: <red>Correct - </red> <yel>\/[[:alpha:]]\/</yel> or <yel>\/[^[:alpha:]]\/</yel>. <lim>Incorrect - </lim><yel>\/[:alpha:]\/</yel>. <lim>Supports  at: 'Perl', 'PHP', 'Ruby', 'Unix'.</lim><red>NOT SUPPORTS at: Java, JavaScript, .NET, Pythos</red>");

 show("I would like to see you naked", /\w+/gi, "sent.match(regex)", "");

 comment("REPETITION METACHARACTERS", "* -- Preceding item zero or more times\n+ -- Precedint item one or more times.\n? -- Preceding Item zero or one time", "");

 show("apples apple applesssssss", /apples*/gi, "sent.match(regex)", "Matching with <red> * </red>");

 show("apples apple applesssssss", /apples+/gi, "sent.match(regex)", "Matching with <red> + </red>");

 show("apples apple applesssssss", /apples?/gi, "sent.match(regex)", "Matching with <red> ? </red>");

 show("333 445 234Z 001B 56789 26", /\d\d\d\d*/gi, "sent.match(regex)", "<red>\\d\\d\\d</red><lim>\\d*</lim> означает, что после трёх цифр может быть <yel> 0 </yel> или <lim>∞</lim>.");

 show("333 445 234Z 001B 56789 26", /\d\d\d+/gi, "sent.match(regex)", "<red>\\d\\d\\d</red><lim>+</lim> означает, что после трёх цифр может быть <yel> 1 </yel> или <lim>∞</lim>.");

 show("333 445 234Z 001B 56789 26", /\d\d\d\d?/g, "sent.match(regex)", "<red>\\d\\d\\d</red><lim>\\d?</lim> означает, что после трёх цифр может быть <yel> 0 </yel> или <lim>1</lim>.");

 show("333 445 234Z 001B 56789 26", /\d\d\d\d?\s?/g, "sent.match(regex)", "");

 show("color colour ", /colou?r\s?/g, "sent.match(regex)", "");

 comment("Quantified Repetition: - {}", "{min, max}: \nmin and max are positive numbers;\nmin MUST ALWAYS be included, can be zero (0)\nmax is OPTIONAL\n\n- Three syntaxes (See below)", "<red>\\d{4,8}</red> - matches numbers with four to eight digits. <br> <red>\\d{4}</red> - matches numbers with <yel>exactly</yel> four digits <lim>(min is max)</lim>. <br> <red>\\d{4, }</red> - matches numbers with four or more digits <lim>(max is infinite)</lim>.");

 getPar("<red>Examples: </red><br><br> <yel>\\d{0,}</yel> is the same as <lim>\\d*</lim><br><yel>\\d{1, }</yel> is the same as <lim>\\d+</lim><br><yel>\/\\d{3}-\\d{3}-\\d{4}\/</yel> matches most U.S. phone numbers.<br><yel>\/A{1,2} bonds \/</yel> matches <lim>'A bonds'</lim> and <lim>'AA bonds'</lim>, <red>not</red> <lim>'AAA bonds'</lim>");

 show("Shall I compare thee to a summer's day?\nThou art more lovely and more tepmperate:\nRough winds do shake the darling buds of May,\nAnd Summer's lease hath all too short a date.", /\w{5,}\s/g, "sent.match(regex)", "");

 show("555-968-5841; 345-399-9998; 234 567 0987", /\d{3}-\d{3}-\d{4}/g, "sent.match(regex)", "");

 show("report_1997-04 budget_03-04 memo_712345-100", /\w+_\d{2,4}-\d{2}/g, "sent.match(regex)", "");

 comment("GREEDY EXPRESSIONS", "Standard repetition quantifiers are greedy! \n Expressions tries to match the longest possible string.");

 getPar("<yel>Example 1: </yel>")

 show("01_FY_07_report_99.xls", /\d+\w+\d+/, "sent.match(regex)", "");

 getPar("<yel>Example 2: </yel>")

 show("'Milton', 'Waddams', 'Initech, Inc.'", /'.+', '.+'/g, "sent.match(regex)", "");

 getPar("<yel>Example 3: </yel>")

 show("filename.jpg", /.+\.jpg/, "sent.match(regex)", "");

 show("Page 266", /.*[0-9]/, "sent.match(regex)", "");

 comment("LAZY EXPRESSIONS: ?", "Syntax\n\n *?\n+?\n{min,max}?\n??", "Instructs quantifier to use a <yel>'lazy strategy'</yel> for making choices.<br> <red>Greedy strategy </red> - <br> Match as <yel>much</yel> as possible before giving control to the next expression part. <br><red>Lazy strategy</red> - <br>Match as <yel>little</yel> as possible before giving control to the next expression part.<br>Still Defers to overall match.<br>Not necessarily faster or slower");

 getPar("<yel>Examples:</yel> <br><lim>\/\\w*?\\d{3}\/</lim><br><lim>\/[A-Za-z-]+?\\.\/</lim><br><lim>\/.{4,8}?_.{4,8}\/</lim><br><lim>\/apples??\/</lim> ")

 getPar("<yel>Not Supported - </yel><br> <b>In most Unix tools (BRE, ERE)</br>")

 show("Page 266", /.*?[0-9]+/, "sent.match(regex)", "<yel>Lazy but not Too lazy</yel>");

 show("Page 266", /.*?[0-9]*?/, "sent.match(regex)", "<red>?</red><b> at the end makes this regex </b><yel>Very Lazy</yel> -and it will match absolutely <lim>NOTHING</lim><br><br><red>Be Careful!</red><br> <br><b>If everything in the expression is optional it mathc NOTHING!</b>");

 show("01_FY_07_report_99.xls", /\d+\w+?\d+/g, "sent.match(regex)", "<yel>Lazy</yel>");

 show("'Milton', 'Waddams', 'Initech, Inc.'", /'.+?', '.+?'/g, "sent.match(regex)", "<yel>Lazy</yel>");

 comment("Efficiency when using Repetition", "- Efficient matching + less backtracking = speedy result (1)\n\n- Define the quantity of repeated expressions (1)\n\n- Narrow the scope of the repeated expression (2)\n\n- Provide clearer starting and ending points (3)\n\n- Use anchors and world boundaries (4)\n\n- Search for whole words only (5)", "(1) <yel>\/.+\/</yel> is faster than <lim>\/.*\/</lim> <br>(1) <yel>\/.{5}\/</yel> and <yel>\/.{3,7}\/</yel> are even faster<br>(2) <yel>\/.+\/</yel> can become <lim>\/[A-Za-z]+\/</lim><br>(3) <yel>\/<._>\/</yel> can become <lim>\/<[^>]+>\/</lim><br>(4) <yel>^ $ \\b</yel><br>(5) <yel>\\s ^ $ \\b</yel>");

 getPar("<red>Expample</red><br><yel>\/\\w*s\/</yel><b>would be improved as </b><lim>\/\\w+s\/</lim><br><yel>\/\\w+s\/</yel><b>would be improved as </b><lim>\/[A-Za-z]+s\/</lim><br><b>Perhaps as </b><lim>\/[a-z]+s\/</lim> <b>or as </b><lim>\/[A-Z][a-z]+s\/</lim>")

 comment("GROUPING METACHARACTERS - ()", "Group portions of the expression: \n\n- Apply repetition operators to a group;\n- Makes expressions easier to read;\n- Captures group for use in matching and replacing;\n- Cannot be used inside character set;", "<red>Examples:</red><br> <yel>\/(abc)+\/</yel> <b>matches </b><lim>'abc'</lim> <b>and </b><lim>'abcabcabc'</lim><br><yel>\/(in)?dependent\/</yel><b>matches </b><lim>'independent'</lim><b>and</b> <lim>'dependent'</lim><br><yel>\/run(s)?\/</yel> and <lim>\/runs?\/</lim> <b>is the same!</b>")

 show("A1B2C3D4E5F6G7H8I9J10", /([A-Z][0-9])/g, "sent.match(regex)", "");

 show("A1B2C3D4E5F6G7H8I9J10", /([A-Z][0-9])+/g, "sent.match(regex)", "");

 show("A1B2C3D4E5F6G7H8I9J10", /([A-Z][0-9]){3}/g, "sent.match(regex)", "");

 show("dependent or independent", /(in)?dependent/g, "sent.match(regex)", "");

 show("I run fast. He runs faster.", /runs?/gi, "sent.match(regex)", "<yel>'runs?</yel> and <yel>run(s)?</yel> are the same and will give us the same result! <lim>Check below</lim>");

 show("I run fast. He runs faster.", /run(s)?/gi, "sent.match(regex)", "");

 comment("ALTERNATION METACHARACTER: |", "| is an OR operator\n- Either match expression on the left or match expression on the right;\n- Ordered, leftmost expression gets precedence (comes first);\n- Multiple choices can be daisy-chained (option ONE or option TWO or option THREE... and so on);\n- Group alternation expressions to keep them distinct (отдельно);", "<yel>\/apple|orange\/</yel> <b> matches</b> <lim>'apple'</lim> and <lim>'orange'</lim><br><yel>\/abc|def|ghi|jkl\/</yel><b> matches</b><lim>'abc'</lim>, <lim>'def</lim>, <lim>'ghi'</lim>, and <lim>'jkl'</lim><br><yel>\/apple(juice|sauce\/</yel> <red> is not the same as</red><lim>\/applejuice|sauce</lim><br><yel>\/w(ei|ie)rd\/</yel> <b>matches</b> <lim>'weird'</lim> and <lim>'wierd'</lim>")

 show("apple orange appleorange apple|orange", /apple|orange/g, "sent.match(regex)", "");

 show("abcdefghijklmnopqrstuvwxyz", /abc|def|ghi|jkl/, "sent.match(regex)", "");

 show("applejuice applesauce", /applejuice|sauce/g, "sent.match(regex)", "");

 show("applejuice applesauce", /apple(juice|sauce)/g, "sent.match(regex)", "");

 show("weird or wierd", /w(ei|ie)rd/g, "sent.match(regex)", "");

 comment("Writing logical and efficient alternations", "Regular Expression engines are eager. \nRegular Expression engines are greedy.");

 show("peanutbutter", /peanut|peanutbutter/, "sent.match(regex)", "<red>Eager.</red> - Found first expression and stop");

 show("peanutbutter", /peanut(butter)?/, "sent.match(regex)", "<red>Greedy.</red> - Will match all expression.");

 show("FY2003_report.xls", /\w+|FY\d{4}_report\.xls/, "sent.match(regex)", "<red>Eager.</red> Match first expression (<yel>\\w+</yel>) and stop!");

 show("I think those are thin trees.", /(three|see|thee|tree)/, "sent.match(regex)", "");

 show("abcdefghijklmnopqrstuvwxyz", /abc|def|ghi|jkl/, "sent.match(regex)", "");

 show("abcdefghijklmnopqrstuvwxyz", /xyz|abc|def|ghi|jkl/, "sent.match(regex)", "");

 getPar("<yel> &bull; Put simplest (most efficient) expression first</yel><br> <yel>&bull;</yel> Instead of this: <lim> \/\\w+_\\d{2,4} | \\d{4}_\\d{2}_\\w+ | export\\d{2}\/</lim> <br><yel>&bull;</yel> Write this: <red>\/export\\d{2} | \\d{2}_\\w+ | \\w+_\\d{2,4}\/</red>");

 getPar("<red>NEXT</red>");

 comment("REPEATING AND NESTING ALTERNATIONS", "• Repeating \n • First matched alternation does not effect the next matches", "<yel>See example below</yel>");

 show("AABBAACCAABB", /(AA|BB|CC){6}/, "sent.match(regex)", "");

 comment("• NESTING \n • Check nesting carefully")

 show("112233 AABBCC AA66ZZ 11AA44", /(\d\d|[A-Z][A-Z]){3}/g, "sent.match(regex)", "");

 show("milk apple juice sweet peas yogurt sweet corn apple sauce milkshake sweet potatoes", /(apple (juice|sauce)|milk(shake)?|sweet (peas|corn|potatoes))/g, "sent.match(regex)", "");

 show("milk apple juice sweet peas yogurt sweet corn apple sauce milkshake sweet potatoes", /(apple juice|apple sauce|milk|milkshake|sweet peas|sweet corn|sweet potatoes)/g, "sent.match(regex)", "");

 show("milk apple juice sweet peas yogurt sweet corn apple sauce milkshake sweet potatoes", /[\w ]+/, "sent.match(regex)", "");

 getPar("<red>Anchored Expressions</red>")

 comment("Start and End anchors", "^ - Start of string/line;\n$ - End of string/line\n\\A - Start of string, never end of line\n\\Z - End of string, never end of line", "<yel>Examples</yel><br><lim>&bull; \/^apple\/ or \/\\Aapple\/</lim><br><lim>&bull; \/apple$\/ or \/apple\\Z\/</lim><br><lim>&bull; \/^apple$\/ or \/\\Aapple\\Z\/</lim>")

 getPar("<red>Support</red><br><yel>^</yel> and <yel>$</yel> are supported in <red>ALL</red> regex engines. <br><yel>\\A</yel> and <yel>\\Z</yel> are suppurted in <lim>Java, .NET, Perl, PHP, Python, Ruby</lim><br> but <red>NOT SUPPORTED</red> in <lim>JavaScript</lim><br><yel>See examples below &#x02193;</yel>")

 show("Mr. Smith went to Washington.", /^[A-Z]/g, "sent.match(regex)", "");

 show("Mr. Smith went to Washington.", /\.$/g, "sent.match(regex)", "");

 show("Mr. Smith went to Washington.", /^[A-Z][A-Za-z\-. ]+\.$/g, "sent.match(regex)", "");

 show("nobody@nowhere.com", /^\w+@\w+\.\w{2,4}$/, "sent.match(regex)", "");

 show(" It was a dark and strormy night.", /^[\t\s]/, "sent.match(regex)", "");

 show("And they lived happily ever after.       ", /[\t\s]+$/, "sent.match(regex)", "");

 comment("LINE BREAKS AND SINGLE MODE", "∘ Single-line mode", "<yel>- </yel> <lim>'^'</lim> and <lim>'$'</lim> do not match at line breaks <br><yel>- </yel> <lim>'\\A'</lim> and <lim>'\\Z'</lim> do not match at line breaks<br><yel>- Many Unix tools support</yel> <red>ONLY SINGLE line</red>");

 comment("LINE BREAKS AND MULTILINE MODE", "∘ Multiline mode", "<yel>- </yel> <lim>'^'</lim> and <lim>'$'</lim> will match at the start and end of lines<br><yel>- </yel> <lim>'\\A'</lim> and <lim>'\\Z'</lim> <red>DO NOT</red> match at line breaks");

 getPar("<yel>&bull; </yel> Java: Pattern.compile('^regex$', <yelS>Pattern.MULTILINE</yelS>)<br><yel>&bull; </yel> JavaScript: \/^regex$\/<yelS>m</yelS><yel><br>&bull; </yel> .NET: Regex.Match('string', '^regex$', <yelS>RegexOptions.Multiline</yelS>)<br><yel>&bull; </yel> Perl: m\/^regex$\/<yelS>m</yelS><br><yel>&bull; </yel> PHP: preg_match(\/^regex$\/<yelS>m</yelS>, 'string')<br><yel>&bull; </yel> Python: re.search('^regex$', 'string', <yelS>re.MULTILINE</yelS>)<br><yel>&bull; </yel> Ruby: string.match(\/^regex$\/<yelS>m</yelS>)")

 show("milk \napple juice \nsweet peas \nyogurt \nsweet corn \napple sauce \nmilkshake \nsweet potatoes", /^[a-z ]+/gm, "sent.match(regex)", "");

 show("milk \napple juice \nsweet peas \nyogurt \nsweet corn \napple sauce \nmilkshake \nsweet potatoes", /[a-z ]+$/gm, "sent.match(regex)", "");

 comment("Word Boundaries", "\\b - Word boundary (start/end of word)\n\\B - Not a word boundary", "<yel>&bull;</yel> Reference a position, not an actual character<br><yel>&bull; </yel> Conditions for matching<br> <yel> - </yel> <lim>Before the first word character in the string</lim><br><yel> - </yel> <lim>After the last word character in the string</lim><br><yel> - </yel> <lim>Between a word character and non-word character</lim><br><yel>&bull; Word characters: [A-Za-z0-9_]</yel>");

 getPar("<red>Support:</red><br><yel> - </yel> Most regex engines, not in early Unix tools (BREs)<yel>See examples below &#x02193;</yel>")

 show("This is a test.", /\b\w+\b/g, "sent.match(regex)", "<yel>Boundary Example</yel>");

 show("abc_123 top-notch", /\b\w+\b/g, "sent.match(regex)", "<yel>Boundary Example</yel>");

 show("This is a test.", /\BThis/, "sent.match(regex)", "<red>Not</red><yel>boundary example</yel>");

 show("This is a test. ", /\B\w+\B/g, "sent.match(regex)", "<red>Not</red><yel>boundary example</yel>");

 show("Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date.", /\b[\w' ]+\b/g, "sent.match(regex)", "");

 show("We picked apples.", /\b\w+s\b/g, "sent.match(regex)", "");

 getPar("<red>Caution!!!</red><br><yel> - A space is not a word boundary</yel><br><yel>- Word boundaries reference a position</yel><br><yel>- Not an actual character</yel><br><yel>- Zero-length</yel><lim><br>See example below &#x02193;</lim>")

 show("apples and oranges", /apples\band\boranges/, "sent.match(regex)", "<red>NO MATCH!</red>");

 show("apples and oranges", /apples \band \boranges/, "sent.match(regex)", "<red>MATCH!</red>");

 comment("BACKREFERENCES", "• Grouped expressions are captured\n• Stores the matched portion in parentheses", "<lim>\/a(p{2}l)e\/</lim> <b>matches 'apple' and stores \"ppl\"</b><br> <yel>• Stores the data matched, not the expression</yel><br><yel>• Autmatically, by default</yel>");

 comment("", "• Backreferences allow access to captured data\n • Refer to first backreference with \\1", "<yel>\\1 through \\9</yel> - <lim>Backreference for positions 1 to 9</lim>");

 getPar("<yel>• Usage</yel> <br> -- <b>Can be used in the same expresssion as the group</b> <br> <b> -- Can be accessed after the match is complete</b><br><b> -- Cannot be used inside character classes</b> <br><yel>• Support</yel> <br> <b>--Most regex engines support \\1 through \\9</b> <br><b>-- Some regex engines support \\10 through \\99</b> <br> <b>-- Some regex engines use <lim>$1 through $9</lim> instead</b> <br><br> <lim>SEE EXAMPLES BELOW &#x02193;</lim>")

 show("Apples to apples", /(apples) to \1/gi, "sent.match(regex)", "");

 getPar("<yel>\/(ab)(cd)(ef)\\3\\2\\1\/</yel> <b>matches</b><lim>\"abcdefefcdab\"</lim> ")
 comment("<(i|em)>.+?<\/\\1>\/", "matches \n <i>Hello</i> and <em>Hello</em>")

 show("abcdefefcdab", /(ab)(cd)(ef)\3\2\1/, "sent.match(regex)", "");

 show("<i>italics</i> <em>emphasis</em> <i>bad</i>", /<(i|em)>.+?<\/\1>/g, "sent.match(regex)", "");

 show("Stive Smith, John Johnson, Eric Erikson, Evan Evanson", /\b([A-Z][a-z]+)\b\s\b\1son\b/g, "sent.match(regex)", "");

 show("Paris in the\nthe spring", /\b(\w+)\s+\1\b/, "sent.match(regex)", "");

 show("", /regex/, "sent.match(regex)", "");

 let sss = "I would like to see you tonight";
 let rreg = new RegExp("[[:alpha:]]", "g");
 let rres = sss.match(rreg);
 //  console.log(rres);

 //  show("", /regex/, "sent.match(regex)", "");