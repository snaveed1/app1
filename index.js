const http = require('http');

const hostname = '0.0.0.0';
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Change to text/html
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
            <style>
                body {
                    background-color: lightblue; /* Set background color to light blue */
                    font-family: Arial, sans-serif; /* Optional: set font family */
                    text-align: center; /* Optional: center text */
                    padding: 50px; /* Optional: add some padding */
                }
            </style>
        </head>
        <body>
            <h1>Hello World from app1</h1>
        </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
