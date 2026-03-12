let scene = document.getElementById("scene");
let text = document.getElementById("text");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let toOutside = document.getElementById("toOutside");
let toPorch = document.getElementById("toPorch");
let toLHallway = document.getElementById("toLHallway")
let toRHallway = document.getElementById("toRHallway")
let backToLiving = document.getElementById("backToLiving")
let toTheAttic = document.getElementById("toTheAttic")
let toAttic = document.getElementById("toAttic")
let backToRHallway = document.getElementById("backToRHallway")
let toSecretRoom = document.getElementById("toSecretRoom")
let revealKey = document.getElementById("revealKey")
let imageDiv = document.querySelector('.imageDiv')
let tryHallwayDoor = document.getElementById("tryHallwayDoor")
let padCodeText = document.getElementById("padCodeText")
let tryCode = document.getElementById("tryCode")
let submit = document.getElementById("submit")
let endText = document.getElementById("endText")
let thanks = document.getElementById("thanks")
let thanksText = document.getElementById("thanksText")

images = ["./images/Call2Action.png","./images/Outside.png","./images/Around.png","./images/Porch.png" ,"./images/Living.png", "./images/LHallway.png","./images/Kitchen.png","./images/Creepy People.png","./images/Insanity Ending.png","./images/RHallway.png", "./images/Attic.png", "./images/Figure.png", "./images/Mystery Ending.png", "./images/Secret Room.png", "./images/Long Hallway.png", "Time Travel End.png"];
sceneText = ["Call to Action", "Outside", "Around", "Porch", "Living Room", "Left Hallway", "kitchen", "Creepy People", "Insanity Ending", "Right Hallway"];

let hasKey = false
console.log(hasKey)
let numberCode = 4202



let currentScene = 0;
text.textContent = sceneText[0];
function updateScene() {
    scene.src = images[currentScene];
    text.textContent = sceneText[currentScene];
 
    if (currentScene === 0) {
        toOutside.style.display = "none"; 
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "inline-block";
        prevButton.style.display = "inline-block";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none";
        tryHallwayDoor.style.display = "none";
        padCodeText.style.display = "none";
        tryCode.style.display = "none";
        endText.style.display = "none";
        thanks.style.display = "none";
        thanksText.style.display = "none";
    } else if (currentScene === 1) {
        toOutside.style.display = "inline-block";
        toPorch.style.display = "inline-block";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "none";
        prevButton.style.display = "inline-block";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none"
        tryHallwayDoor.style.display = "none"
        padCodeText.style.display = "none";
        tryCode.style.display = "none";
        endText.style.display = "none";
        thanks.style.display = "none";
        thanksText.style.display = "none";
    } else if (currentScene === 2 || currentScene === 3) {
        document.onkeydown = (e) => {
            e = e || window.event;
            if (e.keyCode === 38 && currentScene == 2) {
                 revealKey.style.display = "inline-block"
                }
        }
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "inline-block";
        prevButton.style.display = "inline-block";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none"
        tryHallwayDoor.style.display = "none"
        padCodeText.style.display = "none";
        tryCode.style.display = "none";
        endText.style.display = "none";
        thanks.style.display = "none";
        thanksText.style.display = "none";
    } else if (currentScene === 4) {
        toOutside.style.display = "none";
        toPorch.style.display = "inline-block";
        toLHallway.style.display = "inline-block";
        toRHallway.style.display = "inline-block";
        nextButton.style.display = "none";
        prevButton.style.display = "none";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none"
        tryHallwayDoor.style.display = "none"
        padCodeText.style.display = "none";
        tryCode.style.display = "none";
        endText.style.display = "none";
        thanks.style.display = "none";
        thanksText.style.display = "none";
    } else if (currentScene === 5) {
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "inline-block";
        prevButton.style.display = "none";
        backToLiving.style.display = "inline-block";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none"
        tryHallwayDoor.style.display = "none"
        padCodeText.style.display = "none";
        tryCode.style.display = "none";
        endText.style.display = "none";
        thanks.style.display = "none";
        thanksText.style.display = "none";
    } else if (currentScene === 9) {
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "none";
        prevButton.style.display = "none";
        backToLiving.style.display = "inline-block";
        toAttic.style.display = "inline-block";
        toSecretRoom.style.display = "inline-block";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none"
        tryHallwayDoor.style.display = "none"
        padCodeText.style.display= "none";
        tryCode.style.display = "none";
        endText.style.display = "none";
        thanks.style.display = "none";
        thanksText.style.display = "none";
        console.log(currentScene)
    } else if (currentScene === 10) {
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "inline-block";
        prevButton.style.display = "inline-block";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "inline-block";
        revealKey.style.display = "none"
        tryHallwayDoor.style.display = "none"
        padCodeText.style.display= "none";
        tryCode.style.display = "none";
        endText.style.display = "none";
        thanks.style.display = "none";
        thanksText.style.display = "none";
        console.log(currentScene)
    } else if (currentScene === 13) {
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "none";
        prevButton.style.display = "none";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "inline-block";
        revealKey.style.display = "none";
        tryHallwayDoor.style.display = "inline-block";
        padCodeText.style.display= "none";
        tryCode.style.display = "none";
        endText.style.display = "none"
        thanks.style.display = "none";
        thanksText.style.display = "none";
        console.log(currentScene)
    } else if (currentScene === 14) {
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "inline-block";
        prevButton.style.display = "none";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none";
        tryHallwayDoor.style.display = "none";
        padCodeText.style.display= "none";
        tryCode.style.display = "none";
        endText.style.display = "none";
        thanks.style.display = "none";
        thanksText.style.display = "none";
    } else if (currentScene === 15) {
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "none";
        prevButton.style.display = "none";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none";
        tryHallwayDoor.style.display = "none";
        padCodeText.style.display= "none";
        tryCode.style.display = "none";
        scene.style.display = "none";
        endText.style.display = "inline-block"
        thanks.style.display = "inline-block";
        thanksText.style.display = "none";
    } else if (currentScene === 12) {
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "none";
        prevButton.style.display = "none";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none";
        tryHallwayDoor.style.display = "none";
        padCodeText.style.display= "none";
        tryCode.style.display = "none";
        scene.style.display = "none";
        endText.style.display = "inline-block"
        thanks.style.display = "inline-block";
        thanksText.style.display = "none";
    } else if (currentScene === 8) {
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "none";
        prevButton.style.display = "none";
        backToLiving.style.display = "none";
        toAttic.style.display = "none";
        toSecretRoom.style.display = "none";
        backToRHallway.style.display = "none";
        revealKey.style.display = "none";
        tryHallwayDoor.style.display = "none";
        padCodeText.style.display= "none";
        tryCode.style.display = "none";
        scene.style.display = "none";
        endText.style.display = "inline-block"
        thanks.style.display = "inline-block";
        thanksText.style.display = "none";
    }
    
    if (imageDiv) {
        if (currentScene === 9) imageDiv.classList.add('show-tooltip');
        else imageDiv.classList.remove('show-tooltip');
    }

     console.log(currentScene);
}
 
// Event listeners just update currentScene and call the function
nextButton.addEventListener("click", function() {
    currentScene++;
    updateScene();
});
 
prevButton.addEventListener("click", function() {
    if (currentScene > 0) {
        currentScene--;
        updateScene();
    }
});
 
toOutside.addEventListener("click", function() {
    currentScene = 2;
    updateScene();
});
 
toPorch.addEventListener("click", function() {
    currentScene = 3;
    updateScene();
});
 
toLHallway.addEventListener("click", function(){
    currentScene = 5
    updateScene()
});
toRHallway.addEventListener("click", function(){
    currentScene = 9
    updateScene()
});

backToLiving.addEventListener("click", function(){
    currentScene = 4
    updateScene()
})

toAttic.addEventListener("click", function(){
    currentScene = 10
    updateScene()
})

backToRHallway.addEventListener("click", function(){
    currentScene = 9
    updateScene()
});

toSecretRoom.addEventListener("click", function(){
    if(hasKey == true) {
        currentScene = 13
        updateScene()
}
    else {
        window.alert("you need a key")
    }
});

tryCode.addEventListener("click", function(){
    let userInput = prompt('try code')
    if (userInput == numberCode) {
        currentScene = 14
        updateScene()
    } else {
        window.alert("wrong passcode")
    }
});

revealKey.addEventListener("click", function(){
    hasKey = true
    console.log(hasKey)
});

tryHallwayDoor.addEventListener("click", function() {
    padCodeText.style.display = "inline-block";
    tryCode.style.display = "inline-block";
})

thanks.addEventListener("click", function() {
    thanksText.style.display = "inline-block";
    thanks.style.display = "none"
})

addEventListener("load", function(){
    window.alert("This is a project made by Rafal Toborek as part of JavaScript Course. It was made to show off a variety of JavaScript skills and tell a fun story based on preselected criteria. My criteria was Horror, and Western.")
})

updateScene()