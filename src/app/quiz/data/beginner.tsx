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
    options: ["", "", "", ""],
    answer: "",
    explanation: "The tag defines a hyperlink in HTML.",
    tags: ["html"],
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
    options: ["//", "/*", "#", "", "#", "**"],
    answer: "//",
    explanation: "`//` starts a single-line comment in JavaScript.",
    tags: ["javascript"],
  },
  {
    prompt:
      "Which HTML tag is used to define the title of a document displayed in the browser's title bar or tab?",
    options: ["<head>", "<body>", "<title>", "<meta>"],
    answer: "<title>",
    explanation:
      "The **`<title>` tag** defines the title of the document, which appears in the browser's tab or window title bar.",
    tags: ["html"],
  },
  {
    prompt: "Which HTML tag is used for the largest heading?",
    options: ["<h1>", "<h6>", "<head>", "<heading>"],
    answer: "<h1>",
    explanation:
      "The **`<h1>` tag** is used to define the most important or largest heading in an HTML document, while `<h6>` is for the least important.",
    tags: ["html"],
  },
  {
    prompt:
      "Which CSS property is used to control the spacing between lines of text?",
    options: ["text-spacing", "line-height", "margin-line", "padding-text"],
    answer: "line-height",
    explanation:
      "The **`line-height` property** in CSS sets the height of a line of text, effectively controlling the vertical spacing between lines.",
    tags: ["css"],
  },
  {
    prompt:
      "How do you declare a variable in JavaScript that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const",
    explanation:
      "In JavaScript, the **`const` keyword** declares a block-scoped local variable whose value cannot be reassigned after its initial declaration, making it immutable.",
    tags: ["javascript"],
  },
  {
    prompt:
      "Which HTTP method is typically used to retrieve data from a server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "GET",
    explanation:
      "The **`GET` method** is commonly used in HTTP to request and retrieve data from a specified resource on a server.",
    tags: ["http"],
  },
  {
    prompt: "Which Git command is used to clone a repository?",
    options: ["git pull", "git clone", "git fork", "git copy"],
    answer: "git clone",
    explanation: "`git clone` creates a local copy of a remote repository.",
    tags: ["git"],
  },
  {
    prompt: "What does the browser cache store?",
    options: [
      "Browser history",
      "User passwords",
      "Frequently accessed resources",
      "Cookies only",
    ],
    answer: "Frequently accessed resources",
    explanation:
      "The browser cache stores static files (like images, CSS, JS) to speed up subsequent page loads.",
    tags: ["browser"],
  },
  {
    prompt: "Which tag is used to create a form in HTML?",
    options: ["<input>", "<form>", "<fieldset>", "<label>"],
    answer: "<form>",
    explanation: "`<form>` is used to create an HTML form for user input.",
    tags: ["html", "forms"],
  },
  {
    prompt: "Which CSS unit is relative to the viewport width?",
    options: ["vw", "vh", "em", "rem"],
    answer: "vw",
    explanation: "`vw` is a CSS unit relative to 1% of the viewport's width.",
    tags: ["css", "responsive"],
  },
  {
    prompt: "Which HTML tag helps improve SEO by describing the page?",
    options: ["<meta>", "<div>", "<section>", "<title>"],
    answer: "<meta>",
    explanation:
      "Meta tags provide metadata about the page, such as descriptions used by search engines.",
    tags: ["html", "seo"],
  },
  {
    prompt: "Which CSS property makes a webpage mobile-friendly?",
    options: [
      "display: block",
      "position: absolute",
      "max-width",
      "overflow: auto",
    ],
    answer: "max-width",
    explanation:
      "`max-width` helps create responsive layouts that adapt to smaller screens.",
    tags: ["css", "responsive"],
  },
  {
    prompt: "Which HTML input type is used for entering an email?",
    options: ["text", "email", "password", "url"],
    answer: "email",
    explanation:
      "`<input type='email'>` enables browsers to validate email input.",
    tags: ["html", "forms"],
  },
  {
    prompt: "What is the purpose of the robots.txt file?",
    options: [
      "To block hackers",
      "To improve page load speed",
      "To guide search engine crawlers",
      "To manage user cookies",
    ],
    answer: "To guide search engine crawlers",
    explanation:
      "`robots.txt` tells search engines which pages they can or cannot crawl.",
    tags: ["seo"],
  },
  {
    prompt: "What does CDN stand for in web hosting?",
    options: [
      "Content Delivery Network",
      "Centralized Data Node",
      "Cloud Distributed Network",
      "Content Distribution Node",
    ],
    answer: "Content Delivery Network",
    explanation:
      "CDN stands for Content Delivery Network — a distributed system of servers that deliver web content faster.",
    tags: ["hosting"],
  },
  {
    prompt: "Which HTTP status code means 'Moved Permanently'?",
    options: ["200", "301", "404", "500"],
    answer: "301",
    explanation:
      "`301 Moved Permanently` indicates that the resource has been moved to a new URL.",
    tags: ["http"],
  },
  {
    prompt: "Which React hook is used to add state to a component?",
    options: ["useRef", "useEffect", "useState", "useMemo"],
    answer: "useState",
    explanation:
      "`useState` allows you to add state variables to functional React components.",
    tags: ["react", "hooks"],
  },
  {
    prompt: "Which HTTP method is used to update an existing resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "PUT",
    explanation:
      "`PUT` is used to update an existing resource or create a new one if it doesn't exist.",
    tags: ["http", "network"],
  },
  {
    prompt: "Which attribute is used to make a form field required?",
    options: ["required", "validate", "must", "mandatory"],
    answer: "required",
    explanation: "`required` makes a form field mandatory to fill.",
    tags: ["html", "forms"],
  },
  {
    prompt: "Which CSS property controls the spacing *outside* an element?",
    options: ["padding", "spacing", "margin", "border"],
    answer: "margin",
    explanation: "`margin` sets the space outside an element's border.",
    tags: ["css", "box-model"],
  },
  {
    prompt: "What is the purpose of `alt` attribute in images?",
    options: [
      "Apply CSS filters",
      "Improve accessibility",
      "Load images faster",
      "Add animation to images",
    ],
    answer: "Improve accessibility",
    explanation:
      "`alt` text improves accessibility and provides a fallback description if the image can't be loaded.",
    tags: ["html", "a11y", "accessibility"],
  },
  {
    prompt: "What does JWT stand for in authentication?",
    options: [
      "Java Web Token",
      "JavaScript Web Token",
      "JSON Web Token",
      "Java Web Template",
    ],
    answer: "JSON Web Token",
    explanation:
      "JWT stands for JSON Web Token — it's a compact, URL-safe way to represent claims for secure transmission.",
    tags: ["auth", "jwt"],
  },
  {
    prompt: "Which command shows the current branch in Git?",
    options: ["git branch", "git show", "git commit", "git checkout"],
    answer: "git branch",
    explanation:
      "`git branch` lists all branches and highlights the current one.",
    tags: ["git"],
  },
  {
    prompt: "Which command builds a Docker image?",
    options: ["docker create", "docker build", "docker run", "docker compose"],
    answer: "docker build",
    explanation:
      "`docker build` is used to build a Docker image from a Dockerfile.",
    tags: ["docker"],
  },
  {
    prompt: "Which CSS property is used to hide an element?",
    options: [
      "display: none",
      "visibility: hidden",
      "opacity: 0",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:
      "`display: none`, `visibility: hidden`, and `opacity: 0` all can visually hide an element in different ways.",
    tags: ["css"],
  },
  {
    prompt: "Which HTTP status code means 'Unauthorized'?",
    options: ["200", "401", "403", "500"],
    answer: "401",
    explanation:
      "`401 Unauthorized` indicates that authentication is required.",
    tags: ["http", "auth"],
  },
  {
    prompt: "Which React hook is used to perform side effects?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useEffect",
    explanation:
      "`useEffect` lets you perform side effects in React components.",
    tags: ["react", "hooks"],
  },
  {
    prompt: "Which HTTP status code means 'Forbidden'?",
    options: ["200", "301", "403", "500"],
    answer: "403",
    explanation:
      "`403 Forbidden` indicates that the server understood the request but refuses to authorize it.",
    tags: ["http", "network"],
  },
  {
    prompt: "Which HTML element is used to group form controls?",
    options: ["<fieldset>", "<form>", "<div>", "<section>"],
    answer: "<fieldset>",
    explanation: "`<fieldset>` is used to group related form controls.",
    tags: ["html", "forms"],
  },
  {
    prompt: "Which CSS property controls the space *inside* an element?",
    options: ["margin", "padding", "border", "spacing"],
    answer: "padding",
    explanation:
      "`padding` defines the space inside an element, between content and border.",
    tags: ["css", "box-model"],
  },
  {
    prompt: "Which HTML tag defines emphasized text?",
    options: ["<b>", "<strong>", "<i>", "<em>"],
    answer: "<em>",
    explanation:
      "`<em>` is used to emphasize text, often displayed in italics.",
    tags: ["html"],
  },
  {
    prompt: "Which command is used to stage changes in Git?",
    options: ["git commit", "git stage", "git add", "git update"],
    answer: "git add",
    explanation: "`git add` stages changes to be committed.",
    tags: ["git"],
  },
  {
    prompt: "Which tool helps distribute static assets globally?",
    options: ["VPN", "CDN", "FTP", "API Gateway"],
    answer: "CDN",
    explanation:
      "A CDN (Content Delivery Network) distributes static assets closer to users.",
    tags: ["hosting", "cdn"],
  },
  {
    prompt: "What is the purpose of the `<noscript>` tag?",
    options: [
      "To style text",
      "To show content when JavaScript is disabled",
      "To load CSS",
      "To add metadata",
    ],
    answer: "To show content when JavaScript is disabled",
    explanation:
      "`<noscript>` provides fallback content if JavaScript is disabled in the browser.",
    tags: ["html", "browser"],
  },
  {
    prompt: "Which CSS property sets an element's transparency?",
    options: ["opacity", "visibility", "display", "z-index"],
    answer: "opacity",
    explanation: "`opacity` controls the transparency of an element.",
    tags: ["css"],
  },
  {
    prompt: "Which type of testing helps improve accessibility?",
    options: [
      "Unit testing",
      "Integration testing",
      "Accessibility testing",
      "Load testing",
    ],
    answer: "Accessibility testing",
    explanation:
      "Accessibility testing ensures that a website is usable by people with disabilities.",
    tags: ["a11y", "accessibility"],
  },
  {
    prompt: "Which React hook allows sharing state across components?",
    options: ["useState", "useContext", "useEffect", "useReducer"],
    answer: "useContext",
    explanation:
      "`useContext` allows components to access shared state from a React context.",
    tags: ["react", "hooks"],
  },
  {
    prompt: "Which protocol is used to secure HTTP traffic?",
    options: ["FTP", "HTTP", "HTTPS", "SSH"],
    answer: "HTTPS",
    explanation:
      "`HTTPS` is the secure version of HTTP — it uses encryption (TLS).",
    tags: ["http", "network"],
  },
  {
    prompt: "Which HTML tag is used to display preformatted text?",
    options: ["<code>", "<pre>", "<p>", "<blockquote>"],
    answer: "<pre>",
    explanation:
      "`<pre>` displays preformatted text, preserving whitespace and line breaks.",
    tags: ["html"],
  },
  {
    prompt: "Which CSS property controls the stacking order of elements?",
    options: ["position", "z-index", "display", "order"],
    answer: "z-index",
    explanation: "`z-index` controls the stack order of positioned elements.",
    tags: ["css"],
  },
  {
    prompt: "Which JavaScript method is used to convert an object to JSON?",
    options: ["JSON.stringify()", "JSON.parse()", "toJSON()", "toString()"],
    answer: "JSON.stringify()",
    explanation:
      "`JSON.stringify()` converts a JavaScript object into a JSON string.",
    tags: ["javascript", "json"],
  },
  {
    prompt: "Which Git command downloads new data from a remote repository?",
    options: ["git clone", "git pull", "git fetch", "git push"],
    answer: "git fetch",
    explanation:
      "`git fetch` downloads new commits from a remote repo but does not merge them automatically.",
    tags: ["git"],
  },
  {
    prompt: "Which command starts a Docker container?",
    options: ["docker create", "docker start", "docker build", "docker run"],
    answer: "docker run",
    explanation:
      "`docker run` creates and starts a new container from an image.",
    tags: ["docker"],
  },
  {
    prompt: "Which HTML tag is used to define a navigation section?",
    options: ["<section>", "<aside>", "<header>", "<nav>"],
    answer: "<nav>",
    explanation: "`<nav>` defines a section for navigation links.",
    tags: ["html"],
  },
  {
    prompt: "What is the main purpose of a browser's developer tools?",
    options: [
      "To browse websites faster",
      "To edit HTML content only",
      "To debug and inspect web pages",
      "To manage browser extensions",
    ],
    answer: "To debug and inspect web pages",
    explanation:
      "Developer tools allow you to inspect, debug, and analyze web pages.",
    tags: ["browser"],
  },
  {
    prompt: "Which HTML element provides alternative text for screen readers?",
    options: ["<title>", "<meta>", "<label>", "<alt>"],
    answer: "<label>",
    explanation:
      "`<label>` associates text with form controls and improves accessibility.",
    tags: ["html", "a11y", "accessibility"],
  },
  {
    prompt: "What does a web browser do?",
    options: [
      "Runs Python scripts",
      "Stores images on the server",
      "Displays web pages to the user",
      "Manages databases",
    ],
    answer: "Displays web pages to the user",
    explanation:
      "A web browser retrieves and displays content from the web, such as HTML pages.",
    tags: ["browser"],
  },
  {
    prompt: "What is the address bar of a browser used for?",
    options: [
      "Typing CSS code",
      "Typing a website URL",
      "Playing music",
      "Editing HTML",
    ],
    answer: "Typing a website URL",
    explanation:
      "The browser's address bar is where you enter the URL of the website you want to visit.",
    tags: ["browser"],
  },
  {
    prompt:
      "Which part of a web page is typically drawn during the browser's painting phase?",
    options: [
      "The page title",
      "The visual parts of elements such as text, images, and backgrounds",
      "Only the page background",
      "Only JavaScript functions",
    ],
    answer:
      "The visual parts of elements such as text, images, and backgrounds",
    explanation:
      "During the painting phase, the browser draws the visual parts of the elements.",
    tags: ["browser"],
  },
  {
    prompt: "What is a CDN (Content Delivery Network)?",
    options: [
      "A JavaScript framework",
      "A type of database",
      "A network of servers that deliver content closer to users",
      "An image optimization tool",
    ],
    answer: "A network of servers that deliver content closer to users",
    explanation:
      "A CDN distributes content across many servers worldwide to improve load times and reliability.",
    tags: ["hosting", "cdn"],
  },
  {
    prompt: "Which DNS record type maps a domain name to an IPv4 address?",
    options: ["MX", "AAAA", "TXT", "A"],
    answer: "A",
    explanation: "An A record maps a domain name to an IPv4 address.",
    tags: ["hosting", "dns"],
  },
  {
    prompt: "What is the purpose of DNS?",
    options: [
      "To style web pages",
      "To translate domain names into IP addresses",
      "To execute JavaScript",
      "To store images",
    ],
    answer: "To translate domain names into IP addresses",
    explanation:
      "DNS translates human-readable domain names (like example.com) into machine-friendly IP addresses.",
    tags: ["hosting", "dns"],
  },
  {
    prompt: "Which SQL keyword is used to retrieve data from a table?",
    options: ["GET", "SELECT", "PULL", "FETCH"],
    answer: "SELECT",
    explanation:
      "`SELECT` is used to query and retrieve data from a table in SQL.",
    tags: ["sql", "database"],
  },
  {
    prompt: "Which SQL command adds new rows to a table?",
    options: ["INSERT", "UPDATE", "DELETE", "ALTER"],
    answer: "INSERT",
    explanation: "`INSERT` adds new rows of data into an SQL table.",
    tags: ["sql", "database"],
  },
  {
    prompt: "Which SQL keyword removes duplicate rows from a result set?",
    options: ["DISTINCT", "UNIQUE", "FILTER", "GROUP"],
    answer: "DISTINCT",
    explanation:
      "`DISTINCT` removes duplicate rows so that only unique values are shown.",
    tags: ["sql", "database"],
  },
  {
    prompt: "What is npm used for?",
    options: [
      "Managing Node.js packages",
      "Managing CSS files",
      "Running SQL queries",
      "Building HTML pages",
    ],
    answer: "Managing Node.js packages",
    explanation:
      "npm (Node Package Manager) is used to install and manage JavaScript packages.",
    tags: ["tools", "npm"],
  },
  {
    prompt: "Which file defines project dependencies in an npm project?",
    options: ["index.html", "package.json", "main.js", "webpack.config.js"],
    answer: "package.json",
    explanation:
      "`package.json` contains metadata and lists dependencies for an npm project.",
    tags: ["tools", "npm"],
  },
  {
    prompt: "What is Webpack used for?",
    options: [
      "To create database queries",
      "To bundle and optimize JavaScript and other assets",
      "To host web servers",
      "To manage DNS records",
    ],
    answer: "To bundle and optimize JavaScript and other assets",
    explanation:
      "Webpack bundles JavaScript, CSS, and other files so they can be efficiently served to users.",
    tags: ["tools", "webpack", "build"],
  },
  {
    prompt: "What is the purpose of the refresh button in a web browser?",
    options: [
      "It sends a new request to load the page again",
      "It clears all cookies",
      "It deletes browser history",
      "It saves the page as an image",
    ],
    answer: "It sends a new request to load the page again",
    explanation:
      "The refresh button reloads the current page by sending a new request to the server.",
    tags: ["browser"],
  },
  {
    prompt: "What is a web address also known as?",
    options: ["Script", "URL", "Package", "Header"],
    answer: "URL",
    explanation:
      "A URL (Uniform Resource Locator) is the address used to access web pages.",
    tags: ["browser"],
  },
  {
    prompt: "What does the back button in a browser do?",
    options: [
      "Deletes cookies",
      "Goes to the previous page in history",
      "Opens a new tab",
      "Refreshes the page",
    ],
    answer: "Goes to the previous page in history",
    explanation:
      "The back button takes the user to the previous page they visited.",
    tags: ["browser"],
  },
  {
    prompt: "What does DNS stand for?",
    options: [
      "Domain Name System",
      "Database Name Storage",
      "Direct Network Service",
      "Dynamic Numbering System",
    ],
    answer: "Domain Name System",
    explanation:
      "DNS translates domain names (like example.com) into IP addresses.",
    tags: ["hosting", "dns"],
  },
  {
    prompt:
      "Which hosting type allows you to pay only for the actual compute time used?",
    options: ["Shared hosting", "Dedicated server", "VPS", "Serverless"],
    answer: "Serverless",
    explanation:
      "Serverless hosting lets you pay only for the time your code runs.",
    tags: ["hosting", "serverless"],
  },
  {
    prompt: "What does a CDN help improve?",
    options: [
      "Database query speed",
      "JavaScript execution",
      "Content delivery speed to users",
      "CPU temperature",
    ],
    answer: "Content delivery speed to users",
    explanation:
      "A CDN speeds up delivery of web content by serving it from locations close to users.",
    tags: ["hosting", "cdn"],
  },
  {
    prompt: "Which SQL command removes data from a table?",
    options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
    answer: "DELETE",
    explanation: "`DELETE` removes rows from an SQL table.",
    tags: ["sql", "database"],
  },
  {
    prompt: "What is the primary function of an SQL database?",
    options: [
      "To manage web servers",
      "To store and retrieve structured data",
      "To style web pages",
      "To send emails",
    ],
    answer: "To store and retrieve structured data",
    explanation:
      "An SQL database stores structured data in tables and allows querying that data.",
    tags: ["sql", "database"],
  },
  {
    prompt: "Which clause is used in SQL to sort the results?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "LIMIT"],
    answer: "ORDER BY",
    explanation: "`ORDER BY` sorts the rows returned by an SQL query.",
    tags: ["sql", "database"],
  },
  {
    prompt: "Which file in an npm project contains scripts to run tasks?",
    options: ["README.md", "webpack.config.js", "package.json", "index.html"],
    answer: "package.json",
    explanation:
      "The `package.json` file defines scripts that can run tasks like building or testing the project.",
    tags: ["tools", "npm"],
  },
  {
    prompt: "Which command installs all dependencies in an npm project?",
    options: ["npm start", "npm test", "npm install", "npm update"],
    answer: "npm install",
    explanation:
      "`npm install` installs all dependencies listed in `package.json`.",
    tags: ["tools", "npm"],
  },
  {
    prompt: "What is the main purpose of Webpack?",
    options: [
      "To style web pages",
      "To manage databases",
      "To bundle and optimize frontend assets",
      "To run SQL queries",
    ],
    answer: "To bundle and optimize frontend assets",
    explanation:
      "Webpack is a tool used to bundle and optimize frontend assets such as JavaScript, CSS, and images.",
    tags: ["tools", "webpack", "build"],
  },
  {
    prompt: "What does the home button in a browser typically do?",
    options: [
      "Clears browser history",
      "Takes the user to the browser's start page",
      "Refreshes the current page",
      "Opens a new tab",
    ],
    answer: "Takes the user to the browser's start page",
    explanation:
      "The home button navigates the user to the browser's configured home/start page.",
    tags: ["browser"],
  },
  {
    prompt: "What type of files do browsers typically render?",
    options: [".exe", ".zip", ".html", ".mp3"],
    answer: ".html",
    explanation:
      "Browsers are designed to render HTML files and display web pages.",
    tags: ["browser"],
  },
  {
    prompt: "What is the purpose of browser bookmarks?",
    options: [
      "To run JavaScript code",
      "To mark pages for easy access later",
      "To open multiple tabs",
      "To delete cookies",
    ],
    answer: "To mark pages for easy access later",
    explanation:
      "Bookmarks allow users to save links to pages they want to revisit later.",
    tags: ["browser"],
  },
  {
    prompt: "What is serverless computing?",
    options: [
      "Running a website without JavaScript",
      "Running code without managing servers",
      "Hosting a site with no database",
      "Using a free hosting plan",
    ],
    answer: "Running code without managing servers",
    explanation:
      "Serverless computing allows developers to run code in response to events without managing infrastructure.",
    tags: ["hosting", "serverless"],
  },
  {
    prompt: "What is the role of a DNS server?",
    options: [
      "To store images",
      "To run JavaScript files",
      "To translate domain names into IP addresses",
      "To style HTML pages",
    ],
    answer: "To translate domain names into IP addresses",
    explanation:
      "DNS servers map human-readable domain names to numeric IP addresses used by computers.",
    tags: ["hosting", "dns"],
  },
  {
    prompt: "Which of the following is a benefit of using a CDN?",
    options: [
      "Slower website performance",
      "Better JavaScript debugging",
      "Faster delivery of content to users",
      "More CSS animations",
    ],
    answer: "Faster delivery of content to users",
    explanation:
      "CDNs improve performance by delivering content from servers close to the user.",
    tags: ["hosting", "cdn"],
  },
  {
    prompt: "Which SQL clause limits the number of results returned?",
    options: ["WHERE", "ORDER BY", "LIMIT", "GROUP BY"],
    answer: "LIMIT",
    explanation:
      "`LIMIT` restricts the number of rows returned by an SQL query.",
    tags: ["sql", "database"],
  },
  {
    prompt: "Which SQL command is used to update existing data in a table?",
    options: ["INSERT", "UPDATE", "DELETE", "CREATE"],
    answer: "UPDATE",
    explanation: "`UPDATE` modifies existing rows of data in an SQL table.",
    tags: ["sql", "database"],
  },
  {
    prompt:
      "In SQL, which symbol is used for wildcard matching in LIKE queries?",
    options: ["%", "#", "&", "*"],
    answer: "%",
    explanation:
      "The `%` symbol is used in LIKE queries to match any sequence of characters.",
    tags: ["sql", "database"],
  },
  {
    prompt: "What is the purpose of the `node_modules` folder?",
    options: [
      "To store HTML files",
      "To store installed npm packages",
      "To store browser cookies",
      "To save user preferences",
    ],
    answer: "To store installed npm packages",
    explanation:
      "`node_modules` contains all npm packages installed for a project.",
    tags: ["tools", "npm"],
  },
  {
    prompt: "What does the `npm start` command typically do?",
    options: [
      "Starts the development server",
      "Installs dependencies",
      "Runs database migrations",
      "Updates the browser",
    ],
    answer: "Starts the development server",
    explanation:
      "`npm start` usually runs a command (defined in package.json) to start a development server.",
    tags: ["tools", "npm"],
  },
  {
    prompt: "Which of these is a build tool used in modern web development?",
    options: ["Webpack", "HTML", "MySQL", "Chrome"],
    answer: "Webpack",
    explanation:
      "Webpack is a build tool that bundles and optimizes frontend assets like JavaScript, CSS, and images.",
    tags: ["tools", "webpack", "build"],
  },
];
