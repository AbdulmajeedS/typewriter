const {fetchISSFlyOverTimes } = require('./iss');
//fetchMyIP((error, ip) => {
//if (error) {
//console.log("It didn't work!" , error);
//return;
//}
//console.log('It worked! Returned IP:' , ip);
//});


const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {

  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned fly over times:' , passTimes);
});