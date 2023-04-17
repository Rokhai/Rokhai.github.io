function moveCard() {
    var element =  document.getElementById("profile-card");
    var isAnimationDone = true;

    if (isAnimationDone == true) {
        
        if (element.className == "card-left") {
            isAnimationDone = false;
            element.classList.remove("card-left");
            element.classList.add("card-right");
            isAnimationDone = true;
        } else if (element.className == "card-right") {
            isAnimationDone = false;
            element.classList.remove("card-right");
            element.classList.add("card-left");
            isAnimationDone = true;
        } else {
            isAnimationDone = false;
            element.classList.remove("card");
            element.classList.add("card-left");
            isAnimationDone = true;
        }
    }
}











// function moveCard() {
//     var element =  document.getElementById("profile-card");
//     var position = "middle";

//     if (element.className == "card-left") {
//         element.classList.remove("card-left");
//         if (position == "left") {
//             element.classList.add("card-right");
//             position = "right";
//         }
//     } else if (element.className == "card-right") {
//         element.classList.remove("card-right");
//         if (position = "right") {
//             element.classList.add("card-left");
//             position = "left";
//         }
//     } else {
//         element.classList.remove("card");
//         if (position == "middle") {
//             element.classList.add("card-left");
//             position = "left";
//         }
//     }
// }