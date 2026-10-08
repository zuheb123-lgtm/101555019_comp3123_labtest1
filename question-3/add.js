// Question 3: File Module 
const fs = require('fs');
const path = require('path');

// Build Logs from the current working directory
const logsDir = path.join(process.cwd(), 'Logs');

// Create Logs directory if it doesnt exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Change the current process to Logs directory
process.chdir(logsDir);

// Create 10 log files, write text into each, and output the file names
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}`);
    console.log(fileName);
}