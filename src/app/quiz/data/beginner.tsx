import { Question } from "./fsTypes";

export const questionsBeginner: Question[] = [
  {
    prompt: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Tool Multi Language",
    ],
    answer: "Hyper Text Markup Language",
    explanation:
      "HTML stands for Hyper Text Markup Language, used to structure web content.",
    tags: ["html"],
  },
  {
    prompt: "Which tag is used to define a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
    explanation: "The <a> tag defines a hyperlink in HTML.",
    tags: ["html"],
  },
  {
    prompt: "Which property changes the text color in CSS?",
    options: ["font", "text", "color", "background"],
    answer: "color",
    explanation: "The `color` property sets the text color in CSS.",
    tags: ["css"],
  },
  {
    prompt: "Which of the following is a valid CSS selector for an ID?",
    options: ["#my-id", ".my-id", "my-id", "@my-id"],
    answer: "#my-id",
    explanation: "ID selectors in CSS are prefixed with `#`.",
    tags: ["css"],
  },
  {
    prompt: "Which HTTP status code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    answer: "404",
    explanation:
      "404 indicates that the requested resource could not be found.",
    tags: ["http"],
  },
  {
    prompt: "Which HTTP method is typically used to submit a form?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "POST",
    explanation: "POST is used to submit form data to a server.",
    tags: ["http"],
  },
  {
    prompt: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Custom Style Syntax",
    ],
    answer: "Cascading Style Sheets",
    explanation:
      "CSS stands for Cascading Style Sheets — it defines how HTML elements are displayed.",
    tags: ["css"],
  },
  {
    prompt: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    answer: "//",
    explanation: "`//` is used for single-line comments in JavaScript.",
    tags: ["javascript"],
  },
  {
    prompt: "Which command initializes a new Git repository?",
    options: ["git start", "git new", "git init", "git create"],
    answer: "git init",
    explanation: "`git init` creates a new Git repository in your project.",
    tags: ["git"],
  },
  {
    prompt: "What does DNS stand for?",
    options: [
      "Domain Name System",
      "Digital Network Service",
      "Data Name Structure",
      "Direct Naming System",
    ],
    answer: "Domain Name System",
    explanation:
      "DNS stands for Domain Name System — it translates domain names to IP addresses.",
    tags: ["hosting"],
  },
  {
    prompt: "Which CSS property is used to change text color?",
    options: ["font-color", "text-style", "color", "background-color"],
    answer: "color",
    explanation: "`color` defines the color of the text in CSS.",
    tags: ["css"],
  },
  {
    prompt: "Which tag is used to insert a JavaScript file?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>",
    explanation: "`<script>` is the correct HTML tag for adding JS files.",
    tags: ["javascript", "html"],
  },
  {
    prompt: "What does `console.log()` do in JavaScript?",
    options: [
      "Displays a popup",
      "Writes a message to the console",
      "Stops code execution",
      "Saves data to localStorage",
    ],
    answer: "Writes a message to the console",
    explanation: "`console.log()` is used for debugging by printing output.",
    tags: ["javascript"],
  },
  {
    prompt: "Which of these is used to create a list in HTML?",
    options: ["<list>", "<ul>", "<div>", "<span>"],
    answer: "<ul>",
    explanation: "`<ul>` is used to create an unordered list in HTML.",
    tags: ["html"],
  },
  {
    prompt: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<nav>"],
    answer: "<a>",
    explanation: "`<a>` is used to define hyperlinks in HTML.",
    tags: ["html"],
  },
  {
    prompt: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//",
    explanation: "`//` starts a single-line comment in JavaScript.",
    tags: ["javascript"],
  },
  {
    prompt: "How do you apply an external CSS file to an HTML page?",
    options: ["Using <style>", "Using <css>", "Using <link>", "Using <script>"],
    answer: "Using <link>",
    explanation: "The `<link>` tag is used to include external CSS.",
    tags: ["css", "html"],
  },
  {
    prompt:
      "Which method adds a new element to the end of an array in JavaScript?",
    options: ["push()", "add()", "append()", "insert()"],
    answer: "push()",
    explanation: "`push()` appends an element to the end of an array.",
    tags: ["javascript"],
  },
  {
    prompt: "What does the 'alt' attribute in an <img> tag provide?",
    options: [
      "Image description for SEO",
      "Text if image fails to load",
      "Image alignment",
      "Nothing",
    ],
    answer: "Text if image fails to load",
    explanation: "The `alt` attribute provides fallback text for images.",
    tags: ["html", "accessibility"],
  },
  {
    prompt: "Which unit is relative to the font size of the element?",
    options: ["px", "em", "%", "vh"],
    answer: "em",
    explanation:
      "`em` is a relative unit based on the font size of the element.",
    tags: ["css"],
  },
  {
    prompt:
      "What is the default HTTP status code for a successful GET request?",
    options: ["200", "201", "404", "500"],
    answer: "200",
    explanation:
      "`200 OK` is the standard response for a successful HTTP request.",
    tags: ["http"],
  },
  {
    prompt: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "define"],
    answer: "const",
    explanation: "`const` creates a block-scoped, read-only constant.",
    tags: ["javascript"],
  },
  {
    prompt: "What does DOM stand for in web development?",
    options: [
      "Document Object Model",
      "Data Object Map",
      "Document Order Mark",
      "Dynamic Object Method",
    ],
    answer: "Document Object Model",
    explanation:
      "DOM is the structured representation of HTML elements in a web page.",
    tags: ["javascript", "dom"],
  },
  {
    prompt: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    answer: "<a>",
    explanation: "The `<a>` tag defines a hyperlink in HTML.",
    tags: ["html"],
  },
  {
    prompt: "Which CSS property changes the text color?",
    options: ["background-color", "font-style", "text-color", "color"],
    answer: "color",
    explanation: "`color` sets the text color in CSS.",
    tags: ["css"],
  },
  {
    prompt: "Which of these values is a boolean in JavaScript?",
    options: ["0", "true", "'true'", "null"],
    answer: "true",
    explanation: "`true` is a boolean literal in JavaScript.",
    tags: ["javascript"],
  },
  {
    prompt: "What does the `<head>` tag contain in an HTML document?",
    options: [
      "Visible content",
      "Metadata, title, and links",
      "Main text",
      "Footer",
    ],
    answer: "Metadata, title, and links",
    explanation:
      "The `<head>` contains metadata, links to stylesheets, and the page title.",
    tags: ["html"],
  },
  {
    prompt: "Which HTTP method is used to send data to the server?",
    options: ["GET", "POST", "PUT", "FETCH"],
    answer: "POST",
    explanation:
      "`POST` is typically used to submit form data or upload files.",
    tags: ["http"],
  },
  {
    prompt: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "--"],
    answer: "//",
    explanation: "`//` is used to write single-line comments in JavaScript.",
    tags: ["javascript"],
  },
  {
    prompt: "Which HTML tag is used to display images?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: "<img>",
    explanation: "`<img>` is used to embed images in HTML.",
    tags: ["html"],
  },
  {
    prompt: "How do you declare a variable in JavaScript?",
    options: ["define", "var", "v", "let"],
    answer: "let",
    explanation:
      "`let` is a modern keyword to declare a block-scoped variable in JS.",
    tags: ["javascript"],
  },
  {
    prompt: "Which CSS property controls the font size?",
    options: ["font-style", "text-size", "font-size", "size"],
    answer: "font-size",
    explanation: "`font-size` sets the size of the text in CSS.",
    tags: ["css"],
  },
  {
    prompt: "What does the <a> tag in HTML define?",
    options: ["An image", "A hyperlink", "A paragraph", "An input field"],
    answer: "A hyperlink",
    explanation:
      "The `<a>` tag defines a hyperlink, used to link from one page to another.",
    tags: ["html"],
  },
  {
    prompt: "Which keyword is used to define a constant in JavaScript?",
    options: ["const", "final", "constant", "let"],
    answer: "const",
    explanation:
      "`const` is used to define a constant whose value cannot be reassigned.",
    tags: ["javascript"],
  },
  {
    prompt: "Which CSS property is used to set background color?",
    options: ["color", "background-color", "bg", "fill"],
    answer: "background-color",
    explanation: "`background-color` sets the background color of an element.",
    tags: ["css"],
  },
  {
    prompt: "Which protocol is used to load web pages?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    answer: "HTTP",
    explanation:
      "HTTP (HyperText Transfer Protocol) is the foundation of data communication for the web.",
    tags: ["http"],
  },
  {
    prompt: "What tag is used to make text bold in HTML?",
    options: ["<bold>", "<strong>", "<b>", "<em>"],
    answer: "<b>",
    explanation:
      "`<b>` and `<strong>` both make text bold, but `<strong>` has semantic meaning.",
    tags: ["html"],
  },
  {
    prompt: "Which of the following is used to style HTML content?",
    options: ["JavaScript", "CSS", "Python", "SQL"],
    answer: "CSS",
    explanation:
      "CSS (Cascading Style Sheets) is used to style and layout web pages.",
    tags: ["css"],
  },
  {
    prompt: "Which attribute is used in HTML to define inline styles?",
    options: ["class", "style", "id", "css"],
    answer: "style",
    explanation:
      "The `style` attribute allows you to add inline CSS directly to an element.",
    tags: ["html", "css"],
  },
  {
    prompt: "Which symbol is used to select an ID in CSS?",
    options: ["#", ".", "!", "$"],
    answer: "#",
    explanation: "`#` is used to target elements by their ID in CSS selectors.",
    tags: ["css"],
  },
  {
    prompt: "What does the `console.log()` function do in JavaScript?",
    options: [
      "Displays data in the browser window",
      "Sends data to a server",
      "Prints messages to the browser console",
      "Creates an alert box",
    ],
    answer: "Prints messages to the browser console",
    explanation:
      "`console.log()` outputs messages to the browser's developer console, useful for debugging.",
    tags: ["javascript"],
  },
  {
    prompt: "Which tag is used to insert a line break in HTML?",
    options: ["<break>", "<br>", "<lb>", "<nl>"],
    answer: "<br>",
    explanation: "`<br>` creates a single line break in HTML.",
    tags: ["html"],
  },
  {
    prompt:
      "Which of the following is a correct way to declare a variable in JavaScript?",
    options: [
      "var myVar = 5;",
      "let = 5;",
      "const: myVar = 5",
      "int myVar = 5;",
    ],
    answer: "var myVar = 5;",
    explanation:
      "`var`, `let`, and `const` are used to declare variables. `var` is the oldest form.",
    tags: ["javascript"],
  },
  {
    prompt: "Which tag is used to display an image in HTML?",
    options: ["<image>", "<src>", "<img>", "<pic>"],
    answer: "<img>",
    explanation: "`<img>` is the correct HTML tag for displaying images.",
    tags: ["html"],
  },
  {
    prompt:
      "Which value is returned by default from a function in JavaScript if there is no return statement?",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined",
    explanation:
      "If no return statement is used, JavaScript functions return `undefined` by default.",
    tags: ["javascript"],
  },
  {
    prompt: "Which HTML tag is used for the largest heading?",
    options: ["<h1>", "<head>", "<h6>", "<title>"],
    answer: "<h1>",
    explanation:
      "`<h1>` defines the most important heading. `<h6>` is the least important.",
    tags: ["html"],
  },
  {
    prompt:
      "Which attribute is used to provide alternative text for an image in HTML?",
    options: ["alt", "title", "src", "description"],
    answer: "alt",
    explanation:
      "The `alt` attribute specifies alternative text for images if they cannot be displayed.",
    tags: ["html"],
  },
  {
    prompt: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "foreground-color"],
    answer: "color",
    explanation: "`color` is the correct property to change text color in CSS.",
    tags: ["css"],
  },
  {
    prompt: "What is the default position value in CSS?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static",
    explanation:
      "`static` is the default value; elements are positioned according to the normal flow.",
    tags: ["css"],
  },
  {
    prompt: "Which JavaScript keyword is used to check a condition?",
    options: ["if", "check", "compare", "condition"],
    answer: "if",
    explanation:
      "The `if` keyword is used to execute code based on a condition.",
    tags: ["javascript"],
  },
  {
    prompt: "Which HTML tag creates a link to another webpage?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
    explanation:
      "`<a>` is used to create hyperlinks using the `href` attribute.",
    tags: ["html"],
  },
  {
    prompt: "Which symbol is used for comments in CSS?",
    options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
    answer: "/* comment */",
    explanation: "CSS comments are written using `/* comment */` syntax.",
    tags: ["css"],
  },
  {
    prompt: "What does the `console.log()` function do in JavaScript?",
    options: [
      "Displays a popup",
      "Logs output to the browser console",
      "Saves data to a file",
      "Executes a loop",
    ],
    answer: "Logs output to the browser console",
    explanation:
      "`console.log()` is used to print messages to the browser's console for debugging.",
    tags: ["javascript"],
  },
  {
    prompt: "Which input type in HTML is used for selecting a date?",
    options: ["datetime", "calendar", "date", "datepicker"],
    answer: "date",
    explanation: "`<input type='date'>` creates a date picker in HTML.",
    tags: ["html"],
  },
  {
    prompt: "What is the correct way to declare a variable in JavaScript?",
    options: ["let myVar;", "declare myVar;", "set myVar;", "var = myVar;"],
    answer: "let myVar;",
    explanation:
      "Variables in JS can be declared using `let`, `const`, or `var`.",
    tags: ["javascript"],
  },
  {
    prompt: "Which HTML tag is used to define a table row?",
    options: ["<row>", "<td>", "<tr>", "<table-row>"],
    answer: "<tr>",
    explanation: "`<tr>` defines a row in an HTML table.",
    tags: ["html"],
  },
  {
    prompt: "Which CSS property changes the text color?",
    options: ["text-color", "font-color", "color", "foreground"],
    answer: "color",
    explanation: "The `color` property in CSS defines the text color.",
    tags: ["css"],
  },
  {
    prompt: "What is the default HTTP port number?",
    options: ["80", "443", "21", "3000"],
    answer: "80",
    explanation: "HTTP by default uses port 80. HTTPS uses 443.",
    tags: ["http"],
  },
  {
    prompt: "Which of the following is a frontend JavaScript framework?",
    options: ["Laravel", "Spring", "React", "Django"],
    answer: "React",
    explanation: "React is a JavaScript library for building user interfaces.",
    tags: ["javascript", "react"],
  },
  {
    prompt: "What does the `alt` attribute in an `<img>` tag define?",
    options: [
      "The image file type",
      "Image loading priority",
      "Alternative text for the image",
      "Alignment of the image",
    ],
    answer: "Alternative text for the image",
    explanation:
      "The `alt` attribute provides alternative text for accessibility and SEO.",
    tags: ["html", "a11y"],
  },
  {
    prompt: "Which of these is used to apply styles to HTML?",
    options: ["JS", "SQL", "CSS", "HTTP"],
    answer: "CSS",
    explanation: "CSS (Cascading Style Sheets) is used to style HTML elements.",
    tags: ["css"],
  },
  {
    prompt: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
    explanation: "The `<a>` tag is used to define hyperlinks in HTML.",
    tags: ["html"],
  },
  {
    prompt: "In JavaScript, what does `===` compare?",
    options: ["Value only", "Type only", "Value and type", "Reference only"],
    answer: "Value and type",
    explanation: "`===` checks both value and type for strict equality.",
    tags: ["javascript"],
  },
  {
    prompt: "What does the `console.log()` function do?",
    options: [
      "Saves data to server",
      "Prints to browser console",
      "Creates a new HTML element",
      "Displays an alert popup",
    ],
    answer: "Prints to browser console",
    explanation:
      "`console.log()` outputs data to the browser's developer console.",
    tags: ["javascript", "debugging"],
  },
  {
    prompt: "Which tag is used for the largest heading in HTML?",
    options: ["<h6>", "<header>", "<title>", "<h1>"],
    answer: "<h1>",
    explanation: "`<h1>` is the largest heading tag in HTML.",
    tags: ["html"],
  },
  {
    prompt: "Which attribute is used in HTML to add an inline style?",
    options: ["style", "class", "css", "script"],
    answer: "style",
    explanation: "The `style` attribute allows you to define inline CSS.",
    tags: ["html", "css"],
  },
  {
    prompt: "Which CSS property changes the text color?",
    options: ["background", "font-color", "color", "text-style"],
    answer: "color",
    explanation: "The `color` property in CSS defines the text color.",
    tags: ["css"],
  },
  {
    prompt: "What is the default display value of a `<div>` element?",
    options: ["inline", "block", "inline-block", "flex"],
    answer: "block",
    explanation: "`<div>` is a block-level element by default.",
    tags: ["html", "css"],
  },
  {
    prompt: "Which JavaScript method is used to parse a JSON string?",
    options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "toJSON()"],
    answer: "JSON.parse()",
    explanation:
      "`JSON.parse()` converts a JSON string into a JavaScript object.",
    tags: ["javascript", "json"],
  },
  {
    prompt: "Which symbol is used for comments in CSS?",
    options: ["//", "##", "/* */", "<!-- -->"],
    answer: "/* */",
    explanation: "CSS comments are written inside `/* comment */`.",
    tags: ["css"],
  },
  {
    prompt: "Which tag is used to insert an image in HTML?",
    options: ["<img>", "<image>", "<src>", "<picture>"],
    answer: "<img>",
    explanation: "The `<img>` tag is used to embed images in HTML documents.",
    tags: ["html"],
  },
  {
    prompt: "How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "/* comment */", "// comment", "# comment"],
    answer: "// comment",
    explanation: "Single-line comments in JavaScript start with `//`.",
    tags: ["javascript"],
  },
  {
    prompt: "Which operator checks both value and type in JavaScript?",
    options: ["==", "=", "===", "!="],
    answer: "===",
    explanation:
      "`===` checks both value and type, unlike `==` which does type coercion.",
    tags: ["javascript"],
  },
  {
    prompt: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<nav>"],
    answer: "<a>",
    explanation: "The `<a>` tag is used to create hyperlinks in HTML.",
    tags: ["html"],
  },
  {
    prompt: "Which CSS unit is relative to the root element?",
    options: ["em", "rem", "%", "px"],
    answer: "rem",
    explanation:
      "`rem` stands for root em and is relative to the root `<html>` font size.",
    tags: ["css"],
  },
  {
    prompt: "Which HTML element is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>",
    explanation:
      "`<h1>` defines the most important heading; `<h6>` is the least.",
    tags: ["html"],
  },
  {
    prompt: "Which CSS property changes the text color?",
    options: ["background", "font-style", "text-color", "color"],
    answer: "color",
    explanation: "The `color` property sets the text color in CSS.",
    tags: ["css"],
  },
  {
    prompt: "Which method converts a string to an integer in JavaScript?",
    options: ["parseInt()", "toString()", "parseFloat()", "Number()"],
    answer: "parseInt()",
    explanation: "`parseInt()` parses a string and returns an integer.",
    tags: ["javascript"],
  },
  {
    prompt: "What does the `console.log()` method do?",
    options: [
      "Prints a value to the web page",
      "Logs errors to a file",
      "Displays output in the browser console",
      "Creates an alert popup",
    ],
    answer: "Displays output in the browser console",
    explanation:
      "`console.log()` is used to log messages for debugging purposes.",
    tags: ["javascript"],
  },
  {
    prompt: "Which selector targets all `<p>` tags in CSS?",
    options: ["p", ".p", "#p", "*p"],
    answer: "p",
    explanation:
      "`p` is a type selector that matches all `<p>` elements in CSS.",
    tags: ["css"],
  },
  {
    prompt: "Which attribute specifies the destination URL in an `<a>` tag?",
    options: ["src", "href", "link", "target"],
    answer: "href",
    explanation:
      "`href` specifies the URL the hyperlink points to in an `<a>` tag.",
    tags: ["html"],
  },
  {
    prompt: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "<!-- -->"],
    answer: "//",
    explanation: "`//` is used to write single-line comments in JavaScript.",
    tags: ["javascript"],
  },
  {
    prompt: "Which tag creates a numbered list in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ol>",
    explanation:
      "`<ol>` creates an ordered (numbered) list; `<ul>` creates an unordered one.",
    tags: ["html"],
  },
  {
    prompt: "How do you center text in CSS?",
    options: [
      "text-align: center;",
      "align-text: center;",
      "center-text: true;",
      "justify-content: center;",
    ],
    answer: "text-align: center;",
    explanation:
      "`text-align: center;` is the correct way to center inline text content.",
    tags: ["css"],
  },
  {
    prompt: "Which CSS property changes the size of text?",
    options: ["font-size", "text-style", "text-size", "font-weight"],
    answer: "font-size",
    explanation: "`font-size` controls the size of the text on the page.",
    tags: ["css"],
  },
  {
    prompt: "What does DOM stand for in web development?",
    options: [
      "Document Object Model",
      "Data Output Manager",
      "Document Order Mapper",
      "Digital Object Map",
    ],
    answer: "Document Object Model",
    explanation: "The DOM represents the page structure as a tree of nodes.",
    tags: ["dom"],
  },
  {
    prompt:
      "Which of the following is used to comment a single line in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    answer: "//",
    explanation: "`//` starts a single-line comment in JavaScript.",
    tags: ["javascript"],
  },
  {
    prompt: "Which input type allows users to pick a date?",
    options: ["text", "datetime", "calendar", "date"],
    answer: "date",
    explanation:
      "`<input type='date'>` renders a date picker in modern browsers.",
    tags: ["html", "forms"],
  },
  {
    prompt: "What is the purpose of `alt` attribute in `<img>` tags?",
    options: [
      "Apply animation",
      "Link to another image",
      "Provide fallback text",
      "Zoom the image",
    ],
    answer: "Provide fallback text",
    explanation:
      "`alt` text improves accessibility and shows if image fails to load.",
    tags: ["html", "accessibility"],
  },
  {
    prompt:
      "Which JavaScript keyword is used to declare a variable that can change?",
    options: ["const", "static", "let", "define"],
    answer: "let",
    explanation: "`let` allows variable reassignment, unlike `const`.",
    tags: ["javascript"],
  },
  {
    prompt: "What tag is used to create an unordered list in HTML?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>",
    explanation: "`<ul>` creates an unordered (bulleted) list.",
    tags: ["html"],
  },
  {
    prompt: "Which selector targets an element by its ID in CSS?",
    options: [".my-id", "#my-id", "my-id", "[id=my-id]"],
    answer: "#my-id",
    explanation: "`#my-id` targets an element with the ID 'my-id'.",
    tags: ["css", "selectors"],
  },
  {
    prompt: "Which HTML element is used to embed JavaScript code?",
    options: ["<code>", "<js>", "<script>", "<javascript>"],
    answer: "<script>",
    explanation: "`<script>` is used to include JavaScript code.",
    tags: ["html", "javascript"],
  },
  {
    prompt: "What is the default display value of a `<div>` element?",
    options: ["inline", "block", "flex", "none"],
    answer: "block",
    explanation: "`<div>` is a block-level element by default.",
    tags: ["css", "html"],
  },
  {
    prompt: "Which HTML tag is used to define a table row?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    answer: "<tr>",
    explanation: "`<tr>` stands for table row, used inside `<table>`.",
    tags: ["html"],
  },
  {
    prompt: "In CSS, what does `font-weight: bold;` do?",
    options: [
      "Changes the font size",
      "Italicizes the text",
      "Makes text bold",
      "Underlines text",
    ],
    answer: "Makes text bold",
    explanation: "`font-weight: bold` increases the thickness of text.",
    tags: ["css"],
  },
  {
    prompt: "Which symbol is used to start a comment in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    answer: "//",
    explanation: "`//` starts a single-line comment in JavaScript.",
    tags: ["javascript"],
  },
  {
    prompt: "What does the `href` attribute in `<a>` tag specify?",
    options: ["Text style", "Image path", "Script source", "Link target URL"],
    answer: "Link target URL",
    explanation: "`href` specifies the URL the link should go to.",
    tags: ["html"],
  },
  {
    prompt: "Which tag is used to insert a line break in HTML?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    answer: "<br>",
    explanation: "`<br>` inserts a line break in HTML content.",
    tags: ["html"],
  },
];
