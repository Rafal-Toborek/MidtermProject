let scene = document.getElementById("scene");
let text = document.getElementById("text");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let toOutside = document.getElementById("toOutside");
let toPorch = document.getElementById("toPorch");

images = ["./images/Call2Action.png","./images/Outside.png","./images/Around.png","./images/Porch.png" ,"./images/Living.png", "./images/LHallway.png","./images/RHallway.png"];
sceneText = ["Around", "Call to Action", "Outside", "Living Room", "Porch","Left Hallway", "Right Hallway"];



let currentScene = 0;
text.textContent = sceneText[0];


if (currentScene === 0) {
    toOutside.style.display = "none";
    toPorch.style.display = "none";
    nextButton.style.display = "inline-block";
    prevButton.style.display = "inline-block";
    nextButton.addEventListener("click", function() {
        currentScene++;
        scene.src = images[currentScene];
        text.textContent = sceneText[currentScene];
        console.log(currentScene);
        });
    } else if (currentScene === 1) {
        toOutside.style.display = "inline-block";
        toPorch.style.display = "inline-block";
        nextButton.style.display = "none";
        prevButton.style.display = "inline-block";
        console.log(currentScene);
        toOutside.addEventListener("click", function() {
            currentScene = 2;
            scene.src = images[currentScene];
            text.textContent = sceneText[currentScene];
            toOutside.style.display = "none";
            toPorch.style.display = "none";
            nextButton.style.display = "inline-block";
            prevButton.style.display = "inline-block";
            console.log(currentScene);
            });
        toPorch.addEventListener("click", function() {
            currentScene = 3;
            scene.src = images[currentScene];
            text.textContent = sceneText[currentScene];
            toOutside.style.display = "none";
            toPorch.style.display = "none";
            nextButton.style.display = "inline-block";
            prevButton.style.display = "inline-block";
            console.log(currentScene);
            });
        } else if (currentScene === 3 || currentScene === 2) {
            toOutside.style.display = "inline-block";
            toPorch.style.display = "inline-block";
            nextButton.addEventListener("click", function() {
                currentScene = 4;
                    scene.src = images[currentScene];
                    text.textContent = sceneText[currentScene];
                    toOutside.style.display = "none";
                    toPorch.style.display = "none";
                        
            });
        }



console.log(currentScene);
prevButton.addEventListener("click", function() {
    if (currentScene > 0) {
        currentScene--;
        scene.src = images[currentScene];
        console.log(currentScene);
    }
});

console.log(currentScene)