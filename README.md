# API-Implementation

## Objective
Develop a simple website with API implementation.  

The aim was simply to learn how to add an endpoint that could be accessed publicly using API.  I will be improving to a more robust and efficient implementation in the future as I learn more. 


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
- CLi: Command line used initialize Node.js project, install dependencies, run the servers, execute curl for testing.
- VsCode:  IDE to write HTML/JS code.
- Python: Simple HTTP server. (fastest/easiest solution)

## Steps
This guide assumes you have Python installed on your system. You can install the latest version from https://www.python.org

# Javascript/Node

1.  Install Node.js.
  - Download and install Node.js from the official website: https://nodejs.org/.

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
5. Create server, server.js:
  - Write the server-side code using Express.js to create a server and ahndle HTTP requests.
      
    Imports:
      - The 'express' module is imported to create the server.
      - The 'fs' module is imported to read files.
    Initialize:
      - Create an instance of the Express application.
      - Set a 'quotesFilePath' variable to the path of the simple text file used to test the API.
          This is set to 'private/quotes.txt'.
    Route definition:
      - A Get route is definedd for the path '/random-quote'.
      - When the request is made the server will execute the callback function:
          *  'fs.readFile()' used to read the contents of the quotes text file.
          *  Errors result in a log to the console and sends a 500 Internal error response.
          *  Successful functions splits the data (the quotes are separated by new line character),
              selects a random quote for the array, and sends it as the response.)
    Server configuration:
      - Server listens on port 3000.
      - At start server logs URL and port to the console.
   
# HTML basic website/Server

1. `<!DOCTYPE html>`: Specifies the document type.
2. `<html lang="en">`: Specifies the content on this page is in English.
3. `<head>`: Main section of the basic site.  Contains basic information like character encoding, viewport settings, and title of the page.
4. `<script src="js/script.js" defer></script>`: This script tag links an external JavaScript file (script.js) to the HTML document. The defer attribute indicates that the script should be executed after the HTML document has been parsed.
5. `<body>`: Section contains the visible contents.  There is an button element, when clicked, will initiate defined in the linked Javascript file.
6. Start an HTTP server by issuing the following command in the root directory of the project:
    `python -m http.server`

## Summary

You may `git clone https://github.com/Cyogen/API-Implementation.git` this project and just run the HTTP simple server, then launch the server.js endpoint.
Note that Node.js, Python and Express.js all have to be installed, and initialized as explained previously.

## Screenshots

Node.js initialization:

![nodeinit](https://github.com/Cyogen/API-Implementation/assets/33054558/6ee1d003-474e-4878-9801-c98a03b2129b)

NPM Express installation:

![nodeinstallexpress](https://github.com/Cyogen/API-Implementation/assets/33054558/8f7f0740-b51b-443d-b05a-788f4321137c)

Start the Js server:

![serverjsstart](https://github.com/Cyogen/API-Implementation/assets/33054558/1846073e-c462-4529-b14f-aa99f1a8a077)

Python basic HTTP server:

![pythonhttpserver](https://github.com/Cyogen/API-Implementation/assets/33054558/f4395d4d-cbfd-41d4-a5db-af586c0a4d46)

Basic website with interactive button to execute the script and return data:

![websitescreenshot](https://github.com/Cyogen/API-Implementation/assets/33054558/1266639f-00d3-4cef-86d0-d1d4a985818f)

API proof of concept using CURL and able to grab the same data using the same JS function:

![nodeendpointcurl](https://github.com/Cyogen/API-Implementation/assets/33054558/bbe684d7-beb4-42b5-8aae-f18fae2843a7)


