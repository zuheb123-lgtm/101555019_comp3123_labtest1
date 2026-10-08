// Question 3: File Module - Remove Log files
const fs = require('fs');
const path = require('path');

// Build the Logs directory path from the current working directory
const logsDir = path.join(process.cwd(), 'Logs');

// Remove all files from the Logs directory, if it exists
if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    files.forEach((file) => {
        // Output the file name to delete
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });

    // Remove the Logs directory
    fs.rmdirSync(logsDir);
} else {
    console.log('Logs directory does not exist');
}