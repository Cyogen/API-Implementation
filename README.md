# API-Implementation

## Objective
To develop a simple website with API implemntation.  The aim of this was simply to learn how to add an endpoint that could be accessed publicly.  Over time I will be improving to a more robust and efficient implementation. 

### Skills Learned

- HTML: Basic understanding of web development.
- Javascript: Client-side scripting for enhanced functionality.
- Node.js: Handling HTTP requests.
- Express.js: First time utilizing this framework for web apps and API.
- API Design: Basic principles of RESTful API design, endpoint naming conventions, HTTP methods and JSON/XML responses.
- Deployment: Simple HTTP server and Node endpoint.

### Tools Used

- Node.js: Javascript runtime that allows JS execution outside of a web browser.
- Express.js: Web framework for Node.js used to create the server and handle HTTP response.
- fs:  File system module built into Node.js to interact with a file locally.
- CLi: Initialize Node.js project, install dependencies, run the servers, execute curl for testing.
- VsCode:  IDE to write HTML/JS code.

## Steps

1.  Install Node.js.
  - Download and install Node.js from the official website: https://nodejs.org/

2.  Create project directory:
  - Create a new directory for the project:
    ```
    mkdir random-quote-api
    cd random-quote-api
    ```
3.  Initialize Node.js Project:
  - Initialize a new Node.js project by running:
    ```
    npm init -y
    ```
4.  Install Express.js:
  - Install Express.js as a dependency:
    ```
    npm install express
    ```
