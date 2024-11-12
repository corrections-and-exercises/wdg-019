import {access, mkdir, appendFile, unlink} from 'fs/promises';
import path from 'path';
// node app.mjs create "hello world"
// node app.mjs delete "./2024.../18.txt"

const command = process.argv[2];
const argument = process.argv[3];

if (command === 'create' && argument) {
    createFileWithMessage(argument);
} else if (command === 'delete' && argument) {
    deleteByFileName(argument);
} else {
    console.log('Invalid command or missing argument.');
}

async function createFileWithMessage(message) {
    try {
        const now = new Date();
        const dirName = `${now.getFullYear()}-${(now.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

        const fileName = `${now.getHours().toString().padStart(2, '0')}-${now
            .getMinutes()
            .toString()
            .padStart(2, '0')}.txt`;

        const response = await createDirIfNotExists(dirName);
        console.log(response);

        const filePath = path.join(dirName, fileName);
        console.log('filePath', filePath);

        appendFile(filePath, message + '\n');
    } catch (error) {
        console.log(error);
    }
}

async function createDirIfNotExists(dirPath) {
    try {
        await access(dirPath);
        return `Directory ${dirPath} already exists`;
    } catch (error) {
        await mkdir(dirPath, {recursive: true});
        return `Directory ${dirPath} created successfully`;
    }
}

async function deleteByFileName(filePath) {
    try {
        await access(filePath);
        await unlink(filePath);
    } catch (error) {
        console.log('File not found');
    }
}
