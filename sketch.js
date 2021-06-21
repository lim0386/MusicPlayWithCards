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
  sf07 = loadSound('sf/SynthFunkMelody02.mp3');
  
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;

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
  
  button1 = new Clickable();
  button1.locate(20, 20);
  button1.width = 20;
  button1.height = 20;
  button1.text = "";
  button1.stroke = "#ff0000";
  button1.color = "#ff0000";
  button1.onRelease = function () {
    Eyelash01.play();

    // Eyelash01.stop();
  Eyelash02.stop();
  Eyelash03.stop();
  Eyelash04.stop();
  Eyelash05.stop();
  Eyelash06.stop();
  Eyelash07.stop();

  };

  button2 = new Clickable();
  button2.locate(50, 20);
  button2.width = 20;
  button2.height = 20;
  button2.text = "";
  button2.stroke = "#ff0000";
  button2.color = "#ff0000";
  button2.onPress = function () {
    Eyelash02.play();
    
    Eyelash01.stop();
  // Eyelash02.stop();
  Eyelash03.stop();
  Eyelash04.stop();
  Eyelash05.stop();
  Eyelash06.stop();
  Eyelash07.stop();
  };

  button3 = new Clickable();
  button3.locate(80, 20);
  button3.width = 20;
  button3.height = 20;
  button3.text = "";
  button3.stroke = "#ff0000";
  button3.color = "#ff0000";
  button3.onPress = function () {
    Eyelash03.play();

    Eyelash01.stop();
  Eyelash02.stop();
  // Eyelash03.stop();
  Eyelash04.stop();
  Eyelash05.stop();
  Eyelash06.stop();
  Eyelash07.stop();
  };

  button4 = new Clickable();
  button4.locate(110, 20);
  button4.width = 20;
  button4.height = 20;
  button4.text = "";
  button4.stroke = "#ffa500";
  button4.color = "#ffa500";
  button4.onPress = function () {
    Eyelash04.play();

    Eyelash01.stop();
  Eyelash02.stop();
  Eyelash03.stop();
  // Eyelash04.stop();
  Eyelash05.stop();
  Eyelash06.stop();
  Eyelash07.stop();
  };

  button5 = new Clickable();
  button5.locate(140, 20);
  button5.width = 20;
  button5.height = 20;
  button5.text = "";
  button5.stroke = "#ffa500";
  button5.color = "#ffa500";
  button5.onPress = function () {
    Eyelash05.play();

    Eyelash01.stop();
  Eyelash02.stop();
  Eyelash03.stop();
  Eyelash04.stop();
  // Eyelash05.stop();
  Eyelash06.stop();
  Eyelash07.stop();
  };

  button6 = new Clickable();
  button6.locate(170, 20);
  button6.width = 20;
  button6.height = 20;
  button6.text = "";
  button6.stroke = "#7fff00";
  button6.color = "#7fff00";
  button6.onPress = function () {
    Eyelash06.play();

    Eyelash01.stop();
  Eyelash02.stop();
  Eyelash03.stop();
  Eyelash04.stop();
  Eyelash05.stop();
  // Eyelash06.stop();
  Eyelash07.stop();
  };

  button7 = new Clickable();
  button7.locate(200, 20);
  button7.width = 20;
  button7.height = 20;
  button7.text = "";
  button7.stroke = "#7fff00";
  button7.color = "#7fff00";
  button7.onPress = function () {
    Eyelash07.play();

    Eyelash01.stop();
  Eyelash02.stop();
  Eyelash03.stop();
  Eyelash04.stop();
  Eyelash05.stop();
  Eyelash06.stop();
  // Eyelash07.stop();
  }; 

  button8 = new Clickable();
  button8.locate(230, 20);
  button8.width = 20;
  button8.height = 20;
  button8.text = "";
  button8.stroke = "#000000";
  button8.color = "#000000";
  button8.onPress = function () {
    Eyelash01.play();
    Eyelash04.play();
    Eyelash06.play();

    // Eyelash01.stop();
  Eyelash02.stop();
  Eyelash03.stop();
  // Eyelash04.stop();
  Eyelash05.stop();
  // Eyelash06.stop();
  Eyelash07.stop();
  }; 

  button9 = new Clickable();
  button9.locate(260, 20);
  button9.width = 20;
  button9.height = 20;
  button9.text = "";
  button9.stroke = "#000000";
  button9.color = "#000000";
  button9.onPress = function () {
    Eyelash02.play();
    Eyelash05.play();
    Eyelash07.play();

    Eyelash01.stop();
  // Eyelash02.stop();
  Eyelash03.stop();
  Eyelash04.stop();
  // Eyelash05.stop();
  Eyelash06.stop();
  // Eyelash07.stop();
  }; 

  button10 = new Clickable();
  button10.locate(290, 20);
  button10.width = 20;
  button10.height = 20;
  button10.text = "";
  button10.stroke = "#000000";
  button10.color = "#000000";
  button10.onPress = function () {
    Eyelash02.play();
    Eyelash05.play();
    Eyelash06.play();

    Eyelash01.stop();
  // Eyelash02.stop();
  Eyelash03.stop();
  Eyelash04.stop();
  // Eyelash05.stop();
  // Eyelash06.stop();
  Eyelash07.stop();
  }; 

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
  button1.draw();
  button2.draw();
  button3.draw();
  button4.draw();
  button5.draw();
  button6.draw();
  button7.draw();
  button8.draw();
  button9.draw();
  button10.draw();
  // switch(song){
  //   case 0:
  // background(0);
  // // Draw the video
  // image(flippedVideo, 0, 0);

  // // Draw the label
  // fill(255);
  // textSize(16);
  // textAlign(CENTER);
  // // Draw the label
  // if(label === "Class 36" || label ===  ""){
  //   text("No", width / 2, height - 4);
  // }else{
  //   text("OK", width / 2, height - 4);
  // }
  
  // if(label === "1" || label === "2" || label === "3"){
  //   beat = label;
  //   if(mouseIsPressed){
  //   song = 1;
  //   }
  // }else{
  //   song = 0;
  // }
  // // if(label === "8" || label === "9" || label === "10"){
  // //   beat = label;

  // //   song = 2;
  // // }
  // // if(label === "15" || label === "16" || label === "17"){
  // //   beat = label;
  // //   song = 3;
  // // }
  // // if(label === "22" || label === "23" || label === "24"){
  // //   beat = label;
  // //   song = 4;
  // // }
  // // if(label === "29" || label === "30" || label === "31"){
  // //   beat = label;
  // //   song = 5;
  // // }
  // // text(label, width / 2, height - 4);
  // console.log(label);

  // break;
      
  //     case 1:
  //       image(flippedVideo, 0, 0);
  //     if(label === "4" || label === "5"){
  //       if(mouseIsPressed){
  //       melody = label;
  //       song = 2;
  //       }
  //     }else{
  //       song = 1;
  //     }
      
  //     break;
      
  //     case 2:
  //       if(label === "6" || label === "7"){
  //         if(mouseIsPressed){
  //         chord == label;
  //         song = 3;
  //         }
  //       }else{
  //         song = 2;
  //       }
  //       console.log(song, melody, chord);
  //     break;
      
  //     case 3:
      
  //     break;
      
  //     case 4:
      
  //     break;
      
  //     case 5:
      
  //     break;
  // }
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