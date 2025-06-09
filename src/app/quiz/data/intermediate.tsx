import { Question } from "./fsTypes";

export const questionsIntermediate: Question[] = [
  {
    prompt: "What does JWT stand for?",
    options: [
      "Java Web Token",
      "JSON Web Token",
      "JavaScript Web Transfer",
      "JWT Web Type",
    ],
    answer: "JSON Web Token",
    explanation:
      "JWT stands for JSON Web Token and is used for securely transmitting info.",
    tags: ["auth"],
  },
  {
    prompt:
      "What is the main difference between `localStorage` and `sessionStorage`?",
    options: [
      "`localStorage` expires after session, `sessionStorage` is persistent",
      "`sessionStorage` is shared across tabs, `localStorage` is not",
      "`localStorage` persists until manually cleared, `sessionStorage` lasts per tab session",
      "They are the same in behavior",
    ],
    answer:
      "`localStorage` persists until manually cleared, `sessionStorage` lasts per tab session",
    explanation:
      "`localStorage` keeps data even after closing the browser, while `sessionStorage` clears data when the tab is closed.",
    tags: ["storage", "web"],
  },
  {
    prompt: "Which HTTP status code indicates a client-side redirect?",
    options: ["200", "302", "404", "500"],
    answer: "302",
    explanation: "HTTP 302 indicates a temporary redirect by the server.",
    tags: ["http", "network"],
  },
  {
    prompt: "What is the role of a service worker in a PWA?",
    options: [
      "To style the UI",
      "To manage user permissions",
      "To intercept network requests and cache responses",
      "To increase CSS performance",
    ],
    answer: "To intercept network requests and cache responses",
    explanation:
      "Service workers enable offline capability and caching in PWAs by controlling network requests.",
    tags: ["pwa", "service-worker"],
  },
  {
    prompt: "What is the purpose of `useEffect` in React?",
    options: [
      "To define reusable components",
      "To manage state",
      "To perform side effects after render",
      "To memoize expensive computations",
    ],
    answer: "To perform side effects after render",
    explanation:
      "`useEffect` is used to handle effects like data fetching or subscriptions after component renders.",
    tags: ["react"],
  },
  {
    prompt: "In SQL, what does the `JOIN` keyword do?",
    options: [
      "Deletes rows from a table",
      "Adds a new column",
      "Combines rows from two or more tables",
      "Creates a new table",
    ],
    answer: "Combines rows from two or more tables",
    explanation:
      "`JOIN` combines records from multiple tables based on related columns.",
    tags: ["sql"],
  },
  {
    prompt: "What does the acronym XSS stand for in web security?",
    options: [
      "XML Server Side",
      "Cross-Site Scripting",
      "Cross Server Security",
      "XHTML Secure System",
    ],
    answer: "Cross-Site Scripting",
    explanation:
      "XSS (Cross-Site Scripting) is a vulnerability that allows attackers to inject malicious scripts into webpages.",
    tags: ["security", "xss"],
  },
  {
    prompt:
      "Which HTTP method is typically used to update an existing resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "PUT",
    explanation:
      "PUT is used to update a resource or create it if it doesn't exist.",
    tags: ["http", "rest"],
  },
  {
    prompt: "What does the `box-sizing: border-box` property do in CSS?",
    options: [
      "Adds a border to all elements",
      "Includes padding and border in the element's total width and height",
      "Increases box size based on content",
      "Removes margins automatically",
    ],
    answer:
      "Includes padding and border in the element's total width and height",
    explanation:
      "`border-box` makes layout easier by including padding and border within the element’s specified dimensions.",
    tags: ["css", "layout"],
  },
  {
    prompt:
      "Which data format is commonly used to structure GraphQL queries and responses?",
    options: ["XML", "YAML", "JSON", "CSV"],
    answer: "JSON",
    explanation:
      "GraphQL uses JSON to return structured responses to client queries.",
    tags: ["graphql", "api"],
  },
  {
    prompt: "In Node.js, what is the purpose of `process.env`?",
    options: [
      "To monitor CPU usage",
      "To store request headers",
      "To access environment variables",
      "To read file system contents",
    ],
    answer: "To access environment variables",
    explanation:
      "`process.env` provides access to environment variables, useful for configs like API keys or modes.",
    tags: ["nodejs", "env"],
  },
  {
    prompt: "Which of the following best describes REST architecture?",
    options: [
      "A protocol for messaging between databases",
      "A style for designing loosely coupled web services",
      "A format for front-end component structure",
      "A stateful server communication method",
    ],
    answer: "A style for designing loosely coupled web services",
    explanation:
      "REST (Representational State Transfer) is an architectural style for scalable web services.",
    tags: ["api", "rest"],
  },
  {
    prompt: "What does the `await` keyword do in JavaScript?",
    options: [
      "It pauses the execution of the function until a Promise resolves",
      "It retries failed Promises",
      "It executes code synchronously",
      "It handles errors from Promises",
    ],
    answer: "It pauses the execution of the function until a Promise resolves",
    explanation:
      "`await` is used with async functions to wait for a Promise result before continuing.",
    tags: ["javascript", "async"],
  },
  {
    prompt: "Which tool is used for bundling JavaScript modules?",
    options: ["PostCSS", "Babel", "Webpack", "SASS"],
    answer: "Webpack",
    explanation:
      "Webpack is a module bundler that compiles JavaScript and other assets into a single file or chunks.",
    tags: ["tooling", "webpack"],
  },
  {
    prompt:
      "Which CSS unit is relative to the root `html` element’s font size?",
    options: ["em", "rem", "vh", "px"],
    answer: "rem",
    explanation:
      "`rem` stands for 'root em' and scales relative to the root font size (typically 16px).",
    tags: ["css", "units"],
  },
  {
    prompt:
      "Which of the following is a valid HTTP status code for 'Unauthorized'?",
    options: ["404", "500", "401", "302"],
    answer: "401",
    explanation:
      "401 indicates the user is not authorized to access the requested resource.",
    tags: ["http", "status"],
  },
  {
    prompt: "What is the purpose of `useEffect` in React?",
    options: [
      "To declare a new component",
      "To handle CSS styling",
      "To perform side effects in function components",
      "To fetch static props",
    ],
    answer: "To perform side effects in function components",
    explanation:
      "`useEffect` runs after render and is used for data fetching, subscriptions, or DOM updates.",
    tags: ["react", "hooks"],
  },
  {
    prompt: "What does the acronym CRUD stand for in backend development?",
    options: [
      "Create, Remove, Upload, Deploy",
      "Create, Read, Update, Delete",
      "Connect, Render, Update, Drop",
      "Compile, Run, Update, Delete",
    ],
    answer: "Create, Read, Update, Delete",
    explanation:
      "CRUD represents basic operations for persistent storage systems like databases.",
    tags: ["backend", "database"],
  },
  {
    prompt: "What does `npm run build` typically do in a React project?",
    options: [
      "Runs the development server",
      "Builds and optimizes the project for production",
      "Updates dependencies",
      "Pushes code to GitHub",
    ],
    answer: "Builds and optimizes the project for production",
    explanation:
      "`npm run build` creates an optimized production build with minified code and assets.",
    tags: ["react", "tooling"],
  },
  {
    prompt:
      "Which keyword is used to define a variable that cannot be reassigned in JavaScript?",
    options: ["let", "const", "var", "static"],
    answer: "const",
    explanation:
      "`const` creates a block-scoped constant which cannot be reassigned after declaration.",
    tags: ["javascript", "variables"],
  },
  {
    prompt: "Which of these HTTP methods is idempotent?",
    options: ["POST", "PUT", "PATCH", "CONNECT"],
    answer: "PUT",
    explanation:
      "PUT is idempotent, meaning multiple identical requests produce the same result.",
    tags: ["http", "rest"],
  },
  {
    prompt: "What does `===` do in JavaScript?",
    options: [
      "Checks only value equality",
      "Checks both value and type equality",
      "Assigns a value",
      "Converts types before comparing",
    ],
    answer: "Checks both value and type equality",
    explanation:
      "`===` is the strict equality operator; it compares both value and type.",
    tags: ["javascript"],
  },
  {
    prompt: "What is `middleware` in backend development?",
    options: [
      "A function that runs before route handlers",
      "A component for styling",
      "A frontend hook",
      "A CSS utility class",
    ],
    answer: "A function that runs before route handlers",
    explanation:
      "Middleware functions process requests before they reach the main route logic.",
    tags: ["backend", "node"],
  },
  {
    prompt: "What is the role of `res.status(404)` in Express.js?",
    options: [
      "Renders HTML",
      "Sets the HTTP response status code",
      "Redirects the user",
      "Starts a new server",
    ],
    answer: "Sets the HTTP response status code",
    explanation:
      "`res.status(404)` sets the status code for the response, commonly used for 'Not Found'.",
    tags: ["express", "http"],
  },
  {
    prompt: "What is an environment variable used for?",
    options: [
      "Styling components",
      "Storing runtime configuration",
      "Declaring components",
      "Saving session data",
    ],
    answer: "Storing runtime configuration",
    explanation:
      "Environment variables keep secrets/configs like API keys out of codebases.",
    tags: ["devops", "config"],
  },
  {
    prompt: "What is the main difference between SQL and NoSQL databases?",
    options: [
      "SQL databases are non-relational",
      "NoSQL uses only Python",
      "SQL databases use structured schemas; NoSQL is schema-less",
      "They are identical except for naming",
    ],
    answer: "SQL databases use structured schemas; NoSQL is schema-less",
    explanation:
      "SQL enforces fixed schemas; NoSQL offers flexibility with document/key-value stores.",
    tags: ["database", "sql"],
  },
  {
    prompt: "What is the purpose of `useEffect` in React?",
    options: [
      "To declare variables",
      "To handle side effects like fetching data",
      "To manage CSS",
      "To create components",
    ],
    answer: "To handle side effects like fetching data",
    explanation:
      "`useEffect` runs after render to handle side effects like data fetching or subscriptions.",
    tags: ["react"],
  },
  {
    prompt: "In Git, what does `git pull` do?",
    options: [
      "Pushes changes to the remote",
      "Deletes the repository",
      "Fetches and merges changes from remote",
      "Resets the branch",
    ],
    answer: "Fetches and merges changes from remote",
    explanation:
      "`git pull` gets the latest changes from the remote and merges them into your local branch.",
    tags: ["git"],
  },
  {
    prompt: "What is the difference between `let` and `const` in JavaScript?",
    options: [
      "`let` can’t be reassigned, `const` can",
      "`const` can’t be reassigned, `let` can",
      "They are the same",
      "`const` is for loops only",
    ],
    answer: "`const` can’t be reassigned, `let` can",
    explanation:
      "`const` declares a constant value that can’t be reassigned. `let` allows reassignment.",
    tags: ["javascript"],
  },
  {
    prompt: "What is a RESTful API?",
    options: [
      "An API that only works with SQL",
      "An API based on HTTP verbs and resource paths",
      "An API used only for frontend apps",
      "An API using only WebSockets",
    ],
    answer: "An API based on HTTP verbs and resource paths",
    explanation:
      "RESTful APIs use standard HTTP methods (GET, POST, etc.) to interact with resources.",
    tags: ["api", "rest"],
  },
  {
    prompt: "Why would you use TypeScript instead of JavaScript?",
    options: [
      "To write faster HTML",
      "To reduce load time",
      "To catch type errors during development",
      "To improve styling",
    ],
    answer: "To catch type errors during development",
    explanation:
      "TypeScript offers static type checking, helping prevent runtime bugs.",
    tags: ["typescript"],
  },
  {
    prompt: "What does the HTTP status code 404 mean?",
    options: ["OK", "Forbidden", "Not Found", "Server Error"],
    answer: "Not Found",
    explanation:
      "404 indicates that the requested resource could not be found on the server.",
    tags: ["http"],
  },
  {
    prompt: "Which React hook is used for managing component state?",
    options: ["useEffect", "useState", "useCallback", "useRef"],
    answer: "useState",
    explanation:
      "`useState` allows you to add local state to functional components.",
    tags: ["react"],
  },
  {
    prompt: "What does `npm install` do?",
    options: [
      "Installs Node.js",
      "Creates a Git repository",
      "Installs dependencies listed in package.json",
      "Starts a server",
    ],
    answer: "Installs dependencies listed in package.json",
    explanation:
      "`npm install` downloads and installs all required project dependencies.",
    tags: ["npm"],
  },
  {
    prompt: "What is a promise in JavaScript?",
    options: [
      "A new type of variable",
      "A placeholder for a future value",
      "A synchronous function",
      "A styling method",
    ],
    answer: "A placeholder for a future value",
    explanation:
      "A Promise represents a value that may be available now, later, or never.",
    tags: ["javascript", "async"],
  },
  {
    prompt: "What is the purpose of environment variables?",
    options: [
      "To style HTML elements",
      "To store sensitive configuration outside source code",
      "To speed up performance",
      "To manage Git commits",
    ],
    answer: "To store sensitive configuration outside source code",
    explanation:
      "Environment variables are used to store secrets like API keys without hardcoding them.",
    tags: ["env", "security"],
  },
  {
    prompt: "Which command is used to initialize a new Git repository?",
    options: ["git start", "git init", "git new", "git create"],
    answer: "git init",
    explanation:
      "`git init` sets up a new Git repository in your project folder.",
    tags: ["git"],
  },
  {
    prompt: "What is an API?",
    options: [
      "A database",
      "A programming interface for servers",
      "A user interface tool",
      "An image processing unit",
    ],
    answer: "A programming interface for servers",
    explanation:
      "API stands for Application Programming Interface and enables communication between software components.",
    tags: ["api"],
  },
  {
    prompt: "Which SQL keyword is used to retrieve data?",
    options: ["FETCH", "GET", "SELECT", "OUTPUT"],
    answer: "SELECT",
    explanation:
      "`SELECT` is the SQL command used to fetch data from a database.",
    tags: ["sql"],
  },
  {
    prompt: "What is the output of `typeof null` in JavaScript?",
    options: ["object", "null", "undefined", "function"],
    answer: "object",
    explanation:
      "This is a well-known quirk in JavaScript: `typeof null` returns 'object'.",
    tags: ["javascript"],
  },
  {
    prompt: "What is the main role of a reverse proxy server?",
    options: [
      "Store static assets",
      "Render frontend content",
      "Forward client requests to backend servers",
      "Encrypt frontend JavaScript",
    ],
    answer: "Forward client requests to backend servers",
    explanation:
      "A reverse proxy handles requests and forwards them to backend servers, often used for load balancing and security.",
    tags: ["networking"],
  },
  {
    prompt: "Which HTTP status code means 'Unauthorized'?",
    options: ["200", "301", "401", "403"],
    answer: "401",
    explanation:
      "`401 Unauthorized` means the user must authenticate before accessing the resource.",
    tags: ["http"],
  },
  {
    prompt: "What is the main purpose of the `async` keyword in JavaScript?",
    options: [
      "Declare a variable",
      "Define a class",
      "Mark a function that returns a promise",
      "Pause a function",
    ],
    answer: "Mark a function that returns a promise",
    explanation:
      "`async` marks a function as asynchronous and ensures it returns a promise.",
    tags: ["javascript", "async"],
  },
  {
    prompt: "In REST, what does the PUT method typically do?",
    options: [
      "Deletes a resource",
      "Retrieves a resource",
      "Updates or replaces a resource",
      "Creates a new database",
    ],
    answer: "Updates or replaces a resource",
    explanation:
      "`PUT` is used to update or entirely replace a resource on the server.",
    tags: ["rest", "http"],
  },
  {
    prompt: "Which HTML attribute is used to define inline styles?",
    options: ["class", "css", "style", "font"],
    answer: "style",
    explanation:
      "`style` is used to define inline CSS directly within an HTML tag.",
    tags: ["html", "css"],
  },
  {
    prompt: "What is a middleware in Express.js?",
    options: [
      "A database connection",
      "A function that handles file uploads",
      "A function that handles requests/responses",
      "A CSS preprocessor",
    ],
    answer: "A function that handles requests/responses",
    explanation:
      "Middleware in Express.js is a function that has access to request, response, and the next function in the request-response cycle.",
    tags: ["express", "nodejs"],
  },
  {
    prompt: "What is the difference between `==` and `===` in JavaScript?",
    options: [
      "`==` compares type and value, `===` only value",
      "`==` only compares strings",
      "`===` checks both type and value, `==` does type coercion",
      "They are identical",
    ],
    answer: "`===` checks both type and value, `==` does type coercion",
    explanation:
      "`===` is strict equality, while `==` performs type conversion before comparing.",
    tags: ["javascript"],
  },
  {
    prompt:
      "Which tool is commonly used to bundle JavaScript files for deployment?",
    options: ["Nodemon", "Webpack", "MongoDB", "VS Code"],
    answer: "Webpack",
    explanation:
      "Webpack is a popular module bundler used to package JS, CSS, and more for deployment.",
    tags: ["build", "webpack"],
  },
  {
    prompt: "What does a linter do in a development workflow?",
    options: [
      "Formats HTML files",
      "Detects and fixes bugs",
      "Analyzes code for style and errors",
      "Converts code to another language",
    ],
    answer: "Analyzes code for style and errors",
    explanation:
      "Linters help enforce coding standards and catch bugs before runtime.",
    tags: ["tools", "eslint"],
  },
  {
    prompt: "What does `npm install` do?",
    options: [
      "Starts the server",
      "Installs Node.js",
      "Installs project dependencies listed in package.json",
      "Runs a test script",
    ],
    answer: "Installs project dependencies listed in package.json",
    explanation:
      "`npm install` installs all dependencies defined in the `package.json` file.",
    tags: ["npm", "nodejs"],
  },
  {
    prompt: "Which HTTP status code means 'Unauthorized'?",
    options: ["200", "301", "401", "403"],
    answer: "401",
    explanation:
      "`401 Unauthorized` indicates that authentication is required and has failed or not been provided.",
    tags: ["http", "status"],
  },
  {
    prompt: "What is the main purpose of using environment variables?",
    options: [
      "To store UI themes",
      "To keep sensitive data like API keys secure",
      "To speed up JavaScript execution",
      "To enable CSS animations",
    ],
    answer: "To keep sensitive data like API keys secure",
    explanation:
      "Environment variables store config values like API keys outside of code, improving security and flexibility.",
    tags: ["env", "security"],
  },
  {
    prompt: "What is the purpose of `useEffect` in React?",
    options: [
      "To style components",
      "To define routes",
      "To perform side effects like fetching data",
      "To declare state",
    ],
    answer: "To perform side effects like fetching data",
    explanation:
      "`useEffect` runs after render and is used for side effects such as data fetching, subscriptions, or DOM manipulation.",
    tags: ["react", "hooks"],
  },
  {
    prompt: "Which command initializes a new Git repository?",
    options: ["git push", "git clone", "git init", "git add ."],
    answer: "git init",
    explanation:
      "`git init` creates a new, empty Git repository in the current directory.",
    tags: ["git"],
  },
  {
    prompt: "What is the purpose of CORS in web development?",
    options: [
      "To allow responsive design",
      "To manage cookies",
      "To control cross-origin HTTP requests",
      "To compress files",
    ],
    answer: "To control cross-origin HTTP requests",
    explanation:
      "CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources to be requested from a domain outside the one serving the resource.",
    tags: ["cors", "security"],
  },
  {
    prompt: "What is the role of `package.json` in a Node.js project?",
    options: [
      "To style HTML elements",
      "To define backend routes",
      "To manage project metadata and dependencies",
      "To compile TypeScript",
    ],
    answer: "To manage project metadata and dependencies",
    explanation:
      "`package.json` stores metadata, scripts, and lists dependencies for Node.js projects.",
    tags: ["node", "npm"],
  },
  {
    prompt: "What does SQL's `JOIN` clause do?",
    options: [
      "Deletes a record",
      "Combines rows from two or more tables",
      "Creates a new table",
      "Sorts the data",
    ],
    answer: "Combines rows from two or more tables",
    explanation:
      "`JOIN` is used in SQL to combine rows from two or more tables based on related columns.",
    tags: ["sql", "database"],
  },
  {
    prompt:
      "In TypeScript, what does the `?` symbol indicate when used in a type?",
    options: [
      "A required property",
      "A deprecated property",
      "An optional property",
      "A readonly property",
    ],
    answer: "An optional property",
    explanation:
      "In TypeScript, `?` marks a property as optional during type checking.",
    tags: ["typescript"],
  },
  {
    prompt:
      "What is the main benefit of using a CDN (Content Delivery Network)?",
    options: [
      "Increases backend CPU usage",
      "Slows down load time",
      "Serves content faster via edge locations",
      "Encrypts server logs",
    ],
    answer: "Serves content faster via edge locations",
    explanation:
      "A CDN stores and delivers static files from edge servers close to the user, reducing latency and improving performance.",
    tags: ["cdn", "performance"],
  },
  {
    prompt: "What is a RESTful API?",
    options: [
      "An API using XML to transfer data",
      "An API built only with WebSockets",
      "An API that follows REST principles over HTTP",
      "An API that runs only in React",
    ],
    answer: "An API that follows REST principles over HTTP",
    explanation:
      "RESTful APIs follow Representational State Transfer principles, typically using HTTP for communication.",
    tags: ["api", "rest"],
  },
  {
    prompt: "Which HTTP status code means 'Unauthorized'?",
    options: ["200", "301", "401", "500"],
    answer: "401",
    explanation:
      "401 Unauthorized means the client must authenticate to access the resource.",
    tags: ["http", "auth"],
  },
  {
    prompt:
      "What is the main difference between `PUT` and `PATCH` HTTP methods?",
    options: [
      "`PUT` deletes data; `PATCH` creates data",
      "`PUT` updates the whole resource; `PATCH` updates partial data",
      "`PUT` encrypts data; `PATCH` doesn’t",
      "`PUT` only works with JSON",
    ],
    answer: "`PUT` updates the whole resource; `PATCH` updates partial data",
    explanation:
      "`PUT` replaces the entire resource, while `PATCH` updates only specified fields.",
    tags: ["http", "rest"],
  },
  {
    prompt: "In React, what is the purpose of `useEffect`?",
    options: [
      "To create components",
      "To mutate props",
      "To run side effects in functional components",
      "To define state variables",
    ],
    answer: "To run side effects in functional components",
    explanation:
      "`useEffect` lets you perform side effects like data fetching or subscriptions after rendering.",
    tags: ["react", "hooks"],
  },
  {
    prompt: "What does `===` mean in JavaScript?",
    options: [
      "Assignment operator",
      "Loose equality",
      "Strict equality (value and type)",
      "Inequality check",
    ],
    answer: "Strict equality (value and type)",
    explanation:
      "`===` checks for equality of both value and type in JavaScript.",
    tags: ["javascript"],
  },
  {
    prompt: "Which database is best known for using collections and documents?",
    options: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    answer: "MongoDB",
    explanation:
      "MongoDB stores data in flexible, JSON-like documents inside collections.",
    tags: ["mongodb", "database"],
  },
  {
    prompt: "What is the purpose of `git rebase`?",
    options: [
      "To merge unrelated repositories",
      "To discard uncommitted changes",
      "To integrate changes by reapplying commits on top of another base tip",
      "To create a new branch",
    ],
    answer:
      "To integrate changes by reapplying commits on top of another base tip",
    explanation:
      "`git rebase` moves or reapplies commits to a new base commit, streamlining history.",
    tags: ["git"],
  },
  {
    prompt: "In CSS, what does the `z-index` property control?",
    options: [
      "Element's width",
      "Stacking order of elements",
      "Font size",
      "Element's opacity",
    ],
    answer: "Stacking order of elements",
    explanation:
      "`z-index` determines which elements appear in front when they overlap.",
    tags: ["css"],
  },
  {
    prompt: "What does REST stand for in API design?",
    options: [
      "Representational State Transfer",
      "Recursive Server Template",
      "Remote Stack Execution",
      "Response and Server Timing",
    ],
    answer: "Representational State Transfer",
    explanation:
      "REST is an architectural style for designing scalable web services using standard HTTP methods.",
    tags: ["rest", "api"],
  },
  {
    prompt: "What does the `async` keyword do in JavaScript?",
    options: [
      "Declares a variable asynchronously",
      "Marks a function that always throws an error",
      "Makes a function return a Promise",
      "Disables synchronous code",
    ],
    answer: "Makes a function return a Promise",
    explanation:
      "`async` functions return a Promise and allow use of `await` inside them.",
    tags: ["javascript", "async"],
  },
  {
    prompt:
      "Which tool is commonly used to bundle JavaScript modules for production?",
    options: ["Jest", "Vite", "Webpack", "ESLint"],
    answer: "Webpack",
    explanation:
      "Webpack is a popular bundler that compiles JavaScript modules into optimized assets.",
    tags: ["build", "webpack"],
  },
  {
    prompt: "Which CSS unit is relative to the font-size of the root element?",
    options: ["em", "rem", "px", "%"],
    answer: "rem",
    explanation:
      "`rem` stands for 'root em' and is relative to the font-size of the root `<html>` element.",
    tags: ["css"],
  },
  {
    prompt: "What does the `OPTIONS` HTTP method typically do?",
    options: [
      "Retrieves resource content",
      "Sends data to the server",
      "Deletes a resource",
      "Describes communication options for the target resource",
    ],
    answer: "Describes communication options for the target resource",
    explanation:
      "`OPTIONS` is used in CORS preflight requests to describe allowed methods and headers.",
    tags: ["http", "cors"],
  },
  {
    prompt: "What is the main purpose of the `useMemo` hook in React?",
    options: [
      "To memoize a value and avoid recalculating it unless dependencies change",
      "To memoize a callback function",
      "To fetch data asynchronously",
      "To control rendering frequency",
    ],
    answer:
      "To memoize a value and avoid recalculating it unless dependencies change",
    explanation:
      "`useMemo` helps optimize performance by memoizing expensive computations.",
    tags: ["react", "hooks"],
  },
  {
    prompt: "Which of the following is NOT a valid HTTP status code?",
    options: ["200", "302", "418", "799"],
    answer: "799",
    explanation:
      "799 is not a defined status code in the official HTTP specification.",
    tags: ["http"],
  },
  {
    prompt:
      "Which data structure is used to implement recursion in most programming languages?",
    options: ["Queue", "Set", "Stack", "Linked List"],
    answer: "Stack",
    explanation:
      "Recursion uses the call stack to keep track of function calls.",
    tags: ["data structures", "algorithms"],
  },
  {
    prompt: "In JavaScript, what does the `bind` method do?",
    options: [
      "Executes a function immediately",
      "Attaches an event listener",
      "Creates a new function with `this` bound to a specific object",
      "Clones an object",
    ],
    answer: "Creates a new function with `this` bound to a specific object",
    explanation:
      "`bind` returns a new function with a specified `this` value and optional arguments.",
    tags: ["javascript"],
  },
  {
    prompt: "Which SQL clause is used to filter rows before grouping?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    answer: "WHERE",
    explanation:
      "`WHERE` filters rows before grouping, while `HAVING` filters groups after aggregation.",
    tags: ["sql"],
  },
  {
    prompt:
      "Which lifecycle method is called once immediately after a component is inserted in the DOM in class-based React?",
    options: [
      "componentWillMount",
      "componentDidUpdate",
      "componentDidMount",
      "render",
    ],
    answer: "componentDidMount",
    explanation:
      "`componentDidMount` is the ideal place to initiate network requests or subscriptions.",
    tags: ["react"],
  },
  {
    prompt: "What is a common use of the `robots.txt` file?",
    options: [
      "Manage server errors",
      "Define environment variables",
      "Block or allow web crawlers from indexing certain pages",
      "Track analytics",
    ],
    answer: "Block or allow web crawlers from indexing certain pages",
    explanation:
      "`robots.txt` gives instructions to web crawlers about which pages to crawl or ignore.",
    tags: ["seo"],
  },
  {
    prompt: "Which command lists all globally installed npm packages?",
    options: [
      "npm list -g --depth=0",
      "npm show -g",
      "npm ls --global",
      "npm get packages",
    ],
    answer: "npm list -g --depth=0",
    explanation:
      "`npm list -g --depth=0` displays globally installed packages without listing their dependencies.",
    tags: ["npm"],
  },
  {
    prompt:
      "Which HTTP status code indicates a successful PUT request that created a new resource?",
    options: ["200", "201", "204", "301"],
    answer: "201",
    explanation:
      "`201 Created` indicates that the request has succeeded and a new resource was created.",
    tags: ["http"],
  },
  {
    prompt: "What is the purpose of the `useMemo` hook in React?",
    options: [
      "To store previous state values",
      "To memoize expensive calculations to avoid unnecessary recalculations",
      "To manage side effects",
      "To delay rendering",
    ],
    answer:
      "To memoize expensive calculations to avoid unnecessary recalculations",
    explanation:
      "`useMemo` caches the result of a computation between renders based on dependencies.",
    tags: ["react"],
  },
  {
    prompt: "In RESTful APIs, what does the term 'stateless' imply?",
    options: [
      "The server retains user session state",
      "Each request must contain all the information the server needs",
      "Only the client manages state",
      "The API cannot use authentication",
    ],
    answer: "Each request must contain all the information the server needs",
    explanation:
      "Stateless means each request is independent, with all necessary data included.",
    tags: ["rest"],
  },
  {
    prompt: "What is the output of `typeof null` in JavaScript?",
    options: ["null", "object", "undefined", "function"],
    answer: "object",
    explanation:
      '`typeof null` returns "object" due to a long-standing quirk in JavaScript.',
    tags: ["javascript"],
  },
  {
    prompt: "Which SQL command is used to remove a table from the database?",
    options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
    answer: "DROP",
    explanation:
      "`DROP` completely removes the table structure and its data from the database.",
    tags: ["sql"],
  },
  {
    prompt:
      "Which method in JavaScript returns a shallow copy of a portion of an array?",
    options: ["splice()", "split()", "slice()", "shift()"],
    answer: "slice()",
    explanation:
      "`slice()` returns a shallow copy of selected elements from an array.",
    tags: ["javascript"],
  },
  {
    prompt: "What does the acronym CRUD stand for in database operations?",
    options: [
      "Create, Read, Update, Delete",
      "Create, Remove, Upload, Download",
      "Copy, Restore, Undo, Delete",
      "Connect, Render, Update, Drop",
    ],
    answer: "Create, Read, Update, Delete",
    explanation:
      "CRUD refers to the four basic operations on persistent storage.",
    tags: ["database"],
  },
  {
    prompt: "In Git, what does the command `git rebase` do?",
    options: [
      "It deletes a branch",
      "It creates a new commit history from a base commit",
      "It pushes changes to remote",
      "It merges remote changes into current branch",
    ],
    answer: "It creates a new commit history from a base commit",
    explanation:
      "`git rebase` moves or combines a sequence of commits to a new base commit.",
    tags: ["git"],
  },
  {
    prompt: "What is the main benefit of using CSS Flexbox?",
    options: [
      "It allows pixel-perfect design",
      "It allows 3D transformations",
      "It provides efficient layout distribution of items in one dimension",
      "It makes all elements absolute",
    ],
    answer:
      "It provides efficient layout distribution of items in one dimension",
    explanation: "Flexbox is designed to distribute space along a single axis.",
    tags: ["css"],
  },
  {
    prompt: "Which database type is MongoDB?",
    options: ["Relational", "Graph", "Key-Value", "Document-oriented"],
    answer: "Document-oriented",
    explanation:
      "MongoDB is a NoSQL database that stores data in BSON documents.",
    tags: ["mongodb"],
  },
  {
    prompt: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'==' checks type, '===' doesn't",
      "'===' checks type and value, '==' only value",
      "'==' is for strings only",
      "'===' is deprecated",
    ],
    answer: "'===' checks type and value, '==' only value",
    explanation:
      "`'=='` allows type coercion; `'==='` requires both value and type to match.",
    tags: ["javascript"],
  },
  {
    prompt: "What does the term 'debouncing' refer to in JavaScript?",
    options: [
      "Buffering data from APIs",
      "Delaying execution until a pause in events",
      "Reducing loop iterations",
      "Combining multiple functions into one",
    ],
    answer: "Delaying execution until a pause in events",
    explanation:
      "Debouncing ensures a function runs only after a specified delay since the last invocation.",
    tags: ["javascript", "performance"],
  },
  {
    prompt: "What is the purpose of the 'async' keyword in JavaScript?",
    options: [
      "To make code synchronous",
      "To pause execution",
      "To mark a function that returns a Promise",
      "To skip compilation",
    ],
    answer: "To mark a function that returns a Promise",
    explanation:
      "`async` functions always return a Promise and allow the use of `await` inside.",
    tags: ["javascript", "async"],
  },
  {
    prompt: "Which method parses a JSON string into a JavaScript object?",
    options: [
      "JSON.decode()",
      "JSON.parse()",
      "JSON.stringify()",
      "parse.JSON()",
    ],
    answer: "JSON.parse()",
    explanation:
      "`JSON.parse()` converts a valid JSON string into a JavaScript object.",
    tags: ["json"],
  },
  {
    prompt:
      "What does the 'finally' block do in a try-catch-finally structure?",
    options: [
      "Executes only on success",
      "Skips errors",
      "Executes regardless of success or error",
      "Terminates the program",
    ],
    answer: "Executes regardless of success or error",
    explanation:
      "The `finally` block always runs, regardless of whether an error was thrown or not.",
    tags: ["javascript", "error-handling"],
  },
  {
    prompt: "What does CORS stand for?",
    options: [
      "Cross-Origin Resource Sharing",
      "Cross-Origin Rendering Security",
      "Client-Origin Request Service",
      "Cross Object Resource Specification",
    ],
    answer: "Cross-Origin Resource Sharing",
    explanation:
      "CORS is a browser mechanism that allows controlled access to resources located outside a given domain.",
    tags: ["http", "security"],
  },
  {
    prompt:
      "Which HTTP status code indicates a successful PUT or POST that resulted in resource creation?",
    options: ["200", "201", "204", "301"],
    answer: "201",
    explanation:
      "201 Created indicates that the request was successful and a new resource was created.",
    tags: ["http"],
  },
  {
    prompt: "In SQL, what does the 'JOIN' clause do?",
    options: [
      "Removes duplicate rows",
      "Combines rows from two or more tables",
      "Sorts the data",
      "Deletes records",
    ],
    answer: "Combines rows from two or more tables",
    explanation:
      "`JOIN` is used to retrieve data from multiple tables based on a related column.",
    tags: ["sql"],
  },
  {
    prompt: "Which command shows all globally installed npm packages?",
    options: [
      "npm show global",
      "npm list -g --depth=0",
      "npm global list",
      "npm search -g",
    ],
    answer: "npm list -g --depth=0",
    explanation:
      "`npm list -g --depth=0` lists all top-level globally installed packages.",
    tags: ["npm"],
  },
  {
    prompt: "What is the main use of the 'z-index' property in CSS?",
    options: [
      "Set padding",
      "Control element stacking order",
      "Align text",
      "Resize images",
    ],
    answer: "Control element stacking order",
    explanation:
      "`z-index` determines the stack order of elements along the z-axis (front to back).",
    tags: ["css"],
  },
  {
    prompt: 'What does the `rel="noopener"` attribute in an anchor tag do?',
    options: [
      "Prevents the new page from accessing the `window.opener` property",
      "Opens the link in a new tab",
      "Improves SEO ranking",
      "Automatically closes the opened tab after load",
    ],
    answer: "Prevents the new page from accessing the `window.opener` property",
    explanation:
      'Using `rel="noopener"` prevents security vulnerabilities like reverse tabnabbing when opening links in a new tab.',
    tags: ["html", "security", "a11y"],
  },
  {
    prompt:
      "Which HTML element is used to semantically indicate navigation links?",
    options: ["<nav>", "<aside>", "<section>", "<article>"],
    answer: "<nav>",
    explanation:
      "`<nav>` is used to wrap major navigation links of a document.",
    tags: ["html", "semantics"],
  },
  {
    prompt:
      "Which attribute is used to specify a fallback image for the `<picture>` element?",
    options: ["fallback", "src", "default", "img"],
    answer: "src",
    explanation:
      "The `<img>` tag inside `<picture>` provides the fallback via its `src` attribute.",
    tags: ["html", "media", "responsive"],
  },
  {
    prompt: 'What is the purpose of the `aria-hidden="true"` attribute?',
    options: [
      "Hides the element from assistive technologies",
      "Visually hides the element",
      "Disables the element",
      "Removes the element from the DOM",
    ],
    answer: "Hides the element from assistive technologies",
    explanation:
      '`aria-hidden="true"` makes the element invisible to screen readers but keeps it visually present.',
    tags: ["html", "a11y", "accessibility"],
  },
  {
    prompt: 'How does the `loading="lazy"` attribute affect `<img>` elements?',
    options: [
      "Loads the image only when it appears in the viewport",
      "Delays image loading until all scripts run",
      "Prioritizes the image for quick loading",
      "Ignores the image completely",
    ],
    answer: "Loads the image only when it appears in the viewport",
    explanation:
      '`loading="lazy"` improves performance by deferring offscreen image loading until needed.',
    tags: ["html", "performance"],
  },
  {
    prompt: "What does the `<template>` tag do in HTML?",
    options: [
      "Defines content that is not rendered until activated with JavaScript",
      "Applies a default CSS layout",
      "Loads external HTML from a CDN",
      "Creates a hidden form for autofill",
    ],
    answer:
      "Defines content that is not rendered until activated with JavaScript",
    explanation:
      "The `<template>` tag holds HTML that isn't rendered immediately and can be instantiated using JavaScript.",
    tags: ["html", "template", "intermediate"],
  },

  {
    prompt:
      "What is the main benefit of using semantic HTML elements like `<article>` or `<section>`?",
    options: [
      "Improved SEO and accessibility",
      "Increased page load speed",
      "Automatic styling by browsers",
      "Better CSS specificity",
    ],
    answer: "Improved SEO and accessibility",
    explanation:
      "Semantic tags help search engines and screen readers better understand the document structure.",
    tags: ["html", "semantic", "accessibility", "intermediate"],
  },
  {
    prompt:
      "Which attribute enables inline validation error messages for an `<input>`?",
    options: ["required", "pattern", "title", "minlength"],
    answer: "title",
    explanation:
      "`title` provides a tooltip that appears on validation failure when combined with attributes like `required` or `pattern`.",
    tags: ["html", "forms", "validation", "intermediate"],
  },
  {
    prompt: "What is the purpose of the `sandbox` attribute on an `<iframe>`?",
    options: [
      "Restricts iframe content behavior for security",
      "Improves iframe loading speed",
      "Automatically hides scrollbars",
      "Enables full-screen mode by default",
    ],
    answer: "Restricts iframe content behavior for security",
    explanation:
      "The `sandbox` attribute disables scripts, forms, and other potentially unsafe behaviors inside the iframe.",
    tags: ["html", "iframe", "security", "intermediate"],
  },

  {
    prompt: "How do you make an entire `<div>` element clickable as a link?",
    options: [
      "Wrap the `<div>` in an `<a>` tag",
      "Use `onclick` and `window.location`",
      "Apply `cursor: pointer`",
      "Add `tabindex='0'`",
    ],
    answer: "Wrap the `<div>` in an `<a>` tag",
    explanation:
      "The correct semantic way is to wrap the `<div>` in an anchor tag; styling and interactivity can then be applied.",
    tags: ["html", "accessibility", "semantic", "intermediate"],
  },
  {
    prompt:
      "Which HTML element is used to declare metadata about the document?",
    options: ["<meta>", "<link>", "<head>", "<script>"],
    answer: "<meta>",
    explanation:
      "The `<meta>` tag provides metadata such as charset, description, and viewport settings for the document.",
    tags: ["html", "meta", "intermediate"],
  },

  {
    prompt: "What does the `autocomplete` attribute do in an HTML form?",
    options: [
      "Controls whether the browser can autofill form fields",
      "Prevents JavaScript validation",
      "Clears input values on page load",
      "Submits the form automatically",
    ],
    answer: "Controls whether the browser can autofill form fields",
    explanation:
      "`autocomplete='on'` or `off` determines whether the browser should suggest saved entries for the field.",
    tags: ["html", "forms", "intermediate"],
  },

  {
    prompt:
      "Which attribute is used to associate a `<label>` with a form control?",
    options: ["for", "name", "id", "bind"],
    answer: "for",
    explanation:
      "The `for` attribute on `<label>` matches the `id` of a form control, linking them for accessibility and focus behavior.",
    tags: ["html", "forms", "accessibility", "intermediate"],
  },

  {
    prompt: "What does the `novalidate` attribute do on a `<form>` element?",
    options: [
      "Disables built-in form validation",
      "Disables JavaScript form handlers",
      "Resets input fields to default values",
      "Prevents form submission",
    ],
    answer: "Disables built-in form validation",
    explanation:
      "`novalidate` disables the browser’s automatic validation checks on form submission.",
    tags: ["html", "forms", "validation", "intermediate"],
  },

  {
    prompt: "What is the role of the `role` attribute in HTML?",
    options: [
      "Defines the semantic purpose of an element for assistive technologies",
      "Adds animation effects to elements",
      "Styles the element using default CSS",
      "Triggers JavaScript automatically",
    ],
    answer:
      "Defines the semantic purpose of an element for assistive technologies",
    explanation:
      "The `role` attribute improves accessibility by explicitly defining what an element represents (e.g., `button`, `dialog`).",
    tags: ["html", "a11y", "accessibility", "intermediate"],
  },

  {
    prompt: "What is the default method for a form submission?",
    options: ["GET", "POST", "PUT", "SUBMIT"],
    answer: "GET",
    explanation:
      "If no `method` is specified, HTML forms use `GET` by default, appending data to the URL.",
    tags: ["html", "forms", "intermediate"],
  },

  {
    prompt: "How do you prevent a form input from being edited by the user?",
    options: ["readonly", "disabled", "locked", "hidden"],
    answer: "readonly",
    explanation:
      "`readonly` allows the user to view the input but not change it, unlike `disabled` which prevents interaction and form submission.",
    tags: ["html", "forms", "intermediate"],
  },

  {
    prompt: "What is the function of the `<fieldset>` element?",
    options: [
      "Groups related inputs and labels in a form",
      "Adds a dropdown menu",
      "Applies custom CSS classes to inputs",
      "Creates a submit button group",
    ],
    answer: "Groups related inputs and labels in a form",
    explanation:
      "`<fieldset>` semantically groups form controls and often pairs with `<legend>` for labeling.",
    tags: ["html", "forms", "semantic", "intermediate"],
  },

  {
    prompt: "What does the `hidden` attribute do in HTML?",
    options: [
      "Hides the element from rendering and interaction",
      "Sets `visibility: hidden`",
      "Moves the element off-screen",
      "Delays element rendering",
    ],
    answer: "Hides the element from rendering and interaction",
    explanation:
      "`hidden` is a Boolean attribute that removes the element from the layout and user interaction flow.",
    tags: ["html", "attributes", "intermediate"],
  },

  {
    prompt: "What is the default display value of a `<div>` element?",
    options: ["block", "inline", "inline-block", "none"],
    answer: "block",
    explanation:
      "`<div>` elements are block-level by default, meaning they occupy the full width available.",
    tags: ["html", "css", "intermediate"],
  },
  {
    prompt: "What is the main purpose of a content delivery network (CDN)?",
    options: [
      "Store server logs",
      "Minify HTML files",
      "Distribute static content closer to users geographically",
      "Encrypt backend databases",
    ],
    answer: "Distribute static content closer to users geographically",
    explanation:
      "A CDN caches and delivers static assets (JS, CSS, images) from edge servers to reduce latency and improve performance.",
    tags: ["hosting", "cdn", "performance"],
  },
  {
    prompt: "What is the purpose of ARIA roles in web development?",
    options: [
      "To define CSS styles for components",
      "To describe element behavior to assistive technologies",
      "To manage React component lifecycle",
      "To improve image compression",
    ],
    answer: "To describe element behavior to assistive technologies",
    explanation:
      "ARIA roles help define the purpose and state of UI elements for users relying on assistive technologies.",
    tags: ["a11y", "accessibility", "html"],
  },
  {
    prompt: "Which Git command is used to combine two branches?",
    options: ["git rebase", "git merge", "git fetch", "git reset"],
    answer: "git merge",
    explanation:
      "`git merge` integrates changes from one branch into another, creating a merge commit if necessary.",
    tags: ["git"],
  },
  {
    prompt:
      "What does the 'critical rendering path' refer to in browser performance?",
    options: [
      "The order in which CSS files are requested",
      "The process browsers use to convert HTML, CSS, JS into pixels on screen",
      "The order of JavaScript execution",
      "The priority of external API calls",
    ],
    answer:
      "The process browsers use to convert HTML, CSS, JS into pixels on screen",
    explanation:
      "The critical rendering path refers to how the browser parses and renders content on the screen (parse HTML → CSSOM → JS → layout → paint).",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What does CSRF stand for in web security?",
    options: [
      "Cross-Site Rendering Framework",
      "Client-Side Random Function",
      "Cross-Site Request Forgery",
      "Cross-Site Response Fetching",
    ],
    answer: "Cross-Site Request Forgery",
    explanation:
      "CSRF is a security vulnerability where an attacker tricks a user into making unwanted requests to another site where they are authenticated.",
    tags: ["security", "csrf"],
  },
  {
    prompt: "Which HTTP header is used to define allowed origins in CORS?",
    options: [
      "Access-Control-Allow-Origin",
      "Origin-Allow",
      "Control-Origin",
      "CORS-Enabled",
    ],
    answer: "Access-Control-Allow-Origin",
    explanation:
      "`Access-Control-Allow-Origin` specifies which origins are permitted to access resources on the server.",
    tags: ["network", "http", "cors"],
  },
  {
    prompt: "What is a common SEO benefit of using semantic HTML elements?",
    options: [
      "Faster JavaScript execution",
      "Better cross-browser compatibility",
      "Improved search engine understanding of page content",
      "More CSS styling options",
    ],
    answer: "Improved search engine understanding of page content",
    explanation:
      "Semantic HTML helps search engines better interpret content structure, improving SEO.",
    tags: ["seo", "html"],
  },
  {
    prompt: "What is the difference between TCP and UDP?",
    options: [
      "TCP is unreliable, UDP is reliable",
      "TCP is connection-oriented, UDP is connectionless",
      "TCP only supports text, UDP supports binary",
      "They are the same protocol",
    ],
    answer: "TCP is connection-oriented, UDP is connectionless",
    explanation:
      "TCP ensures reliable, ordered delivery; UDP is faster but does not guarantee delivery or order.",
    tags: ["network"],
  },
  {
    prompt: "What is the purpose of a CSP (Content Security Policy)?",
    options: [
      "To optimize CSS files",
      "To restrict which resources (scripts, styles) can be loaded by the page",
      "To enable HTTPS connections",
      "To manage API rate limiting",
    ],
    answer:
      "To restrict which resources (scripts, styles) can be loaded by the page",
    explanation:
      "A Content Security Policy (CSP) helps prevent XSS and data injection attacks by controlling which resources a page can load.",
    tags: ["security", "csp"],
  },
  {
    prompt: "In Git, what is the purpose of `git stash`?",
    options: [
      "To permanently delete untracked files",
      "To temporarily save uncommitted changes",
      "To create a backup branch",
      "To squash commit history",
    ],
    answer: "To temporarily save uncommitted changes",
    explanation:
      "`git stash` allows you to temporarily save your local changes so you can switch branches without committing them.",
    tags: ["git"],
  },
  {
    prompt: "What is the purpose of DNS in networking?",
    options: [
      "Encrypt HTTP traffic",
      "Balance server load",
      "Resolve domain names to IP addresses",
      "Secure API tokens",
    ],
    answer: "Resolve domain names to IP addresses",
    explanation:
      "DNS translates human-readable domain names into IP addresses used by computers to locate each other.",
    tags: ["network", "dns"],
  },
  {
    prompt:
      "What is the primary difference between `git pull` and `git fetch`?",
    options: [
      "`git pull` only updates remote branches, `git fetch` merges changes",
      "`git fetch` updates local tracking branches without merging, `git pull` fetches and merges",
      "`git pull` deletes local changes, `git fetch` does not",
      "They are identical in behavior",
    ],
    answer:
      "`git fetch` updates local tracking branches without merging, `git pull` fetches and merges",
    explanation:
      "`git fetch` retrieves new data from a remote repo without merging; `git pull` does fetch + merge.",
    tags: ["git"],
  },
  {
    prompt:
      "Which tool visualizes website performance and identifies bottlenecks?",
    options: ["Webpack", "Lighthouse", "Jest", "Nodemon"],
    answer: "Lighthouse",
    explanation:
      "Google Lighthouse is a tool for auditing performance, accessibility, SEO, and more.",
    tags: ["browser", "performance", "seo"],
  },
  {
    prompt: "What does the `defer` attribute on a `<script>` tag do?",
    options: [
      "Prevents the script from executing",
      "Loads the script asynchronously and delays execution until after HTML parsing",
      "Loads the script synchronously",
      "Applies CSS styles",
    ],
    answer:
      "Loads the script asynchronously and delays execution until after HTML parsing",
    explanation:
      "`defer` allows a script to download in parallel with parsing HTML but defers execution until after the DOM is parsed.",
    tags: ["html", "browser", "performance"],
  },
  {
    prompt:
      "What is the main purpose of using serverless functions in hosting?",
    options: [
      "To replace CSS files",
      "To run backend code without managing servers",
      "To serve static files",
      "To compile TypeScript",
    ],
    answer: "To run backend code without managing servers",
    explanation:
      "Serverless functions let developers run backend logic without provisioning or managing infrastructure.",
    tags: ["hosting", "serverless"],
  },
  {
    prompt:
      "What is a primary accessibility benefit of using native HTML buttons instead of `<div>` or `<span>`?",
    options: [
      "They load faster",
      "They have built-in keyboard and screen reader support",
      "They require less CSS",
      "They reduce JavaScript bundle size",
    ],
    answer: "They have built-in keyboard and screen reader support",
    explanation:
      "Native buttons come with automatic keyboard operability and proper roles for assistive tech.",
    tags: ["a11y", "html", "accessibility"],
  },
  {
    prompt: "What is the role of `robots.txt` in SEO?",
    options: [
      "Specifies meta descriptions for search engines",
      "Defines canonical URLs",
      "Provides crawl instructions for search engine bots",
      "Controls JavaScript execution",
    ],
    answer: "Provides crawl instructions for search engine bots",
    explanation:
      "`robots.txt` gives directives to web crawlers about which pages should or should not be crawled.",
    tags: ["seo", "hosting"],
  },
  {
    prompt: "What is an HTTP `Keep-Alive` connection?",
    options: [
      "A persistent connection that allows multiple requests on the same connection",
      "A connection that prevents the server from going idle",
      "An always-open WebSocket connection",
      "A VPN tunnel",
    ],
    answer:
      "A persistent connection that allows multiple requests on the same connection",
    explanation:
      "`Keep-Alive` enables reusing a single TCP connection for multiple HTTP requests/responses, reducing latency.",
    tags: ["network", "http"],
  },
  {
    prompt:
      "Which ARIA attribute communicates the expanded/collapsed state of a toggle control?",
    options: ["aria-label", "aria-expanded", "aria-pressed", "aria-selected"],
    answer: "aria-expanded",
    explanation:
      "`aria-expanded` indicates whether a control (like an accordion or dropdown) is expanded or collapsed.",
    tags: ["a11y", "accessibility"],
  },
  {
    prompt: "In React, what is a benefit of using `React.memo()`?",
    options: [
      "It prevents component from re-rendering when props haven’t changed",
      "It adds lifecycle methods",
      "It enables server-side rendering",
      "It memoizes hooks",
    ],
    answer:
      "It prevents component from re-rendering when props haven’t changed",
    explanation:
      "`React.memo()` optimizes performance by memoizing a component and skipping re-renders if props are unchanged.",
    tags: ["react", "performance"],
  },
  {
    prompt:
      "Which CSS property helps prevent text from wrapping to the next line?",
    options: ["white-space", "overflow", "text-wrap", "word-spacing"],
    answer: "white-space",
    explanation:
      "The `white-space` property controls whether and how text wraps or preserves spacing.",
    tags: ["css"],
  },
  {
    prompt: "What is the purpose of the `referrer-policy` HTTP header?",
    options: [
      "To control what referrer information is sent with requests",
      "To block CORS requests",
      "To configure TLS settings",
      "To prioritize rendering performance",
    ],
    answer: "To control what referrer information is sent with requests",
    explanation:
      "The `referrer-policy` header controls how much referrer data (URL path) is shared with external sites.",
    tags: ["security", "http"],
  },
  {
    prompt: "In Git, what does `git cherry-pick` do?",
    options: [
      "Deletes a branch",
      "Merges two branches",
      "Applies a specific commit from one branch onto another",
      "Stashes uncommitted changes",
    ],
    answer: "Applies a specific commit from one branch onto another",
    explanation:
      "`git cherry-pick` allows applying a single commit from one branch to another branch.",
    tags: ["git"],
  },
  {
    prompt: "What is the purpose of the `prefetch` link relation in HTML?",
    options: [
      "To load critical CSS",
      "To hint the browser to fetch resources that will be used soon",
      "To prioritize images",
      "To load fonts inline",
    ],
    answer: "To hint the browser to fetch resources that will be used soon",
    explanation:
      "`<link rel='prefetch'>` tells the browser to fetch resources that might be needed in the near future.",
    tags: ["browser", "performance", "html"],
  },
  {
    prompt:
      "In React, what is the main difference between `useMemo` and `useCallback`?",
    options: [
      "`useMemo` memoizes functions, `useCallback` memoizes values",
      "`useMemo` memoizes values, `useCallback` memoizes functions",
      "They are identical",
      "`useCallback` is used for context providers only",
    ],
    answer: "`useMemo` memoizes values, `useCallback` memoizes functions",
    explanation:
      "`useMemo` stores a memoized value; `useCallback` stores a memoized function reference.",
    tags: ["react", "hooks", "performance"],
  },
  {
    prompt: "What is the purpose of using HTTP/2 over HTTP/1.1?",
    options: [
      "To allow browsers to bypass security checks",
      "To compress CSS files",
      "To improve performance via multiplexing and header compression",
      "To remove the need for TLS",
    ],
    answer: "To improve performance via multiplexing and header compression",
    explanation:
      "HTTP/2 enables parallel streams over a single connection and compresses headers to improve performance.",
    tags: ["network", "http"],
  },
  {
    prompt: "In SQL, what does the `HAVING` clause do?",
    options: [
      "Filters rows before grouping",
      "Filters groups after `GROUP BY`",
      "Sorts rows",
      "Performs JOIN operations",
    ],
    answer: "Filters groups after `GROUP BY`",
    explanation:
      "`HAVING` filters aggregated results after `GROUP BY` has grouped the data.",
    tags: ["sql"],
  },
  {
    prompt: "In the browser rendering pipeline, what is a 'reflow'?",
    options: [
      "A repaint of CSS styles only",
      "A recalculation of the layout of the page",
      "A memory optimization step",
      "A network fetch retry",
    ],
    answer: "A recalculation of the layout of the page",
    explanation:
      "A reflow occurs when changes require recalculating the positions and dimensions of elements.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What is the primary security purpose of the Same-Origin Policy?",
    options: [
      "To prevent XSS",
      "To block DNS spoofing",
      "To restrict how documents or scripts can interact across origins",
      "To limit API rate usage",
    ],
    answer: "To restrict how documents or scripts can interact across origins",
    explanation:
      "The Same-Origin Policy prevents documents from one origin from accessing content on another origin, mitigating XSS and CSRF risks.",
    tags: ["security"],
  },
  {
    prompt: "What does `git reset --soft HEAD~1` do?",
    options: [
      "Deletes the last commit and discards changes",
      "Moves HEAD back one commit but keeps changes staged",
      "Moves HEAD back one commit and discards staged changes",
      "Creates a new branch",
    ],
    answer: "Moves HEAD back one commit but keeps changes staged",
    explanation:
      "`git reset --soft HEAD~1` undoes the last commit but preserves the changes in the staging area.",
    tags: ["git"],
  },
  {
    prompt: "What is the main purpose of DNS caching?",
    options: [
      "To speed up repeated domain lookups",
      "To encrypt DNS queries",
      "To block unwanted domains",
      "To compress HTTP headers",
    ],
    answer: "To speed up repeated domain lookups",
    explanation:
      "DNS caching stores previous lookup results to avoid repeated requests to DNS servers, improving performance.",
    tags: ["network", "dns"],
  },
  {
    prompt:
      "What does `git rebase --interactive` (or `git rebase -i`) allow you to do?",
    options: [
      "Interactively edit file contents",
      "Reorder, squash, or edit commits in a branch",
      "Resolve merge conflicts automatically",
      "Clone a repository",
    ],
    answer: "Reorder, squash, or edit commits in a branch",
    explanation:
      "`git rebase -i` enables interactive editing of the commit history — e.g. to squash, reorder, or edit commits.",
    tags: ["git"],
  },
  {
    prompt: "What does CSP's `default-src` directive do?",
    options: [
      "Specifies fallback behavior for missing resources",
      "Defines the default set of sources that can be loaded",
      "Disables caching for critical resources",
      "Enables cross-origin requests",
    ],
    answer: "Defines the default set of sources that can be loaded",
    explanation:
      "CSP's `default-src` directive sets the baseline policy for loading resources (scripts, styles, images, etc.).",
    tags: ["security", "csp"],
  },
  {
    prompt: "What is the main goal of serverless architecture?",
    options: [
      "To replace frontend frameworks",
      "To move all logic to the client",
      "To run code on-demand without managing servers",
      "To disable TLS requirements",
    ],
    answer: "To run code on-demand without managing servers",
    explanation:
      "Serverless architecture lets developers deploy functions that scale automatically without managing server infrastructure.",
    tags: ["hosting", "serverless"],
  },
  {
    prompt: "What does the `dns-prefetch` hint do?",
    options: [
      "Preloads fonts",
      "Instructs the browser to resolve DNS for a domain early",
      "Caches HTTP headers",
      "Prefetches page content",
    ],
    answer: "Instructs the browser to resolve DNS for a domain early",
    explanation:
      "`dns-prefetch` lets the browser perform DNS resolution for an external domain early, improving perceived performance.",
    tags: ["browser", "performance", "dns"],
  },
  {
    prompt: "Which ARIA attribute describes the current state of a tab?",
    options: ["aria-pressed", "aria-checked", "aria-selected", "aria-expanded"],
    answer: "aria-selected",
    explanation:
      "`aria-selected` indicates whether an item in a set (such as a tab) is selected.",
    tags: ["a11y", "accessibility"],
  },
  {
    prompt:
      "What does the `integrity` attribute in a `<script>` or `<link>` tag do?",
    options: [
      "Specifies the character encoding",
      "Validates that the fetched resource matches a known hash",
      "Specifies CORS policies",
      "Defines fallback resources",
    ],
    answer: "Validates that the fetched resource matches a known hash",
    explanation:
      "The `integrity` attribute provides Subresource Integrity (SRI), ensuring that the resource hasn't been tampered with.",
    tags: ["security"],
  },
  {
    prompt: "In SQL, what is a 'composite primary key'?",
    options: [
      "A primary key with a foreign key constraint",
      "A primary key composed of multiple columns",
      "A key that is auto-incremented",
      "A key used only for indexing",
    ],
    answer: "A primary key composed of multiple columns",
    explanation:
      "A composite primary key uses two or more columns to uniquely identify each row.",
    tags: ["sql"],
  },
  {
    prompt: "What is the purpose of a CSRF token?",
    options: [
      "To encrypt session data",
      "To authenticate the client",
      "To ensure that requests are made intentionally by the user",
      "To replace CAPTCHA challenges",
    ],
    answer: "To ensure that requests are made intentionally by the user",
    explanation:
      "A CSRF token ensures that requests (like form submissions) are intentionally made by the user and not forged by attackers.",
    tags: ["security", "csrf"],
  },
  {
    prompt: "What is a benefit of HTTP caching?",
    options: [
      "Reduces server CPU usage by compressing responses",
      "Allows faster subsequent page loads",
      "Encrypts HTTP responses",
      "Ensures all resources are always up-to-date",
    ],
    answer: "Allows faster subsequent page loads",
    explanation:
      "HTTP caching reduces latency and bandwidth usage by serving cached content when appropriate.",
    tags: ["network", "http", "performance"],
  },
  {
    prompt: "What is 'layout thrashing' in the browser rendering pipeline?",
    options: [
      "When a page uses too many layout grids",
      "When frequent DOM reads/writes cause forced synchronous reflows",
      "When too many CSS animations are used",
      "When fonts are reloaded on each frame",
    ],
    answer: "When frequent DOM reads/writes cause forced synchronous reflows",
    explanation:
      "Layout thrashing happens when JS alternates DOM reads and writes, causing repeated reflows and performance hits.",
    tags: ["browser", "performance"],
  },
  {
    prompt:
      "Which browser API allows scheduling a low-priority background task?",
    options: [
      "requestIdleCallback",
      "setTimeout",
      "requestAnimationFrame",
      "setInterval",
    ],
    answer: "requestIdleCallback",
    explanation:
      "`requestIdleCallback` allows scheduling background work during browser idle time.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What does a CDN typically cache?",
    options: [
      "Dynamic API responses",
      "Server logs",
      "Static assets like images, CSS, JS",
      "Database queries",
    ],
    answer: "Static assets like images, CSS, JS",
    explanation:
      "A CDN caches static content such as images, CSS, JS files to reduce latency and bandwidth.",
    tags: ["hosting", "cdn"],
  },
  {
    prompt: "What is a cold start in serverless functions?",
    options: [
      "When the server has no power",
      "When the client first connects to a serverless function and it must be initialized",
      "When the database is empty",
      "When HTTPS is not used",
    ],
    answer:
      "When the client first connects to a serverless function and it must be initialized",
    explanation:
      "Cold start refers to the delay when a serverless function is first invoked and needs to be initialized.",
    tags: ["hosting", "serverless"],
  },
  {
    prompt: "Which DNS record maps a domain name to an IP address?",
    options: ["MX record", "TXT record", "CNAME record", "A record"],
    answer: "A record",
    explanation:
      "An A record (Address record) maps a domain to an IPv4 address.",
    tags: ["hosting", "dns"],
  },
  {
    prompt: "Which SQL clause is used to filter rows before aggregation?",
    options: ["HAVING", "GROUP BY", "WHERE", "ORDER BY"],
    answer: "WHERE",
    explanation:
      "`WHERE` filters rows before `GROUP BY` or `HAVING` clauses are applied.",
    tags: ["sql", "database"],
  },
  {
    prompt: "What is database normalization?",
    options: [
      "A process to denormalize tables for faster access",
      "A process to reduce data redundancy and improve data integrity",
      "A type of data encryption",
      "A method to cache SQL queries",
    ],
    answer: "A process to reduce data redundancy and improve data integrity",
    explanation:
      "Normalization structures a database to minimize redundancy and ensure logical data relationships.",
    tags: ["sql", "database"],
  },
  {
    prompt: "What is the main purpose of Webpack's 'tree shaking' feature?",
    options: [
      "To sort JavaScript files",
      "To minify CSS files",
      "To remove unused code from final bundle",
      "To optimize image loading",
    ],
    answer: "To remove unused code from final bundle",
    explanation:
      "Tree shaking eliminates dead (unused) code from bundles, reducing file size.",
    tags: ["tools", "webpack", "build"],
  },
  {
    prompt: "Which ESLint rule category helps enforce consistent code style?",
    options: [
      "Best Practices",
      "Stylistic Issues",
      "Possible Errors",
      "Node.js and CommonJS",
    ],
    answer: "Stylistic Issues",
    explanation:
      "`Stylistic Issues` rules help enforce consistent spacing, indentation, quote style, etc.",
    tags: ["tools", "eslint"],
  },
  {
    prompt: "In npm, what is a 'devDependency'?",
    options: [
      "A dependency required only for development, not in production builds",
      "A dependency used only on the server",
      "A dependency for older browsers",
      "A dependency used by React components",
    ],
    answer:
      "A dependency required only for development, not in production builds",
    explanation:
      "`devDependencies` are packages needed only during development (e.g. testing, linting, bundling), not in production.",
    tags: ["tools", "npm"],
  },
  {
    prompt:
      "Which CSS property can help reduce paint time by promoting an element to its own layer?",
    options: ["will-change", "transform-origin", "contain", "clip-path"],
    answer: "will-change",
    explanation:
      "`will-change` hints to the browser that an element will change, so it can optimize performance (e.g., promote it to a new layer).",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What is a TTL (Time To Live) value in DNS?",
    options: [
      "The maximum size of DNS packet",
      "How long a DNS record is cached before expiring",
      "A timeout for HTTP requests",
      "The expiration time of SSL certificates",
    ],
    answer: "How long a DNS record is cached before expiring",
    explanation:
      "TTL defines how long a DNS resolver caches a record before querying it again.",
    tags: ["hosting", "dns"],
  },
  {
    prompt: "Which SQL index type is best for full-text search?",
    options: ["B-tree", "Full-text", "Hash", "Spatial"],
    answer: "Full-text",
    explanation:
      "Full-text indexes allow efficient searching of text content in large databases.",
    tags: ["sql", "database"],
  },
  {
    prompt: "In npm, what is the effect of using `--save-exact`?",
    options: [
      "Installs only exact versions of dependencies, not ranges",
      "Installs globally",
      "Enables peerDependencies",
      "Removes duplicate dependencies",
    ],
    answer: "Installs only exact versions of dependencies, not ranges",
    explanation:
      "`--save-exact` forces npm to save the exact version of a dependency without a version range (^ or ~).",
    tags: ["tools", "npm"],
  },
  {
    prompt: "What is 'lazy loading' in the context of images?",
    options: [
      "Preloads all images at once",
      "Loads images only when they are about to enter the viewport",
      "Compresses images on the fly",
      "Loads images first before HTML and CSS",
    ],
    answer: "Loads images only when they are about to enter the viewport",
    explanation:
      "Lazy loading defers loading images until they are needed (e.g. when scrolling), improving page performance.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What is an origin server in the context of a CDN?",
    options: [
      "A server that generates SSL certificates",
      "A server that stores the original version of content served through a CDN",
      "A DNS root server",
      "A JavaScript microservice",
    ],
    answer:
      "A server that stores the original version of content served through a CDN",
    explanation:
      "The origin server holds the source content that the CDN pulls from and caches at edge locations.",
    tags: ["hosting", "cdn"],
  },
  {
    prompt: "Which SQL statement is used to modify existing table structures?",
    options: ["UPDATE", "ALTER TABLE", "INSERT", "RENAME"],
    answer: "ALTER TABLE",
    explanation:
      "`ALTER TABLE` modifies the structure of an existing table, such as adding or dropping columns.",
    tags: ["sql", "database"],
  },
  {
    prompt: "What does Webpack's `code splitting` feature enable?",
    options: [
      "Running JS in separate threads",
      "Splitting large JS bundles into smaller chunks that can be loaded on demand",
      "Building CSS separately from JS",
      "Using multiple Webpack config files",
    ],
    answer:
      "Splitting large JS bundles into smaller chunks that can be loaded on demand",
    explanation:
      "Code splitting helps improve page load times by loading only the necessary JS for the current page.",
    tags: ["tools", "webpack", "build"],
  },
  {
    prompt: "In ESLint, what is the purpose of a 'plugin'?",
    options: [
      "It adds new linting rules or extends existing functionality",
      "It installs npm dependencies",
      "It formats HTML",
      "It manages Git hooks",
    ],
    answer: "It adds new linting rules or extends existing functionality",
    explanation:
      "ESLint plugins provide additional rules, processors, or configurations for specific frameworks or languages.",
    tags: ["tools", "eslint"],
  },
  {
    prompt: "Which type of cache is managed by the browser for HTTP responses?",
    options: [
      "Service worker cache",
      "LocalStorage",
      "Memory cache",
      "Disk cache",
    ],
    answer: "Disk cache",
    explanation:
      "The browser stores HTTP responses in a disk cache to persist them across sessions and improve load times.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "Which browser API allows scheduling visual updates?",
    options: [
      "setTimeout",
      "requestIdleCallback",
      "requestAnimationFrame",
      "MutationObserver",
    ],
    answer: "requestAnimationFrame",
    explanation:
      "`requestAnimationFrame` schedules a function to run before the next repaint, optimized for visual updates.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What is the primary purpose of a reverse proxy in hosting?",
    options: [
      "To cache API responses",
      "To forward client requests to backend servers and provide load balancing",
      "To monitor network traffic",
      "To serve static files from memory",
    ],
    answer:
      "To forward client requests to backend servers and provide load balancing",
    explanation:
      "A reverse proxy forwards client requests to backend servers, often handling load balancing, caching, and SSL termination.",
    tags: ["hosting"],
  },
  {
    prompt: "In SQL, what is the purpose of the `UNION` operator?",
    options: [
      "To combine rows from two tables without duplicates",
      "To merge columns of two tables",
      "To sort query results",
      "To apply aggregate functions",
    ],
    answer: "To combine rows from two tables without duplicates",
    explanation:
      "`UNION` combines result sets from multiple SELECT statements and removes duplicates.",
    tags: ["sql", "database"],
  },
  {
    prompt: "In Webpack, what is the role of a 'loader'?",
    options: [
      "It adds HTML polyfills",
      "It transforms files before they are bundled",
      "It starts the dev server",
      "It compresses output files",
    ],
    answer: "It transforms files before they are bundled",
    explanation:
      "Loaders transform files (e.g. transpiling JS, compiling SASS) before Webpack bundles them.",
    tags: ["tools", "webpack", "build"],
  },
  {
    prompt:
      "Which HTTP header helps browsers decide whether to serve a cached resource?",
    options: [
      "ETag",
      "Content-Length",
      "X-Frame-Options",
      "Strict-Transport-Security",
    ],
    answer: "ETag",
    explanation:
      "`ETag` is a unique identifier for a resource version. Browsers use it to determine if cached content is still valid.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What does an `MX` DNS record define?",
    options: [
      "The main server for the website",
      "The email server responsible for accepting email messages",
      "The SSL certificate authority",
      "The origin server for the CDN",
    ],
    answer: "The email server responsible for accepting email messages",
    explanation:
      "An `MX` (Mail Exchange) record specifies the email server for a domain.",
    tags: ["hosting", "dns"],
  },
  {
    prompt: "Which SQL clause allows sorting of query results?",
    options: ["GROUP BY", "HAVING", "ORDER BY", "DISTINCT"],
    answer: "ORDER BY",
    explanation:
      "`ORDER BY` sorts the results returned by a query in ascending or descending order.",
    tags: ["sql", "database"],
  },
  {
    prompt: "In npm, what is the purpose of a 'peer dependency'?",
    options: [
      "A dependency that will be bundled automatically",
      "A dependency that must be installed manually in the host project",
      "A dependency used for testing only",
      "A dependency shared between dev and prod",
    ],
    answer: "A dependency that must be installed manually in the host project",
    explanation:
      "Peer dependencies are not automatically installed — the consuming project must provide the required version.",
    tags: ["tools", "npm"],
  },
  {
    prompt:
      "What is the main role of the 'content-hash' in a file name during build?",
    options: [
      "To make files smaller",
      "To track file ownership",
      "To enable long-term caching by uniquely identifying file content",
      "To compress images",
    ],
    answer: "To enable long-term caching by uniquely identifying file content",
    explanation:
      "Content hashes in filenames let browsers cache files efficiently and invalidate the cache when content changes.",
    tags: ["tools", "build"],
  },
  {
    prompt: "What happens during browser 'painting' phase?",
    options: [
      "JavaScript code is executed",
      "DOM is built from HTML",
      "CSS is parsed into a tree",
      "Pixels are drawn to the screen based on computed styles and layout",
    ],
    answer:
      "Pixels are drawn to the screen based on computed styles and layout",
    explanation:
      "In the painting phase, the browser draws visual parts of elements to the screen based on style and layout.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What does the `preconnect` link relation do?",
    options: [
      "It loads fonts asynchronously",
      "It tells the browser to establish early connections to a domain",
      "It compresses images",
      "It preloads JavaScript files",
    ],
    answer: "It tells the browser to establish early connections to a domain",
    explanation:
      "`preconnect` allows the browser to set up early connections (DNS, TCP, TLS) to a domain, improving load performance.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What is a typical use case for a CNAME DNS record?",
    options: [
      "To map a domain to an IP address",
      "To alias one domain name to another",
      "To specify the mail server",
      "To define TXT records for verification",
    ],
    answer: "To alias one domain name to another",
    explanation:
      "A CNAME record maps one domain name to another (canonical name), often used for subdomains or external services.",
    tags: ["hosting", "dns"],
  },
  {
    prompt: "What does the SQL `DISTINCT` keyword do?",
    options: [
      "Sorts rows in descending order",
      "Removes duplicate rows from the result set",
      "Creates a primary key",
      "Filters rows based on conditions",
    ],
    answer: "Removes duplicate rows from the result set",
    explanation:
      "`DISTINCT` ensures that only unique rows are returned in the result set.",
    tags: ["sql", "database"],
  },
  {
    prompt: "In npm, what does `npm ci` do?",
    options: [
      "Installs dependencies and updates package.json",
      "Performs a clean install based on package-lock.json",
      "Checks for peer dependency mismatches",
      "Compiles JavaScript code",
    ],
    answer: "Performs a clean install based on package-lock.json",
    explanation:
      "`npm ci` installs dependencies exactly as specified in package-lock.json, useful for reproducible builds in CI environments.",
    tags: ["tools", "npm"],
  },
  {
    prompt: "What happens during the browser 'compositing' phase?",
    options: [
      "DOM tree is constructed",
      "Elements are painted to offscreen buffers and combined into the final image",
      "JavaScript is parsed",
      "HTML is tokenized",
    ],
    answer:
      "Elements are painted to offscreen buffers and combined into the final image",
    explanation:
      "Compositing takes painted layers and combines them into the final image that appears on the screen.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What is the purpose of an `AAAA` DNS record?",
    options: [
      "It maps a domain name to an IPv6 address",
      "It defines the email server",
      "It stores text information",
      "It maps a domain name to a service endpoint",
    ],
    answer: "It maps a domain name to an IPv6 address",
    explanation:
      "An `AAAA` record maps a domain to an IPv6 address, similar to how an `A` record maps to IPv4.",
    tags: ["hosting", "dns"],
  },
  {
    prompt:
      "Which SQL keyword is used to combine result sets and include all rows (duplicates allowed)?",
    options: ["JOIN", "UNION ALL", "INTERSECT", "GROUP BY"],
    answer: "UNION ALL",
    explanation:
      "`UNION ALL` combines result sets from multiple SELECT statements and retains duplicate rows.",
    tags: ["sql", "database"],
  },
  {
    prompt: "In Webpack, what is a 'plugin'?",
    options: [
      "A function that modifies CSS styles",
      "A tool that performs a wider range of build tasks beyond loaders",
      "A library for polyfills",
      "A dependency injection tool",
    ],
    answer: "A tool that performs a wider range of build tasks beyond loaders",
    explanation:
      "Webpack plugins can hook into the build process to perform tasks such as minification, asset management, and more.",
    tags: ["tools", "webpack", "build"],
  },
  {
    prompt: "What does the `Cache-Control: no-store` directive do?",
    options: [
      "Prevents caching of the resource entirely",
      "Allows caching for 1 day",
      "Forces caching in service worker",
      "Requires ETag validation",
    ],
    answer: "Prevents caching of the resource entirely",
    explanation:
      "`Cache-Control: no-store` ensures that the resource is not cached anywhere, enhancing privacy and security.",
    tags: ["browser", "performance"],
  },
  {
    prompt: "What is the main purpose of Webpack's 'mode' option?",
    options: [
      "To configure Babel presets",
      "To specify the target browser",
      "To switch between development and production optimizations",
      "To enable TypeScript support",
    ],
    answer: "To switch between development and production optimizations",
    explanation:
      "Webpack's `mode` option toggles between development (faster builds, source maps) and production (minified output, optimizations).",
    tags: ["tools", "webpack", "build"],
  },
];
