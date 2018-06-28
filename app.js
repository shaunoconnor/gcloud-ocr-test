// export GOOGLE_APPLICATION_CREDENTIALS='YOUR CREDENTIALS';


// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

const fileName = './resources/hein.png';

// Performs label detection on the local file
// use this to see whats in an image.
client
  .labelDetection(fileName)
  .then(results => {
    const labels = results[0].labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

// Performs text detection on the local file
// use this to read text in an image.
  client
    .textDetection(fileName)
    .then(results => {
      const detections = results[0].textAnnotations;
      console.log('Text:');
      detections.forEach(text => console.log(text));
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
