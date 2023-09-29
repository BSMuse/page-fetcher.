const request = require('request');
const fs = require('fs');

const url = 'http://www.example.edu/'; // Replace with the URL you want to request
const outputFile = 'index.html'; // Replace with the desired output file name

// Make the HTTP request using the request library
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('HTTP Status Code:', response.statusCode);
    return;
  }

  // Write the response to a file using the fs module
  fs.writeFile(outputFile, body, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('File saved as', outputFile);

    // Get the file size
    const stats = fs.statSync(outputFile);
    const fileSizeInBytes = stats.size;
    const fileSizeInKilobytes = fileSizeInBytes / 1024;
    console.log('File size:', fileSizeInBytes, 'bytes', '(', fileSizeInKilobytes.toFixed(2), 'KB)');
  });
});
