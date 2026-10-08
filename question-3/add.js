// Question 3: File Module - Create Log files
const fs = require('fs');
const path = require('path');

// Build the Logs directory path from the current working directory
const logsDir = path.join(process.cwd(), 'Logs');

// Create the Logs directory if it does not exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Change the current process to the Logs directory
process.chdir(logsDir);

// Create 10 log files, write text into each, and output the file names
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}`);
    console.log(fileName);
}