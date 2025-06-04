import { Question } from "./fsTypes";

export const questionsAdvanced: Question[] = [
  {
    prompt: "Which command builds a Docker image from a Dockerfile?",
    options: ["docker start", "docker init", "docker build", "docker create"],
    answer: "docker build",
    explanation: "Use `docker build` to create an image from a Dockerfile.",
    tags: ["docker"],
  },
  {
    prompt: "What is the purpose of the 'key' prop in React lists?",
    options: [
      "To identify each element uniquely",
      "To trigger re-renders",
      "To pass props to children",
      "To style list items",
    ],
    answer: "To identify each element uniquely",
    explanation:
      "React uses 'key' to optimize list rendering by tracking individual items.",
    tags: ["react", "reconciliation"],
  },
  {
    prompt: "What does `Object.create(null)` return?",
    options: [
      "A normal object with prototype",
      "An object with no prototype",
      "A null value",
      "An empty array",
    ],
    answer: "An object with no prototype",
    explanation:
      "`Object.create(null)` creates a pure object with no inherited methods or properties.",
    tags: ["javascript", "objects"],
  },
  {
    prompt: "In Node.js, which module is used to create an HTTP server?",
    options: ["fs", "path", "http", "net"],
    answer: "http",
    explanation:
      "`http` module provides functionality to create servers and handle HTTP requests.",
    tags: ["nodejs", "http"],
  },
  {
    prompt: "What does `process.nextTick()` do in Node.js?",
    options: [
      "Defers a callback until the next event loop",
      "Pauses the process",
      "Runs code after a timeout",
      "Terminates the process",
    ],
    answer: "Defers a callback until the next event loop",
    explanation:
      "`process.nextTick()` queues a callback to be invoked after the current operation completes.",
    tags: ["nodejs", "event-loop"],
  },
  {
    prompt: "What is the role of `StrictMode` in React?",
    options: [
      "Enables production mode",
      "Highlights potential problems",
      "Adds new features",
      "Optimizes performance",
    ],
    answer: "Highlights potential problems",
    explanation:
      "`<StrictMode>` activates extra checks and warnings for its children during development.",
    tags: ["react", "strict-mode"],
  },
  {
    prompt: "What is a memory leak in a JavaScript application?",
    options: [
      "When memory is freed prematurely",
      "When memory grows because it's not released",
      "When variables are undefined",
      "When GC runs too often",
    ],
    answer: "When memory grows because it's not released",
    explanation:
      "A memory leak happens when data is unintentionally kept in memory, preventing GC from freeing it.",
    tags: ["javascript", "performance"],
  },
  {
    prompt: "What does the `z-index` property control in CSS?",
    options: [
      "Font rendering",
      "Layer stacking order",
      "Visibility",
      "Animation timing",
    ],
    answer: "Layer stacking order",
    explanation:
      "`z-index` sets the stacking order of elements on the z-axis (depth).",
    tags: ["css", "layout"],
  },
  {
    prompt: "What is a race condition?",
    options: [
      "A condition where two functions run in parallel",
      "A bug caused by non-deterministic code execution order",
      "When a thread blocks the main thread",
      "When code throws a runtime error",
    ],
    answer: "A bug caused by non-deterministic code execution order",
    explanation:
      "Race conditions occur when timing issues between concurrent tasks cause unexpected behavior.",
    tags: ["async", "concurrency", "bugs"],
  },
  {
    prompt: "How does `useMemo` help in React?",
    options: [
      "Memoizes a function call result",
      "Prevents component re-renders",
      "Replaces useEffect",
      "Batches updates",
    ],
    answer: "Memoizes a function call result",
    explanation:
      "`useMemo` avoids recalculating expensive values unless dependencies change.",
    tags: ["react", "hooks", "performance"],
  },
  {
    prompt: "What is tree shaking in bundlers like Webpack?",
    options: [
      "Optimizing image sizes",
      "Removing unused code",
      "Combining CSS files",
      "Deferring JS execution",
    ],
    answer: "Removing unused code",
    explanation:
      "Tree shaking eliminates dead (unused) code during the build process for smaller bundles.",
    tags: ["webpack", "optimization"],
  },
  {
    prompt: "What is the role of the `key` prop in React lists?",
    options: [
      "To apply custom CSS",
      "To uniquely identify elements and help with reconciliation",
      "To trigger animations",
      "To prevent rendering",
    ],
    answer: "To uniquely identify elements and help with reconciliation",
    explanation:
      "React uses `key` to identify which items changed, added, or removed for efficient re-renders.",
    tags: ["react", "reconciliation"],
  },
  {
    prompt: "What does the `event loop` do in JavaScript?",
    options: [
      "Compiles code",
      "Manages memory",
      "Coordinates execution of tasks and microtasks",
      "Handles UI rendering",
    ],
    answer: "Coordinates execution of tasks and microtasks",
    explanation:
      "The event loop manages the call stack and queues to handle asynchronous events.",
    tags: ["javascript", "event loop", "async"],
  },
  {
    prompt: "What is the purpose of `Content Security Policy` (CSP)?",
    options: [
      "To secure database access",
      "To control content rendering order",
      "To prevent XSS and code injection attacks",
      "To enable serverless execution",
    ],
    answer: "To prevent XSS and code injection attacks",
    explanation:
      "CSP restricts resources a browser can load to protect against cross-site scripting.",
    tags: ["security", "web", "headers"],
  },
  {
    prompt: "Which HTTP status code indicates a precondition failure?",
    options: ["404", "401", "412", "409"],
    answer: "412",
    explanation:
      "HTTP 412 Precondition Failed indicates that server conditions specified in request headers failed.",
    tags: ["http", "status"],
  },
  {
    prompt: "What does the `SameSite` cookie attribute do?",
    options: [
      "Encrypts cookies",
      "Limits cookie access to subdomains",
      "Restricts cross-site request contexts",
      "Blocks third-party JavaScript",
    ],
    answer: "Restricts cross-site request contexts",
    explanation:
      "`SameSite` helps mitigate CSRF by controlling when cookies are sent with cross-site requests.",
    tags: ["cookies", "security", "web"],
  },
  {
    prompt: "What does `z-index` control in CSS?",
    options: [
      "Element opacity",
      "Vertical alignment",
      "Stacking order of overlapping elements",
      "Text wrapping behavior",
    ],
    answer: "Stacking order of overlapping elements",
    explanation:
      "`z-index` sets the stack level of elements—higher values appear on top when overlapping.",
    tags: ["css", "layout", "z-index"],
  },
  {
    prompt: "What is a `memory leak` in JavaScript?",
    options: [
      "When variables are overwritten",
      "When memory is freed too early",
      "When memory is not released due to lingering references",
      "When functions return undefined",
    ],
    answer: "When memory is not released due to lingering references",
    explanation:
      "Memory leaks occur when memory that is no longer needed is not released due to retained references.",
    tags: ["javascript", "memory", "performance"],
  },
  {
    prompt: "Which Git command combines multiple commits into one?",
    options: [
      "git merge",
      "git cherry-pick",
      "git rebase -i",
      "git pull --squash",
    ],
    answer: "git rebase -i",
    explanation:
      "`git rebase -i` lets you squash multiple commits into a single one for cleaner history.",
    tags: ["git", "version control", "rebase"],
  },
  {
    prompt: "What is the purpose of a `Service Worker`?",
    options: [
      "To render JSX",
      "To compile code",
      "To intercept network requests and cache responses",
      "To monitor system resources",
    ],
    answer: "To intercept network requests and cache responses",
    explanation:
      "Service Workers enable offline support and caching by intercepting fetch requests.",
    tags: ["pwa", "service worker", "offline"],
  },
  {
    prompt: "Which JavaScript feature allows canceling a fetch request?",
    options: [
      "AbortController",
      "CancelablePromise",
      "ClearTimeout",
      "SignalEvent",
    ],
    answer: "AbortController",
    explanation:
      "`AbortController` can signal fetch to abort using the `.abort()` method and `signal`.",
    tags: ["fetch", "javascript", "abort"],
  },
  {
    prompt:
      "What does the term 'idempotent' mean in the context of HTTP methods?",
    options: [
      "The method can only be called once",
      "The method has no side effects",
      "Multiple identical requests have the same effect as one",
      "The method returns a unique ID",
    ],
    answer: "Multiple identical requests have the same effect as one",
    explanation:
      "Idempotent HTTP methods (like GET, PUT, DELETE) produce the same result when repeated.",
    tags: ["http", "rest", "networking"],
  },
  {
    prompt: "Which of these is a valid use case for `useMemo` in React?",
    options: [
      "To fetch data from an API",
      "To memoize expensive calculations between renders",
      "To store global state",
      "To trigger re-renders",
    ],
    answer: "To memoize expensive calculations between renders",
    explanation:
      "`useMemo` is used to optimize performance by memoizing the result of expensive computations.",
    tags: ["react", "performance", "hooks"],
  },
  {
    prompt: "What is the main benefit of using `Type Guards` in TypeScript?",
    options: [
      "They prevent runtime errors",
      "They allow narrowing of types at compile time",
      "They reduce the size of your code",
      "They create default values",
    ],
    answer: "They allow narrowing of types at compile time",
    explanation:
      "Type Guards help TypeScript infer more specific types inside conditional blocks.",
    tags: ["typescript", "type guards", "narrowing"],
  },
  {
    prompt: "Which statement best describes a monorepo?",
    options: [
      "A repository that contains only one microservice",
      "A repo with a single package",
      "A repository that houses multiple projects or packages",
      "A repo that includes only frontend code",
    ],
    answer: "A repository that houses multiple projects or packages",
    explanation:
      "A monorepo is a codebase that includes multiple projects/packages managed together.",
    tags: ["architecture", "monorepo", "tooling"],
  },
  {
    prompt: "What is the main role of `Kubernetes`?",
    options: [
      "Database optimization",
      "Code linting and formatting",
      "Container orchestration and management",
      "Front-end rendering",
    ],
    answer: "Container orchestration and management",
    explanation:
      "Kubernetes manages containerized applications across a cluster of machines.",
    tags: ["devops", "kubernetes", "containers"],
  },
  {
    prompt: "What is the purpose of `Object.freeze()` in JavaScript?",
    options: [
      "To prevent property additions but allow changes",
      "To make an object immutable",
      "To delete all keys from the object",
      "To pause garbage collection",
    ],
    answer: "To make an object immutable",
    explanation:
      "`Object.freeze()` prevents new properties and changes to existing ones on the object.",
    tags: ["javascript", "object", "immutability"],
  },
  {
    prompt: "In GraphQL, what does a `resolver` do?",
    options: [
      "Defines database schema",
      "Resolves the field’s value during query execution",
      "Validates incoming requests",
      "Encodes response data",
    ],
    answer: "Resolves the field’s value during query execution",
    explanation:
      "A resolver is a function that returns the value for a specific field in a GraphQL query.",
    tags: ["graphql", "backend", "api"],
  },
  {
    prompt: "What is a 'race condition'?",
    options: [
      "A compiler error in asynchronous code",
      "Two or more operations that must complete in order",
      "A situation where outcome depends on unpredictable timing",
      "A performance optimization",
    ],
    answer: "A situation where outcome depends on unpredictable timing",
    explanation:
      "Race conditions occur when multiple operations access shared resources in parallel and timing affects behavior.",
    tags: ["concurrency", "async", "bug"],
  },
  {
    prompt: "Which algorithm is used in React's reconciliation process?",
    options: [
      "Quick Sort",
      "Diffing algorithm based on heuristics",
      "Minimax algorithm",
      "Trie-based search",
    ],
    answer: "Diffing algorithm based on heuristics",
    explanation:
      "React uses a heuristic diffing algorithm to efficiently update the DOM.",
    tags: ["react", "reconciliation", "virtual dom"],
  },
  {
    prompt: "What is the role of `tsconfig.json` in a TypeScript project?",
    options: [
      "Defines Webpack loaders",
      "Specifies code formatting rules",
      "Configures TypeScript compiler options",
      "Handles environment variables",
    ],
    answer: "Configures TypeScript compiler options",
    explanation:
      "`tsconfig.json` is used to define how the TypeScript compiler should behave for your project.",
    tags: ["typescript", "config", "tsconfig"],
  },
  {
    prompt:
      "What is the key benefit of using Server-Side Rendering (SSR) in web applications?",
    options: [
      "Faster deployments",
      "Improved SEO and faster initial load",
      "Reduced backend load",
      "Better WebSocket handling",
    ],
    answer: "Improved SEO and faster initial load",
    explanation:
      "SSR renders HTML on the server, improving SEO and providing content faster to the user.",
    tags: ["ssr", "next.js", "performance", "seo"],
  },
  {
    prompt:
      "In a RESTful API, which HTTP status code typically indicates a successful DELETE request?",
    options: ["200", "201", "204", "404"],
    answer: "204",
    explanation:
      "HTTP 204 No Content indicates that the server successfully processed the DELETE request, but no content is returned.",
    tags: ["rest", "http", "api"],
  },
  {
    prompt:
      "Which data structure is commonly used to implement LRU cache efficiently?",
    options: [
      "HashMap + Doubly Linked List",
      "Binary Tree",
      "Queue + Stack",
      "Trie + Stack",
    ],
    answer: "HashMap + Doubly Linked List",
    explanation:
      "This combo allows O(1) access and updates of cache entries based on usage order.",
    tags: ["algorithms", "data structures", "lru cache"],
  },
  {
    prompt: "What is a `service worker` in a PWA?",
    options: [
      "A UI component",
      "A background script that enables offline capabilities",
      "A CDN service",
      "An HTML worker element",
    ],
    answer: "A background script that enables offline capabilities",
    explanation:
      "Service workers run in the background, enabling offline access, caching, and background sync in PWAs.",
    tags: ["pwa", "service worker", "offline"],
  },
  {
    prompt:
      "In Docker, what is the difference between a volume and a bind mount?",
    options: [
      "Volumes are managed by Docker and persist data; bind mounts map to host paths",
      "Bind mounts are more secure",
      "Volumes cannot persist data",
      "Bind mounts only work on Linux",
    ],
    answer:
      "Volumes are managed by Docker and persist data; bind mounts map to host paths",
    explanation:
      "Volumes are Docker-managed and portable; bind mounts reference specific host paths directly.",
    tags: ["docker", "containers", "devops"],
  },
  {
    prompt: "What does the CAP theorem state?",
    options: [
      "Consistency, Availability, Partition Tolerance — choose any two",
      "Cache, API, Performance — choose all three",
      "Concurrency, Accuracy, Performance — tradeoffs apply",
      "CPU, Asynchronous, Parallelism — bound by IO",
    ],
    answer: "Consistency, Availability, Partition Tolerance — choose any two",
    explanation:
      "CAP theorem states that in distributed systems, you can only fully guarantee two of the three properties at the same time.",
    tags: ["distributed systems", "cap theorem", "architecture"],
  },
  {
    prompt:
      "Which algorithm is commonly used in detecting cycles in a directed graph?",
    options: [
      "Kruskal’s algorithm",
      "Floyd-Warshall",
      "Topological sort + DFS",
      "Binary search",
    ],
    answer: "Topological sort + DFS",
    explanation:
      "DFS combined with tracking recursion stack can detect cycles in directed graphs.",
    tags: ["algorithms", "graph", "dfs", "topological sort"],
  },
  {
    prompt: "In JavaScript, what is the difference between `==` and `===`?",
    options: [
      "`==` checks type and value; `===` checks only value",
      "`==` allows type coercion; `===` enforces strict type and value comparison",
      "`==` is deprecated",
      "They are exactly the same",
    ],
    answer:
      "`==` allows type coercion; `===` enforces strict type and value comparison",
    explanation:
      "`==` performs loose comparison, while `===` compares both value and type strictly.",
    tags: ["javascript", "comparison", "types"],
  },
  {
    prompt: "What is `memoization`?",
    options: [
      "A type of caching that stores the results of expensive function calls",
      "A type of asynchronous function",
      "A debugging tool in browsers",
      "A memory leak pattern",
    ],
    answer:
      "A type of caching that stores the results of expensive function calls",
    explanation:
      "Memoization caches function results to avoid redundant computations.",
    tags: ["javascript", "performance", "optimization", "functional"],
  },
  {
    prompt: "What does Kubernetes use to manage containers at scale?",
    options: ["Pods", "VMs", "Threads", "Events"],
    answer: "Pods",
    explanation:
      "Pods are the smallest deployable units in Kubernetes and can contain one or more containers.",
    tags: ["kubernetes", "devops", "containers", "orchestration"],
  },
  {
    prompt: "What is the difference between vertical and horizontal scaling?",
    options: [
      "Vertical adds more machines; horizontal adds more CPU",
      "Vertical scaling improves uptime; horizontal scaling adds RAM",
      "Vertical scaling adds more resources to a single node; horizontal scaling adds more nodes",
      "There is no difference",
    ],
    answer:
      "Vertical scaling adds more resources to a single node; horizontal scaling adds more nodes",
    explanation:
      "Vertical scaling enhances a single machine’s resources, while horizontal scaling distributes load across multiple machines.",
    tags: ["scalability", "architecture", "devops"],
  },
  {
    prompt:
      "Which data structure provides O(1) time for insertion, deletion, and access?",
    options: ["Array", "Linked List", "Hash Map", "Binary Search Tree"],
    answer: "Hash Map",
    explanation:
      "Hash Maps allow constant time operations for basic CRUD when implemented correctly.",
    tags: ["data structures", "hashmap", "performance"],
  },
  {
    prompt: "What is the role of an index in SQL databases?",
    options: [
      "To store redundant copies of data",
      "To provide faster data retrieval",
      "To encrypt queries",
      "To manage foreign key constraints",
    ],
    answer: "To provide faster data retrieval",
    explanation:
      "Indexes improve query performance by reducing the amount of data scanned.",
    tags: ["sql", "performance", "database"],
  },
  {
    prompt: "What is event sourcing in system design?",
    options: [
      "A way to manage frontend state",
      "Storing the entire state as snapshots",
      "Storing all changes as a sequence of events",
      "An HTTP request optimization technique",
    ],
    answer: "Storing all changes as a sequence of events",
    explanation:
      "Event sourcing captures all changes as events to allow re-deriving system state at any point.",
    tags: ["system design", "event sourcing", "architecture"],
  },
  {
    prompt: "What is the role of a load balancer?",
    options: [
      "To encrypt traffic between servers",
      "To cache backend data",
      "To distribute incoming requests across multiple servers",
      "To generate SSL certificates",
    ],
    answer: "To distribute incoming requests across multiple servers",
    explanation:
      "Load balancers improve availability and reliability by routing traffic across multiple instances.",
    tags: ["load balancing", "system design", "devops"],
  },
  {
    prompt: "What does the CAP theorem state?",
    options: [
      "You can have only consistency and performance",
      "A distributed system can guarantee at most two of: Consistency, Availability, Partition Tolerance",
      "All distributed systems are eventually consistent",
      "CAP stands for Concurrent Application Protocol",
    ],
    answer:
      "A distributed system can guarantee at most two of: Consistency, Availability, Partition Tolerance",
    explanation:
      "CAP theorem highlights the trade-offs in distributed systems between Consistency, Availability, and Partition Tolerance.",
    tags: ["distributed systems", "cap theorem", "system design"],
  },
  {
    prompt:
      "What is the advantage of using a message queue like RabbitMQ or Kafka?",
    options: [
      "They store relational data",
      "They provide real-time analytics",
      "They decouple producers and consumers, improving scalability",
      "They handle authentication",
    ],
    answer: "They decouple producers and consumers, improving scalability",
    explanation:
      "Message queues help scale and decouple system components by handling communication asynchronously.",
    tags: ["message queue", "kafka", "architecture"],
  },
  {
    prompt:
      "What is the primary benefit of using containerization (e.g., Docker)?",
    options: [
      "Faster database queries",
      "Built-in security for passwords",
      "Consistent environment across development and production",
      "Automatic code deployment",
    ],
    answer: "Consistent environment across development and production",
    explanation:
      "Containers ensure consistency in runtime environments, reducing 'it works on my machine' problems.",
    tags: ["docker", "devops", "containers"],
  },
  {
    prompt: "What does a reverse proxy server do?",
    options: [
      "It caches JavaScript files",
      "It routes requests from clients to backend services",
      "It encrypts frontend assets",
      "It provides access to client-side cookies",
    ],
    answer: "It routes requests from clients to backend services",
    explanation:
      "A reverse proxy forwards client requests to appropriate backend servers, often adding caching, SSL termination, or load balancing.",
    tags: ["nginx", "reverse proxy", "infrastructure"],
  },
  {
    prompt: "What is the benefit of using Infrastructure as Code (IaC)?",
    options: [
      "It eliminates the need for testing",
      "It allows writing infrastructure configs using TypeScript",
      "It automates and documents environment setup reproducibly",
      "It prevents bugs in backend logic",
    ],
    answer: "It automates and documents environment setup reproducibly",
    explanation:
      "IaC tools like Terraform or CDK allow teams to version, audit, and replicate infrastructure using code.",
    tags: ["iac", "terraform", "devops"],
  },
  {
    prompt: "What is the main goal of a load balancer in a distributed system?",
    options: [
      "Store cookies securely",
      "Distribute incoming traffic evenly across servers",
      "Encrypt all server responses",
      "Run background jobs",
    ],
    answer: "Distribute incoming traffic evenly across servers",
    explanation:
      "Load balancers help maintain high availability and responsiveness by distributing network traffic.",
    tags: ["load balancing", "distributed systems", "infrastructure"],
  },
  {
    prompt: "What does eventual consistency mean in distributed databases?",
    options: [
      "All writes are immediately visible to all nodes",
      "The database never becomes consistent",
      "Data will become consistent across nodes over time",
      "Only reads are allowed",
    ],
    answer: "Data will become consistent across nodes over time",
    explanation:
      "Eventual consistency allows temporary inconsistencies, ensuring availability and partition tolerance.",
    tags: ["consistency", "distributed systems", "databases"],
  },
  {
    prompt:
      "What’s a benefit of using GraphQL over REST for complex frontends?",
    options: [
      "It automatically caches responses",
      "It supports only POST methods",
      "Clients can fetch only the data they need",
      "It runs only on Node.js",
    ],
    answer: "Clients can fetch only the data they need",
    explanation:
      "GraphQL provides flexibility by allowing clients to request exactly the fields they need, reducing over-fetching.",
    tags: ["graphql", "api design", "frontend"],
  },
  {
    prompt: "Why might you choose Redis for caching?",
    options: [
      "It uses SQL syntax",
      "It supports file uploads",
      "It’s an in-memory data store with low latency",
      "It logs HTTP traffic",
    ],
    answer: "It’s an in-memory data store with low latency",
    explanation:
      "Redis provides extremely fast access to data, making it ideal for caching use cases.",
    tags: ["redis", "performance", "caching"],
  },
  {
    prompt: "What is the purpose of sharding in a database?",
    options: [
      "To encrypt data",
      "To replicate data for high availability",
      "To split data across multiple machines for scalability",
      "To remove unused columns",
    ],
    answer: "To split data across multiple machines for scalability",
    explanation:
      "Sharding improves database performance by partitioning data across multiple servers.",
    tags: ["sharding", "scaling", "databases"],
  },
  {
    prompt: "What is a common use of WebSockets?",
    options: [
      "Serving static files",
      "Real-time communication between client and server",
      "Encrypting HTTP requests",
      "Running serverless functions",
    ],
    answer: "Real-time communication between client and server",
    explanation:
      "WebSockets enable two-way communication between client and server, ideal for real-time applications like chat.",
    tags: ["websockets", "real-time", "communication"],
  },
  {
    prompt: "What is a memory leak in a Node.js application?",
    options: [
      "A crash caused by too many open ports",
      "A function that runs too slowly",
      "Unreleased memory that grows over time",
      "A leak of environment variables",
    ],
    answer: "Unreleased memory that grows over time",
    explanation:
      "Memory leaks occur when allocated memory is never freed, leading to performance degradation.",
    tags: ["node.js", "memory", "performance"],
  },
  {
    prompt: "Why use rate limiting on APIs?",
    options: [
      "To reduce backend code size",
      "To prevent abuse and ensure fair usage",
      "To make APIs faster",
      "To support GraphQL",
    ],
    answer: "To prevent abuse and ensure fair usage",
    explanation:
      "Rate limiting protects services from being overwhelmed by too many requests and ensures fair access.",
    tags: ["api", "rate limiting", "security"],
  },
  {
    prompt: "What is a monorepo?",
    options: [
      "A single npm package",
      "A database schema format",
      "A repository containing multiple related projects",
      "A read-only backup of a Git repo",
    ],
    answer: "A repository containing multiple related projects",
    explanation:
      "Monorepos allow teams to manage multiple packages or apps in one repository, enabling easier cross-project coordination.",
    tags: ["monorepo", "architecture", "tooling"],
  },
  {
    prompt: "Which protocol does HTTPS rely on for security?",
    options: ["FTP", "TLS", "SSH", "UDP"],
    answer: "TLS",
    explanation:
      "HTTPS uses TLS (Transport Layer Security) to encrypt data between client and server.",
    tags: ["https", "tls", "security"],
  },
  {
    prompt: "What is the role of the `kubernetes` scheduler?",
    options: [
      "Manage user permissions",
      "Assign pods to nodes",
      "Monitor CPU temperature",
      "Store logs",
    ],
    answer: "Assign pods to nodes",
    explanation:
      "The Kubernetes scheduler watches for newly created pods and assigns them to suitable nodes.",
    tags: ["kubernetes", "orchestration", "devops"],
  },
  {
    prompt: "What does the CAP theorem state?",
    options: [
      "Only NoSQL databases are consistent",
      "A distributed system can’t guarantee consistency, availability, and partition tolerance simultaneously",
      "APIs must be versioned to scale",
      "Caches replace databases in distributed systems",
    ],
    answer:
      "A distributed system can’t guarantee consistency, availability, and partition tolerance simultaneously",
    explanation:
      "CAP theorem highlights trade-offs in distributed systems among consistency, availability, and partition tolerance.",
    tags: ["distributed systems", "cap theorem", "scalability"],
  },
  {
    prompt: "Which command in Git squashes commits during a rebase?",
    options: [
      "`git squash`",
      "`git rebase -i`",
      "`git reset --hard`",
      "`git stash pop`",
    ],
    answer: "`git rebase -i`",
    explanation:
      "Interactive rebase (`git rebase -i`) allows squashing multiple commits into one.",
    tags: ["git", "version control", "rebase"],
  },
  {
    prompt: "What is the purpose of the `Content-Security-Policy` header?",
    options: [
      "To define user roles",
      "To improve SEO ranking",
      "To mitigate cross-site scripting (XSS) attacks",
      "To redirect traffic",
    ],
    answer: "To mitigate cross-site scripting (XSS) attacks",
    explanation:
      "The `Content-Security-Policy` header helps prevent XSS by controlling the sources of content the browser is allowed to load.",
    tags: ["security", "csp", "xss"],
  },
  {
    prompt: "What is an advantage of using Redis in web applications?",
    options: [
      "Type checking at compile time",
      "Built-in email support",
      "High-speed in-memory data storage",
      "Built-in Docker support",
    ],
    answer: "High-speed in-memory data storage",
    explanation:
      "Redis provides lightning-fast in-memory storage, making it ideal for caching and real-time data operations.",
    tags: ["redis", "performance", "caching"],
  },
  {
    prompt: "What does 'eventual consistency' mean in distributed systems?",
    options: [
      "Data is always consistent across all nodes",
      "Updates are never propagated",
      "Data will become consistent over time if no new updates are made",
      "Data consistency is not guaranteed at any time",
    ],
    answer: "Data will become consistent over time if no new updates are made",
    explanation:
      "Eventual consistency ensures that all nodes will converge to the same value over time, given no further writes.",
    tags: ["distributed systems", "consistency", "architecture"],
  },
  {
    prompt: "Which part of the Node.js architecture handles non-blocking I/O?",
    options: [
      "The V8 engine",
      "The event loop",
      "The thread pool",
      "The garbage collector",
    ],
    answer: "The event loop",
    explanation:
      "Node.js uses the event loop to handle asynchronous operations and non-blocking I/O efficiently.",
    tags: ["node.js", "event loop", "async"],
  },
  {
    prompt: "What is the main benefit of using GraphQL over REST?",
    options: [
      "Stronger security",
      "Faster client-side routing",
      "Clients can request exactly the data they need",
      "Better support for file uploads",
    ],
    answer: "Clients can request exactly the data they need",
    explanation:
      "GraphQL allows clients to fetch only the fields they need, avoiding over-fetching and under-fetching of data.",
    tags: ["graphql", "api", "optimization"],
  },
  {
    prompt: "What is a sidecar container in Kubernetes?",
    options: [
      "A container that stores logs externally",
      "A main application container",
      "A helper container that runs alongside the main container",
      "A special container for testing",
    ],
    answer: "A helper container that runs alongside the main container",
    explanation:
      "A sidecar container is often used to provide supporting features like logging or monitoring to the main container.",
    tags: ["kubernetes", "containers", "architecture"],
  },
  {
    prompt:
      "What is the primary role of Prometheus in a microservices architecture?",
    options: [
      "Authentication",
      "Service discovery",
      "Monitoring and alerting",
      "Database replication",
    ],
    answer: "Monitoring and alerting",
    explanation:
      "Prometheus is an open-source system used for monitoring and alerting in dynamic microservices environments.",
    tags: ["prometheus", "observability", "monitoring"],
  },
  {
    prompt: "What is a common use case for a reverse proxy like Nginx?",
    options: [
      "Client-side rendering",
      "Compiling TypeScript",
      "Serving as a load balancer or routing traffic",
      "Running cron jobs",
    ],
    answer: "Serving as a load balancer or routing traffic",
    explanation:
      "Reverse proxies like Nginx are often used to balance load, route traffic, and provide SSL termination.",
    tags: ["nginx", "reverse proxy", "infrastructure"],
  },
  {
    prompt: "In a Docker context, what does the `EXPOSE` instruction do?",
    options: [
      "Opens the port in the host machine firewall",
      "Maps the container port to host port",
      "Documents which port the container listens on",
      "Automatically starts the container",
    ],
    answer: "Documents which port the container listens on",
    explanation:
      "`EXPOSE` is a Dockerfile instruction that documents the intended port, but it does not publish it automatically.",
    tags: ["docker", "container", "networking"],
  },
  {
    prompt: "Which statement is true about immutable infrastructure?",
    options: [
      "Servers are updated in-place with patches",
      "Server images are recreated and replaced instead of updated",
      "Only databases are immutable",
      "It allows for constant mutation of application state",
    ],
    answer: "Server images are recreated and replaced instead of updated",
    explanation:
      "Immutable infrastructure promotes replacing servers with new versions rather than modifying existing ones.",
    tags: ["infrastructure", "devops", "immutable"],
  },
  {
    prompt: "What does ACID stand for in database systems?",
    options: [
      "Accuracy, Consistency, Integrity, Durability",
      "Atomicity, Consistency, Isolation, Durability",
      "Availability, Clarity, Indexing, Distribution",
      "Asynchronous, Concurrent, Isolation, Dataflow",
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation:
      "ACID defines properties that ensure reliable database transactions.",
    tags: ["database", "transactions", "acid"],
  },
  {
    prompt: "What is the role of a message broker like RabbitMQ or Kafka?",
    options: [
      "Encrypt traffic between services",
      "Manage relational databases",
      "Facilitate communication between decoupled services",
      "Store logs from microservices",
    ],
    answer: "Facilitate communication between decoupled services",
    explanation:
      "Message brokers allow asynchronous communication between services via queues or streams.",
    tags: ["messaging", "kafka", "microservices"],
  },
  {
    prompt: "What is the CAP theorem in distributed systems?",
    options: [
      "Consistency, Availability, Partition tolerance",
      "Concurrency, Accessibility, Performance",
      "Cache, API, Protocol",
      "Consistency, Accuracy, Persistence",
    ],
    answer: "Consistency, Availability, Partition tolerance",
    explanation:
      "The CAP theorem states that a distributed system can only guarantee two out of the three: consistency, availability, and partition tolerance.",
    tags: ["distributed systems", "cap", "architecture"],
  },
  {
    prompt: "What does the `__dirname` variable represent in Node.js?",
    options: [
      "The current file's name",
      "The name of the executing module",
      "The directory name of the current module",
      "The main entry point of the app",
    ],
    answer: "The directory name of the current module",
    explanation:
      "`__dirname` gives the absolute path of the directory containing the current file.",
    tags: ["node.js", "globals", "path"],
  },
  {
    prompt: "What is an example of eventual consistency in the real world?",
    options: [
      "A bank transaction that completes instantly",
      "DNS propagation after updating domain records",
      "A blocking API request",
      "Real-time video conferencing",
    ],
    answer: "DNS propagation after updating domain records",
    explanation:
      "DNS changes take time to propagate globally, reflecting eventual consistency.",
    tags: ["distributed systems", "dns", "consistency"],
  },
  {
    prompt: "What is the purpose of the `X-Frame-Options` HTTP header?",
    options: [
      "It controls file download behavior",
      "It prevents clickjacking by disallowing iframe embedding",
      "It forces HTTPS connections",
      "It sets cookie expiration",
    ],
    answer: "It prevents clickjacking by disallowing iframe embedding",
    explanation:
      "`X-Frame-Options` prevents your site from being embedded in an iframe to avoid UI redress attacks.",
    tags: ["security", "http", "headers"],
  },
  {
    prompt: "In Kubernetes, what is a Pod?",
    options: [
      "A virtual machine",
      "A container image",
      "A group of one or more containers with shared storage/network",
      "A CI/CD pipeline step",
    ],
    answer: "A group of one or more containers with shared storage/network",
    explanation:
      "A Pod is the smallest deployable unit in Kubernetes and can host one or more tightly coupled containers.",
    tags: ["kubernetes", "containers", "devops"],
  },
  {
    prompt: "What is the main benefit of using a reverse proxy like NGINX?",
    options: [
      "To speed up JavaScript execution",
      "To render HTML on the client side",
      "To handle incoming traffic, caching, and load balancing",
      "To store session cookies",
    ],
    answer: "To handle incoming traffic, caching, and load balancing",
    explanation:
      "A reverse proxy like NGINX helps manage traffic, balance load across servers, and provide caching and security features.",
    tags: ["nginx", "proxy", "devops"],
  },
  {
    prompt: "What does the `--save-dev` flag do in npm?",
    options: [
      "Saves a package as a runtime dependency",
      "Removes a package from dependencies",
      "Saves a package as a development dependency",
      "Runs a package without installing it",
    ],
    answer: "Saves a package as a development dependency",
    explanation:
      "`--save-dev` marks the package for development only (e.g., testing, building), not for production runtime.",
    tags: ["npm", "node.js", "package management"],
  },
  {
    prompt: "Which algorithm does Git use to detect file changes?",
    options: ["MD5 hash", "SHA-1 hash", "SHA-256 hash", "CRC32"],
    answer: "SHA-1 hash",
    explanation:
      "Git uses SHA-1 hashing to identify content and detect changes across versions.",
    tags: ["git", "hashing", "version control"],
  },
  {
    prompt:
      "What is a common use case for using Redis over a traditional SQL database?",
    options: [
      "Storing user profile data",
      "Complex joins across tables",
      "Temporary session storage",
      "Running full-text search queries",
    ],
    answer: "Temporary session storage",
    explanation:
      "Redis is an in-memory store ideal for caching, session storage, and fast lookups.",
    tags: ["redis", "caching", "session", "databases"],
  },
  {
    prompt: "What does the `SameSite=Strict` cookie attribute enforce?",
    options: [
      "Cookies are sent on cross-site requests",
      "Cookies are only sent on requests from the same site",
      "Cookies never expire",
      "Cookies are only stored in HTTPS",
    ],
    answer: "Cookies are only sent on requests from the same site",
    explanation:
      "`SameSite=Strict` ensures cookies are not sent with cross-site requests, enhancing CSRF protection.",
    tags: ["cookies", "security", "http"],
  },
  {
    prompt: "What is the difference between a process and a thread?",
    options: [
      "Processes share memory; threads do not",
      "Threads are slower than processes",
      "Threads share memory space, processes do not",
      "There is no difference",
    ],
    answer: "Threads share memory space, processes do not",
    explanation:
      "Processes are isolated with their own memory; threads run within a process and share its memory space.",
    tags: ["os", "threads", "processes"],
  },
  {
    prompt: "What is the key benefit of using Kubernetes over Docker Compose?",
    options: [
      "Faster builds",
      "Simpler syntax",
      "Scalability and orchestration of containers at scale",
      "Local development only",
    ],
    answer: "Scalability and orchestration of containers at scale",
    explanation:
      "Kubernetes enables automated deployment, scaling, and management of containerized applications.",
    tags: ["kubernetes", "docker", "devops"],
  },
  {
    prompt: "What does a 502 Bad Gateway error usually indicate?",
    options: [
      "The server is down",
      "The request timed out",
      "An upstream server returned an invalid response",
      "DNS resolution failed",
    ],
    answer: "An upstream server returned an invalid response",
    explanation:
      "A 502 error typically means the proxy or gateway server received an invalid response from an upstream server.",
    tags: ["http", "errors", "nginx"],
  },
  {
    prompt: "In a relational database, what is a foreign key used for?",
    options: [
      "To encrypt data",
      "To join unrelated tables",
      "To reference a primary key in another table",
      "To define table structure",
    ],
    answer: "To reference a primary key in another table",
    explanation:
      "A foreign key links one table to another by referencing the primary key of the related table.",
    tags: ["sql", "databases", "relational"],
  },
  {
    prompt: "What is the purpose of the `useMemo` hook in React?",
    options: [
      "To delay component rendering",
      "To memoize expensive computations",
      "To trigger side effects",
      "To manage refs",
    ],
    answer: "To memoize expensive computations",
    explanation:
      "`useMemo` caches the result of a computation between renders if its dependencies haven’t changed.",
    tags: ["react", "performance", "memoization"],
  },
  {
    prompt: "What does ACID stand for in the context of databases?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Availability, Concurrency, Integrity, Durability",
      "Atomicity, Concurrency, Integration, Durability",
      "Availability, Consistency, Isolation, Distribution",
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation:
      "ACID ensures reliable processing of database transactions: all-or-nothing (Atomicity), valid state (Consistency), independent transactions (Isolation), and permanent changes (Durability).",
    tags: ["databases", "transactions", "sql"],
  },
  {
    prompt: "What is the main purpose of GraphQL over REST?",
    options: [
      "To send data in XML",
      "To avoid writing backend code",
      "To fetch exactly the data needed in a single request",
      "To support WebSockets by default",
    ],
    answer: "To fetch exactly the data needed in a single request",
    explanation:
      "GraphQL lets clients specify exactly what data they need, reducing over-fetching and under-fetching problems.",
    tags: ["graphql", "api", "rest"],
  },
  {
    prompt: "What’s the role of `z-index` in CSS?",
    options: [
      "Controls element opacity",
      "Defines stacking order along the z-axis",
      "Applies a 3D transformation",
      "Sets element border",
    ],
    answer: "Defines stacking order along the z-axis",
    explanation:
      "`z-index` determines the front-to-back positioning of overlapping elements.",
    tags: ["css", "layout", "styling"],
  },
  {
    prompt: "What is tail recursion?",
    options: [
      "A function that never calls itself",
      "A recursive call where no operation follows the call",
      "A function that loops infinitely",
      "A recursive call that creates a new call stack",
    ],
    answer: "A recursive call where no operation follows the call",
    explanation:
      "Tail recursion allows optimization because the recursive call is the last operation in the function, enabling stack reuse.",
    tags: ["recursion", "javascript", "optimization"],
  },
  {
    prompt: "Which HTTP status code represents a client-side redirect?",
    options: ["200", "302", "404", "500"],
    answer: "302",
    explanation:
      "A 302 status code means the resource was found at another location temporarily (client-side redirect).",
    tags: ["http", "status codes", "web"],
  },
  {
    prompt: "What is the purpose of the `Set-Cookie` HTTP header?",
    options: [
      "To send JSON data",
      "To trigger browser cache",
      "To store stateful data on the client",
      "To set response status",
    ],
    answer: "To store stateful data on the client",
    explanation:
      "`Set-Cookie` is used to store session or user-specific data on the client via the browser.",
    tags: ["http", "cookies", "web"],
  },
  {
    prompt: "In Kubernetes, what does a 'Pod' represent?",
    options: [
      "A physical server",
      "The entire cluster",
      "One or more containers running together",
      "A virtual machine",
    ],
    answer: "One or more containers running together",
    explanation:
      "A Pod is the smallest deployable unit in Kubernetes, often wrapping one or more containers.",
    tags: ["kubernetes", "containers", "devops"],
  },
  {
    prompt: "What is the purpose of `Content-Security-Policy` header?",
    options: [
      "To hide cookies from JavaScript",
      "To limit what resources can be loaded",
      "To disable browser cache",
      "To improve SEO",
    ],
    answer: "To limit what resources can be loaded",
    explanation:
      "CSP helps prevent XSS and other attacks by restricting the sources of scripts, styles, and other resources.",
    tags: ["security", "csp", "http"],
  },
  {
    prompt: "What does the term 'cold start' refer to in serverless computing?",
    options: [
      "When a user first visits a web page",
      "When a database cache is empty",
      "Latency when initializing a serverless function",
      "First HTTP request after restart",
    ],
    answer: "Latency when initializing a serverless function",
    explanation:
      "A cold start refers to the delay in executing a serverless function when it hasn’t been called for a while.",
    tags: ["serverless", "cloud", "performance"],
  },
  {
    prompt: "What is the primary goal of database normalization?",
    options: [
      "Speed up queries",
      "Reduce data redundancy",
      "Add indexes",
      "Increase storage usage",
    ],
    answer: "Reduce data redundancy",
    explanation:
      "Normalization organizes data to minimize redundancy and improve integrity by dividing it into related tables.",
    tags: ["sql", "databases", "normalization"],
  },
  {
    prompt: "What does CAP theorem state?",
    options: [
      "A system cannot have Cache, Authentication, and Performance",
      "A distributed system can only guarantee two of Consistency, Availability, and Partition Tolerance",
      "A server must be Centrally Available and Performant",
      "Client and API must be Parallel",
    ],
    answer:
      "A distributed system can only guarantee two of Consistency, Availability, and Partition Tolerance",
    explanation:
      "CAP theorem asserts that in the presence of a network partition, a distributed system must choose between consistency and availability.",
    tags: ["system design", "distributed systems", "databases"],
  },
  {
    prompt: "What is the purpose of `event.stopPropagation()` in JavaScript?",
    options: [
      "Stops the event from being created",
      "Prevents the default browser behavior",
      "Prevents further propagation of the event in the bubbling/capturing phase",
      "Cancels all asynchronous code",
    ],
    answer:
      "Prevents further propagation of the event in the bubbling/capturing phase",
    explanation:
      "`event.stopPropagation()` prevents the event from reaching parent elements in the event chain.",
    tags: ["javascript", "events", "dom"],
  },
  {
    prompt: "What is the main benefit of HTTP/2 over HTTP/1.1?",
    options: [
      "JSON support",
      "Binary headers and multiplexing",
      "Lighter HTML payloads",
      "No headers required",
    ],
    answer: "Binary headers and multiplexing",
    explanation:
      "HTTP/2 allows multiple requests/responses over a single connection and compresses headers to improve performance.",
    tags: ["http", "networking", "web performance"],
  },
  {
    prompt: "What is a reverse proxy?",
    options: [
      "A tool to reverse database queries",
      "A proxy server that forwards requests to clients",
      "A server that receives client requests and forwards them to backend services",
      "A way to reverse DNS lookups",
    ],
    answer:
      "A server that receives client requests and forwards them to backend services",
    explanation:
      "A reverse proxy sits in front of the backend servers and routes incoming requests appropriately, often providing caching and load balancing.",
    tags: ["networking", "devops", "architecture"],
  },
  {
    prompt: "What does the term 'idempotent' mean in REST APIs?",
    options: [
      "Request can only be made once",
      "Multiple identical requests have the same effect as one",
      "All requests are cached",
      "Response always returns 200",
    ],
    answer: "Multiple identical requests have the same effect as one",
    explanation:
      "An idempotent operation produces the same result even if it is performed multiple times.",
    tags: ["rest", "http", "api"],
  },
  {
    prompt: "What is the key feature of WebSockets compared to HTTP?",
    options: [
      "Better SEO optimization",
      "Stateless connection",
      "Full-duplex communication over a single connection",
      "Connectionless protocol",
    ],
    answer: "Full-duplex communication over a single connection",
    explanation:
      "WebSockets enable real-time, two-way communication between client and server over a persistent connection.",
    tags: ["websockets", "real-time", "networking"],
  },
  {
    prompt: "What is a memory leak in JavaScript?",
    options: [
      "Failure to free up GPU resources",
      "Accumulation of unused references in memory",
      "Memory overflow caused by loops",
      "Recursive functions using too much stack",
    ],
    answer: "Accumulation of unused references in memory",
    explanation:
      "Memory leaks occur when objects are not garbage collected because they're still referenced.",
    tags: ["javascript", "memory", "performance"],
  },
  {
    prompt: "In Node.js, what is the event loop responsible for?",
    options: [
      "Scheduling database backups",
      "Rendering HTML",
      "Managing asynchronous operations",
      "Handling binary file uploads",
    ],
    answer: "Managing asynchronous operations",
    explanation:
      "The Node.js event loop handles non-blocking I/O operations and manages the call stack and callback queue.",
    tags: ["node.js", "event loop", "async"],
  },
  {
    prompt:
      "What does 'inversion of control' refer to in software architecture?",
    options: [
      "Giving control to low-level modules",
      "Framework controls the application flow instead of developer-written code",
      "Switching frontend and backend responsibilities",
      "Controlling recursion depth",
    ],
    answer:
      "Framework controls the application flow instead of developer-written code",
    explanation:
      "Inversion of Control is a design principle where custom-written portions of code receive the flow of control from a generic framework.",
    tags: ["architecture", "design patterns", "ioc"],
  },
  {
    prompt: "Which of the following is NOT a feature of GraphQL?",
    options: [
      "Strongly typed schema",
      "Over-fetching of data",
      "Single endpoint",
      "Client-controlled queries",
    ],
    answer: "Over-fetching of data",
    explanation:
      "Unlike REST, GraphQL avoids over-fetching by letting clients request only the data they need.",
    tags: ["graphql", "api", "data fetching"],
  },
  {
    prompt:
      "What is the primary benefit of using a message queue like RabbitMQ or Kafka?",
    options: [
      "Direct client-to-database access",
      "Real-time logging",
      "Decoupling microservices for better scalability",
      "Automatic frontend rendering",
    ],
    answer: "Decoupling microservices for better scalability",
    explanation:
      "Message queues help decouple producers and consumers, enabling scalable and resilient communication.",
    tags: ["architecture", "microservices", "message queue"],
  },
  {
    prompt:
      "Which algorithm is used to find the shortest path in a weighted graph?",
    options: [
      "Prim's Algorithm",
      "Kruskal's Algorithm",
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
    ],
    answer: "Dijkstra's Algorithm",
    explanation:
      "Dijkstra's algorithm efficiently finds the shortest path between nodes in a graph with non-negative weights.",
    tags: ["algorithms", "graphs", "pathfinding"],
  },
  {
    prompt: "What is the purpose of a reverse proxy server?",
    options: [
      "Speeding up frontend JavaScript execution",
      "Preventing SQL injection",
      "Routing requests and improving security/performance",
      "Compiling TypeScript to JavaScript",
    ],
    answer: "Routing requests and improving security/performance",
    explanation:
      "A reverse proxy like NGINX routes incoming requests to backend servers and provides load balancing and security.",
    tags: ["networking", "devops", "proxy"],
  },
  {
    prompt: "What are 'zombie processes' in Unix-like systems?",
    options: [
      "Processes that run in infinite loops",
      "Processes without executable code",
      "Terminated processes that remain in the process table",
      "Background daemons with no parent",
    ],
    answer: "Terminated processes that remain in the process table",
    explanation:
      "Zombie processes have completed execution but still occupy an entry in the process table until the parent collects their exit status.",
    tags: ["linux", "os", "process"],
  },
  {
    prompt: "What is tail call optimization (TCO)?",
    options: [
      "A way to call the last function in a file",
      "Reusing stack frames for recursive calls",
      "Compiling tail-end functions first",
      "Removing functions from memory after call",
    ],
    answer: "Reusing stack frames for recursive calls",
    explanation:
      "TCO allows recursive functions to reuse stack frames, preventing stack overflow in languages that support it.",
    tags: ["javascript", "optimization", "recursion"],
  },
  {
    prompt: "In JavaScript, what is the purpose of the `Symbol` type?",
    options: [
      "To create private variables",
      "To define constants",
      "To create unique identifiers",
      "To store metadata in classes",
    ],
    answer: "To create unique identifiers",
    explanation:
      "`Symbol` is a primitive data type introduced in ES6 to create unique property keys, preventing accidental overwrites.",
    tags: ["javascript", "es6", "types"],
  },
  {
    prompt:
      "What is the difference between `setImmediate()` and `setTimeout(fn, 0)` in Node.js?",
    options: [
      "`setImmediate` executes sooner",
      "They are exactly the same",
      "`setTimeout` executes before I/O callbacks",
      "`setImmediate` executes after I/O events",
    ],
    answer: "`setImmediate` executes after I/O events",
    explanation:
      "`setImmediate` is designed to execute callbacks after I/O events, whereas `setTimeout(fn, 0)` schedules in the timer phase.",
    tags: ["node.js", "event loop", "timing"],
  },
  {
    prompt:
      "Which data structure is most commonly used to implement LRU Cache?",
    options: [
      "Array and Object",
      "Set and Array",
      "Map and Doubly Linked List",
      "Stack and Queue",
    ],
    answer: "Map and Doubly Linked List",
    explanation:
      "An LRU Cache uses a Map for O(1) lookups and a Doubly Linked List for O(1) insert/delete operations at both ends.",
    tags: ["data structures", "lru", "cache"],
  },
  {
    prompt: "What does the `volatile` keyword do in Java or C++?",
    options: [
      "Prevents object mutation",
      "Locks the thread",
      "Instructs the compiler not to optimize access to a variable",
      "Declares a variable as global",
    ],
    answer: "Instructs the compiler not to optimize access to a variable",
    explanation:
      "`volatile` tells the compiler that a variable's value may change at any time, so it shouldn't cache it in registers.",
    tags: ["concurrency", "c++", "java", "memory"],
  },
  {
    prompt: "What is an example of a side effect in functional programming?",
    options: [
      "Calling a pure function",
      "Returning a value",
      "Modifying a global variable",
      "Passing parameters to a function",
    ],
    answer: "Modifying a global variable",
    explanation:
      "Side effects are any state changes observable outside the function, such as logging, DB writes, or mutating globals.",
    tags: ["functional programming", "side effects", "purity"],
  },
  {
    prompt:
      "What is the time complexity of accessing an element in a JavaScript Map?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
    explanation:
      "JavaScript's `Map` provides average-case constant time complexity (O(1)) for get/set operations.",
    tags: ["javascript", "map", "complexity"],
  },
  {
    prompt: "How does Kubernetes ensure high availability of applications?",
    options: [
      "By replicating pods and using health checks",
      "By storing all data in a single pod",
      "By requiring manual restarts",
      "By limiting container counts",
    ],
    answer: "By replicating pods and using health checks",
    explanation:
      "Kubernetes uses replication controllers and probes to ensure that unhealthy pods are restarted or rescheduled.",
    tags: ["kubernetes", "devops", "high availability"],
  },
  {
    prompt: "What is the role of CAP theorem in distributed systems?",
    options: [
      "It optimizes database indexing",
      "It describes the trade-off between Consistency, Availability, and Partition Tolerance",
      "It defines the database schema",
      "It increases network latency",
    ],
    answer:
      "It describes the trade-off between Consistency, Availability, and Partition Tolerance",
    explanation:
      "CAP theorem states that in distributed systems, only two of the three properties (Consistency, Availability, Partition Tolerance) can be guaranteed simultaneously.",
    tags: ["distributed systems", "cap theorem", "architecture"],
  },
  {
    prompt:
      "What’s the difference between pessimistic and optimistic concurrency control?",
    options: [
      "Pessimistic locks always fail",
      "Optimistic uses versioning, pessimistic uses locks",
      "Optimistic locks the DB",
      "Pessimistic doesn’t require rollback",
    ],
    answer: "Optimistic uses versioning, pessimistic uses locks",
    explanation:
      "Optimistic concurrency control assumes low conflict and validates before commit, while pessimistic locking prevents conflict by locking data upfront.",
    tags: ["concurrency", "databases", "transactions"],
  },
  {
    prompt: "In GraphQL, what is a resolver?",
    options: [
      "A method to resolve promises",
      "A way to optimize SQL queries",
      "A function that returns the value for a field",
      "A mutation for updating data",
    ],
    answer: "A function that returns the value for a field",
    explanation:
      "Resolvers are functions that resolve a GraphQL field's value during execution, based on query and schema.",
    tags: ["graphql", "backend", "api"],
  },
  {
    prompt:
      "What is the main benefit of using a message queue in microservices?",
    options: [
      "Reduces code duplication",
      "Ensures synchronous data transfer",
      "Decouples services and improves scalability",
      "Increases database normalization",
    ],
    answer: "Decouples services and improves scalability",
    explanation:
      "Message queues like RabbitMQ or Kafka help decouple services, enabling asynchronous communication and better fault tolerance.",
    tags: ["microservices", "architecture", "message queue"],
  },
  {
    prompt: "What is the difference between vertical and horizontal scaling?",
    options: [
      "Vertical scaling adds more servers, horizontal scaling adds more CPU",
      "Horizontal scaling adds machines, vertical scaling adds resources to existing ones",
      "They are synonyms",
      "Vertical scaling adds containers",
    ],
    answer:
      "Horizontal scaling adds machines, vertical scaling adds resources to existing ones",
    explanation:
      "Vertical scaling increases resources of a single machine; horizontal scaling adds more machines to handle load.",
    tags: ["scalability", "architecture", "cloud"],
  },
  {
    prompt: "Which technique helps reduce bundle size in modern web apps?",
    options: [
      "Code splitting",
      "DNS prefetching",
      "Polyfills",
      "Using cookies",
    ],
    answer: "Code splitting",
    explanation:
      "Code splitting enables loading parts of the app on demand, reducing initial bundle size and improving load time.",
    tags: ["performance", "webpack", "optimization"],
  },
  {
    prompt: "What does 'eventual consistency' mean in distributed databases?",
    options: [
      "All writes are instantly visible",
      "Reads never return stale data",
      "Data will become consistent over time if no new updates are made",
      "All nodes update at once",
    ],
    answer: "Data will become consistent over time if no new updates are made",
    explanation:
      "Eventual consistency allows temporary data divergence across nodes, which resolves over time.",
    tags: ["distributed systems", "databases", "consistency"],
  },
  {
    prompt: "What is a sidecar pattern in microservices?",
    options: [
      "A backup service for the database",
      "An external log collector",
      "A helper process attached to a service for extended capabilities",
      "A database sharding strategy",
    ],
    answer: "A helper process attached to a service for extended capabilities",
    explanation:
      "The sidecar pattern runs auxiliary services (e.g., logging, proxy) alongside the main service in the same pod/container environment.",
    tags: ["microservices", "patterns", "architecture"],
  },
  {
    prompt: "What is a 'cold start' in serverless computing?",
    options: [
      "When a user restarts the server manually",
      "Initial delay when a function is invoked after being idle",
      "Deploying the application for the first time",
      "When a server is under high CPU load",
    ],
    answer: "Initial delay when a function is invoked after being idle",
    explanation:
      "In serverless architectures, a cold start refers to the latency introduced when a function container is initialized after a period of inactivity.",
    tags: ["serverless", "performance", "aws lambda"],
  },
  {
    prompt: "What is the purpose of a reverse proxy?",
    options: [
      "To cache JavaScript files",
      "To prevent DDoS attacks only",
      "To forward client requests to backend servers",
      "To manage user sessions",
    ],
    answer: "To forward client requests to backend servers",
    explanation:
      "A reverse proxy like Nginx or HAProxy routes client requests to the appropriate backend services and can also handle load balancing and caching.",
    tags: ["networking", "reverse proxy", "architecture"],
  },
  {
    prompt: "Which of the following is true about CAP theorem?",
    options: [
      "A system can always guarantee consistency, availability, and partition tolerance",
      "It’s only relevant for SQL databases",
      "You can only choose two of consistency, availability, or partition tolerance",
      "It applies only to frontend development",
    ],
    answer:
      "You can only choose two of consistency, availability, or partition tolerance",
    explanation:
      "CAP theorem states that in distributed systems, it's impossible to simultaneously guarantee all three: consistency, availability, and partition tolerance.",
    tags: ["cap theorem", "distributed systems", "theory"],
  },
  {
    prompt: "What is the advantage of using a CDN?",
    options: [
      "Improved backend CPU usage",
      "Better logging capabilities",
      "Reduced latency by serving content closer to users",
      "More secure database connections",
    ],
    answer: "Reduced latency by serving content closer to users",
    explanation:
      "CDNs cache content on edge servers, reducing latency and load times by serving users from geographically closer locations.",
    tags: ["cdn", "performance", "networking"],
  },
  {
    prompt: "What is a monorepo?",
    options: [
      "A repository with only one file",
      "A repository with all services and packages managed together",
      "A single repository for only frontend code",
      "A microservices container",
    ],
    answer: "A repository with all services and packages managed together",
    explanation:
      "A monorepo consolidates multiple projects in one repository, allowing unified versioning and shared tooling.",
    tags: ["monorepo", "git", "architecture"],
  },
  {
    prompt: "What is the purpose of Kubernetes liveness and readiness probes?",
    options: [
      "To handle database migrations",
      "To monitor memory usage only",
      "To determine container health and availability",
      "To restart the entire cluster when needed",
    ],
    answer: "To determine container health and availability",
    explanation:
      "Liveness and readiness probes in Kubernetes ensure that a container is running correctly and ready to receive traffic.",
    tags: ["kubernetes", "devops", "containers"],
  },
  {
    prompt: "What does the term 'immutable infrastructure' refer to?",
    options: [
      "Servers that cannot be accessed remotely",
      "Configuration files that never change",
      "Infrastructure components that are replaced instead of modified",
      "A deployment tool for container orchestration",
    ],
    answer: "Infrastructure components that are replaced instead of modified",
    explanation:
      "Immutable infrastructure implies that updates involve replacing entire components (like servers or containers) instead of altering them in place.",
    tags: ["infrastructure", "devops", "immutable"],
  },
  {
    prompt: "Which HTTP header is commonly used to prevent XSS?",
    options: [
      "X-Frame-Options",
      "Strict-Transport-Security",
      "Content-Security-Policy",
      "ETag",
    ],
    answer: "Content-Security-Policy",
    explanation:
      "CSP helps prevent XSS by specifying which sources the browser can load content from.",
    tags: ["security", "xss", "http"],
  },
  {
    prompt: "What is the role of an API gateway in microservices?",
    options: [
      "To provide database backups",
      "To serve static files",
      "To handle cross-cutting concerns like authentication and rate limiting",
      "To auto-scale containers",
    ],
    answer:
      "To handle cross-cutting concerns like authentication and rate limiting",
    explanation:
      "API gateways centralize functionality like authentication, routing, and rate limiting in microservice architectures.",
    tags: ["api gateway", "microservices", "architecture"],
  },
  {
    prompt:
      "What is the difference between hard and soft deletes in databases?",
    options: [
      "Hard deletes store logs, soft deletes don't",
      "Soft deletes remove data permanently, hard deletes do not",
      "Hard deletes remove data permanently; soft deletes mark it as inactive",
      "They are just two names for the same operation",
    ],
    answer:
      "Hard deletes remove data permanently; soft deletes mark it as inactive",
    explanation:
      "Soft deletes retain the data (e.g., with a `deleted_at` timestamp) while hard deletes remove it from the database entirely.",
    tags: ["databases", "sql", "crud"],
  },
  {
    prompt: "What is eventual consistency in distributed systems?",
    options: [
      "All nodes always have the same data",
      "Data is never replicated between nodes",
      "All updates to a data item will propagate eventually, leading to consistency",
      "Every write is immediately visible to all clients",
    ],
    answer:
      "All updates to a data item will propagate eventually, leading to consistency",
    explanation:
      "Eventual consistency means that the system will become consistent over time, but not necessarily immediately after an update.",
    tags: ["distributed systems", "consistency", "theory"],
  },
  {
    prompt: "In Node.js, what does the `cluster` module enable?",
    options: [
      "Client-side data persistence",
      "Running multiple Node.js processes to utilize multi-core systems",
      "Bundling JavaScript modules",
      "Improving WebSocket security",
    ],
    answer: "Running multiple Node.js processes to utilize multi-core systems",
    explanation:
      "The `cluster` module allows spawning child processes that share the same server port to fully utilize CPU cores.",
    tags: ["node.js", "performance", "backend"],
  },
  {
    prompt:
      "What is a memory leak in the context of long-running Node.js servers?",
    options: [
      "When you run out of RAM during a computation",
      "When garbage collector stops working",
      "When objects are no longer used but not garbage collected due to lingering references",
      "When memory is overwritten by another process",
    ],
    answer:
      "When objects are no longer used but not garbage collected due to lingering references",
    explanation:
      "Memory leaks occur when objects remain in memory because they're still referenced, even though they're no longer needed.",
    tags: ["node.js", "memory", "performance"],
  },
  {
    prompt: "What is the purpose of the `Content-Type` header in HTTP?",
    options: [
      "To prevent DDoS attacks",
      "To define the size of the response",
      "To specify the MIME type of the response content",
      "To set HTTP status codes",
    ],
    answer: "To specify the MIME type of the response content",
    explanation:
      "The `Content-Type` header tells the client how to interpret the data it receives (e.g., JSON, HTML, etc.).",
    tags: ["http", "headers", "networking"],
  },
  {
    prompt: "What is a shadow DOM used for in web components?",
    options: [
      "To store encrypted state",
      "To isolate styles and markup from the main DOM tree",
      "To render virtual components in React",
      "To replace server-rendered HTML",
    ],
    answer: "To isolate styles and markup from the main DOM tree",
    explanation:
      "Shadow DOM provides encapsulation for custom elements, allowing styles and structure to remain scoped.",
    tags: ["web components", "shadow dom", "dom"],
  },
  {
    prompt: "What is the purpose of the `SameSite` cookie attribute?",
    options: [
      "To define cookie expiration time",
      "To allow only HTTPS cookies",
      "To prevent CSRF by controlling cookie sending behavior across sites",
      "To encrypt cookie values",
    ],
    answer:
      "To prevent CSRF by controlling cookie sending behavior across sites",
    explanation:
      "`SameSite` helps protect against Cross-Site Request Forgery by limiting when cookies are sent with cross-origin requests.",
    tags: ["cookies", "security", "csrf"],
  },
  {
    prompt: "What is a race condition in asynchronous code?",
    options: [
      "When two functions execute at the same time correctly",
      "When multiple threads compete for a CPU core",
      "When the outcome of operations depends on the order/timing of execution",
      "When JavaScript blocks I/O operations",
    ],
    answer:
      "When the outcome of operations depends on the order/timing of execution",
    explanation:
      "A race condition happens when multiple async operations access shared resources and timing affects correctness.",
    tags: ["async", "concurrency", "bugs"],
  },
  {
    prompt: "Which of the following best describes tail call optimization?",
    options: [
      "Reusing function parameters across calls",
      "Eliminating function stack frames for tail-end recursion",
      "Compiling to machine code for performance",
      "Removing unused variables at compile time",
    ],
    answer: "Eliminating function stack frames for tail-end recursion",
    explanation:
      "Tail call optimization allows recursive functions to reuse the current stack frame, avoiding stack overflow.",
    tags: ["javascript", "performance", "recursion"],
  },
  {
    prompt: "Why would you use `Object.freeze()` in JavaScript?",
    options: [
      "To make an object immutable",
      "To optimize memory allocation",
      "To serialize an object",
      "To increase rendering speed",
    ],
    answer: "To make an object immutable",
    explanation:
      "`Object.freeze()` prevents new properties from being added and existing ones from being modified or deleted.",
    tags: ["javascript", "immutability", "objects"],
  },
  {
    prompt: "What is the primary role of a reverse proxy server like NGINX?",
    options: [
      "To serve database requests directly",
      "To manage DNS resolution",
      "To forward client requests to backend servers and perform load balancing",
      "To render HTML pages on the server",
    ],
    answer:
      "To forward client requests to backend servers and perform load balancing",
    explanation:
      "Reverse proxies distribute traffic, add SSL termination, and shield backend servers from direct exposure.",
    tags: ["networking", "nginx", "architecture"],
  },
  {
    prompt: "What does CAP theorem state in distributed systems?",
    options: [
      "You can only have performance, availability, and scalability",
      "A distributed system can simultaneously guarantee consistency, availability, and partition tolerance",
      "Latency, throughput, and fault tolerance can't coexist",
      "Only databases with ACID can be distributed",
    ],
    answer:
      "A distributed system can simultaneously guarantee consistency, availability, and partition tolerance",
    explanation:
      "CAP theorem says you can only guarantee 2 out of 3: Consistency, Availability, and Partition Tolerance at the same time.",
    tags: ["distributed systems", "cap theorem", "consistency"],
  },
  {
    prompt: "What is the purpose of the `preload` link relation in HTML?",
    options: [
      "To load JavaScript files before HTML parsing",
      "To defer CSS rendering",
      "To fetch resources early for better performance",
      "To block rendering until the asset is loaded",
    ],
    answer: "To fetch resources early for better performance",
    explanation:
      "`<link rel='preload'>` hints the browser to fetch critical resources (like fonts or scripts) earlier in the page load.",
    tags: ["html", "performance", "optimization"],
  },
  {
    prompt: "How does HTTP/2 improve upon HTTP/1.1?",
    options: [
      "By encrypting all requests by default",
      "By using a new request format",
      "By allowing multiple streams over a single connection (multiplexing)",
      "By reducing bandwidth by 90%",
    ],
    answer:
      "By allowing multiple streams over a single connection (multiplexing)",
    explanation:
      "HTTP/2 enables multiplexing—multiple requests/responses over one TCP connection—reducing latency.",
    tags: ["http", "http2", "networking"],
  },
  {
    prompt: "What is the role of `key` in React list rendering?",
    options: [
      "To secure list items",
      "To improve sorting algorithms",
      "To uniquely identify elements and help React optimize re-renders",
      "To bind state between list elements",
    ],
    answer: "To uniquely identify elements and help React optimize re-renders",
    explanation:
      "Keys help React determine which items changed, were added, or removed to efficiently update the UI.",
    tags: ["react", "performance", "reconciliation"],
  },
  {
    prompt:
      "What is the primary advantage of using Server Components in React?",
    options: [
      "They allow client-side routing",
      "They reduce bundle size by shifting logic to the server",
      "They enable live reloading",
      "They force full page reloads",
    ],
    answer: "They reduce bundle size by shifting logic to the server",
    explanation:
      "React Server Components offload rendering logic to the server, reducing client JS and improving performance.",
    tags: ["react", "server components", "next.js"],
  },
  {
    prompt:
      "What is the difference between `process.nextTick()` and `setImmediate()` in Node.js?",
    options: [
      "`process.nextTick()` runs after the current operation, before any I/O events; `setImmediate()` runs on the next event loop cycle",
      "They are identical and interchangeable",
      "`setImmediate()` is deprecated",
      "`process.nextTick()` is only available in browsers",
    ],
    answer:
      "`process.nextTick()` runs after the current operation, before any I/O events; `setImmediate()` runs on the next event loop cycle",
    explanation:
      "`process.nextTick()` queues a callback before any I/O, while `setImmediate()` queues for the next cycle of the event loop.",
    tags: ["node.js", "event loop", "async"],
  },
  {
    prompt:
      "What is the primary purpose of using a message queue like RabbitMQ or Kafka?",
    options: [
      "To store static assets",
      "To allow asynchronous communication between services",
      "To handle HTTP requests directly",
      "To deploy serverless functions",
    ],
    answer: "To allow asynchronous communication between services",
    explanation:
      "Message queues decouple services and allow them to communicate asynchronously via message passing.",
    tags: ["architecture", "message queue", "async"],
  },
  {
    prompt: "What does `Strict-Transport-Security` (HSTS) header do?",
    options: [
      "It forces the browser to always use HTTPS when communicating with the server",
      "It restricts JavaScript execution",
      "It prevents iframe embedding",
      "It limits request payload size",
    ],
    answer:
      "It forces the browser to always use HTTPS when communicating with the server",
    explanation:
      "HSTS instructs browsers to only use secure connections, mitigating protocol downgrade attacks.",
    tags: ["security", "headers", "https"],
  },
  {
    prompt: "What is the purpose of `debounce()` in performance optimization?",
    options: [
      "To repeat a function many times",
      "To delay execution until input has stopped firing for a duration",
      "To run multiple requests in parallel",
      "To cancel a fetch request",
    ],
    answer: "To delay execution until input has stopped firing for a duration",
    explanation:
      "`debounce()` limits the rate a function is triggered, useful for input fields, resize events, etc.",
    tags: ["performance", "debounce", "throttle"],
  },
  {
    prompt:
      "What is the difference between Monolithic and Microservice architecture?",
    options: [
      "Monolithic apps use NoSQL, Microservices use SQL",
      "Microservices combine all functionality into one codebase",
      "Monolithic apps are composed of tightly coupled components; microservices are loosely coupled and independently deployable",
      "They are the same but for frontend only",
    ],
    answer:
      "Monolithic apps are composed of tightly coupled components; microservices are loosely coupled and independently deployable",
    explanation:
      "Microservices improve scalability and fault isolation, while monoliths have simpler initial deployment.",
    tags: ["architecture", "microservices", "monolith"],
  },
  {
    prompt: "What is the role of the CAP theorem in distributed systems?",
    options: [
      "It ensures encryption of data",
      "It defines the trade-offs between Consistency, Availability, and Partition tolerance",
      "It prevents data loss during scaling",
      "It describes CPU scheduling algorithms",
    ],
    answer:
      "It defines the trade-offs between Consistency, Availability, and Partition tolerance",
    explanation:
      "CAP theorem states that in the presence of a network partition, a system can either ensure consistency or availability, but not both.",
    tags: ["distributed systems", "cap theorem", "architecture"],
  },
  {
    prompt:
      "What does the `--force` flag do when used with Git commands like `git push --force`?",
    options: [
      "It encrypts the repository",
      "It pushes commits to all branches",
      "It overwrites remote history with local changes, possibly rewriting commit history",
      "It pulls changes from remote without merge",
    ],
    answer:
      "It overwrites remote history with local changes, possibly rewriting commit history",
    explanation:
      "`--force` can overwrite commit history on the remote branch, and should be used cautiously to avoid losing others’ changes.",
    tags: ["git", "version control", "devops"],
  },
  {
    prompt:
      "What is the difference between symmetric and asymmetric encryption?",
    options: [
      "Symmetric uses two keys, asymmetric uses one",
      "Symmetric is slower than asymmetric",
      "Symmetric uses the same key to encrypt and decrypt; asymmetric uses a public and a private key",
      "Asymmetric is only used for images",
    ],
    answer:
      "Symmetric uses the same key to encrypt and decrypt; asymmetric uses a public and a private key",
    explanation:
      "Symmetric encryption is faster but less secure for key distribution. Asymmetric uses a key pair for secure communication.",
    tags: ["security", "encryption", "cryptography"],
  },
  {
    prompt: "What is the benefit of lazy loading in web performance?",
    options: [
      "It preloads all resources at once",
      "It delays loading non-critical resources until needed",
      "It speeds up the CPU",
      "It disables caching",
    ],
    answer: "It delays loading non-critical resources until needed",
    explanation:
      "Lazy loading improves initial load time and reduces memory usage by deferring the loading of resources until necessary.",
    tags: ["performance", "lazy loading", "web"],
  },
  {
    prompt: "Why would you use `Object.freeze()` in JavaScript?",
    options: [
      "To improve function performance",
      "To prevent modifications to an object",
      "To serialize an object",
      "To enable garbage collection",
    ],
    answer: "To prevent modifications to an object",
    explanation:
      "`Object.freeze()` makes an object immutable by disallowing additions, deletions, or modifications to its properties.",
    tags: ["javascript", "immutability", "objects"],
  },
  {
    prompt: "What does 'idempotency' mean in the context of HTTP methods?",
    options: [
      "The operation can be performed only once",
      "Multiple identical requests have the same effect as a single one",
      "It encrypts the request data",
      "It improves request speed",
    ],
    answer: "Multiple identical requests have the same effect as a single one",
    explanation:
      "Idempotent HTTP methods like GET, PUT, and DELETE produce the same result when called multiple times with the same parameters.",
    tags: ["http", "rest", "idempotency"],
  },
  {
    prompt: "In Kubernetes, what is a pod?",
    options: [
      "A lightweight virtual machine",
      "A logical host for containers sharing the same network and storage",
      "A replica of a Kubernetes cluster",
      "A standalone script for configuration",
    ],
    answer:
      "A logical host for containers sharing the same network and storage",
    explanation:
      "A pod is the smallest deployable unit in Kubernetes, often running one or more tightly coupled containers.",
    tags: ["kubernetes", "containers", "devops"],
  },
  {
    prompt:
      "What is the main benefit of using WebSockets over HTTP for real-time apps?",
    options: [
      "WebSockets are more secure",
      "WebSockets automatically scale",
      "WebSockets provide full-duplex communication",
      "WebSockets cache data better",
    ],
    answer: "WebSockets provide full-duplex communication",
    explanation:
      "WebSockets allow for bidirectional communication over a single connection, ideal for real-time applications.",
    tags: ["websockets", "realtime", "network"],
  },
  {
    prompt: "What is the primary purpose of an API gateway?",
    options: [
      "To compress HTTP payloads",
      "To manage client requests, routing, and authentication in microservices",
      "To serve static files to clients",
      "To store and retrieve database records",
    ],
    answer:
      "To manage client requests, routing, and authentication in microservices",
    explanation:
      "An API gateway acts as a single entry point, handling authentication, request routing, and protocol translation.",
    tags: ["api gateway", "architecture", "microservices"],
  },
  {
    prompt: "What is a memory leak?",
    options: [
      "When too many files are opened at once",
      "When memory that is no longer needed is not released",
      "When a variable is declared but never used",
      "When garbage collection deletes global variables",
    ],
    answer: "When memory that is no longer needed is not released",
    explanation:
      "A memory leak happens when a program retains memory it no longer needs, causing performance degradation over time.",
    tags: ["javascript", "performance", "memory"],
  },
  {
    prompt: "What is tail-call optimization in JavaScript?",
    options: [
      "Reusing variables to save memory",
      "Eliminating deep recursion by reusing stack frames",
      "Optimizing loops using tail pointers",
      "Caching function outputs for speed",
    ],
    answer: "Eliminating deep recursion by reusing stack frames",
    explanation:
      "Tail-call optimization reuses the current function’s stack frame for a call made at the tail position, preventing stack overflow.",
    tags: ["javascript", "recursion", "performance"],
  },
  {
    prompt:
      "Which data structure is typically used to implement a priority queue?",
    options: ["Hash table", "Linked list", "Binary heap", "Queue"],
    answer: "Binary heap",
    explanation:
      "A binary heap allows efficient insertion and retrieval of the highest (or lowest) priority element.",
    tags: ["data structures", "algorithms", "heap"],
  },
  {
    prompt: "What is the CAP theorem in distributed systems?",
    options: [
      "Consistency, Availability, Partition Tolerance",
      "Concurrency, Accuracy, Performance",
      "Capacity, Allocation, Processing",
      "Control, Authentication, Protection",
    ],
    answer: "Consistency, Availability, Partition Tolerance",
    explanation:
      "The CAP theorem states that a distributed system can only guarantee two of the three: Consistency, Availability, and Partition Tolerance.",
    tags: ["distributed systems", "architecture", "cap"],
  },
  {
    prompt:
      "In TypeScript, what does the `infer` keyword do in conditional types?",
    options: [
      "It adds type safety to any",
      "It infers the return type of a function",
      "It extracts and names a type from a generic",
      "It validates runtime values",
    ],
    answer: "It extracts and names a type from a generic",
    explanation:
      "The `infer` keyword allows you to capture and use a type within a conditional type expression.",
    tags: ["typescript", "types", "advanced"],
  },
  {
    prompt: "What is the role of a service mesh in microservices architecture?",
    options: [
      "Scaling services automatically",
      "Handling observability and network communication between services",
      "Deploying containers across clusters",
      "Storing distributed logs",
    ],
    answer: "Handling observability and network communication between services",
    explanation:
      "A service mesh manages service-to-service communication, traffic control, security, and observability in microservices.",
    tags: ["microservices", "devops", "service mesh"],
  },
  {
    prompt: "What is a monorepo?",
    options: [
      "A repository that stores backups of mono audio files",
      "A repository containing only one microservice",
      "A single repository that contains multiple projects or packages",
      "A repository that is restricted to a single contributor",
    ],
    answer: "A single repository that contains multiple projects or packages",
    explanation:
      "A monorepo consolidates multiple related codebases into a single repository, simplifying dependency management and code sharing.",
    tags: ["architecture", "monorepo", "tooling"],
  },
  {
    prompt: "Which of the following is a valid reason to use WebSockets?",
    options: [
      "To serve static files quickly",
      "To improve SEO with SSR",
      "To enable real-time two-way communication",
      "To replace all HTTP requests",
    ],
    answer: "To enable real-time two-way communication",
    explanation:
      "WebSockets provide a full-duplex communication channel, ideal for real-time apps like chat and multiplayer games.",
    tags: ["websockets", "real-time", "network"],
  },
  {
    prompt: "What is a circular dependency in a module system?",
    options: [
      "A module that is reused across multiple projects",
      "Two or more modules that depend on each other, creating a loop",
      "A dependency that’s downloaded from a CDN",
      "A module that has no exports",
    ],
    answer: "Two or more modules that depend on each other, creating a loop",
    explanation:
      "Circular dependencies can cause bugs or runtime errors if the dependency graph forms a loop.",
    tags: ["modules", "js", "architecture"],
  },
  {
    prompt: "Which strategy helps reduce TTFB (Time to First Byte)?",
    options: [
      "Server-side rendering (SSR)",
      "Lazy loading all scripts",
      "Increasing image resolution",
      "Client-side hydration",
    ],
    answer: "Server-side rendering (SSR)",
    explanation:
      "SSR renders pages on the server before sending them to the client, improving TTFB and perceived performance.",
    tags: ["performance", "ssr", "web"],
  },
  {
    prompt: "What is an idempotent HTTP method?",
    options: [
      "One that can be safely repeated without side effects",
      "One that only works once per session",
      "One that encrypts data automatically",
      "One that requires special headers",
    ],
    answer: "One that can be safely repeated without side effects",
    explanation:
      "Idempotent methods like GET, PUT, and DELETE can be called multiple times and still result in the same outcome.",
    tags: ["http", "rest", "backend"],
  },
  {
    prompt: "What does Kubernetes use to manage desired state?",
    options: ["Pods", "Kubelet", "Controllers", "Load balancers"],
    answer: "Controllers",
    explanation:
      "Controllers in Kubernetes continuously compare the desired state to the actual state and take action to reconcile differences.",
    tags: ["kubernetes", "devops", "orchestration"],
  },
  {
    prompt: "What is a memory leak in JavaScript?",
    options: [
      "When memory is freed too early",
      "When variables are reassigned",
      "When memory is no longer needed but not released",
      "When browser cache overflows",
    ],
    answer: "When memory is no longer needed but not released",
    explanation:
      "A memory leak occurs when unused objects remain referenced, preventing garbage collection.",
    tags: ["javascript", "memory", "performance"],
  },
  {
    prompt: "What is 'event sourcing' in software architecture?",
    options: [
      "A way to throttle events for performance",
      "Using events as the primary source of truth for state",
      "Binding UI events to data sources",
      "Tracking all emitted console logs",
    ],
    answer: "Using events as the primary source of truth for state",
    explanation:
      "Event sourcing stores all changes as a sequence of events, enabling state reconstruction and better auditing.",
    tags: ["architecture", "patterns", "events"],
  },
  {
    prompt: "How does HTTP/2 improve performance over HTTP/1.1?",
    options: [
      "By compressing images automatically",
      "By using WebSockets",
      "By enabling multiplexed streams over a single connection",
      "By removing the need for SSL",
    ],
    answer: "By enabling multiplexed streams over a single connection",
    explanation:
      "HTTP/2 allows multiple parallel requests/responses on a single connection, reducing latency.",
    tags: ["http", "performance", "network"],
  },
  {
    prompt: "What is a race condition?",
    options: [
      "When a program crashes due to invalid syntax",
      "When two processes write to the same file sequentially",
      "When software is tested for performance under stress",
      "When multiple operations run concurrently and timing affects the result",
    ],
    answer:
      "When multiple operations run concurrently and timing affects the result",
    explanation:
      "Race conditions occur when concurrent processes access shared resources unpredictably, leading to incorrect behavior.",
    tags: ["concurrency", "bugs", "async"],
  },
  {
    prompt: "What is the purpose of the `z-index` CSS property?",
    options: [
      "To set the zoom level of an element",
      "To define stacking order of elements along the z-axis",
      "To apply 3D rotation to an element",
      "To make an element sticky",
    ],
    answer: "To define stacking order of elements along the z-axis",
    explanation:
      "`z-index` controls which elements appear in front or behind others when overlapping occurs.",
    tags: ["css", "layout", "z-index"],
  },
  {
    prompt: "What is the main benefit of using TypeScript in large projects?",
    options: [
      "Faster runtime performance",
      "More compact JavaScript output",
      "Better static type checking and IDE support",
      "Improved SEO capabilities",
    ],
    answer: "Better static type checking and IDE support",
    explanation:
      "TypeScript helps prevent bugs by adding type safety and improves developer experience with better tooling.",
    tags: ["typescript", "types", "developer-experience"],
  },
  {
    prompt: "What is the role of `babel` in JavaScript projects?",
    options: [
      "To compile SCSS to CSS",
      "To serve static assets",
      "To transpile modern JavaScript to backward-compatible versions",
      "To manage packages",
    ],
    answer: "To transpile modern JavaScript to backward-compatible versions",
    explanation:
      "Babel converts modern JavaScript syntax into code that can run in older browsers.",
    tags: ["babel", "javascript", "tooling"],
  },
  {
    prompt:
      "What is the primary advantage of using a `service worker` in a PWA?",
    options: [
      "It helps write CSS faster",
      "It enables server-side rendering",
      "It allows background caching and offline access",
      "It manages state on the client",
    ],
    answer: "It allows background caching and offline access",
    explanation:
      "Service workers intercept network requests, enabling offline capabilities and improved performance.",
    tags: ["pwa", "service-worker", "offline"],
  },
  {
    prompt: "In SQL, what does `JOIN` do?",
    options: [
      "Combines rows from two or more tables based on a related column",
      "Adds a new column to a table",
      "Removes duplicates from a query result",
      "Groups results by a specific column",
    ],
    answer: "Combines rows from two or more tables based on a related column",
    explanation:
      "`JOIN` is used to merge data from different tables using common fields like foreign keys.",
    tags: ["sql", "database", "join"],
  },
  {
    prompt:
      "What is the main difference between `undefined` and `null` in JavaScript?",
    options: [
      "`undefined` is assigned by the developer, `null` is set by JavaScript automatically",
      "`undefined` means a variable is declared but not assigned, `null` is an intentional absence of value",
      "They are fully interchangeable",
      "`null` means the variable does not exist",
    ],
    answer:
      "`undefined` means a variable is declared but not assigned, `null` is an intentional absence of value",
    explanation:
      "`undefined` typically means uninitialized, while `null` is explicitly assigned to indicate no value.",
    tags: ["javascript", "types", "null"],
  },
  {
    prompt: "What is the key concept of the Proxy pattern in JavaScript?",
    options: [
      "It binds data between components",
      "It wraps an object to control access or behavior",
      "It proxies HTTP requests",
      "It stores objects in a shared state",
    ],
    answer: "It wraps an object to control access or behavior",
    explanation:
      "The Proxy object allows custom behavior for fundamental operations like get, set, or function calls.",
    tags: ["javascript", "patterns", "proxy"],
  },
  {
    prompt: "What does `git rebase` do?",
    options: [
      "It merges two branches while preserving all commits",
      "It reverts a previous commit",
      "It applies commits on top of another base tip, creating a linear history",
      "It pushes code to a remote repository",
    ],
    answer:
      "It applies commits on top of another base tip, creating a linear history",
    explanation:
      "`git rebase` is used to reapply commits on top of another base branch, often for cleaner history.",
    tags: ["git", "version-control", "rebase"],
  },
  {
    prompt: "What is the purpose of `XSS` protection in web applications?",
    options: [
      "To prevent SQL injection attacks",
      "To secure the database connection string",
      "To prevent malicious scripts from being executed in the browser",
      "To avoid race conditions",
    ],
    answer: "To prevent malicious scripts from being executed in the browser",
    explanation:
      "Cross-site scripting (XSS) occurs when attackers inject malicious code into websites viewed by others.",
    tags: ["security", "xss", "web"],
  },
  {
    prompt: "What is the role of a reducer in Redux?",
    options: [
      "To dispatch actions to middleware",
      "To directly mutate the state",
      "To describe how state is updated based on actions",
      "To fetch data from the API",
    ],
    answer: "To describe how state is updated based on actions",
    explanation:
      "Reducers take the previous state and an action, and return a new state in Redux's immutable architecture.",
    tags: ["redux", "state-management", "react"],
  },
  {
    prompt:
      "What is the time complexity of inserting an element into a JavaScript `Map`?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(1)",
    explanation:
      "JavaScript `Map` is implemented using a hash table, providing average constant time complexity for inserts.",
    tags: ["javascript", "map", "complexity"],
  },
  {
    prompt: "Why might you use `startTransition` in React 18+?",
    options: [
      "To improve accessibility",
      "To delay hydration",
      "To mark state updates as non-urgent and avoid blocking UI",
      "To log transitions between routes",
    ],
    answer: "To mark state updates as non-urgent and avoid blocking UI",
    explanation:
      "`startTransition` allows React to prioritize urgent updates while deferring non-critical rendering.",
    tags: ["react", "performance", "concurrent"],
  },
  {
    prompt: "What does ACID stand for in database systems?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Concurrency, Isolation, Durability",
      "Access, Consistency, Integrity, Durability",
      "Atomicity, Concurrency, Integration, Dependency",
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation:
      "ACID properties ensure that database transactions are reliable and follow key principles of correctness.",
    tags: ["database", "sql", "transactions"],
  },
  {
    prompt: "What is a use case for a Bloom Filter?",
    options: [
      "Storing large text documents",
      "Reducing memory footprint for large sets with fast existence checks",
      "Encrypting database records",
      "Sorting large numeric arrays",
    ],
    answer:
      "Reducing memory footprint for large sets with fast existence checks",
    explanation:
      "Bloom Filters use multiple hash functions and a bit array to check existence with space efficiency but allow false positives.",
    tags: ["algorithms", "data-structures", "bloom-filter"],
  },
  {
    prompt: "In Kubernetes, what is a `pod`?",
    options: [
      "A single container running an app",
      "A group of one or more containers with shared storage/network",
      "A load balancer across containers",
      "An environment configuration file",
    ],
    answer: "A group of one or more containers with shared storage/network",
    explanation:
      "A pod is the smallest deployable unit in Kubernetes, often containing one or more containers that share context.",
    tags: ["kubernetes", "devops", "containers"],
  },
  {
    prompt: "What is tail call optimization (TCO) in JavaScript?",
    options: [
      "A technique to increase call stack size",
      "A syntax rule for arrow functions",
      "An optimization where the last function call reuses the current stack frame",
      "A new way to define closures",
    ],
    answer:
      "An optimization where the last function call reuses the current stack frame",
    explanation:
      "TCO avoids additional stack frame allocation for tail calls, improving recursion performance.",
    tags: ["javascript", "optimization", "recursion"],
  },
  {
    prompt: "What is the difference between `debounce` and `throttle`?",
    options: [
      "`Debounce` limits how often a function can run per interval; `throttle` waits until user stops",
      "`Debounce` waits until user stops; `throttle` limits how often a function runs per interval",
      "They are the same thing",
      "`Throttle` always executes once per event",
    ],
    answer:
      "`Debounce` waits until user stops; `throttle` limits how often a function runs per interval",
    explanation:
      "`Debounce` delays execution until inactivity; `throttle` limits calls to at most once per time frame.",
    tags: ["javascript", "performance", "patterns"],
  },
  {
    prompt: "What is the purpose of `Content Security Policy (CSP)` headers?",
    options: [
      "To allow HTTP requests from all origins",
      "To prevent unauthorized API calls",
      "To restrict sources from which content can be loaded",
      "To force HTTPS on all endpoints",
    ],
    answer: "To restrict sources from which content can be loaded",
    explanation:
      "CSP helps mitigate XSS by defining allowed sources for scripts, styles, and other content.",
    tags: ["security", "headers", "web"],
  },
  {
    prompt:
      "What happens if you call `useState` conditionally in a React component?",
    options: [
      "It throws an error",
      "It always works as expected",
      "It causes hooks to break order, leading to bugs",
      "It resets component props",
    ],
    answer: "It causes hooks to break order, leading to bugs",
    explanation:
      "Hooks must be called in the same order on every render; conditional calls break this rule and cause bugs.",
    tags: ["react", "hooks", "rules-of-hooks"],
  },
  {
    prompt: "How does `event loop` handle microtasks and macrotasks in JS?",
    options: [
      "Macrotasks run before microtasks",
      "Microtasks are added to the call stack directly",
      "Microtasks run right after the current task, before next macrotask",
      "They run in parallel",
    ],
    answer:
      "Microtasks run right after the current task, before next macrotask",
    explanation:
      "JavaScript executes all microtasks (like `Promise.then`) after each macrotask, before the next event.",
    tags: ["javascript", "event-loop", "async"],
  },
  {
    prompt: "What does `z-index` control in CSS?",
    options: [
      "Font weight",
      "Stacking order of elements",
      "Transition duration",
      "Text alignment",
    ],
    answer: "Stacking order of elements",
    explanation:
      "`z-index` determines the stack level of elements along the z-axis (depth) in CSS positioning.",
    tags: ["css", "layout", "positioning"],
  },
  {
    prompt:
      "What is the primary difference between `==` and `===` in JavaScript?",
    options: [
      "`==` compares references; `===` compares values",
      "`==` allows type coercion; `===` requires same type and value",
      "`==` is strict equality; `===` is loose",
      "`==` works only on primitives",
    ],
    answer: "`==` allows type coercion; `===` requires same type and value",
    explanation:
      "`==` performs type coercion, whereas `===` checks for both value and type equality.",
    tags: ["javascript", "operators", "equality"],
  },
  {
    prompt: "What is an SSRF vulnerability?",
    options: [
      "A type of SQL Injection",
      "A Server-Side Request Forgery that tricks the server into making unintended requests",
      "A client-side redirect attack",
      "A memory overflow vulnerability",
    ],
    answer:
      "A Server-Side Request Forgery that tricks the server into making unintended requests",
    explanation:
      "SSRF tricks the backend into making unauthorized requests, often targeting internal systems.",
    tags: ["security", "ssrf", "web"],
  },
  {
    prompt:
      "Which React feature allows components to ‘suspend’ rendering until data is ready?",
    options: ["React Context", "Error Boundaries", "Suspense", "Memoization"],
    answer: "Suspense",
    explanation:
      "`Suspense` in React allows components to delay rendering until some async operation (like data fetching) is complete.",
    tags: ["react", "suspense", "async"],
  },
  {
    prompt: "What is the purpose of a `Service Worker` in a PWA?",
    options: [
      "To enhance SEO metadata",
      "To build the DOM faster",
      "To intercept network requests and enable offline support",
      "To fetch data from third-party APIs",
    ],
    answer: "To intercept network requests and enable offline support",
    explanation:
      "Service Workers enable background scripts to handle caching and fetch logic, making PWAs work offline.",
    tags: ["pwa", "service-worker", "offline"],
  },
  {
    prompt: "What is the main purpose of `memoization` in programming?",
    options: [
      "To improve readability of code",
      "To cache function results and avoid redundant calculations",
      "To allocate memory dynamically",
      "To remove unused variables",
    ],
    answer: "To cache function results and avoid redundant calculations",
    explanation:
      "Memoization stores results of expensive function calls and returns the cached result when the same inputs occur again.",
    tags: ["optimization", "performance", "functions"],
  },
  {
    prompt:
      "Which HTTP status code indicates a request was well-formed but couldn’t be processed due to semantic errors?",
    options: ["400", "401", "422", "500"],
    answer: "422",
    explanation:
      "HTTP 422 Unprocessable Entity is used when the server understands the request but cannot process it due to semantic issues.",
    tags: ["http", "status-codes", "api"],
  },
  {
    prompt:
      "What does the `Map` object in JavaScript provide over plain objects?",
    options: [
      "Faster syntax",
      "More concise key naming",
      "Preserves insertion order and allows any value as key",
      "Better compatibility with arrays",
    ],
    answer: "Preserves insertion order and allows any value as key",
    explanation:
      "`Map` maintains insertion order and accepts any data type as keys, unlike plain objects.",
    tags: ["javascript", "map", "data-structures"],
  },
  {
    prompt: "In GraphQL, what is a resolver?",
    options: [
      "A client query parser",
      "A schema validator",
      "A function that handles fetching or computing a field’s value",
      "A mutation handler",
    ],
    answer: "A function that handles fetching or computing a field’s value",
    explanation:
      "Resolvers are functions in GraphQL that resolve the value for a field in the schema.",
    tags: ["graphql", "backend", "api"],
  },
  {
    prompt: "Which Node.js module is used to create an HTTPS server?",
    options: ["fs", "http2", "https", "tls"],
    answer: "https",
    explanation:
      "The built-in `https` module in Node.js enables creation of HTTPS servers with TLS/SSL.",
    tags: ["nodejs", "https", "server"],
  },
  {
    prompt: "What is a monorepo?",
    options: [
      "A single file containing all code",
      "A repository that manages multiple related projects in one codebase",
      "A remote git repository with read-only access",
      "A repository that uses only one package manager",
    ],
    answer:
      "A repository that manages multiple related projects in one codebase",
    explanation:
      "A monorepo (monolithic repository) stores multiple related packages/projects together, often improving collaboration and tooling.",
    tags: ["architecture", "monorepo", "git"],
  },
  {
    prompt: "What is the use of the `ForwardRef` in React?",
    options: [
      "To forward props to parent component",
      "To avoid re-renders",
      "To allow refs to reach child DOM nodes or components",
      "To share state between components",
    ],
    answer: "To allow refs to reach child DOM nodes or components",
    explanation:
      "`React.forwardRef` lets you pass a ref through a component to access a child’s DOM node or React component.",
    tags: ["react", "refs", "forwardref"],
  },
  {
    prompt: "What is the key feature of a `trie` data structure?",
    options: [
      "It stores binary trees",
      "Efficient retrieval of strings using prefix matching",
      "Constant time search for any value",
      "Ensures sorted key insertion",
    ],
    answer: "Efficient retrieval of strings using prefix matching",
    explanation:
      "`Trie` (prefix tree) is a tree-based data structure optimized for string retrieval, especially prefix-based searches.",
    tags: ["data-structures", "trie", "algorithms"],
  },
  {
    prompt: "What is the main advantage of using GraphQL over REST?",
    options: [
      "It is more secure",
      "It caches responses automatically",
      "Clients can request exactly the data they need",
      "It uses fewer lines of code on the server",
    ],
    answer: "Clients can request exactly the data they need",
    explanation:
      "GraphQL allows clients to specify which fields they want, reducing over-fetching or under-fetching data compared to REST.",
    tags: ["graphql", "rest", "api"],
  },
  {
    prompt: "Which algorithm is commonly used in diffing virtual DOM trees?",
    options: [
      "Merge Sort",
      "Quick Sort",
      "Longest Common Subsequence (LCS)",
      "Heuristic Tree Diffing",
    ],
    answer: "Heuristic Tree Diffing",
    explanation:
      "React uses a heuristic tree diffing algorithm to efficiently compare virtual DOMs and apply minimal DOM updates.",
    tags: ["react", "virtual-dom", "algorithms"],
  },
  {
    prompt: "What is the purpose of the `z-index` property in CSS?",
    options: [
      "It controls the opacity of an element",
      "It defines the stacking order of elements along the z-axis",
      "It sets the zoom level of an element",
      "It specifies the element's width",
    ],
    answer: "It defines the stacking order of elements along the z-axis",
    explanation:
      "`z-index` controls the vertical stacking of overlapping elements, with higher values appearing above lower ones.",
    tags: ["css", "layout", "z-index"],
  },
  {
    prompt:
      "In React, what does `useLayoutEffect` do differently than `useEffect`?",
    options: [
      "It only runs on initial render",
      "It executes after painting to screen",
      "It runs synchronously after DOM mutations, before painting",
      "It replaces `componentDidMount`",
    ],
    answer: "It runs synchronously after DOM mutations, before painting",
    explanation:
      "`useLayoutEffect` is similar to `useEffect`, but it fires synchronously after DOM updates and before the browser paints.",
    tags: ["react", "hooks", "useLayoutEffect"],
  },
  {
    prompt:
      "What is the main benefit of `immutable data structures` in state management?",
    options: [
      "They are faster to modify",
      "They prevent memory leaks",
      "They simplify change detection and debugging",
      "They consume less memory",
    ],
    answer: "They simplify change detection and debugging",
    explanation:
      "Immutable data allows reliable change detection via shallow comparison and avoids side effects from in-place mutations.",
    tags: ["state", "redux", "immutability"],
  },
  {
    prompt: "What is `tail call optimization` (TCO)?",
    options: [
      "An optimization to avoid stack overflow in recursive calls",
      "A method to reduce API latency",
      "A way to improve component rendering",
      "A memory leak prevention technique",
    ],
    answer: "An optimization to avoid stack overflow in recursive calls",
    explanation:
      "TCO allows recursive functions to reuse stack frames, preventing stack overflow in deep recursion cases.",
    tags: ["javascript", "recursion", "optimization"],
  },
  {
    prompt: "What is the role of `CSRF tokens` in web security?",
    options: [
      "They encrypt data before sending",
      "They prevent client-side caching",
      "They protect against cross-site request forgery attacks",
      "They authorize JWT tokens",
    ],
    answer: "They protect against cross-site request forgery attacks",
    explanation:
      "CSRF tokens are used to verify that form submissions come from legitimate users, helping prevent CSRF attacks.",
    tags: ["security", "csrf", "web"],
  },
  {
    prompt: "What is the benefit of using WebSockets over HTTP polling?",
    options: [
      "Lower security risks",
      "Faster file uploads",
      "Persistent connection with real-time bidirectional communication",
      "Better SEO support",
    ],
    answer: "Persistent connection with real-time bidirectional communication",
    explanation:
      "WebSockets enable real-time communication by keeping a persistent, low-latency connection between client and server.",
    tags: ["websockets", "real-time", "networking"],
  },
  {
    prompt: "What is an `index` in a database?",
    options: [
      "A command for database replication",
      "A backup of the data",
      "A data structure that improves query performance",
      "A UI element in admin panels",
    ],
    answer: "A data structure that improves query performance",
    explanation:
      "Indexes speed up queries by allowing the database to locate data without scanning every row.",
    tags: ["database", "sql", "index"],
  },
  {
    prompt: "Why is tailwind considered utility-first?",
    options: [
      "It uses inline styles only",
      "It provides reusable class components",
      "It encourages composing UI using small utility classes",
      "It doesn't support responsive design",
    ],
    answer: "It encourages composing UI using small utility classes",
    explanation:
      "Tailwind’s utility-first approach enables rapid UI development through composable low-level utility classes.",
    tags: ["css", "tailwind", "frontend"],
  },
  {
    prompt: "What is a service worker in a PWA?",
    options: [
      "A background script that intercepts network requests and handles caching",
      "A WebSocket listener",
      "A way to speed up server-side rendering",
      "A Chrome extension script",
    ],
    answer:
      "A background script that intercepts network requests and handles caching",
    explanation:
      "Service workers are scripts that run in the background, enabling offline access, push notifications, and caching for PWAs.",
    tags: ["pwa", "service-worker", "offline"],
  },
  {
    prompt: "What is `event delegation` in JavaScript?",
    options: [
      "Forwarding events to the server",
      "Attaching event listeners to each element separately",
      "Using a parent to listen for events on child elements",
      "Separating events from UI logic",
    ],
    answer: "Using a parent to listen for events on child elements",
    explanation:
      "Event delegation attaches a listener to a parent element to handle events on its children, improving performance.",
    tags: ["javascript", "events", "dom"],
  },
  {
    prompt: "What is the purpose of `memoization`?",
    options: [
      "To delay execution of a function",
      "To execute a function only once",
      "To cache function results for identical inputs",
      "To prevent side effects",
    ],
    answer: "To cache function results for identical inputs",
    explanation:
      "Memoization improves performance by storing results of expensive function calls and reusing them for the same inputs.",
    tags: ["javascript", "performance", "memoization"],
  },
  {
    prompt: "Which HTTP status code means 'Too Many Requests'?",
    options: ["400", "403", "429", "503"],
    answer: "429",
    explanation:
      "HTTP 429 indicates the user has sent too many requests in a given amount of time, used for rate limiting.",
    tags: ["http", "api", "rate-limiting"],
  },
  {
    prompt: "In GraphQL, what does the `@deprecated` directive do?",
    options: [
      "Removes a field from the schema",
      "Marks a field as optional",
      "Marks a field as deprecated with an optional reason",
      "Validates input type structure",
    ],
    answer: "Marks a field as deprecated with an optional reason",
    explanation:
      "The `@deprecated` directive marks fields as deprecated and allows schema users to know they shouldn't be used.",
    tags: ["graphql", "schema", "api"],
  },
  {
    prompt: "What does ACID stand for in databases?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Control, Integrity, Delivery",
      "Actions, Calculation, Indexing, Distribution",
      "Availability, Consistency, Isolation, Denormalization",
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation:
      "ACID properties ensure that database transactions are processed reliably and safeguard data integrity.",
    tags: ["database", "acid", "transactions"],
  },
  {
    prompt:
      "What is `hydration` in the context of server-side rendering (SSR)?",
    options: [
      "Injecting CSS styles into the DOM",
      "Restoring state in Redux",
      "Attaching event listeners to static HTML sent from the server",
      "Preloading images for faster rendering",
    ],
    answer: "Attaching event listeners to static HTML sent from the server",
    explanation:
      "Hydration is the process where client-side JavaScript attaches interactivity to the HTML rendered on the server.",
    tags: ["ssr", "react", "hydration"],
  },
  {
    prompt: "What is the role of a reverse proxy like Nginx?",
    options: [
      "Serves as a database optimizer",
      "Caches static assets on the client",
      "Forwards client requests to backend servers",
      "Manages client-side routing",
    ],
    answer: "Forwards client requests to backend servers",
    explanation:
      "A reverse proxy forwards incoming client requests to backend servers and can handle load balancing, caching, and SSL termination.",
    tags: ["networking", "nginx", "backend"],
  },
  {
    prompt: "What is the benefit of `Object.freeze()` in JavaScript?",
    options: [
      "Makes the object invisible to garbage collector",
      "Optimizes rendering performance",
      "Prevents properties from being added, removed, or modified",
      "Converts object to JSON",
    ],
    answer: "Prevents properties from being added, removed, or modified",
    explanation:
      "`Object.freeze()` makes an object immutable by preventing additions, deletions, or changes to its properties.",
    tags: ["javascript", "immutability", "objects"],
  },
  {
    prompt: "What does the `await` keyword do in JavaScript?",
    options: [
      "Blocks the entire thread",
      "Creates a new Promise",
      "Pauses execution until the Promise settles",
      "Marks a variable as asynchronous",
    ],
    answer: "Pauses execution until the Promise settles",
    explanation:
      "`await` pauses execution of an async function until the Promise resolves or rejects.",
    tags: ["javascript", "async", "await"],
  },
  {
    prompt:
      "What is the main advantage of using Redis over a traditional database for caching?",
    options: [
      "Better data modeling",
      "High memory usage",
      "Faster in-memory data access",
      "Automatic data backup",
    ],
    answer: "Faster in-memory data access",
    explanation:
      "Redis stores data in memory, making access extremely fast, ideal for caching and session management.",
    tags: ["redis", "caching", "performance"],
  },
  {
    prompt:
      "Which concept is used to handle multiple processes accessing shared data?",
    options: [
      "Polling",
      "Mutual exclusion (mutex)",
      "Lazy loading",
      "Virtual DOM",
    ],
    answer: "Mutual exclusion (mutex)",
    explanation:
      "Mutexes prevent concurrent processes from accessing critical sections simultaneously, avoiding race conditions.",
    tags: ["concurrency", "mutex", "threads"],
  },
  {
    prompt:
      "In microservices architecture, what is a common way to achieve service discovery?",
    options: [
      "Using DNS round-robin",
      "Hardcoding IP addresses",
      "Polling each service periodically",
      "Database replication",
    ],
    answer: "Using DNS round-robin",
    explanation:
      "Service discovery often uses DNS-based load balancing (round-robin) or service registries like Consul or Eureka to dynamically locate services.",
    tags: ["microservices", "architecture", "dns"],
  },
  {
    prompt: "What is the purpose of `Content Security Policy (CSP)`?",
    options: [
      "To restrict access to the database",
      "To limit CSS styles applied to HTML",
      "To prevent XSS and data injection attacks",
      "To hide the source code from the client",
    ],
    answer: "To prevent XSS and data injection attacks",
    explanation:
      "CSP is a security layer that helps prevent cross-site scripting (XSS) and data injection by restricting resource loading.",
    tags: ["security", "csp", "xss"],
  },
  {
    prompt: "What’s the main difference between `monorepo` and `polyrepo`?",
    options: [
      "Monorepo uses Git, polyrepo doesn’t",
      "Monorepo means all projects in one repo; polyrepo means separate repos",
      "Polyrepo supports CI/CD, monorepo does not",
      "Monorepo cannot contain frontend code",
    ],
    answer:
      "Monorepo means all projects in one repo; polyrepo means separate repos",
    explanation:
      "Monorepo keeps all projects in a single codebase, simplifying dependency sharing. Polyrepo splits them into separate repositories.",
    tags: ["devops", "architecture", "monorepo"],
  },
  {
    prompt: "What is the purpose of the `shadow DOM` in web components?",
    options: [
      "To improve server-side rendering performance",
      "To create isolated CSS and markup",
      "To lazily load images",
      "To manage browser storage",
    ],
    answer: "To create isolated CSS and markup",
    explanation:
      "The shadow DOM enables encapsulation by isolating styles and DOM structure from the main document.",
    tags: ["web components", "shadow dom", "encapsulation"],
  },
  {
    prompt: "What does the `CAP theorem` state in distributed systems?",
    options: [
      "Only two out of Consistency, Availability, and Partition Tolerance can be fully achieved",
      "All three properties must always be guaranteed",
      "Security, Accuracy, and Performance must be balanced",
      "Caching, Authentication, and Persistence should be isolated",
    ],
    answer:
      "Only two out of Consistency, Availability, and Partition Tolerance can be fully achieved",
    explanation:
      "The CAP theorem states that in a distributed system, only two of Consistency, Availability, and Partition Tolerance can be guaranteed simultaneously.",
    tags: ["distributed systems", "cap theorem", "consistency"],
  },
  {
    prompt: "Which HTTP status code represents 'Too Many Requests'?",
    options: ["429", "503", "408", "304"],
    answer: "429",
    explanation:
      "HTTP 429 indicates the user has sent too many requests in a given amount of time (rate limiting).",
    tags: ["http", "rate limiting", "status code"],
  },
  {
    prompt: "What is the main advantage of using a `Reverse Proxy` like NGINX?",
    options: [
      "It increases the number of database queries",
      "It disables CORS headers",
      "It forwards client requests to backend servers, improving scalability and security",
      "It encrypts passwords in transit",
    ],
    answer:
      "It forwards client requests to backend servers, improving scalability and security",
    explanation:
      "A reverse proxy distributes requests, hides backend services, and can cache/static serve content efficiently.",
    tags: ["nginx", "reverse proxy", "architecture"],
  },
  {
    prompt: "What does the `V8` engine do in the context of JavaScript?",
    options: [
      "It handles version control",
      "It compiles and executes JavaScript code",
      "It formats HTML templates",
      "It validates CSS rules",
    ],
    answer: "It compiles and executes JavaScript code",
    explanation:
      "V8 is the high-performance JavaScript engine used by Chrome and Node.js to compile and run JavaScript.",
    tags: ["javascript", "v8", "engines"],
  },
  {
    prompt:
      "Why would you use `Immutable Data Structures` in front-end applications?",
    options: [
      "To reduce file size",
      "To avoid memory leaks",
      "To simplify debugging and avoid unintended mutations",
      "To increase DOM node count",
    ],
    answer: "To simplify debugging and avoid unintended mutations",
    explanation:
      "Immutable data prevents bugs by making state predictable and traceable, a common practice in Redux and React apps.",
    tags: ["immutability", "state management", "redux"],
  },
  {
    prompt: "In GraphQL, what does a `resolver` do?",
    options: [
      "It caches query results",
      "It maps a query or mutation to a function that returns data",
      "It encrypts API responses",
      "It merges schemas",
    ],
    answer: "It maps a query or mutation to a function that returns data",
    explanation:
      "Resolvers in GraphQL define how to fetch the data for each field in a schema.",
    tags: ["graphql", "resolvers", "api"],
  },
  {
    prompt: "What is the primary purpose of `Content Security Policy (CSP)`?",
    options: [
      "To enforce user authentication",
      "To control password complexity",
      "To prevent XSS and data injection attacks by whitelisting sources",
      "To speed up asset delivery",
    ],
    answer: "To prevent XSS and data injection attacks by whitelisting sources",
    explanation:
      "CSP is a security layer that restricts the resources (scripts, styles, etc.) a browser is allowed to load.",
    tags: ["security", "csp", "xss"],
  },
  {
    prompt:
      "Which JavaScript method can cause a stack overflow if used without a base case?",
    options: ["forEach", "map", "reduce", "recursion"],
    answer: "recursion",
    explanation:
      "Recursion without a proper base case leads to infinite calls, eventually causing a stack overflow error.",
    tags: ["javascript", "recursion", "error"],
  },
  {
    prompt: "What is the role of the `kubelet` in Kubernetes?",
    options: [
      "It manages database clusters",
      "It validates YAML files",
      "It ensures containers are running in a pod",
      "It deploys Helm charts",
    ],
    answer: "It ensures containers are running in a pod",
    explanation:
      "The kubelet runs on each node and ensures the containers described in PodSpecs are running and healthy.",
    tags: ["kubernetes", "kubelet", "devops"],
  },
  {
    prompt: "Why would you use `memoization` in a React component?",
    options: [
      "To persist form inputs",
      "To throttle API requests",
      "To prevent unnecessary recalculations of derived values",
      "To encrypt local state",
    ],
    answer: "To prevent unnecessary recalculations of derived values",
    explanation:
      "Memoization optimizes performance by caching expensive function results across renders.",
    tags: ["react", "performance", "memoization"],
  },
  {
    prompt: "What is the benefit of `event delegation` in JavaScript?",
    options: [
      "It increases network bandwidth",
      "It reduces memory usage by using fewer event listeners",
      "It improves image rendering",
      "It allows dynamic imports",
    ],
    answer: "It reduces memory usage by using fewer event listeners",
    explanation:
      "Event delegation attaches a single listener to a parent, handling child interactions through event bubbling.",
    tags: ["javascript", "events", "dom"],
  },
  {
    prompt:
      "What does the `volatile` keyword indicate in multithreaded programming?",
    options: [
      "The variable is immutable",
      "The variable cannot be null",
      "The variable can be cached for performance",
      "The variable might be modified by multiple threads and should not be cached",
    ],
    answer:
      "The variable might be modified by multiple threads and should not be cached",
    explanation:
      "`volatile` ensures that the most up-to-date value is always read from main memory, not a thread's local cache.",
    tags: ["multithreading", "concurrency", "memory"],
  },
  {
    prompt: "What is a major drawback of using polling for real-time updates?",
    options: [
      "It’s supported only in Chrome",
      "It requires websockets",
      "It can create unnecessary network overhead",
      "It provides the lowest latency",
    ],
    answer: "It can create unnecessary network overhead",
    explanation:
      "Polling repeatedly checks the server at intervals, which may waste resources if updates are infrequent.",
    tags: ["real-time", "polling", "network"],
  },
  {
    prompt: "In a monorepo setup, what does `Nx` help developers achieve?",
    options: [
      "It performs CSS-in-JS transformations",
      "It handles user authentication",
      "It provides efficient dependency graph management and builds",
      "It replaces TypeScript with Flow",
    ],
    answer: "It provides efficient dependency graph management and builds",
    explanation:
      "Nx is a build system and toolset for managing monorepos with advanced caching and dependency-aware builds.",
    tags: ["monorepo", "nx", "tooling"],
  },
  {
    prompt: "What’s the primary use case for a `reverse proxy` like NGINX?",
    options: [
      "Compiling frontend assets",
      "Intercepting database queries",
      "Handling client requests and forwarding them to backend servers",
      "Managing source control",
    ],
    answer: "Handling client requests and forwarding them to backend servers",
    explanation:
      "A reverse proxy sits in front of backend services and routes client requests, often handling SSL, caching, and load balancing.",
    tags: ["nginx", "proxy", "backend"],
  },
  {
    prompt: "Why might `soft deletes` be preferred in certain applications?",
    options: [
      "They increase database speed",
      "They ensure better foreign key integrity",
      "They allow data recovery and auditing",
      "They eliminate the need for indexes",
    ],
    answer: "They allow data recovery and auditing",
    explanation:
      "Soft deletes mark data as deleted without removing it, enabling undo functionality or tracking user actions.",
    tags: ["database", "soft delete", "auditing"],
  },
  {
    prompt: "What is the primary advantage of using `GraphQL` over REST?",
    options: [
      "It uses XML instead of JSON",
      "It automatically generates frontend components",
      "It allows clients to request exactly the data they need",
      "It requires no backend server",
    ],
    answer: "It allows clients to request exactly the data they need",
    explanation:
      "GraphQL lets clients specify the shape of the response, reducing over-fetching or under-fetching of data.",
    tags: ["graphql", "api", "backend"],
  },
  {
    prompt: "What is the purpose of a `service mesh` like Istio in Kubernetes?",
    options: [
      "To provide UI components",
      "To manage user roles",
      "To handle service-to-service communication, security, and monitoring",
      "To store database backups",
    ],
    answer:
      "To handle service-to-service communication, security, and monitoring",
    explanation:
      "A service mesh provides features like traffic control, observability, and secure communication across microservices.",
    tags: ["kubernetes", "service mesh", "istio", "devops"],
  },
  {
    prompt: "What does the `event loop` do in Node.js?",
    options: [
      "Compiles JavaScript to machine code",
      "Executes blocking file I/O",
      "Handles asynchronous callbacks and non-blocking operations",
      "Starts a new thread for each request",
    ],
    answer: "Handles asynchronous callbacks and non-blocking operations",
    explanation:
      "The event loop processes tasks, callbacks, and I/O asynchronously in a single-threaded model.",
    tags: ["nodejs", "event loop", "javascript"],
  },
  {
    prompt: "What is the function of `Redis` in modern web apps?",
    options: [
      "Rendering CSS animations",
      "Serving as a relational database",
      "Caching and fast key-value storage",
      "Generating frontend routes",
    ],
    answer: "Caching and fast key-value storage",
    explanation:
      "Redis is an in-memory key-value store used for caching, pub/sub, and real-time analytics.",
    tags: ["redis", "caching", "performance"],
  },
  {
    prompt: "What is the concept of `sharding` in databases?",
    options: [
      "Backing up data on multiple drives",
      "Partitioning data across multiple machines for scalability",
      "Encrypting all data in a single table",
      "Indexing all columns for fast search",
    ],
    answer: "Partitioning data across multiple machines for scalability",
    explanation:
      "Sharding splits data horizontally across nodes to reduce load and improve performance at scale.",
    tags: ["database", "sharding", "scalability"],
  },
  {
    prompt: "What is `memoization` in programming?",
    options: [
      "A way to clear memory before garbage collection",
      "Caching the result of expensive function calls",
      "Encoding data for secure transmission",
      "Transforming code into machine instructions",
    ],
    answer: "Caching the result of expensive function calls",
    explanation:
      "Memoization stores function outputs for given inputs to avoid redundant computations.",
    tags: ["optimization", "memoization", "javascript"],
  },
  {
    prompt:
      "What is the difference between `load balancer` and `reverse proxy`?",
    options: [
      "They are the same",
      "Load balancer directs traffic across multiple servers; reverse proxy sits in front of web servers",
      "Load balancer handles DNS, reverse proxy handles TLS",
      "Reverse proxy is used only in microservices",
    ],
    answer:
      "Load balancer directs traffic across multiple servers; reverse proxy sits in front of web servers",
    explanation:
      "A reverse proxy forwards requests to a specific server, while a load balancer distributes them across many.",
    tags: ["architecture", "devops", "networking"],
  },
  {
    prompt: "What is the benefit of `Type Guards` in TypeScript?",
    options: [
      "They prevent runtime errors during JSON parsing",
      "They allow narrowing of types in conditionals",
      "They guard against browser compatibility issues",
      "They enforce memory limits",
    ],
    answer: "They allow narrowing of types in conditionals",
    explanation:
      "Type guards help the compiler refine the type inside conditional blocks for safer access.",
    tags: ["typescript", "type guards"],
  },
  {
    prompt: "What does `Server-Side Rendering (SSR)` improve in web apps?",
    options: [
      "Database indexing",
      "Faster frontend routing",
      "SEO and faster first-page load",
      "LocalStorage management",
    ],
    answer: "SEO and faster first-page load",
    explanation:
      "SSR renders pages on the server, improving performance and making them crawlable by search engines.",
    tags: ["ssr", "nextjs", "performance", "seo"],
  },
  {
    prompt: "Why are `WebSockets` used instead of HTTP for some apps?",
    options: [
      "They support XML better",
      "They allow for real-time, two-way communication",
      "They use less memory",
      "They are encrypted by default",
    ],
    answer: "They allow for real-time, two-way communication",
    explanation:
      "WebSockets enable persistent connections with low-latency communication between client and server.",
    tags: ["websockets", "realtime", "networking"],
  },
  {
    prompt: "What does the CAP theorem state in distributed systems?",
    options: [
      "You can only use two CPUs per task",
      "You must balance CPU and RAM equally",
      "You can only guarantee two of Consistency, Availability, and Partition Tolerance",
      "You can’t scale and remain consistent",
    ],
    answer:
      "You can only guarantee two of Consistency, Availability, and Partition Tolerance",
    explanation:
      "CAP theorem describes the trade-offs between data consistency, system availability, and fault tolerance in distributed systems.",
    tags: ["distributed systems", "cap", "architecture"],
  },
  {
    prompt: "Which sorting algorithm has the best worst-case time complexity?",
    options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Selection Sort"],
    answer: "Merge Sort",
    explanation:
      "Merge Sort guarantees O(n log n) time complexity even in the worst case.",
    tags: ["algorithms", "sorting"],
  },
  {
    prompt: "What is the key benefit of `Dependency Injection`?",
    options: [
      "It reduces runtime errors",
      "It simplifies HTTP requests",
      "It promotes decoupled and testable code",
      "It makes CSS management easier",
    ],
    answer: "It promotes decoupled and testable code",
    explanation:
      "Dependency Injection allows you to inject services or dependencies, making components more modular and easier to test.",
    tags: ["architecture", "design patterns", "di"],
  },
  {
    prompt: "What is `eventual consistency`?",
    options: [
      "Data is never consistent",
      "Data is immediately updated in all systems",
      "Data will become consistent over time",
      "All clients must agree on data before writing",
    ],
    answer: "Data will become consistent over time",
    explanation:
      "Eventual consistency allows temporary inconsistency but ensures data synchronizes eventually.",
    tags: ["consistency", "distributed systems"],
  },
  {
    prompt: "Which data structure is best suited for implementing LRU cache?",
    options: [
      "Stack and Queue",
      "HashMap and Doubly Linked List",
      "Priority Queue and Heap",
      "Set and Graph",
    ],
    answer: "HashMap and Doubly Linked List",
    explanation:
      "Using a HashMap for O(1) lookup and Doubly Linked List for O(1) removals makes this combo optimal for LRU cache.",
    tags: ["data structures", "lru", "cache", "performance"],
  },
  {
    prompt: "What is tail call optimization in JavaScript?",
    options: [
      "A feature that increases tail recursion depth",
      "A way to reduce the call stack size by reusing stack frames",
      "A technique to sort tail-end arrays",
      "A method for optimizing arrow functions",
    ],
    answer: "A way to reduce the call stack size by reusing stack frames",
    explanation:
      "Tail call optimization (TCO) allows recursive functions to avoid growing the call stack if the recursive call is the last operation in the function.",
    tags: ["javascript", "optimization", "recursion"],
  },
  {
    prompt: "What is the main purpose of using `MapReduce`?",
    options: [
      "Encrypt data across nodes",
      "Scale horizontally across browser tabs",
      "Distribute data processing across a cluster",
      "Simplify JavaScript's array methods",
    ],
    answer: "Distribute data processing across a cluster",
    explanation:
      "MapReduce is a programming model for processing large datasets using a distributed algorithm on a cluster.",
    tags: ["big data", "mapreduce", "distributed systems"],
  },
  {
    prompt: "What is a memory leak?",
    options: [
      "An intentional buffer overflow",
      "When memory is never allocated",
      "When memory that is no longer needed is not released",
      "When memory is doubled on each loop",
    ],
    answer: "When memory that is no longer needed is not released",
    explanation:
      "Memory leaks occur when a program keeps a reference to unused memory, preventing garbage collection.",
    tags: ["memory", "performance", "garbage collection"],
  },
  {
    prompt: "What is the difference between `thread` and `process`?",
    options: [
      "Threads can’t run concurrently",
      "Processes share the same memory space",
      "Threads are lighter and share memory; processes are isolated",
      "Processes are faster than threads",
    ],
    answer: "Threads are lighter and share memory; processes are isolated",
    explanation:
      "Threads exist within a process and share memory, while processes are independent with separate memory spaces.",
    tags: ["os", "concurrency", "threads"],
  },
  {
    prompt: "What does ACID stand for in databases?",
    options: [
      "Access, Control, Integrity, Durability",
      "Atomicity, Consistency, Isolation, Durability",
      "Authorization, Concurrency, Isolation, Design",
      "Atomicity, Clustering, Indexing, Durability",
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation:
      "ACID ensures reliable processing in databases: Atomic operations, data consistency, isolated transactions, and durable commits.",
    tags: ["database", "acid", "transactions"],
  },
  {
    prompt: "What is the purpose of the `volatile` keyword in Java or C++?",
    options: [
      "It makes variables immutable",
      "It ensures the variable is stored in the cache",
      "It tells the compiler not to optimize reads/writes to the variable",
      "It prevents garbage collection of the variable",
    ],
    answer:
      "It tells the compiler not to optimize reads/writes to the variable",
    explanation:
      "`volatile` ensures visibility of changes to variables across threads by preventing certain compiler optimizations.",
    tags: ["multithreading", "c++", "java"],
  },
  {
    prompt:
      "What is the difference between strong and weak references in memory management?",
    options: [
      "Weak references prevent memory leaks; strong references do not",
      "Strong references are automatically garbage collected",
      "Weak references never expire",
      "Strong references allow deep copying",
    ],
    answer: "Weak references prevent memory leaks; strong references do not",
    explanation:
      "Weak references allow memory to be reclaimed by garbage collectors when no strong references exist, helping avoid leaks.",
    tags: ["memory", "garbage collection", "js"],
  },
  {
    prompt:
      "What is the main benefit of `CQRS` (Command Query Responsibility Segregation)?",
    options: [
      "It increases the size of your codebase",
      "It separates read and write operations for scalability",
      "It ensures consistency in NoSQL databases",
      "It guarantees eventual consistency",
    ],
    answer: "It separates read and write operations for scalability",
    explanation:
      "CQRS allows optimization of read and write paths independently, improving scalability and system design.",
    tags: ["architecture", "cqrs", "design patterns"],
  },
  {
    prompt: "Why are Bloom Filters efficient for membership checks?",
    options: [
      "They store complete entries in memory",
      "They allow updates without hash functions",
      "They use multiple hash functions and a bit array for fast checks",
      "They use JSON for indexing",
    ],
    answer: "They use multiple hash functions and a bit array for fast checks",
    explanation:
      "Bloom Filters use multiple hashes and a bit array to quickly determine if an element is definitely not in a set or maybe is.",
    tags: ["data structures", "bloom filter", "performance"],
  },
  {
    prompt: "What problem does the Raft algorithm solve?",
    options: [
      "Sorting large arrays",
      "Leader election and consensus in distributed systems",
      "Minimizing latency in APIs",
      "Resolving memory fragmentation",
    ],
    answer: "Leader election and consensus in distributed systems",
    explanation:
      "Raft is a consensus algorithm that helps distributed systems agree on a single source of truth and select a leader.",
    tags: ["distributed systems", "raft", "consensus"],
  },
  {
    prompt: "What is an idempotent operation in the context of APIs?",
    options: [
      "An operation that always throws an error",
      "An operation that causes side effects every time it runs",
      "An operation that can be called multiple times without changing the result",
      "An operation that only runs once",
    ],
    answer:
      "An operation that can be called multiple times without changing the result",
    explanation:
      "Idempotent operations return the same result no matter how many times they are performed, like HTTP PUT or DELETE.",
    tags: ["api", "rest", "idempotency"],
  },
  {
    prompt: "What is the CAP theorem in distributed systems?",
    options: [
      "It states that databases must be Consistent, Available, and Performant",
      "It allows dynamic partitioning of data nodes",
      "It describes trade-offs between Consistency, Availability, and Partition Tolerance",
      "It is used to compress distributed logs",
    ],
    answer:
      "It describes trade-offs between Consistency, Availability, and Partition Tolerance",
    explanation:
      "CAP theorem states that in a distributed system, you can only guarantee two out of the three: consistency, availability, or partition tolerance.",
    tags: ["distributed systems", "cap theorem"],
  },
  {
    prompt: "What is a race condition?",
    options: [
      "A function that finishes before another",
      "A situation where the outcome depends on the timing of uncontrollable events",
      "An optimized threading model",
      "A state where memory leaks occur regularly",
    ],
    answer:
      "A situation where the outcome depends on the timing of uncontrollable events",
    explanation:
      "Race conditions occur when multiple threads access shared data and try to change it at the same time, leading to unpredictable results.",
    tags: ["concurrency", "multithreading", "bugs"],
  },
  {
    prompt:
      "Why is horizontal scaling generally preferred over vertical scaling in distributed systems?",
    options: [
      "It is always cheaper",
      "It improves performance by reducing CPU usage",
      "It allows distributing the load across multiple machines",
      "It increases database write speeds",
    ],
    answer: "It allows distributing the load across multiple machines",
    explanation:
      "Horizontal scaling adds more machines to handle load, providing better fault tolerance and scalability than upgrading a single server.",
    tags: ["scaling", "cloud", "architecture"],
  },
  {
    prompt: "What is eventual consistency?",
    options: [
      "A system that updates all nodes instantly",
      "A guarantee that updates will never conflict",
      "A consistency model where data becomes consistent over time",
      "A technique for real-time data sync",
    ],
    answer: "A consistency model where data becomes consistent over time",
    explanation:
      "In eventual consistency, all updates will propagate to all nodes over time, used in systems like DynamoDB or Cassandra.",
    tags: ["consistency", "nosql", "distributed systems"],
  },
  {
    prompt: "What is a memory leak in JavaScript?",
    options: [
      "When a function returns null",
      "When variables are reassigned to new values",
      "When memory is allocated but not released due to lingering references",
      "When localStorage is full",
    ],
    answer:
      "When memory is allocated but not released due to lingering references",
    explanation:
      "Memory leaks occur when objects remain referenced even though they are no longer needed, preventing garbage collection.",
    tags: ["memory", "javascript", "performance"],
  },
  {
    prompt: "What is the purpose of a service mesh in microservices?",
    options: [
      "To deploy services to multiple servers",
      "To monitor user sessions",
      "To handle communication, traffic control, and observability between services",
      "To build user interfaces",
    ],
    answer:
      "To handle communication, traffic control, and observability between services",
    explanation:
      "A service mesh manages how microservices interact over the network, improving reliability and security (e.g., Istio, Linkerd).",
    tags: ["microservices", "infrastructure", "service mesh"],
  },
  {
    prompt:
      "What’s the benefit of using message queues in distributed systems?",
    options: [
      "They decrease latency",
      "They increase coupling between services",
      "They allow asynchronous communication and decoupling",
      "They are used for authentication",
    ],
    answer: "They allow asynchronous communication and decoupling",
    explanation:
      "Message queues like RabbitMQ and Kafka allow services to communicate without being tightly coupled, improving resilience and scalability.",
    tags: ["queues", "architecture", "scalability"],
  },
  {
    prompt: "What is tail call optimization?",
    options: [
      "A compiler optimization for loops",
      "A memory optimization for recursive calls",
      "A technique for managing memory leaks",
      "A way to reorder function arguments",
    ],
    answer: "A memory optimization for recursive calls",
    explanation:
      "Tail call optimization allows recursive functions to reuse stack frames, preventing stack overflow.",
    tags: ["recursion", "optimization", "javascript"],
  },
  {
    prompt: "What is a deadlock?",
    options: [
      "When two threads wait indefinitely for each other to release resources",
      "When a process crashes due to an exception",
      "When a CPU overheats",
      "When memory is corrupted",
    ],
    answer:
      "When two threads wait indefinitely for each other to release resources",
    explanation:
      "Deadlocks occur when threads hold resources and wait for others to release theirs, leading to a system freeze.",
    tags: ["concurrency", "deadlock", "threads"],
  },
  {
    prompt: "What is eventual consistency in distributed systems?",
    options: [
      "All nodes are always perfectly consistent",
      "Writes are instantly visible to all nodes",
      "Data will become consistent over time if no new updates are made",
      "Consistency is guaranteed only during read operations",
    ],
    answer: "Data will become consistent over time if no new updates are made",
    explanation:
      "Eventual consistency ensures that all replicas of data converge to the same value given sufficient time without new writes.",
    tags: ["distributed systems", "consistency", "databases"],
  },
  {
    prompt: "What is the CAP theorem?",
    options: [
      "A design pattern in security systems",
      "A theorem describing the trade-offs between CPU, API, and performance",
      "A principle that states you can only choose two out of Consistency, Availability, and Partition Tolerance",
      "A method for optimizing code",
    ],
    answer:
      "A principle that states you can only choose two out of Consistency, Availability, and Partition Tolerance",
    explanation:
      "The CAP theorem asserts that in a distributed system, it is impossible to simultaneously guarantee consistency, availability, and partition tolerance.",
    tags: ["cap theorem", "distributed systems"],
  },
  {
    prompt: "What is the purpose of the `volatile` keyword in multithreading?",
    options: [
      "To create immutable variables",
      "To cache a variable",
      "To prevent compiler optimizations that assume variable values do not change unexpectedly",
      "To make a variable global",
    ],
    answer:
      "To prevent compiler optimizations that assume variable values do not change unexpectedly",
    explanation:
      "`volatile` tells the compiler that a variable may change at any time outside the current thread, ensuring it reads from memory every time.",
    tags: ["multithreading", "concurrency"],
  },
  {
    prompt:
      "What is the difference between a monolith and a microservices architecture?",
    options: [
      "Monoliths use JavaScript, microservices use Java",
      "Microservices combine everything in one app, monoliths split it",
      "Monoliths are deployed as a single unit, while microservices are independently deployable services",
      "Microservices are always faster",
    ],
    answer:
      "Monoliths are deployed as a single unit, while microservices are independently deployable services",
    explanation:
      "Monoliths bundle all features into one application; microservices split them into independently deployable services.",
    tags: ["architecture", "microservices", "monolith"],
  },
  {
    prompt: "In event-driven systems, what is a common way to handle failures?",
    options: [
      "Retry logic with exponential backoff",
      "Ignoring failed messages",
      "Manual intervention only",
      "Restarting the entire service",
    ],
    answer: "Retry logic with exponential backoff",
    explanation:
      "Exponential backoff helps prevent overloading systems while retrying failed operations in event-driven architectures.",
    tags: ["event-driven", "resilience", "failures"],
  },
  {
    prompt: "What is a race condition?",
    options: [
      "A CPU scheduling technique",
      "An error caused by hardware failure",
      "A behavior where output depends on the sequence or timing of uncontrollable events",
      "A network latency issue",
    ],
    answer:
      "A behavior where output depends on the sequence or timing of uncontrollable events",
    explanation:
      "Race conditions occur when the outcome of a program depends on the order of execution of concurrent operations.",
    tags: ["concurrency", "threads", "bugs"],
  },
  {
    prompt:
      "What is the primary benefit of immutability in functional programming?",
    options: [
      "Better UI performance",
      "Reduced memory usage",
      "Simpler reasoning and avoidance of side effects",
      "Faster network calls",
    ],
    answer: "Simpler reasoning and avoidance of side effects",
    explanation:
      "Immutability makes it easier to predict behavior, especially in concurrent environments, by avoiding shared mutable state.",
    tags: ["functional programming", "immutability"],
  },
  {
    prompt: "What does 'sharding' mean in databases?",
    options: [
      "Storing all data on a single server",
      "Backing up the database daily",
      "Partitioning data across multiple machines to scale horizontally",
      "Encrypting data using shared keys",
    ],
    answer: "Partitioning data across multiple machines to scale horizontally",
    explanation:
      "Sharding splits a database into smaller, faster, more manageable parts called shards that are distributed across servers.",
    tags: ["databases", "scalability", "sharding"],
  },
  {
    prompt:
      "What is the difference between optimistic and pessimistic locking?",
    options: [
      "Optimistic locking always succeeds; pessimistic locking always fails",
      "Optimistic assumes no conflicts and checks at commit; pessimistic prevents conflicts by locking early",
      "They are two names for the same strategy",
      "Pessimistic locking only applies to APIs",
    ],
    answer:
      "Optimistic assumes no conflicts and checks at commit; pessimistic prevents conflicts by locking early",
    explanation:
      "Optimistic locking works well when collisions are rare; pessimistic locking prevents collisions by locking data ahead of time.",
    tags: ["locking", "databases", "concurrency"],
  },
  {
    prompt: "What is backpressure in reactive programming?",
    options: [
      "A way to slow down the UI thread",
      "A pattern to handle too many async events or messages",
      "A network congestion issue",
      "A logging strategy",
    ],
    answer: "A pattern to handle too many async events or messages",
    explanation:
      "Backpressure regulates the data flow when the consumer cannot keep up with the producer in a reactive system.",
    tags: ["reactive programming", "streams", "backpressure"],
  },
  {
    prompt: "What is the CAP theorem in distributed systems?",
    options: [
      "It defines the maximum capacity of a cluster",
      "It states a system can be Consistent, Available, and Partition-tolerant all at once",
      "It states a system can only have two of: Consistency, Availability, Partition tolerance",
      "It defines concurrency, accuracy, and performance",
    ],
    answer:
      "It states a system can only have two of: Consistency, Availability, Partition tolerance",
    explanation:
      "CAP theorem states that in a network partition, a distributed system must choose between consistency and availability.",
    tags: ["distributed systems", "cap theorem"],
  },
  {
    prompt: "What does 'CQRS' stand for?",
    options: [
      "Command Query Reliable System",
      "Command Query Runtime Separation",
      "Command Query Responsibility Segregation",
      "Code Quality Refactoring Scheme",
    ],
    answer: "Command Query Responsibility Segregation",
    explanation:
      "CQRS separates the read and write operations into different models for better scalability and flexibility.",
    tags: ["architecture", "cqrs", "design patterns"],
  },
  {
    prompt:
      "Which technique reduces the latency of distributed databases by placing data closer to users?",
    options: ["Replication", "Sharding", "Indexing", "Normalization"],
    answer: "Replication",
    explanation:
      "Replication duplicates data across nodes, reducing latency and increasing availability.",
    tags: ["databases", "replication", "performance"],
  },
  {
    prompt: "What is an idempotent API operation?",
    options: [
      "One that can be called once only",
      "One that has side effects every time",
      "One that returns different results on every call",
      "One that produces the same result no matter how many times it is called",
    ],
    answer:
      "One that produces the same result no matter how many times it is called",
    explanation:
      "Idempotency ensures that repeated requests have no additional effect after the initial one.",
    tags: ["api", "rest", "idempotency"],
  },
  {
    prompt: "What is 'eventual consistency'?",
    options: [
      "A strict consistency model used in ACID systems",
      "A strategy where changes are visible to all nodes immediately",
      "A model where data becomes consistent over time without guarantees of immediate synchronization",
      "A fail-safe strategy to avoid crashes",
    ],
    answer:
      "A model where data becomes consistent over time without guarantees of immediate synchronization",
    explanation:
      "Eventual consistency allows systems to remain available and scalable while tolerating temporary inconsistencies.",
    tags: ["distributed systems", "eventual consistency"],
  },
  {
    prompt: "What does a 'circuit breaker' pattern do in microservices?",
    options: [
      "It reroutes requests to a different microservice",
      "It restarts the system on failure",
      "It prevents cascading failures by temporarily halting requests to a failing service",
      "It encrypts sensitive data in transit",
    ],
    answer:
      "It prevents cascading failures by temporarily halting requests to a failing service",
    explanation:
      "Circuit breakers detect service failures and stop requests to prevent the system from being overwhelmed.",
    tags: ["microservices", "resilience", "patterns"],
  },
  {
    prompt:
      "What is the role of a 'message broker' in asynchronous architecture?",
    options: [
      "It secures endpoints",
      "It stores logs and metrics",
      "It coordinates transactions between APIs",
      "It receives, stores, and delivers messages between producers and consumers",
    ],
    answer:
      "It receives, stores, and delivers messages between producers and consumers",
    explanation:
      "Message brokers decouple services by handling async communication and delivery guarantees.",
    tags: ["architecture", "message queue", "asynchronous"],
  },
  {
    prompt: "Which consistency model is the strongest?",
    options: [
      "Eventual consistency",
      "Monotonic read consistency",
      "Causal consistency",
      "Linearizability",
    ],
    answer: "Linearizability",
    explanation:
      "Linearizability ensures that operations appear instantaneously and globally in a single order.",
    tags: ["consistency", "distributed systems"],
  },
  {
    prompt: "What is a monorepo?",
    options: [
      "A repository containing only one microservice",
      "A repo managed by a single developer",
      "A strategy to keep frontend and backend separate",
      "A single repository that holds code for multiple projects or services",
    ],
    answer:
      "A single repository that holds code for multiple projects or services",
    explanation:
      "Monorepos centralize codebases to improve code sharing and dependency management.",
    tags: ["devops", "monorepo", "version control"],
  },
  {
    prompt: "What is the main drawback of vertical scaling?",
    options: [
      "It requires complex load balancing",
      "It's hard to manage multiple services",
      "It has physical hardware limitations and cost inefficiencies",
      "It reduces database performance",
    ],
    answer: "It has physical hardware limitations and cost inefficiencies",
    explanation:
      "Vertical scaling increases resources on a single machine, which eventually hits physical and cost limits.",
    tags: ["scalability", "architecture", "cloud"],
  },
  {
    prompt: "What is the purpose of the CAP theorem in distributed systems?",
    options: [
      "To improve cache performance",
      "To define limits between Consistency, Availability, and Partition Tolerance",
      "To enable secure authentication",
      "To reduce network latency",
    ],
    answer:
      "To define limits between Consistency, Availability, and Partition Tolerance",
    explanation:
      "CAP theorem states that a distributed system can guarantee only two of the three: Consistency, Availability, and Partition Tolerance.",
    tags: ["distributed systems", "cap theorem", "architecture"],
  },
  {
    prompt: "What is the function of a reverse proxy?",
    options: [
      "It caches API responses on the client side",
      "It routes requests from clients to backend servers",
      "It handles client-side authentication",
      "It compresses frontend assets",
    ],
    answer: "It routes requests from clients to backend servers",
    explanation:
      "A reverse proxy forwards client requests to appropriate backend servers and can perform load balancing, caching, and SSL termination.",
    tags: ["networking", "proxy", "infrastructure"],
  },
  {
    prompt: "What does 'idempotent' mean in the context of HTTP methods?",
    options: [
      "The response varies each time it's called",
      "It has no side effects",
      "The operation can be repeated without changing the result",
      "It must be executed only once",
    ],
    answer: "The operation can be repeated without changing the result",
    explanation:
      "Idempotent operations, like GET or PUT, can be repeated without altering the resource state beyond the initial application.",
    tags: ["http", "api", "rest"],
  },
  {
    prompt: "Which AWS service is best suited for real-time messaging?",
    options: ["S3", "EC2", "SNS", "CloudFront"],
    answer: "SNS",
    explanation:
      "Amazon SNS (Simple Notification Service) allows real-time pub/sub messaging to distributed systems and applications.",
    tags: ["aws", "cloud", "messaging"],
  },
  {
    prompt: "What is a key advantage of using a CDN?",
    options: [
      "Improves SEO by adding structured data",
      "Increases server CPU usage",
      "Delivers content from edge locations closer to users",
      "Decreases image resolution for performance",
    ],
    answer: "Delivers content from edge locations closer to users",
    explanation:
      "CDNs serve cached content from geographically distributed servers to reduce latency and improve load times.",
    tags: ["cdn", "performance", "web"],
  },
  {
    prompt: "What is tail-call optimization in JavaScript?",
    options: [
      "Calling a function inside another function",
      "Rewriting recursive functions to use loops",
      "Optimizing memory usage by reusing the current stack frame for tail-recursive calls",
      "Inlining recursive functions at compile-time",
    ],
    answer:
      "Optimizing memory usage by reusing the current stack frame for tail-recursive calls",
    explanation:
      "Tail-call optimization allows certain recursive calls to reuse the stack frame of the current function, avoiding stack overflows.",
    tags: ["javascript", "optimization", "recursion"],
  },
  {
    prompt:
      "What is the primary goal of using CQRS (Command Query Responsibility Segregation)?",
    options: [
      "To unify database reads and writes",
      "To reduce network latency",
      "To separate read and write operations for better scalability and maintainability",
      "To increase server cache hits",
    ],
    answer:
      "To separate read and write operations for better scalability and maintainability",
    explanation:
      "CQRS separates commands (writes) from queries (reads), allowing them to be scaled and optimized independently.",
    tags: ["architecture", "cqrs", "scalability"],
  },
  {
    prompt: "In JavaScript, what does the `?.` operator do?",
    options: [
      "It creates a new optional value",
      "It checks for strict equality",
      "It safely accesses a property without throwing if the reference is null or undefined",
      "It defines optional parameters",
    ],
    answer:
      "It safely accesses a property without throwing if the reference is null or undefined",
    explanation:
      "The optional chaining (`?.`) operator allows you to safely access deeply nested properties without explicit null checks.",
    tags: ["javascript", "optional chaining", "syntax"],
  },
  {
    prompt: "Which of the following best describes a monorepo?",
    options: [
      "A single Git repo containing one large application",
      "Multiple apps and packages maintained in a single repository",
      "A database of all environment variables",
      "An archive of previous app versions",
    ],
    answer: "Multiple apps and packages maintained in a single repository",
    explanation:
      "A monorepo is a single repository that stores code for multiple applications or packages, enabling shared tooling and versioning.",
    tags: ["devops", "monorepo", "architecture"],
  },
  {
    prompt:
      "What is the difference between `useEffect` and `useLayoutEffect` in React?",
    options: [
      "`useEffect` runs before paint, `useLayoutEffect` after paint",
      "`useLayoutEffect` runs synchronously after DOM mutations, `useEffect` runs asynchronously after paint",
      "They are the same",
      "`useEffect` is used in SSR only",
    ],
    answer:
      "`useLayoutEffect` runs synchronously after DOM mutations, `useEffect` runs asynchronously after paint",
    explanation:
      "`useLayoutEffect` is useful when you need to read layout and perform synchronously before the browser paints, while `useEffect` is deferred.",
    tags: ["react", "hooks", "performance"],
  },
  {
    prompt: "What does 'eventual consistency' mean in distributed systems?",
    options: [
      "Data is always consistent across all nodes",
      "Updates are visible immediately",
      "All nodes will become consistent over time if no new updates are made",
      "Each node always has its own version of truth",
    ],
    answer:
      "All nodes will become consistent over time if no new updates are made",
    explanation:
      "Eventual consistency means that in the absence of new writes, all reads will eventually return the same data.",
    tags: ["distributed systems", "consistency", "architecture"],
  },
  {
    prompt: "What is the purpose of `z-index` in CSS?",
    options: [
      "To scale elements proportionally",
      "To apply grayscale filters",
      "To control the stack order of overlapping elements",
      "To define transition durations",
    ],
    answer: "To control the stack order of overlapping elements",
    explanation:
      "`z-index` determines the vertical stacking order of elements that overlap.",
    tags: ["css", "layout", "positioning"],
  },
  {
    prompt:
      "What is the advantage of using `Immutable.js` or similar libraries?",
    options: [
      "They mutate state objects directly",
      "They reduce bundle size",
      "They help manage immutable data structures efficiently",
      "They provide better browser compatibility",
    ],
    answer: "They help manage immutable data structures efficiently",
    explanation:
      "`Immutable.js` provides data structures that never change, helping to avoid bugs from unexpected state mutations.",
    tags: ["javascript", "immutability", "state"],
  },
  {
    prompt:
      "Which protocol is typically used for secure communication over the web?",
    options: ["FTP", "HTTP", "HTTPS", "SCP"],
    answer: "HTTPS",
    explanation:
      "HTTPS uses TLS/SSL to encrypt communication between the browser and the server.",
    tags: ["security", "web", "protocol"],
  },
  {
    prompt: "What is a 'race condition' in programming?",
    options: [
      "When a program runs slower than expected",
      "When multiple operations try to access shared resources simultaneously leading to unexpected results",
      "When an API fails due to a timeout",
      "When functions are executed out of order",
    ],
    answer:
      "When multiple operations try to access shared resources simultaneously leading to unexpected results",
    explanation:
      "A race condition happens when concurrent processes interfere with each other leading to unpredictable behavior.",
    tags: ["concurrency", "bugs", "threads"],
  },
  {
    prompt: "What does 'tail call optimization' refer to in JavaScript?",
    options: [
      "A technique to optimize array tail operations",
      "An optimization that reuses stack frames for recursive calls",
      "A method to delay function execution until needed",
      "A process of cleaning up unused memory",
    ],
    answer: "An optimization that reuses stack frames for recursive calls",
    explanation:
      "Tail call optimization reuses the current function's stack frame for a recursive call, preventing stack overflows.",
    tags: ["javascript", "recursion", "performance"],
  },
  {
    prompt: "Which of the following best describes a 'closure' in JavaScript?",
    options: [
      "An object that contains only private methods",
      "A function bundled with its lexical environment",
      "A function that executes immediately",
      "A variable declared outside a function",
    ],
    answer: "A function bundled with its lexical environment",
    explanation:
      "Closures are functions that retain access to variables from their scope even after the outer function has returned.",
    tags: ["javascript", "closure", "scope"],
  },
  {
    prompt: "What is the purpose of 'debouncing' in frontend development?",
    options: [
      "To speed up API requests",
      "To delay execution of a function until a pause in calls",
      "To prevent rendering of large DOM trees",
      "To cache function results",
    ],
    answer: "To delay execution of a function until a pause in calls",
    explanation:
      "Debouncing limits how often a function is called by waiting until there's a pause in calls, often used for input handlers.",
    tags: ["performance", "debounce", "javascript"],
  },
  {
    prompt:
      "What is a common use-case for the `Map` object over `Object` in JavaScript?",
    options: [
      "Storing unique primitive values only",
      "Maintaining insertion order of keys",
      "Faster lookups for string keys",
      "Storing arrays as keys",
    ],
    answer: "Maintaining insertion order of keys",
    explanation:
      "`Map` maintains insertion order and supports any value as a key, unlike regular `Object`.",
    tags: ["javascript", "map", "data structures"],
  },
  {
    prompt: "Which type of HTTP request is idempotent?",
    options: ["POST", "DELETE", "PUT", "PATCH"],
    answer: "PUT",
    explanation:
      "PUT is idempotent, meaning multiple identical requests should have the same effect as a single request.",
    tags: ["http", "rest", "networking"],
  },
  {
    prompt:
      "What is the primary purpose of the `Content-Security-Policy` (CSP) header?",
    options: [
      "To allow cookies from third-party domains",
      "To prevent Cross-Site Request Forgery (CSRF)",
      "To restrict the sources from which content can be loaded",
      "To encrypt HTTP responses",
    ],
    answer: "To restrict the sources from which content can be loaded",
    explanation:
      "CSP helps mitigate XSS and other attacks by allowing site owners to specify trusted content sources.",
    tags: ["security", "csp", "web"],
  },
  {
    prompt: "What does the 'SameSite' attribute in a cookie do?",
    options: [
      "Specifies which domain can access the cookie",
      "Ensures the cookie is encrypted",
      "Controls when cookies are sent with cross-site requests",
      "Indicates whether a cookie is secure",
    ],
    answer: "Controls when cookies are sent with cross-site requests",
    explanation:
      "The SameSite attribute helps prevent CSRF attacks by limiting cookie sending to same-site contexts.",
    tags: ["security", "cookies", "http"],
  },
  {
    prompt:
      "Which technique is used to reduce load on backend servers in GraphQL?",
    options: [
      "REST caching",
      "Resolvers",
      "Query batching and persisted queries",
      "HTTP polling",
    ],
    answer: "Query batching and persisted queries",
    explanation:
      "GraphQL servers can use query batching and persisted queries to reduce parsing and network load.",
    tags: ["graphql", "optimization", "api"],
  },
  {
    prompt:
      "In microservices architecture, what does 'eventual consistency' mean?",
    options: [
      "Data is always synchronized in real-time",
      "Data will become consistent over time without strict synchronization",
      "Each service must use the same database",
      "All services are stateless",
    ],
    answer:
      "Data will become consistent over time without strict synchronization",
    explanation:
      "Eventual consistency means the system allows temporary inconsistency, resolving it asynchronously.",
    tags: ["microservices", "architecture", "consistency"],
  },
  {
    prompt: "What is the purpose of a reverse proxy in web architecture?",
    options: [
      "To cache client requests locally",
      "To anonymize client requests",
      "To route incoming requests to appropriate backend servers",
      "To directly serve static files",
    ],
    answer: "To route incoming requests to appropriate backend servers",
    explanation:
      "Reverse proxies distribute client requests to servers, offering load balancing, security, and caching.",
    tags: ["architecture", "proxy", "network"],
  },
  {
    prompt:
      "What does the 'volatile' keyword ensure in multithreaded programming?",
    options: [
      "The variable cannot be changed",
      "The variable is stored in GPU memory",
      "Changes to the variable are visible to all threads immediately",
      "The variable is stored in a cache",
    ],
    answer: "Changes to the variable are visible to all threads immediately",
    explanation:
      "`volatile` ensures visibility of changes across threads, avoiding stale values from CPU cache.",
    tags: ["concurrency", "multithreading", "memory"],
  },
  {
    prompt: "What does ACID stand for in the context of databases?",
    options: [
      "Automatic, Consistent, Isolated, Durable",
      "Atomicity, Consistency, Isolation, Durability",
      "Availability, Concurrency, Integrity, Distribution",
      "Atomicity, Concurrency, Indexing, Durability",
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation:
      "ACID ensures reliable processing of database transactions: atomic, consistent, isolated, and durable.",
    tags: ["database", "transactions", "theory"],
  },
  {
    prompt:
      "Which algorithm is commonly used in distributed systems for leader election?",
    options: ["Round Robin", "Paxos", "LRU", "Breadth-First Search"],
    answer: "Paxos",
    explanation:
      "Paxos is a consensus algorithm used for ensuring consistency and leader election in distributed systems.",
    tags: ["distributed", "algorithms", "paxos"],
  },
  {
    prompt: "What is a memory leak in the context of web applications?",
    options: [
      "When too many cookies are stored",
      "When HTTP requests fail repeatedly",
      "When allocated memory is not released",
      "When a page fails to render",
    ],
    answer: "When allocated memory is not released",
    explanation:
      "Memory leaks occur when an app retains memory that is no longer needed, leading to performance issues.",
    tags: ["memory", "web", "performance"],
  },
  {
    prompt:
      "What does a load balancer typically use to determine which server handles a request?",
    options: [
      "Server price",
      "IP address randomness",
      "Health checks and load distribution strategies",
      "Request URL hash",
    ],
    answer: "Health checks and load distribution strategies",
    explanation:
      "Load balancers use server health and strategies like round-robin or least-connections to distribute traffic.",
    tags: ["infrastructure", "networking", "scalability"],
  },
  {
    prompt: "What is the role of a reverse proxy server?",
    options: [
      "To encrypt backend database queries",
      "To hide client IP addresses from the browser",
      "To route client requests to backend servers",
      "To serve as a firewall",
    ],
    answer: "To route client requests to backend servers",
    explanation:
      "A reverse proxy sits in front of backend servers and forwards client requests, often adding caching or SSL.",
    tags: ["network", "proxy", "architecture"],
  },
  {
    prompt:
      "Which HTTP status code indicates that a resource has been permanently moved?",
    options: ["301", "302", "404", "500"],
    answer: "301",
    explanation: "HTTP 301 indicates a permanent redirect to a new location.",
    tags: ["http", "web", "status-codes"],
  },
  {
    prompt: "What is tail call optimization (TCO)?",
    options: [
      "Reducing the number of tail function calls",
      "Caching return values of recursive calls",
      "Reusing stack frames for tail-recursive calls",
      "Inlining function calls at runtime",
    ],
    answer: "Reusing stack frames for tail-recursive calls",
    explanation:
      "TCO reuses the current stack frame for tail-recursive calls, preventing stack overflows.",
    tags: ["javascript", "optimization", "recursion"],
  },
  {
    prompt: "What is a CAP theorem trade-off?",
    options: [
      "Scalability vs Performance vs Cost",
      "Consistency vs Availability vs Partition tolerance",
      "Concurrency vs Atomicity vs Durability",
      "Caching vs Latency vs Load balancing",
    ],
    answer: "Consistency vs Availability vs Partition tolerance",
    explanation:
      "CAP theorem states that a distributed system can only guarantee 2 of: Consistency, Availability, Partition tolerance.",
    tags: ["distributed", "systems", "cap"],
  },
  {
    prompt: "Which part of the event loop handles Promises in JavaScript?",
    options: [
      "Macrotask queue",
      "Microtask queue",
      "Web API queue",
      "Render queue",
    ],
    answer: "Microtask queue",
    explanation:
      "Promise callbacks are queued in the microtask queue and executed after the current task finishes.",
    tags: ["event-loop", "javascript", "async"],
  },
  {
    prompt: "What does the 'SameSite' attribute on cookies control?",
    options: [
      "Whether cookies are encrypted",
      "If cookies can be accessed via JavaScript",
      "Cross-site cookie transmission behavior",
      "The expiration date of a cookie",
    ],
    answer: "Cross-site cookie transmission behavior",
    explanation:
      "`SameSite` controls whether cookies are sent with cross-site requests to help prevent CSRF attacks.",
    tags: ["cookies", "security", "web"],
  },
  {
    prompt:
      "What does 'immutability' mean in the context of functional programming?",
    options: [
      "Data can only be changed with special permissions",
      "Variables are never declared with `let` or `var`",
      "Data cannot be changed after it's created",
      "Functions always return promises",
    ],
    answer: "Data cannot be changed after it's created",
    explanation:
      "Immutability ensures objects and data structures can't be modified, enabling predictable behavior.",
    tags: ["functional", "javascript", "immutability"],
  },
  {
    prompt: "Which method is used in Node.js to read environment variables?",
    options: [
      "process.readEnv()",
      "env.get()",
      "process.env",
      "require('env')",
    ],
    answer: "process.env",
    explanation:
      "Node.js exposes environment variables through the global `process.env` object.",
    tags: ["nodejs", "env", "config"],
  },
  {
    prompt: "What is the role of 'memoization' in performance optimization?",
    options: [
      "Parallelizing function execution",
      "Caching function results to avoid recomputation",
      "Converting recursion to iteration",
      "Reducing bundle size",
    ],
    answer: "Caching function results to avoid recomputation",
    explanation:
      "Memoization stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
    tags: ["optimization", "performance", "memoization"],
  },
  {
    prompt: "Which protocol is used for secure communication over HTTP?",
    options: ["SSH", "SSL", "TLS", "SFTP"],
    answer: "TLS",
    explanation:
      "TLS (Transport Layer Security) is used to secure HTTP connections, replacing older SSL.",
    tags: ["http", "tls", "security"],
  },
  {
    prompt: "What is the purpose of the `key` prop in React lists?",
    options: [
      "It provides styling for list items",
      "It improves performance by identifying unique elements",
      "It binds event listeners to items",
      "It enables lazy loading of list elements",
    ],
    answer: "It improves performance by identifying unique elements",
    explanation:
      "The `key` prop helps React identify which items have changed, been added, or removed, enabling efficient re-rendering.",
    tags: ["react", "rendering", "performance"],
  },
  {
    prompt: "What is the difference between `debounce` and `throttle`?",
    options: [
      "`debounce` limits the number of calls, `throttle` delays execution",
      "`debounce` calls once per event, `throttle` calls once per time period",
      "`debounce` delays until no calls, `throttle` limits to fixed intervals",
      "`debounce` cancels async functions, `throttle` restarts them",
    ],
    answer:
      "`debounce` delays until no calls, `throttle` limits to fixed intervals",
    explanation:
      "`debounce` waits for inactivity, `throttle` ensures a function is called at most once every N milliseconds.",
    tags: ["performance", "javascript", "timing"],
  },
  {
    prompt:
      "Which data structure is best suited for implementing an LRU cache?",
    options: [
      "Stack and Map",
      "Queue and Set",
      "Doubly Linked List and Hash Map",
      "Trie and Array",
    ],
    answer: "Doubly Linked List and Hash Map",
    explanation:
      "An LRU cache uses a Hash Map for O(1) lookups and a Doubly Linked List to maintain item order efficiently.",
    tags: ["data-structures", "lru", "cache", "system-design"],
  },
  {
    prompt: "In GraphQL, what does the `@deprecated` directive do?",
    options: [
      "Removes the field from the schema",
      "Marks a field as read-only",
      "Flags a field as no longer recommended for use",
      "Marks a field as internal-only",
    ],
    answer: "Flags a field as no longer recommended for use",
    explanation:
      "`@deprecated` allows schema maintainers to indicate a field should no longer be used, often providing a reason.",
    tags: ["graphql", "api", "schema"],
  },
  {
    prompt: "What does a 429 HTTP status code represent?",
    options: [
      "Client error - bad request",
      "Authentication failed",
      "Too many requests",
      "Service unavailable",
    ],
    answer: "Too many requests",
    explanation:
      "429 indicates the user has sent too many requests in a given amount of time, often used in rate limiting.",
    tags: ["http", "api", "rate-limiting"],
  },
  {
    prompt: "What is tail call optimization (TCO)?",
    options: [
      "Optimizing recursive functions by caching results",
      "Rewriting loops into recursion for clarity",
      "A technique to reuse stack frames in tail-recursive calls",
      "Using closures to avoid stack overflows",
    ],
    answer: "A technique to reuse stack frames in tail-recursive calls",
    explanation:
      "TCO allows some recursive functions to avoid growing the call stack by reusing the current stack frame for tail calls.",
    tags: ["javascript", "performance", "recursion"],
  },
  {
    prompt: "In Node.js, what is the purpose of the `cluster` module?",
    options: [
      "To manage worker threads for parallel processing",
      "To create clusters of microservices",
      "To spawn child processes to utilize multi-core systems",
      "To group related modules into clusters",
    ],
    answer: "To spawn child processes to utilize multi-core systems",
    explanation:
      "`cluster` allows Node.js to fork the process and run multiple instances to better use CPU cores.",
    tags: ["nodejs", "performance", "processes"],
  },
  {
    prompt: "Which consistency model is provided by DynamoDB by default?",
    options: [
      "Strong consistency",
      "Eventual consistency",
      "Causal consistency",
      "Linearizability",
    ],
    answer: "Eventual consistency",
    explanation:
      "DynamoDB returns eventually consistent reads by default, though you can request strongly consistent reads.",
    tags: ["aws", "dynamodb", "databases"],
  },
  {
    prompt: "What does the `volatile` keyword indicate in Java?",
    options: [
      "The variable should be optimized for performance",
      "The variable is immutable",
      "The variable may be modified by multiple threads",
      "The variable is stored on the heap",
    ],
    answer: "The variable may be modified by multiple threads",
    explanation:
      "`volatile` ensures visibility of changes to variables across threads, avoiding caching issues.",
    tags: ["java", "multithreading", "concurrency"],
  },
  {
    prompt: "What is the purpose of Kubernetes `livenessProbe`?",
    options: [
      "To detect when a container is ready to accept traffic",
      "To restart containers that are not functioning properly",
      "To autoscale services based on traffic",
      "To enforce memory limits on a container",
    ],
    answer: "To restart containers that are not functioning properly",
    explanation:
      "`livenessProbe` checks if a container is still alive and should be restarted if it's failing.",
    tags: ["kubernetes", "devops", "containers"],
  },
  {
    prompt: "What is the purpose of the `Map` object in JavaScript?",
    options: [
      "To store key-value pairs with string keys only",
      "To enforce immutability on data structures",
      "To store key-value pairs with any type of keys",
      "To map functions over arrays",
    ],
    answer: "To store key-value pairs with any type of keys",
    explanation:
      "`Map` allows any value (objects, functions, etc.) to be used as keys, unlike plain objects.",
    tags: ["javascript", "data-structures", "es6"],
  },
  {
    prompt:
      "Which HTTP status code indicates a client error due to invalid input?",
    options: ["200", "301", "400", "500"],
    answer: "400",
    explanation:
      "`400 Bad Request` indicates the server couldn't understand the request due to malformed syntax.",
    tags: ["http", "web", "errors"],
  },
  {
    prompt:
      "What is the main difference between `useMemo` and `useCallback` in React?",
    options: [
      "`useMemo` memoizes values, `useCallback` memoizes functions",
      "`useMemo` causes side effects, `useCallback` does not",
      "`useMemo` triggers re-renders, `useCallback` prevents them",
      "`useMemo` is slower than `useCallback`",
    ],
    answer: "`useMemo` memoizes values, `useCallback` memoizes functions",
    explanation:
      "`useMemo` returns a memoized value, while `useCallback` returns a memoized function.",
    tags: ["react", "hooks", "optimization"],
  },
  {
    prompt: "In GraphQL, what does the `@deprecated` directive do?",
    options: [
      "Marks a field or enum value as deprecated",
      "Removes the field from the schema",
      "Logs deprecated fields in the server console",
      "Automatically maps to REST APIs",
    ],
    answer: "Marks a field or enum value as deprecated",
    explanation:
      "`@deprecated` is used to signal that a field or enum is no longer recommended for use.",
    tags: ["graphql", "schema", "api"],
  },
  {
    prompt: "Which of the following best defines `backpressure` in streams?",
    options: [
      "Data flows too slowly through the stream",
      "The stream contains too many transformations",
      "The readable stream is sending data faster than the writable stream can handle",
      "The stream has reached end-of-file",
    ],
    answer:
      "The readable stream is sending data faster than the writable stream can handle",
    explanation:
      "Backpressure occurs when the destination can't consume data as fast as it's provided.",
    tags: ["nodejs", "streams", "performance"],
  },
  {
    prompt: "What is the purpose of the `z-index` property in CSS?",
    options: [
      "To control the opacity of an element",
      "To set the stacking order of elements",
      "To align elements to the center",
      "To define the transition duration",
    ],
    answer: "To set the stacking order of elements",
    explanation:
      "`z-index` defines the vertical stacking order of overlapping elements.",
    tags: ["css", "layout", "styling"],
  },
  {
    prompt: "Which AWS service is primarily used for serverless computing?",
    options: ["EC2", "S3", "Lambda", "RDS"],
    answer: "Lambda",
    explanation:
      "AWS Lambda lets you run code without provisioning or managing servers.",
    tags: ["aws", "cloud", "serverless"],
  },
  {
    prompt: "In SQL, which clause is used to filter groups after aggregation?",
    options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
    answer: "HAVING",
    explanation:
      "`HAVING` is used to filter rows after `GROUP BY` has aggregated data.",
    tags: ["sql", "database", "aggregation"],
  },
  {
    prompt: "What does the term 'hoisting' refer to in JavaScript?",
    options: [
      "Variables being moved to the top of their scope before code execution",
      "Raising events to parent components",
      "Migrating data to the cloud",
      "Lazy-loading of modules",
    ],
    answer:
      "Variables being moved to the top of their scope before code execution",
    explanation:
      "In JavaScript, variable and function declarations are hoisted to the top of their scope.",
    tags: ["javascript", "basics", "execution"],
  },
  {
    prompt: "Which HTTP header is used to indicate the type of content sent?",
    options: ["Authorization", "Accept", "Content-Type", "Host"],
    answer: "Content-Type",
    explanation:
      "`Content-Type` tells the server what type of data is being sent in the request.",
    tags: ["http", "headers", "web"],
  },
  {
    prompt: "What does CAP theorem stand for in distributed systems?",
    options: [
      "Consistency, Availability, Partition tolerance",
      "Cache, Access, Performance",
      "Control, Authentication, Persistence",
      "Connection, Application, Protocol",
    ],
    answer: "Consistency, Availability, Partition tolerance",
    explanation:
      "CAP theorem states that a distributed system can only guarantee two out of three: consistency, availability, and partition tolerance.",
    tags: ["system-design", "distributed-systems", "theory"],
  },
  {
    prompt: "What is the main purpose of Kubernetes?",
    options: [
      "To manage relational databases",
      "To build web frontends",
      "To orchestrate containerized applications",
      "To write TypeScript definitions",
    ],
    answer: "To orchestrate containerized applications",
    explanation:
      "Kubernetes automates deployment, scaling, and management of containerized applications.",
    tags: ["kubernetes", "devops", "containers"],
  },
  {
    prompt: "Which principle is NOT part of the SOLID acronym?",
    options: [
      "Single Responsibility Principle",
      "Open/Closed Principle",
      "Interface Inheritance Principle",
      "Dependency Inversion Principle",
    ],
    answer: "Interface Inheritance Principle",
    explanation:
      "`Interface Inheritance Principle` is not part of SOLID. The correct one is `Interface Segregation Principle`.",
    tags: ["oop", "solid", "principles"],
  },
  {
    prompt: "What is a benefit of using GraphQL over REST?",
    options: [
      "It only works with MongoDB",
      "You can request exactly the data you need",
      "It uses fewer lines of code in Java",
      "It replaces the need for a backend",
    ],
    answer: "You can request exactly the data you need",
    explanation:
      "GraphQL allows clients to specify the exact shape of the data they want to receive.",
    tags: ["graphql", "api", "backend"],
  },
  {
    prompt: "Which of the following best describes event sourcing?",
    options: [
      "An architecture where each change is stored as an event",
      "A pattern for polling HTTP endpoints",
      "A method for encrypting user events",
      "An async pattern used in React",
    ],
    answer: "An architecture where each change is stored as an event",
    explanation:
      "Event sourcing stores all changes as a sequence of events, allowing complete reconstruction of state.",
    tags: ["architecture", "event-driven", "backend"],
  },
  {
    prompt: "In the context of Node.js, what does the `cluster` module enable?",
    options: [
      "Multithreaded file I/O",
      "Running multiple Node.js processes to handle load",
      "Grouping related modules together",
      "Bundling code for production",
    ],
    answer: "Running multiple Node.js processes to handle load",
    explanation:
      "The `cluster` module allows Node.js to take advantage of multi-core systems by creating child processes that share the same server port.",
    tags: ["nodejs", "performance", "backend"],
  },
  {
    prompt: "What is the purpose of the `z-index` property in CSS?",
    options: [
      "To apply zoom to an element",
      "To sort elements alphabetically",
      "To control stacking order",
      "To calculate contrast ratios",
    ],
    answer: "To control stacking order",
    explanation:
      "`z-index` determines the stack level of elements. Higher `z-index` values are displayed in front of lower ones.",
    tags: ["css", "ui"],
  },
  {
    prompt: "What is the advantage of using an LRU cache?",
    options: [
      "Ensures the oldest accessed items are retained",
      "Maximizes disk writes",
      "Reduces memory by evicting the most recently used item",
      "Improves performance by discarding least recently used items first",
    ],
    answer:
      "Improves performance by discarding least recently used items first",
    explanation:
      "LRU (Least Recently Used) caches remove the least recently accessed items when the cache is full, improving efficiency.",
    tags: ["caching", "performance", "system-design"],
  },
  {
    prompt:
      "In SQL, what does the `WITH` clause (Common Table Expression) allow you to do?",
    options: [
      "Grant permissions to tables",
      "Declare temporary result sets for complex queries",
      "Create new database users",
      "Enable foreign key checks",
    ],
    answer: "Declare temporary result sets for complex queries",
    explanation:
      "The `WITH` clause creates temporary named result sets (CTEs) that can simplify complex SQL queries.",
    tags: ["sql", "database", "queries"],
  },
  {
    prompt:
      "What is the main difference between SSR and CSR in web applications?",
    options: [
      "CSR generates HTML on the server, SSR in the browser",
      "SSR improves SEO and loads faster initially",
      "CSR can’t use JavaScript",
      "SSR doesn’t allow interactivity",
    ],
    answer: "SSR improves SEO and loads faster initially",
    explanation:
      "SSR renders HTML on the server, improving first load time and SEO. CSR renders in-browser after JS loads.",
    tags: ["web", "ssr", "performance", "seo"],
  },
  {
    prompt: "What does a reverse proxy do in a web server setup?",
    options: [
      "Serves static files directly",
      "Redirects traffic from HTTPS to HTTP",
      "Forwards client requests to backend servers",
      "Authenticates users at the frontend",
    ],
    answer: "Forwards client requests to backend servers",
    explanation:
      "A reverse proxy routes incoming requests to one or more backend servers, often adding caching, load balancing, or security features.",
    tags: ["networking", "backend", "infrastructure"],
  },
  {
    prompt: "What does the CAP theorem state about distributed systems?",
    options: [
      "They must use Kubernetes for orchestration",
      "They can have consistency, availability, and partition tolerance all at once",
      "They can only guarantee two of consistency, availability, and partition tolerance",
      "They must use eventual consistency always",
    ],
    answer:
      "They can only guarantee two of consistency, availability, and partition tolerance",
    explanation:
      "The CAP theorem states that a distributed system can only provide two of the three: consistency, availability, and partition tolerance.",
    tags: ["system-design", "distributed-systems", "theory"],
  },
  {
    prompt: "What is the purpose of a `saga` in Redux-Saga?",
    options: [
      "To reduce boilerplate code in reducers",
      "To manage complex async flows using generator functions",
      "To replace Redux entirely",
      "To simplify component styling",
    ],
    answer: "To manage complex async flows using generator functions",
    explanation:
      "Redux-Saga uses generator functions (sagas) to handle side effects in a clean, testable way.",
    tags: ["redux", "saga", "async", "state-management"],
  },
  {
    prompt: "What’s a common use case for using `debounce`?",
    options: [
      "Triggering a function on every keystroke",
      "Delaying execution of a function until input stops changing",
      "Preventing duplicate server instances",
      "Caching a network response indefinitely",
    ],
    answer: "Delaying execution of a function until input stops changing",
    explanation:
      "`debounce` is used to delay a function until a user stops triggering it — often used in search input fields.",
    tags: ["performance", "ui", "javascript"],
  },
  {
    prompt:
      "Why are `microtasks` prioritized over `macrotasks` in JavaScript's event loop?",
    options: [
      "They are part of the browser rendering pipeline",
      "They block all DOM updates",
      "They are required to complete before the next render phase",
      "They run in parallel threads",
    ],
    answer: "They are required to complete before the next render phase",
    explanation:
      "Microtasks (e.g., Promises) run right after the current task finishes and before rendering or any macrotask.",
    tags: ["event-loop", "javascript", "async"],
  },
  {
    prompt: "What is a memory leak in JavaScript?",
    options: [
      "When a variable is deleted too early",
      "When memory is constantly allocated but never released",
      "When memory is shared across modules",
      "When garbage collection fails completely",
    ],
    answer: "When memory is constantly allocated but never released",
    explanation:
      "A memory leak happens when objects are unintentionally retained in memory, preventing garbage collection and degrading performance.",
    tags: ["javascript", "performance", "memory"],
  },
  {
    prompt: "What’s the difference between horizontal and vertical scaling?",
    options: [
      "Horizontal adds more power to one server; vertical adds more servers",
      "Vertical adds more power to one server; horizontal adds more servers",
      "Horizontal is for frontend, vertical for backend",
      "They are equivalent terms",
    ],
    answer:
      "Vertical adds more power to one server; horizontal adds more servers",
    explanation:
      "Vertical scaling upgrades the existing machine. Horizontal scaling adds more machines to distribute the load.",
    tags: ["scalability", "system-design", "backend"],
  },
  {
    prompt: "What is a monorepo?",
    options: [
      "A database schema with only one table",
      "A frontend-only codebase",
      "A version control strategy where multiple projects live in one repository",
      "A microservice pattern",
    ],
    answer:
      "A version control strategy where multiple projects live in one repository",
    explanation:
      "Monorepos store multiple projects (often tightly coupled) in a single repository for shared tooling and coordinated versioning.",
    tags: ["monorepo", "devops", "architecture"],
  },
  {
    prompt: "How does `preload` differ from `prefetch` in HTML link tags?",
    options: [
      "`preload` is for future navigations; `prefetch` is for current critical assets",
      "`preload` loads critical resources now; `prefetch` loads resources for future navigation",
      "`prefetch` is only for JavaScript",
      "They are interchangeable",
    ],
    answer:
      "`preload` loads critical resources now; `prefetch` loads resources for future navigation",
    explanation:
      "`preload` hints the browser to fetch high-priority assets early; `prefetch` is for resources likely needed for future navigation.",
    tags: ["performance", "html", "web"],
  },
  {
    prompt: "What is the purpose of `useDeferredValue` in React?",
    options: [
      "To delay a state update by N milliseconds",
      "To prevent unnecessary re-renders",
      "To mark a value as non-urgent and allow higher-priority updates to interrupt it",
      "To batch multiple state updates together",
    ],
    answer:
      "To mark a value as non-urgent and allow higher-priority updates to interrupt it",
    explanation:
      "`useDeferredValue` is used to prioritize user interactions by letting less important updates wait until the browser is idle.",
    tags: ["react", "performance", "concurrent"],
  },
  {
    prompt: "What does the `SameSite` cookie attribute control?",
    options: [
      "Whether a cookie is HTTP-only",
      "Whether a cookie is accessible via JavaScript",
      "Whether a cookie is sent with cross-site requests",
      "Whether a cookie is stored in sessionStorage",
    ],
    answer: "Whether a cookie is sent with cross-site requests",
    explanation:
      "`SameSite` restricts how cookies are sent with requests from external sites, helping protect against CSRF attacks.",
    tags: ["cookies", "security", "web"],
  },
  {
    prompt:
      "What is the role of a service mesh in a microservices architecture?",
    options: [
      "To run frontend services",
      "To manage microservices' network communication, observability, and security",
      "To deploy containers",
      "To manage SQL databases",
    ],
    answer:
      "To manage microservices' network communication, observability, and security",
    explanation:
      "A service mesh like Istio helps handle service discovery, traffic routing, telemetry, and security across microservices.",
    tags: ["microservices", "architecture", "devops"],
  },
  {
    prompt:
      "What’s the key difference between a cold start and a warm start in serverless?",
    options: [
      "Cold start uses Node.js, warm uses Python",
      "Cold start is when a container is reused, warm is when a new one is started",
      "Cold start is slower because it initializes the function environment; warm uses an already-initialized one",
      "Warm start refers to restarting after crash",
    ],
    answer:
      "Cold start is slower because it initializes the function environment; warm uses an already-initialized one",
    explanation:
      "Serverless platforms like AWS Lambda spin up containers. A cold start initializes everything; a warm start reuses a ready environment.",
    tags: ["serverless", "cloud", "aws"],
  },
  {
    prompt: "What is the CAP theorem in distributed systems?",
    options: [
      "Consistency, Accuracy, Processing",
      "Concurrent, Asynchronous, Persistent",
      "Consistency, Availability, Partition Tolerance",
      "Caching, Authentication, Performance",
    ],
    answer: "Consistency, Availability, Partition Tolerance",
    explanation:
      "CAP theorem states that in distributed systems, you can only fully guarantee 2 of the 3: consistency, availability, and partition tolerance.",
    tags: ["system-design", "distributed", "database"],
  },
  {
    prompt: "What is a race condition?",
    options: [
      "A problem where multiple requests are sent to the same endpoint",
      "An issue where the result of a computation depends on the timing of uncontrollable events",
      "A conflict between UI states",
      "A scheduling conflict in a queue",
    ],
    answer:
      "An issue where the result of a computation depends on the timing of uncontrollable events",
    explanation:
      "Race conditions occur when asynchronous or concurrent operations interfere unpredictably, causing bugs or instability.",
    tags: ["javascript", "async", "concurrency", "bugs"],
  },
  {
    prompt: "What is the main benefit of using Web Workers in JavaScript?",
    options: [
      "They allow you to manipulate the DOM faster",
      "They run scripts in the background thread, preventing UI blocking",
      "They improve caching",
      "They reduce JavaScript bundle size",
    ],
    answer: "They run scripts in the background thread, preventing UI blocking",
    explanation:
      "Web Workers run in a separate thread, ideal for offloading CPU-intensive tasks without freezing the UI.",
    tags: ["javascript", "performance", "webworker"],
  },
  {
    prompt:
      "What is the difference between optimistic and pessimistic locking in databases?",
    options: [
      "Optimistic locking allows multiple transactions and checks for conflict at commit; pessimistic locking prevents conflicts by locking resources",
      "Pessimistic is faster",
      "Optimistic prevents all writes",
      "They are the same thing",
    ],
    answer:
      "Optimistic locking allows multiple transactions and checks for conflict at commit; pessimistic locking prevents conflicts by locking resources",
    explanation:
      "Optimistic assumes no conflicts and checks at commit; pessimistic locks data to prevent concurrent modification.",
    tags: ["database", "concurrency", "transactions"],
  },
  {
    prompt: "What is the purpose of the `Vary` HTTP header?",
    options: [
      "It blocks caching completely",
      "It specifies which headers a cache should consider when deciding to serve a stored response",
      "It sets a custom response type",
      "It redirects users to different content types",
    ],
    answer:
      "It specifies which headers a cache should consider when deciding to serve a stored response",
    explanation:
      "`Vary` tells caches which request headers (like `Accept-Encoding`) should result in different cached responses.",
    tags: ["http", "cache", "headers"],
  },
  {
    prompt: "What does the term 'backpressure' refer to in streaming systems?",
    options: [
      "The pressure on the backend server from too many requests",
      "The delay caused by slow internet",
      "A strategy for handling a situation where data is being produced faster than it can be consumed",
      "When a user navigates back too quickly",
    ],
    answer:
      "A strategy for handling a situation where data is being produced faster than it can be consumed",
    explanation:
      "Backpressure mechanisms help prevent memory overload and failure in systems where producers outpace consumers.",
    tags: ["streaming", "architecture", "nodejs"],
  },
  {
    prompt: "Which of the following best describes a 'hot' observable in RxJS?",
    options: [
      "It immediately sends events to subscribers and may emit before someone subscribes",
      "It caches all emissions",
      "It only starts emitting after subscribe",
      "It retries failed emissions",
    ],
    answer:
      "It immediately sends events to subscribers and may emit before someone subscribes",
    explanation:
      "Hot observables (like user input streams or WebSocket) emit independently of subscriptions.",
    tags: ["rxjs", "observables", "javascript", "reactive"],
  },
  {
    prompt: "What does CAP theorem state in distributed systems?",
    options: [
      "You can only have two of Consistency, Availability, and Partition Tolerance at the same time",
      "All distributed systems must use caching",
      "You can achieve perfect availability with zero latency",
      "Every node must always be consistent",
    ],
    answer:
      "You can only have two of Consistency, Availability, and Partition Tolerance at the same time",
    explanation:
      "CAP theorem asserts that a distributed system cannot simultaneously guarantee all three: Consistency, Availability, and Partition Tolerance.",
    tags: ["system design", "distributed systems", "cap theorem"],
  },
  {
    prompt: "What does the `__proto__` property refer to in JavaScript?",
    options: [
      "The object's own properties",
      "The class of the object",
      "The prototype object from which it inherits",
      "The constructor function of the object",
    ],
    answer: "The prototype object from which it inherits",
    explanation:
      "`__proto__` is an internal property pointing to the prototype from which the object inherits.",
    tags: ["javascript", "prototypes", "oop"],
  },
  {
    prompt: "In Node.js, what does the 'cluster' module allow you to do?",
    options: [
      "Scale an application across multiple CPU cores",
      "Deploy microservices",
      "Monitor server health",
      "Send HTTP requests faster",
    ],
    answer: "Scale an application across multiple CPU cores",
    explanation:
      "The 'cluster' module enables Node.js to spawn child processes to utilize multiple cores, improving scalability.",
    tags: ["nodejs", "performance", "scaling"],
  },
  {
    prompt:
      "Which technique allows React to keep track of DOM updates efficiently?",
    options: [
      "Virtual DOM diffing",
      "Global variables",
      "JSX transpilation",
      "Synchronous DOM traversal",
    ],
    answer: "Virtual DOM diffing",
    explanation:
      "React uses a virtual DOM to compare updates and apply the minimal set of changes to the real DOM.",
    tags: ["react", "performance", "virtual dom"],
  },
  {
    prompt: "What does a 429 HTTP status code indicate?",
    options: [
      "Authentication required",
      "Too many requests",
      "Internal server error",
      "Resource not found",
    ],
    answer: "Too many requests",
    explanation:
      "429 means the user has sent too many requests in a given amount of time (rate limiting).",
    tags: ["http", "rate limiting", "status code"],
  },
  {
    prompt:
      "What is the primary goal of tree shaking in modern bundlers like Webpack or Rollup?",
    options: [
      "Removing unused code during bundling",
      "Minifying JavaScript files",
      "Lazy loading routes",
      "Transforming JSX to JS",
    ],
    answer: "Removing unused code during bundling",
    explanation:
      "Tree shaking eliminates dead code by analyzing imports/exports and excluding unused modules from the bundle.",
    tags: ["webpack", "optimization", "bundling"],
  },
  {
    prompt: "What does DNS prefetching help improve?",
    options: [
      "Reduce latency by resolving domains early",
      "Increase bandwidth for static assets",
      "Force HTTPS on all requests",
      "Cache images more aggressively",
    ],
    answer: "Reduce latency by resolving domains early",
    explanation:
      "DNS prefetching resolves domain names before they're requested, reducing latency for cross-origin links.",
    tags: ["performance", "networking", "browser"],
  },
  {
    prompt:
      "Which data structure is most suitable for implementing an LRU cache?",
    options: [
      "Array and Set",
      "Queue and Stack",
      "HashMap and Doubly Linked List",
      "Trie and Min Heap",
    ],
    answer: "HashMap and Doubly Linked List",
    explanation:
      "An LRU cache needs O(1) access and update, which is achieved using a HashMap for lookups and a Doubly Linked List for ordering.",
    tags: ["data structures", "lru cache", "algorithms"],
  },
  {
    prompt: "What is the benefit of using `useMemo` in React?",
    options: [
      "Avoid rerenders of a component",
      "Persist data across renders",
      "Prevent recalculating expensive computations",
      "Automatically re-render when state changes",
    ],
    answer: "Prevent recalculating expensive computations",
    explanation:
      "`useMemo` memoizes the result of expensive calculations to avoid recalculating on every render.",
    tags: ["react", "performance", "hooks"],
  },
  {
    prompt: "What does a strong ETag header help with in HTTP?",
    options: [
      "Authenticating users",
      "Client-side encryption",
      "Efficient caching by content hash",
      "Securing API keys",
    ],
    answer: "Efficient caching by content hash",
    explanation:
      "ETag (Entity Tag) headers help browsers validate cached content and avoid full re-downloads if content hasn’t changed.",
    tags: ["http", "etag", "caching"],
  },
  {
    prompt: "What is the purpose of the `SameSite` attribute in cookies?",
    options: [
      "To encrypt the cookie value",
      "To prevent cross-site request forgery (CSRF)",
      "To define expiration time",
      "To enable HTTP-only mode",
    ],
    answer: "To prevent cross-site request forgery (CSRF)",
    explanation:
      "`SameSite` restricts when cookies are sent, helping prevent CSRF attacks by limiting cross-origin requests.",
    tags: ["cookies", "security", "web"],
  },
  {
    prompt:
      "What is the main difference between `apply()` and `call()` in JavaScript?",
    options: [
      "`apply()` passes arguments as an array, `call()` as comma-separated",
      "`apply()` is async, `call()` is sync",
      "`apply()` binds context permanently",
      "`call()` returns a promise",
    ],
    answer:
      "`apply()` passes arguments as an array, `call()` as comma-separated",
    explanation:
      "Both invoke a function with a given `this`, but `apply()` takes arguments as an array, while `call()` takes them as a list.",
    tags: ["javascript", "function", "this"],
  },
  {
    prompt: "Which of the following is true about service workers?",
    options: [
      "They can directly access the DOM",
      "They only run once per page session",
      "They intercept network requests",
      "They require a database to work",
    ],
    answer: "They intercept network requests",
    explanation:
      "Service workers run in the background and can intercept and handle network requests for offline support and caching.",
    tags: ["pwa", "service-worker", "offline"],
  },
  {
    prompt: "In GraphQL, what does a fragment help with?",
    options: [
      "Splitting schema into modules",
      "Writing reusable query parts",
      "Validating query syntax",
      "Optimizing query resolution",
    ],
    answer: "Writing reusable query parts",
    explanation:
      "Fragments allow reusing parts of queries or mutations across multiple GraphQL operations.",
    tags: ["graphql", "queries", "fragments"],
  },
  {
    prompt:
      "What is a key benefit of using `Immutable.js` or similar libraries?",
    options: [
      "They reduce bundle size",
      "They allow mutation of objects directly",
      "They simplify state management by preventing accidental mutation",
      "They replace Redux entirely",
    ],
    answer: "They simplify state management by preventing accidental mutation",
    explanation:
      "Immutable libraries help manage predictable state by enforcing immutability, making it easier to detect and handle state changes.",
    tags: ["immutability", "state", "javascript"],
  },
  {
    prompt: "What does the `preload` keyword in a `<link>` tag do?",
    options: [
      "Defers script execution",
      "Loads stylesheets only if needed",
      "Hints the browser to fetch a resource early",
      "Blocks rendering until complete",
    ],
    answer: "Hints the browser to fetch a resource early",
    explanation:
      "`<link rel='preload'>` is used to tell the browser to fetch resources early, improving performance.",
    tags: ["html", "performance", "browser"],
  },
  {
    prompt: "What’s the purpose of the `__dirname` variable in Node.js?",
    options: [
      "Returns the path of the operating system",
      "Contains the name of the main module",
      "Gives the directory path of the current module",
      "Stores environment variables",
    ],
    answer: "Gives the directory path of the current module",
    explanation:
      "`__dirname` in Node.js gives the absolute path of the directory containing the current file.",
    tags: ["nodejs", "filesystem", "modules"],
  },
  {
    prompt: "Which HTTP status code means 'Too Many Requests'?",
    options: ["429", "403", "401", "503"],
    answer: "429",
    explanation:
      "`429 Too Many Requests` indicates the user has sent too many requests in a given time frame (rate limiting).",
    tags: ["http", "rate-limiting", "backend"],
  },
  {
    prompt: "In React, why would you use `useMemo`?",
    options: [
      "To create a state variable",
      "To run a side effect",
      "To cache a computed value",
      "To define a reducer",
    ],
    answer: "To cache a computed value",
    explanation:
      "`useMemo` is used to memoize a computed value to avoid unnecessary recalculations on re-renders.",
    tags: ["react", "hooks", "performance"],
  },
  {
    prompt: "Which AWS service provides object storage?",
    options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon Lambda"],
    answer: "Amazon S3",
    explanation:
      "Amazon S3 (Simple Storage Service) is used for storing and retrieving any amount of data at any time.",
    tags: ["aws", "cloud", "storage"],
  },
  {
    prompt: "What does 'CAP' stand for in the CAP theorem?",
    options: [
      "Consistency, Availability, Partition Tolerance",
      "Cache, API, Persistence",
      "Concurrency, Atomicity, Persistence",
      "Control, Access, Protocol",
    ],
    answer: "Consistency, Availability, Partition Tolerance",
    explanation:
      "The CAP theorem states that a distributed system can only guarantee two out of Consistency, Availability, and Partition Tolerance.",
    tags: ["system-design", "databases", "distributed"],
  },
  {
    prompt:
      "What is the default HTTP method used by forms when `method` is omitted?",
    options: ["POST", "GET", "PUT", "HEAD"],
    answer: "GET",
    explanation:
      "If the `method` attribute is not specified on a form, the default method is `GET`.",
    tags: ["html", "http"],
  },
  {
    prompt: "In Docker, what is a 'volume' primarily used for?",
    options: [
      "Running background processes",
      "Persisting data outside containers",
      "Creating image layers",
      "Speeding up builds",
    ],
    answer: "Persisting data outside containers",
    explanation:
      "Docker volumes persist data independently of containers, allowing reuse across container restarts.",
    tags: ["docker", "devops", "storage"],
  },
  {
    prompt: "What is the benefit of using GraphQL over REST in complex apps?",
    options: [
      "GraphQL uses JSON only",
      "GraphQL avoids all authentication",
      "GraphQL allows clients to request exactly what they need",
      "GraphQL is faster by default",
    ],
    answer: "GraphQL allows clients to request exactly what they need",
    explanation:
      "GraphQL gives clients the power to fetch only necessary data, reducing over-fetching and under-fetching.",
    tags: ["graphql", "api", "backend"],
  },
  {
    prompt: "What does `Object.freeze(obj)` do in JavaScript?",
    options: [
      "Makes the object immutable",
      "Converts object to JSON",
      "Clones the object",
      "Locks the prototype chain",
    ],
    answer: "Makes the object immutable",
    explanation:
      "`Object.freeze(obj)` prevents new properties from being added, and existing ones from being changed or deleted.",
    tags: ["javascript", "objects", "immutability"],
  },
  {
    prompt: "What does `event.stopPropagation()` do in the DOM?",
    options: [
      "Stops the default action of the event",
      "Removes the event listener",
      "Prevents event from bubbling up",
      "Stops event capture phase",
    ],
    answer: "Prevents event from bubbling up",
    explanation:
      "`event.stopPropagation()` prevents the event from propagating (bubbling) to parent elements.",
    tags: ["javascript", "dom", "events"],
  },
  {
    prompt: "What is the purpose of the 'key' prop in React lists?",
    options: [
      "To encrypt data",
      "To identify DOM elements uniquely",
      "To trigger rerenders",
      "To define CSS keys",
    ],
    answer: "To identify DOM elements uniquely",
    explanation:
      "React uses `key` to track item identity and optimize rendering when lists change.",
    tags: ["react", "performance"],
  },
  {
    prompt: "Which of the following is NOT a benefit of WebSockets?",
    options: [
      "Low-latency communication",
      "Bi-directional messaging",
      "Automatic fallback to polling",
      "Persistent connection",
    ],
    answer: "Automatic fallback to polling",
    explanation:
      "WebSockets do not include fallback by default—fallback to polling must be implemented manually or via libraries like Socket.IO.",
    tags: ["websockets", "real-time", "networking"],
  },
  {
    prompt: "In SQL, which clause is used to filter aggregated results?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    answer: "HAVING",
    explanation:
      "`HAVING` is used to filter rows after aggregation with `GROUP BY`.",
    tags: ["sql", "databases", "query"],
  },
  {
    prompt: "What does the term 'idempotent' mean in RESTful APIs?",
    options: [
      "Request returns random values",
      "Request cannot be repeated",
      "Multiple identical requests have the same effect",
      "It always modifies the state",
    ],
    answer: "Multiple identical requests have the same effect",
    explanation:
      "Idempotent methods (like GET, PUT, DELETE) can be called multiple times without changing the result beyond the initial application.",
    tags: ["http", "rest", "api"],
  },
  {
    prompt: "What does `process.nextTick()` do in Node.js?",
    options: [
      "Defers execution until the next event loop iteration",
      "Executes after I/O events",
      "Queues a callback to run before any I/O events",
      "Runs immediately, blocking the thread",
    ],
    answer: "Queues a callback to run before any I/O events",
    explanation:
      "`process.nextTick()` defers execution until the current operation completes, before any I/O or timers.",
    tags: ["nodejs", "event loop"],
  },
  {
    prompt: "What is a closure in JavaScript?",
    options: [
      "A block-scoped variable",
      "A function with no parameters",
      "A function that remembers its lexical scope",
      "An immediately invoked function",
    ],
    answer: "A function that remembers its lexical scope",
    explanation:
      "Closures allow a function to access variables from its outer scope even after the outer function has returned.",
    tags: ["javascript", "closures"],
  },
  {
    prompt: "Which HTTP status code indicates a precondition failure?",
    options: ["412", "417", "428", "409"],
    answer: "412",
    explanation:
      "`412 Precondition Failed` occurs when a condition given in request headers is not met on the server.",
    tags: ["http", "status codes"],
  },
  {
    prompt: "What is the output of `'5' - 2` in JavaScript?",
    options: ["3", "52", "NaN", "undefined"],
    answer: "3",
    explanation:
      "JavaScript coerces `'5'` to a number, so `'5' - 2` equals `3`. The `-` operator triggers numeric coercion.",
    tags: ["javascript", "type coercion"],
  },
  {
    prompt: "What does `docker-compose up --build` do?",
    options: [
      "Starts containers from cache only",
      "Only builds Docker images",
      "Builds images and starts the services",
      "Updates Docker to the latest version",
    ],
    answer: "Builds images and starts the services",
    explanation:
      "`docker-compose up --build` builds images before starting the services, useful when Dockerfiles or dependencies change.",
    tags: ["docker", "devops"],
  },
  {
    prompt: "What does the `Content-Security-Policy` HTTP header do?",
    options: [
      "Sets allowed HTTP methods",
      "Defines rules for caching content",
      "Restricts sources for scripts, styles, and other resources",
      "Encrypts all outgoing responses",
    ],
    answer: "Restricts sources for scripts, styles, and other resources",
    explanation:
      "CSP helps prevent XSS attacks by specifying which domains are allowed to load content.",
    tags: ["security", "http"],
  },
  {
    prompt: "Which React hook allows reading layout before the browser paints?",
    options: ["useEffect", "useLayoutEffect", "useMemo", "useCallback"],
    answer: "useLayoutEffect",
    explanation:
      "`useLayoutEffect` runs synchronously after all DOM mutations but before paint, suitable for layout reads.",
    tags: ["react", "hooks"],
  },
  {
    prompt: "In SQL, what does the `WITH` clause provide?",
    options: [
      "Directs output to a file",
      "Creates a temporary view or CTE",
      "Modifies schema permissions",
      "Specifies isolation level",
    ],
    answer: "Creates a temporary view or CTE",
    explanation:
      "The `WITH` clause creates a Common Table Expression (CTE) to simplify complex queries.",
    tags: ["sql", "cte"],
  },
  {
    prompt:
      "What is the key difference between `fork()` and `spawn()` in Node.js `child_process`?",
    options: [
      "`spawn()` shares memory with parent",
      "`fork()` creates a new thread",
      "`fork()` is for spawning Node processes with IPC",
      "`spawn()` is limited to UNIX systems",
    ],
    answer: "`fork()` is for spawning Node processes with IPC",
    explanation:
      "`fork()` spawns a Node.js process and sets up IPC, useful for message passing. `spawn()` runs any executable.",
    tags: ["nodejs", "process"],
  },
  {
    prompt:
      "What is the role of a reverse proxy like Nginx in web architecture?",
    options: [
      "It encrypts all traffic",
      "It serves as a firewall",
      "It routes client requests to backend servers",
      "It stores logs",
    ],
    answer: "It routes client requests to backend servers",
    explanation:
      "A reverse proxy like Nginx handles routing, load balancing, SSL termination, and caching for backend services.",
    tags: ["architecture", "nginx"],
  },
  {
    prompt: "What is the primary advantage of a GraphQL API over REST?",
    options: [
      "Automatic authentication",
      "Faster server response",
      "Clients can request exactly the data they need",
      "Easier to cache",
    ],
    answer: "Clients can request exactly the data they need",
    explanation:
      "GraphQL allows clients to define the structure of the response, avoiding over-fetching or under-fetching data.",
    tags: ["graphql", "api"],
  },
  {
    prompt:
      "Which method in React class components is used to handle errors in a subtree?",
    options: [
      "componentDidCatch",
      "componentWillUnmount",
      "getDerivedStateFromProps",
      "shouldComponentUpdate",
    ],
    answer: "componentDidCatch",
    explanation:
      "`componentDidCatch` is used for error boundaries to catch errors in child components during rendering.",
    tags: ["react", "error-handling"],
  },
  {
    prompt: "What is the purpose of `Object.freeze()` in JavaScript?",
    options: [
      "Prevents object extension",
      "Disallows adding, removing, or changing properties",
      "Allows deep immutability",
      "Disables object inheritance",
    ],
    answer: "Disallows adding, removing, or changing properties",
    explanation:
      "`Object.freeze()` makes an object immutable at the top level — properties can't be changed or added.",
    tags: ["javascript", "immutability"],
  },
  {
    prompt: "In Kubernetes, what is a 'pod'?",
    options: [
      "A virtual machine",
      "The smallest deployable unit",
      "A Kubernetes user",
      "An image registry",
    ],
    answer: "The smallest deployable unit",
    explanation:
      "A pod is the smallest deployable unit in Kubernetes and can contain one or more containers.",
    tags: ["kubernetes", "devops"],
  },
  {
    prompt: "What does a 307 HTTP status code indicate?",
    options: [
      "Temporary redirect preserving method",
      "Permanent redirect with GET",
      "Resource created",
      "Client timeout",
    ],
    answer: "Temporary redirect preserving method",
    explanation:
      "307 means a temporary redirect where the request method (e.g. POST) must not be changed to GET.",
    tags: ["http", "status-codes"],
  },
  {
    prompt:
      "What is a primary benefit of using a CDN (Content Delivery Network)?",
    options: [
      "Encrypting user data",
      "Increasing SEO rankings automatically",
      "Reducing latency by caching content closer to users",
      "Preventing DDoS attacks entirely",
    ],
    answer: "Reducing latency by caching content closer to users",
    explanation:
      "CDNs distribute content geographically, reducing latency and improving load times for users.",
    tags: ["cdn", "performance"],
  },
  {
    prompt: "In TypeScript, what does `keyof` do?",
    options: [
      "Returns the type of a variable",
      "Restricts a type to string keys only",
      "Creates a union of the keys of a type",
      "Checks if a property exists",
    ],
    answer: "Creates a union of the keys of a type",
    explanation:
      "`keyof` is a TypeScript operator that returns a union of the property names of a type.",
    tags: ["typescript", "types"],
  },
  {
    prompt: "What is the purpose of `z-index` in CSS?",
    options: [
      "Sets zoom level of an element",
      "Changes font rendering",
      "Controls stacking order of overlapping elements",
      "Applies perspective to 3D transforms",
    ],
    answer: "Controls stacking order of overlapping elements",
    explanation:
      "`z-index` determines the vertical stacking of elements when they overlap on the page.",
    tags: ["css", "layout"],
  },
  {
    prompt:
      "What is the default scope of a variable declared with `var` in JavaScript?",
    options: ["Block scope", "Function scope", "Global scope", "Module scope"],
    answer: "Function scope",
    explanation:
      "`var` is function-scoped, meaning it's accessible within the function it's declared in, not block-scoped like `let` or `const`.",
    tags: ["javascript", "scope"],
  },
  {
    prompt:
      "Which command in Git is used to unstage a file while keeping its changes?",
    options: ["git clean", "git stash", "git reset HEAD <file>", "git revert"],
    answer: "git reset HEAD <file>",
    explanation:
      "`git reset HEAD <file>` removes the file from the staging area but keeps your local modifications.",
    tags: ["git", "version-control"],
  },
  {
    prompt: "What is tail call optimization (TCO) in JavaScript?",
    options: [
      "A technique to execute recursive functions asynchronously",
      "A way to prioritize tail-end function calls",
      "An optimization where the last function call returns directly without growing the stack",
      "A method to call parent functions from nested closures",
    ],
    answer:
      "An optimization where the last function call returns directly without growing the stack",
    explanation:
      "TCO is a technique where recursive calls in tail position are optimized to avoid growing the call stack.",
    tags: ["javascript", "performance"],
  },
  {
    prompt: "What does ACID stand for in database systems?",
    options: [
      "Automatic, Consistent, Independent, Durable",
      "Atomicity, Consistency, Isolation, Durability",
      "Array, Column, Index, Data",
      "Access, Check, Insert, Delete",
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation:
      "ACID ensures reliable processing of database transactions with strong consistency guarantees.",
    tags: ["databases", "transactions"],
  },
  {
    prompt: "Which HTTP header is used to allow cross-origin requests?",
    options: [
      "Access-Control-Allow-Origin",
      "Content-Type",
      "Authorization",
      "X-Request-Origin",
    ],
    answer: "Access-Control-Allow-Origin",
    explanation:
      "This header tells the browser which origins are permitted for cross-origin resource sharing (CORS).",
    tags: ["http", "cors"],
  },
  {
    prompt: "In Node.js, what does the `cluster` module help achieve?",
    options: [
      "Scaling Node apps across multiple cores",
      "Monitoring event loop delay",
      "Writing to multiple logs at once",
      "Encrypting IPC messages",
    ],
    answer: "Scaling Node apps across multiple cores",
    explanation:
      "The `cluster` module allows Node.js to fork child processes to utilize multi-core systems efficiently.",
    tags: ["nodejs", "scaling"],
  },
  {
    prompt: "What is the purpose of the `render` prop in React Router?",
    options: [
      "To modify styles based on route",
      "To run middleware logic",
      "To conditionally render a component with route props",
      "To prefetch data for a component",
    ],
    answer: "To conditionally render a component with route props",
    explanation:
      "The `render` prop lets you inline a function that returns a component, receiving route props like `match` and `location`.",
    tags: ["react", "routing"],
  },
  {
    prompt:
      "What is the difference between `process.nextTick()` and `setImmediate()` in Node.js?",
    options: [
      "`process.nextTick()` runs after I/O events, `setImmediate()` runs before",
      "`process.nextTick()` schedules a microtask, `setImmediate()` schedules a macrotask",
      "`process.nextTick()` defers execution to the next day",
      "They are aliases for the same functionality",
    ],
    answer:
      "`process.nextTick()` schedules a microtask, `setImmediate()` schedules a macrotask",
    explanation:
      "`process.nextTick()` queues a function to be invoked before any I/O tasks, while `setImmediate()` runs after I/O events.",
    tags: ["nodejs", "event-loop"],
  },
  {
    prompt:
      "In PostgreSQL, what does the `WITH` clause (Common Table Expression) do?",
    options: [
      "Creates a temporary column alias",
      "Executes parallel subqueries",
      "Defines a named subquery that can be referenced later",
      "Declares a variable",
    ],
    answer: "Defines a named subquery that can be referenced later",
    explanation:
      "`WITH` defines a CTE, a temporary result set used for readability and reuse within a larger query.",
    tags: ["postgresql", "sql"],
  },
  {
    prompt: "What is a monorepo?",
    options: [
      "A single repo containing multiple projects and packages",
      "A microservice pattern for frontend apps",
      "A repository with no branching allowed",
      "A repo that only allows monolithic builds",
    ],
    answer: "A single repo containing multiple projects and packages",
    explanation:
      "Monorepo is a strategy where code for many projects lives in a single repository, useful for consistency and tooling.",
    tags: ["architecture", "monorepo"],
  },
  {
    prompt: "In GraphQL, what is a resolver?",
    options: [
      "A database schema mapper",
      "A function that resolves the value of a type or field",
      "A tool for resolving merge conflicts",
      "A JSON parser",
    ],
    answer: "A function that resolves the value of a type or field",
    explanation:
      "Resolvers in GraphQL fetch the actual data for the fields defined in the schema.",
    tags: ["graphql", "api"],
  },
  {
    prompt: "What does the `await` keyword do in JavaScript?",
    options: [
      "Creates a blocking delay",
      "Turns a function into a generator",
      "Waits for a Promise to resolve before continuing execution",
      "Pauses the browser rendering",
    ],
    answer: "Waits for a Promise to resolve before continuing execution",
    explanation:
      "`await` is used inside async functions to pause execution until a Promise is fulfilled or rejected.",
    tags: ["javascript", "async"],
  },
  {
    prompt: "What is the purpose of the `key` prop in React lists?",
    options: [
      "To uniquely identify a component instance for performance",
      "To encrypt data inside a list item",
      "To bind an item to a Redux store",
      "To toggle between controlled and uncontrolled input",
    ],
    answer: "To uniquely identify a component instance for performance",
    explanation:
      "`key` helps React identify which items have changed, are added, or removed for efficient rendering.",
    tags: ["react", "performance"],
  },
  {
    prompt: "What does `Object.freeze()` do in JavaScript?",
    options: [
      "Locks the object to prevent reassignment",
      "Makes an object immutable by preventing additions, deletions, and modifications of properties",
      "Disables garbage collection on the object",
      "Serializes the object into JSON",
    ],
    answer:
      "Makes an object immutable by preventing additions, deletions, and modifications of properties",
    explanation:
      "`Object.freeze()` makes an object immutable at the top level by disallowing changes to its properties.",
    tags: ["javascript", "immutability"],
  },
  {
    prompt:
      "In TypeScript, what is the difference between `unknown` and `any`?",
    options: [
      "`unknown` allows any operation without checks",
      "`any` is safer than `unknown`",
      "`unknown` requires type checking before use, unlike `any`",
      "They behave identically",
    ],
    answer: "`unknown` requires type checking before use, unlike `any`",
    explanation:
      "`unknown` is a safer alternative to `any`, requiring you to narrow the type before performing operations.",
    tags: ["typescript", "types"],
  },
  {
    prompt: "What does CAP theorem stand for in distributed systems?",
    options: [
      "Cache, Availability, Protocol",
      "Consistency, Availability, Partition Tolerance",
      "Concurrency, Access, Persistence",
      "Compression, Aggregation, Performance",
    ],
    answer: "Consistency, Availability, Partition Tolerance",
    explanation:
      "CAP theorem states that a distributed system can satisfy only two out of the three guarantees at once: Consistency, Availability, and Partition Tolerance.",
    tags: ["distributed-systems", "theory"],
  },
  {
    prompt:
      "What is the main difference between `map()` and `forEach()` in JavaScript?",
    options: [
      "`map()` mutates the original array, `forEach()` does not",
      "`map()` returns a new array, `forEach()` returns undefined",
      "`forEach()` is asynchronous, `map()` is synchronous",
      "`forEach()` can be chained, `map()` cannot",
    ],
    answer: "`map()` returns a new array, `forEach()` returns undefined",
    explanation:
      "`map()` transforms each element and returns a new array, whereas `forEach()` just executes a function without returning a value.",
    tags: ["javascript", "array"],
  },
  {
    prompt: "What is a thunk in Redux?",
    options: [
      "A middleware that delays actions until a condition is met",
      "A selector function",
      "A pure reducer",
      "A logging utility",
    ],
    answer: "A middleware that delays actions until a condition is met",
    explanation:
      "A thunk is a function that wraps an expression to delay its evaluation and is used in Redux to handle async logic via middleware like `redux-thunk`.",
    tags: ["redux", "middleware", "async"],
  },
  {
    prompt: "What does `process.nextTick()` do in Node.js?",
    options: [
      "Runs code after all I/O events",
      "Runs code before the next event loop iteration",
      "Schedules code after `setTimeout`",
      "Pauses the event loop",
    ],
    answer: "Runs code before the next event loop iteration",
    explanation:
      "`process.nextTick()` queues a callback to be invoked in the same phase of the event loop, before any I/O or timers.",
    tags: ["nodejs", "event-loop"],
  },
  {
    prompt: "What is tail call optimization?",
    options: [
      "Reducing recursion depth by reusing the current stack frame",
      "Inlining the entire function at runtime",
      "Delaying function execution",
      "Transforming code to iterative loops",
    ],
    answer: "Reducing recursion depth by reusing the current stack frame",
    explanation:
      "Tail call optimization allows a recursive function to call itself without growing the call stack, making recursion as efficient as iteration.",
    tags: ["javascript", "performance", "recursion"],
  },
  {
    prompt: "Which HTTP status code means 'Request Header Fields Too Large'?",
    options: ["413", "414", "431", "417"],
    answer: "431",
    explanation:
      "HTTP 431 indicates that the server is unwilling to process the request because its header fields are too large.",
    tags: ["http", "status-codes"],
  },
  {
    prompt: "What is the purpose of a content security policy (CSP)?",
    options: [
      "To compress HTTP content",
      "To prevent CSRF attacks",
      "To restrict resource loading and reduce XSS risks",
      "To cache static assets",
    ],
    answer: "To restrict resource loading and reduce XSS risks",
    explanation:
      "CSP is a security feature that helps prevent XSS and data injection attacks by restricting allowed sources of content.",
    tags: ["security", "csp", "xss"],
  },
  {
    prompt: "What is the primary purpose of `z-index` in CSS?",
    options: [
      "To change an element’s width",
      "To position an element absolutely",
      "To define the stack order of overlapping elements",
      "To make an element visible",
    ],
    answer: "To define the stack order of overlapping elements",
    explanation:
      "`z-index` controls the vertical stacking order of elements that overlap, with higher values appearing in front.",
    tags: ["css", "layout", "z-index"],
  },
  {
    prompt: "Which of the following best describes a monorepo?",
    options: [
      "A single repository for multiple projects or packages",
      "A repository with only one branch",
      "A single module in Node.js",
      "A repository with a single developer",
    ],
    answer: "A single repository for multiple projects or packages",
    explanation:
      "A monorepo allows teams to manage multiple related projects or packages in a single Git repository for better coordination and tooling.",
    tags: ["architecture", "monorepo"],
  },
  {
    prompt: "What is the purpose of `Object.freeze()` in JavaScript?",
    options: [
      "To prevent reassignment of a variable",
      "To make an object immutable",
      "To deep-clone an object",
      "To serialize an object",
    ],
    answer: "To make an object immutable",
    explanation:
      "`Object.freeze()` prevents new properties from being added and existing properties from being removed or changed.",
    tags: ["javascript", "immutability"],
  },
  {
    prompt: "Which is a characteristic of the BEM methodology in CSS?",
    options: [
      "Global class names",
      "Inline styles",
      "Naming blocks, elements, and modifiers",
      "Functional components",
    ],
    answer: "Naming blocks, elements, and modifiers",
    explanation:
      "BEM (Block Element Modifier) is a methodology that enforces naming conventions to create reusable and maintainable CSS.",
    tags: ["css", "bem", "naming"],
  },
  {
    prompt: "What does `npm ci` do differently from `npm install`?",
    options: [
      "It updates all packages to latest versions",
      "It installs dependencies using the package-lock.json exactly",
      "It installs only devDependencies",
      "It ignores peerDependencies",
    ],
    answer: "It installs dependencies using the package-lock.json exactly",
    explanation:
      "`npm ci` is optimized for CI environments and installs dependencies exactly as listed in `package-lock.json`, ensuring consistent installs.",
    tags: ["npm", "ci", "node"],
  },
  {
    prompt: "What is the primary use of `debounce` in JavaScript?",
    options: [
      "To delay execution of a function after a specified time of inactivity",
      "To execute a function repeatedly",
      "To cache function results",
      "To throttle the number of API calls",
    ],
    answer:
      "To delay execution of a function after a specified time of inactivity",
    explanation:
      "`debounce` delays the execution of a function until after a pause in activity, useful for optimizing events like input or scroll.",
    tags: ["javascript", "performance", "debounce"],
  },
  {
    prompt: "In GraphQL, what is a resolver?",
    options: [
      "A type definition",
      "A middleware for REST APIs",
      "A function that resolves a field's value",
      "An HTTP endpoint",
    ],
    answer: "A function that resolves a field's value",
    explanation:
      "Resolvers are functions in GraphQL that provide instructions for turning a GraphQL operation into data.",
    tags: ["graphql", "backend"],
  },
  {
    prompt: "What does the `SameSite` attribute on cookies control?",
    options: [
      "The cookie's encryption level",
      "The domain that can access the cookie",
      "Whether the cookie is sent with cross-site requests",
      "The max size of the cookie",
    ],
    answer: "Whether the cookie is sent with cross-site requests",
    explanation:
      "`SameSite` prevents the browser from sending cookies along with cross-site requests, improving security against CSRF attacks.",
    tags: ["cookies", "security", "web"],
  },
  {
    prompt: "What is the primary advantage of using `useMemo` in React?",
    options: [
      "It prevents memory leaks",
      "It memoizes the returned value to avoid expensive recalculations",
      "It automatically caches API responses",
      "It skips re-rendering of components",
    ],
    answer: "It memoizes the returned value to avoid expensive recalculations",
    explanation:
      "`useMemo` stores the result of a function so it doesn't need to be recalculated unless dependencies change.",
    tags: ["react", "optimization"],
  },
  {
    prompt: "Which status code indicates a successful DELETE request?",
    options: [
      "200 OK",
      "204 No Content",
      "202 Accepted",
      "301 Moved Permanently",
    ],
    answer: "204 No Content",
    explanation:
      "A successful DELETE operation usually returns `204 No Content`, meaning the server successfully processed the request and has no content to return.",
    tags: ["http", "api", "rest"],
  },
  {
    prompt: "What is the role of a service worker in a PWA?",
    options: [
      "It handles routing on the server",
      "It manages user authentication",
      "It enables background sync, offline support, and caching",
      "It renders HTML templates",
    ],
    answer: "It enables background sync, offline support, and caching",
    explanation:
      "Service workers are scripts that run in the background and handle caching, push notifications, and offline functionality in PWAs.",
    tags: ["pwa", "service-worker", "web"],
  },
  {
    prompt: "Which database uses a document-based storage model?",
    options: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
    answer: "MongoDB",
    explanation:
      "MongoDB is a NoSQL database that stores data as JSON-like documents, offering flexibility and scalability.",
    tags: ["database", "nosql", "mongodb"],
  },
  {
    prompt: "What does the `async` keyword in JavaScript do?",
    options: [
      "Pauses function execution",
      "Marks a function to return a Promise",
      "Enables blocking operations",
      "Synchronizes data fetching",
    ],
    answer: "Marks a function to return a Promise",
    explanation:
      "`async` makes a function return a Promise, allowing the use of `await` for asynchronous code that looks synchronous.",
    tags: ["javascript", "async", "promise"],
  },
  {
    prompt: "What is tree shaking in the context of JavaScript bundlers?",
    options: [
      "Minifying the code",
      "Splitting code into chunks",
      "Removing unused code during bundling",
      "Converting ES6 to ES5",
    ],
    answer: "Removing unused code during bundling",
    explanation:
      "Tree shaking eliminates dead code from the final bundle, reducing file size and improving performance.",
    tags: ["webpack", "optimization", "bundler"],
  },
  {
    prompt: "Which HTTP status code indicates a client-side error?",
    options: ["301", "404", "500", "302"],
    answer: "404",
    explanation:
      "`404 Not Found` is a client-side error indicating the requested resource does not exist on the server.",
    tags: ["http", "status-code", "frontend"],
  },
  {
    prompt: "What is the purpose of the `useMemo` hook in React?",
    options: [
      "To memoize a component",
      "To optimize re-renders by memoizing expensive calculations",
      "To store mutable values",
      "To create side effects",
    ],
    answer: "To optimize re-renders by memoizing expensive calculations",
    explanation:
      "`useMemo` is used to cache the result of a computation so that it's only recalculated when its dependencies change.",
    tags: ["react", "performance", "hooks"],
  },
  {
    prompt:
      "Which protocol is used to establish real-time, bidirectional communication between client and server?",
    options: ["HTTP", "FTP", "WebSocket", "SMTP"],
    answer: "WebSocket",
    explanation:
      "WebSocket provides a full-duplex communication channel over a single TCP connection, ideal for real-time apps.",
    tags: ["websocket", "realtime", "network"],
  },
  {
    prompt: "What is the concept of CAP theorem in distributed systems?",
    options: [
      "Consistency, Availability, Partition Tolerance",
      "Concurrency, Atomicity, Parallelism",
      "Caching, Authorization, Performance",
      "Cluster, API, Processing",
    ],
    answer: "Consistency, Availability, Partition Tolerance",
    explanation:
      "CAP theorem states that a distributed system can only guarantee two out of three: Consistency, Availability, and Partition Tolerance.",
    tags: ["backend", "distributed", "system-design"],
  },
  {
    prompt: "In Docker, what is a volume used for?",
    options: [
      "To define container resources",
      "To expose ports",
      "To persist and share data between containers",
      "To configure environment variables",
    ],
    answer: "To persist and share data between containers",
    explanation:
      "Volumes are used in Docker to store data that persists even when the container is removed or restarted.",
    tags: ["docker", "devops", "storage"],
  },
  {
    prompt:
      "Which of the following is a valid way to handle rate limiting in an API?",
    options: [
      "JWT tokens",
      "Redis-based counters",
      "GraphQL schema validation",
      "OAuth scopes",
    ],
    answer: "Redis-based counters",
    explanation:
      "Redis is commonly used to implement efficient rate limiting by tracking request counts per user or IP.",
    tags: ["api", "rate-limiting", "redis"],
  },
  {
    prompt: "What is the role of `event loop` in JavaScript?",
    options: [
      "To handle API calls",
      "To manage memory allocation",
      "To coordinate the execution of synchronous and asynchronous code",
      "To execute binary instructions",
    ],
    answer: "To coordinate the execution of synchronous and asynchronous code",
    explanation:
      "The event loop ensures that non-blocking operations like promises and timeouts are executed in the right order.",
    tags: ["javascript", "event-loop", "async"],
  },
  {
    prompt: "How does `debounce` improve performance in web applications?",
    options: [
      "By batching network requests",
      "By reducing the number of times a function is called during rapid events",
      "By skipping unnecessary DOM updates",
      "By compressing data before sending",
    ],
    answer:
      "By reducing the number of times a function is called during rapid events",
    explanation:
      "`debounce` delays function execution until a pause in events, reducing overhead from rapid triggers like scroll or keypress.",
    tags: ["performance", "frontend", "throttling"],
  },
  {
    prompt: "What is the purpose of Kubernetes `Ingress`?",
    options: [
      "To store container images",
      "To expose HTTP routes to services within the cluster",
      "To manage logs of containers",
      "To autoscale deployments",
    ],
    answer: "To expose HTTP routes to services within the cluster",
    explanation:
      "`Ingress` in Kubernetes provides HTTP routing to services inside the cluster based on rules like path and host.",
    tags: ["kubernetes", "networking", "devops"],
  },
  {
    prompt: "Which HTTP status code means 'Too Many Requests'?",
    options: ["404", "409", "429", "503"],
    answer: "429",
    explanation:
      "HTTP 429 indicates that the user has sent too many requests in a given amount of time ('rate limiting').",
    tags: ["http", "api", "rate-limiting"],
  },
  {
    prompt: "What does 'memoization' do in programming?",
    options: [
      "Compresses data",
      "Caches function results to avoid redundant computations",
      "Logs errors for analysis",
      "Encrypts user data",
    ],
    answer: "Caches function results to avoid redundant computations",
    explanation:
      "Memoization improves performance by storing the results of expensive function calls and returning the cached result when the same inputs occur again.",
    tags: ["javascript", "optimization", "memoization"],
  },
];
