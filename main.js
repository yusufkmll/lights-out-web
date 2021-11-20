let lightCounter = 0;
let reactionTimeMs = 0;
let lightArr = [
    document.querySelector('#light1'),
    document.querySelector('#light2'),
    document.querySelector('#light3'),
    document.querySelector('#light4'),
    document.querySelector('#light5'),
];
let lightsOnTask;
let reactionTimeTask;
let ligthsOut = false;

function lightsOn() {
    if(lightCounter < 5) {
        lightArr[lightCounter++].src = "resources/light_on.png";
        //TODO Play light on sound
    }
    else if(lightCounter == 5) {
        lightCounter = 0;
        clearInterval(lightsOnTask);
        let randomDelay = Math.floor(Math.random() * 2000);
        setTimeout(lightsOff, randomDelay);
    }
}

function lightsOff() {
    ligthsOut = true;
    lightArr.forEach(light => {
        light.src = "resources/light_off.png";
    });
    reactionTimeTask = setInterval(reactionTimeElapsed, 1);
    //TODO start a stopwatch and keep the elapsed time until press the stop button
}

function reactionTimeElapsed() {
    reactionTimeMs++;
    console.log(reactionTimeMs);
}

function startClick() {
    //* Alttaki yöntem çalışıyor ama ne kadar sağlıklı bilmiyorum
    //. document.getElementById("img1").src = "resources/light_on.png"

    //* Alttaki de çalışıyor, sanırım bu daha iyi
    //. document.querySelector('#light1').src = "resources/light_on.png";

    // First, turn off all lights
    lightArr.forEach(light => {
        light.src = "resources/light_off.png";
    });

    // Then, start the lights on task    
    lightsOnTask = setInterval(lightsOn, 1000);
    
}

function stopClick() {
    if(ligthsOut){
        clearInterval(reactionTimeTask);
        alert('Your time is ' + (reactionTimeMs * 0.005).toPrecision(4));
    }   
    else{
        alert("JUMPSTART!");
    }
    reactionTimeMs = 0;
    ligthsOut = false;
}