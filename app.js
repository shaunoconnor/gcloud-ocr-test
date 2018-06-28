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
























/*var gcloud = require('gcloud')({
  keyFilename: '/gcloud-test-project-643a64c926ef.json',
  projectId: 'gcloud-test-project-1111>'
});
var vision = gcloud.vision();

var image = 'image.jpg';

vision.detectText('image.jpg', function(err, text, apiResponse) {
  // text = ['This was text found in the image']

  if( err ){
    console.log(err);
  }

  if (text){
    console.log(text);
  }
});
*/

// Use Server Key

//require vision from "react-cloud-vision-api";
//vision.init({ auth: '643a64c926ef5617c633562ae8d79d2d1fe924fc'})

/*
const vision = require('react-cloud-vision-api')
vision.init({auth: '643a64c926ef5617c633562ae8d79d2d1fe924fc'})
const req = new vision.Request({
  image: new vision.Image({
    base64: base64Img,
  }),
  features: [
    new vision.Feature('TEXT_DETECTION', 4),
    new vision.Feature('LABEL_DETECTION', 10),
  ]
})
*/
