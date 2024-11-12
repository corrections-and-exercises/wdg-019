// import {writeFileSync, writeFile} from 'fs';
import {read} from 'fs';
import {writeFile, readFile} from 'fs/promises';
import {freemem} from 'os';
import http from 'http';

// try {
//     writeFileSync('shrek.txt', 'Shrek is Love, Shrek is life');
// } catch (error) {
//     console.error('there was an error', error);
// }

// writeFile('shrek2.txt', 'shrek is love, shrek is live', (err) => {
//     if (err) {
//         console.error('somehting went wrong');
//     } else {
//         console.log('successfully created shrek text');
//     }
// });
console.log('hey');

// try {
//     await writeFile('shrek3.txt', 'shrek is love, shrek is lifefe');
//     console.log('successfully created shrek text');
// } catch (error) {
//     console.log('there was an error', error.message);
// }

try {
    const fileContent = await readFile('shrek.txt', 'utf-8');
    console.log(fileContent);
} catch (error) {
    console.log('there was an error');
}

console.log(freemem());

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'json/application');
    response.end(JSON.stringify({hello: 'World'}));
    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/html');
    // response.end(`
    //      <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <script src="https://cdn.tailwindcss.com"></script>
    //   <title>Document</title>
    // </head>
    // <body>
    //   <div class="container mx-auto p-4">
    //     <h1 class="text-2xl font-bold text-center">Here's a dog!</h1>
    //     <p class="text-center">This code came from a Node-powered server!</p>
    //     <img src="https://placedog.net/500/280" alt="Dog" class="mx-auto mt-4">
    //   </div>
    // </body>
    // </html>
    //     `);
});

const port = 3000;

server.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
});
