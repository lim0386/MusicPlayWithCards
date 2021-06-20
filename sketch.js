let citypop01;
let citypop02;
let citypop03;
let citypop04;
let citypop05;
let citypop06;
let citypop07;

let band01;
let band02;
let band03;
let band04;
let band05;
let band06;
let band07;

let Eyelash01;
let Eyelash02;
let Eyelash03;
let Eyelash04;
let Eyelash05;
let Eyelash06;
let Eyelash07;

let kpop01;
let kpop02;
let kpop03;
let kpop04;
let kpop05;
let kpop06;
let kpop07;

let sf01;
let sf02;
let sf03;
let sf04;
let sf05;
let sf06;
let sf07;

let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/ci4G_KkK2/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

let song = 0;
let beat = 0;
let melody = 0;
let chord = 0;

function preload() {
  console.log("preload");
  soundFormats('mp3');
  citypop01 = loadSound('city/CityPopBeat01.mp3');
  citypop02 = loadSound('city/CityPopBeat02.mp3');
  citypop03 = loadSound('city/CityPopBeat03.mp3');
  citypop04 = loadSound('city/CityPopMelody01.mp3');
  citypop05 = loadSound('city/CityPopMelody02.mp3');
  citypop06 = loadSound('city/CityPopChord01.mp3');
  citypop07 = loadSound('city/CityPopChord02.mp3');

  band01 = loadSound('band/BandBeat01.mp3');
  band02 = loadSound('band/BandBeat02.mp3');
  band03 = loadSound('band/BandBeat03.mp3');
  band04 = loadSound('band/BandMelody01.mp3');
  band05 = loadSound('band/BandMelody02.mp3');
  band06 = loadSound('band/BandChord01.mp3');
  band07 = loadSound('band/BandChord02.mp3');

  Eyelash01 = loadSound('Eyelash/EyelashBeat01.mp3');
  Eyelash02 = loadSound('Eyelash/EyelashBeat02.mp3');
  Eyelash03 = loadSound('Eyelash/EyelashBeat03.mp3');
  Eyelash04 = loadSound('Eyelash/EyelashChord01.mp3');
  Eyelash05 = loadSound('Eyelash/EyelashChord02.mp3');
  Eyelash06 = loadSound('Eyelash/EyelashMelody01.mp3');
  Eyelash07 = loadSound('Eyelash/EyelashMelody02.mp3');

  kpop01 = loadSound('kpop01/Kpop1Beat01.mp3');
  kpop02 = loadSound('kpop01/Kpop1Beat02.mp3');
  kpop03 = loadSound('kpop01/Kpop1Beat03.mp3');
  kpop04 = loadSound('kpop01/Kpop1Chord01.mp3');
  kpop05 = loadSound('kpop01/Kpop1Chord02.mp3');
  kpop06 = loadSound('kpop01/Kpop1Phrase01.mp3');
  kpop07 = loadSound('kpop01/Kpop1Phrase02.mp3');

  sf01 = loadSound('sf/SynthFunkBeat01.mp3');
  sf02 = loadSound('sf/SynthFunkBeat02.mp3');
  sf03 = loadSound('sf/SynthFunkBeat03.mp3');
  sf04 = loadSound('sf/SynthFunkGuitar01.mp3');
  sf05 = loadSound('sf/SynthFunkGuitar02.mp3');
  sf06 = loadSound('sf/SynthFunkMelody01.mp3');
  sf07 = loadSound('sf/SynthFunkMElody02.mp3');
  
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');

  console.log("loaded");
}

function setup() {
  console.log("setup");
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();

  console.log("Play");
  // citypop01.play();
  // citypop02.play();
  // citypop03.play();
  // citypop04.play();
  // citypop05.play();
  // citypop06.play();
  // citypop07.play();

  // band01.play();
  // band02.play();
  // band03.play();
  // band04.play();
  // band05.play();
  // band06.play();
  // band07.play();

  // Eyelash01.play();
  // Eyelash02.play();
  // Eyelash03.play();
  // Eyelash04.play();
  // Eyelash05.play();
  // Eyelash06.play();
  // Eyelash07.play();

  // kpop01.play();
  // kpop02.play();
  // kpop03.play();
  // kpop04.play();
  // kpop05.play();
  // kpop06.play();
  // kpop07.play();

  // sf01.play();
  // sf02.play();
  // sf03.play();
  // sf04.play();
  // sf05.play();
  // sf06.play();
  // sf07.play();
}

function draw() {
  switch(song){
    case 0:
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  // Draw the label
  if(label === "Class 36" || label ===  ""){
    text("No", width / 2, height - 4);
  }else{
    text("OK", width / 2, height - 4);
  }
  
  if(label === "1" || label === "2" || label === "3"){
    beat = label;
    if(mouseIsPressed){
    song = 1;
    }
  }
  // if(label === "8" || label === "9" || label === "10"){
  //   beat = label;

  //   song = 2;
  // }
  // if(label === "15" || label === "16" || label === "17"){
  //   beat = label;
  //   song = 3;
  // }
  // if(label === "22" || label === "23" || label === "24"){
  //   beat = label;
  //   song = 4;
  // }
  // if(label === "29" || label === "30" || label === "31"){
  //   beat = label;
  //   song = 5;
  // }
  // text(label, width / 2, height - 4);
  console.log(label);

  break;
      
      case 1:
        image(flippedVideo, 0, 0);
      if(label === "4" || label === "5"){
        if(mouseIsPressed){
        melody = label;
        // if(mouseIsPressed){
          
        }
      }
      if(label === "6" || label === "7"){
        if(mouseIsPressed){

        chord == label;
        }
      }
      console.log(song, melody, chord);
      break;
      
      case 2:
      
      break;
      
      case 3:
      
      break;
      
      case 4:
      
      break;
      
      case 5:
      
      break;
  }
}

function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}