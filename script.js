try{
// references all elements from the html
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
// 2 arrays that house all of the scene images and the text assorted with them
images = ["./images/Call2Action.png","./images/Outside.png","./images/Around.png","./images/Porch.png" ,"./images/Living.png", "./images/LHallway.png","./images/Kitchen.png","./images/Creepy People.png","./images/Insanity Ending.png","./images/RHallway.png", "./images/Attic.png", "./images/Figure.png", "./images/Mystery Ending.png", "./images/Secret Room.png", "./images/Long Hallway.png", "Time Travel End.png"];
sceneText = ["Call to Action", "Outside", "Around", "Porch", "Living Room", "Left Hallway", "kitchen", "Creepy People", "Insanity Ending", "Right Hallway"];

// "key" to progress and the code variable for progressing through the story
let hasKey = false
let numberCode = 4202


// counter that allows the code to know which frame you are on
let currentScene = 0;
text.textContent = sceneText[0];

function updateScene() { // The function checks what scene you are on in order to present you with the correct scene and buttons/options to go along with it
    scene.src = images[currentScene];
    text.textContent = sceneText[currentScene]; // Present correct image and text assorted with the image
 
    if (currentScene === 0) { //standard button layout
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
    } else if (currentScene === 1) { // give options to move between outside the around the house and the porch
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
    } else if (currentScene === 2 || currentScene === 3) { // options on porch and outside the house
        document.onkeydown = (e) => {
            e = e || window.event;
            if (e.keyCode === 38 && currentScene == 2) { // ability to press the arrow key to reveal key when currentScene is 2
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
    } else if (currentScene === 4) { // Give the option of going between the left and right hallway
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
    } else if (currentScene === 5) { // special button to go back to living room
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
    } else if (currentScene === 9) { // special button to go back to living room and give option between entering attic and the secret room
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
    } else if (currentScene === 10) { // special button to go back to right hallway
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
    } else if (currentScene === 13) { // special button to go back to right hallway
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
    } else if (currentScene === 14) { // Extra buttons for the user to input the code to progress
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
    } else if (currentScene === 15) { // Removes extra buttons for the ending
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
    } else if (currentScene === 12) { // Removes extra buttons for the ending
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
    } else if (currentScene === 8) { // Removes extra buttons for the ending
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
    
    if (imageDiv) { // logic to display the tooltip (code) when currentScene is equal to 9
        if (currentScene === 9) imageDiv.classList.add('show-tooltip');
        else imageDiv.classList.remove('show-tooltip');
    }

}
 
// Event listeners just update currentScene and call the function
nextButton.addEventListener("click", function() { // standard progress scene
    currentScene++;
    updateScene();
});
 
prevButton.addEventListener("click", function() { // standard one scene back
    if (currentScene > 0) {
        currentScene--;
        updateScene();
    }
});
 
toOutside.addEventListener("click", function() { // button to go to scene around the house
    currentScene = 2;
    updateScene();
});
 
toPorch.addEventListener("click", function() { // button to go to porch
    currentScene = 3;
    updateScene();
});
 
toLHallway.addEventListener("click", function(){ // button to enter left hallway
    currentScene = 5
    updateScene()
});
toRHallway.addEventListener("click", function(){ // button to enter right hallway
    currentScene = 9
    updateScene()
});

backToLiving.addEventListener("click", function(){ // button to enter back into living room
    currentScene = 4
    updateScene()
})

toAttic.addEventListener("click", function(){ // button to enter attic
    currentScene = 10
    updateScene()
})

backToRHallway.addEventListener("click", function(){ // button to re enter right hallway
    currentScene = 9
    updateScene()
})

toSecretRoom.addEventListener("click", function(){ // button to access secret room
    if(hasKey == true) { // checks for if user has the key
        currentScene = 13
        updateScene()
}
    else {
        window.alert("you need a key") // if user doesn't have a key it will raise a window.alert
    }
})

tryCode.addEventListener("click", function(){ // button to access the long hallway
    let userInput = prompt('try code') // lets user input code
    if (userInput == numberCode) { // checks what the user put to see if it matches the code
        currentScene = 14
        updateScene()
    } else {
        window.alert("wrong passcode") // if user is unable to give the code it will raise a window.alert
    }
})

revealKey.addEventListener("click", function(){ // button that changes status of key to true
    hasKey = true
})

tryHallwayDoor.addEventListener("click", function() { // function that reveals extra buttons for accessing code for the long hallway
    padCodeText.style.display = "inline-block";
    tryCode.style.display = "inline-block";
})

thanks.addEventListener("click", function() {  // button that reveals a thank you message for the user at the end
    thanksText.style.display = "inline-block";
    thanks.style.display = "none"
})

addEventListener("load", function(){ // listener that displays an introductory message on the page when it loads in.
    window.alert("This is a project made by Rafal Toborek as part of JavaScript Course. It was made to show off a variety of JavaScript skills and tell a fun story based on preselected criteria. My criteria was Horror, and Western.")
})

updateScene() // calls function to advance scene
} catch { // catches any errors
    console.log("There was an error")
}