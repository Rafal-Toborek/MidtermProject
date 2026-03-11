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

images = ["./images/Call2Action.png","./images/Outside.png","./images/Around.png","./images/Porch.png" ,"./images/Living.png", "./images/LHallway.png","./images/Kitchen.png","./images/Creepy People.png","./images/Insanity Ending.png","./images/RHallway.png"];
sceneText = ["Around", "Call to Action", "Outside", "Living Room", "Porch","Left Hallway", "Right Hallway"];



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
        backToLiving.style.display = "none"
 
    } else if (currentScene === 1) {
        toOutside.style.display = "inline-block";
        toPorch.style.display = "inline-block";
            toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "none";
        prevButton.style.display = "inline-block";
        backToLiving.style.display = "none"
    } else if (currentScene === 2 || currentScene === 3) {
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "inline-block";
        prevButton.style.display = "inline-block";
        backToLiving.style.display = "none"
    } else if (currentScene === 4) {
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "inline-block";
        toRHallway.style.display = "inline-block";
        nextButton.style.display = "none";
        prevButton.style.display = "none";
        backToLiving.style.display = "none"
    } else if (currentScene === 5) {
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "inline-block";
        prevButton.style.display = "none";
        backToLiving.style.display = "inline-block"
    } else if (currentScene === 9) {
        toOutside.style.display = "none";
        toPorch.style.display = "none";
        toLHallway.style.display = "none";
        toRHallway.style.display = "none";
        nextButton.style.display = "inline-block";
        prevButton.style.display = "none";
        backToLiving.style.display = "inline-block";
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
toTheAttic.addEventListener("click", function(){

    
}

)

console.log(currentScene)
updateScene()