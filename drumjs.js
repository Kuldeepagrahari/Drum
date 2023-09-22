let selected=document.querySelectorAll("button");
for(let i=0;i<selected.length;i++){
selected[i].addEventListener("click",function(){
    // alert("clicked!");
    // writing [i] to give order and loop to apply to all seven selected btn
    
    let selectedinnerhtml=this.innerHTML;

    makesound(selectedinnerhtml);
    animation(selectedinnerhtml);

});}
 

document.addEventListener("keydown",function(keypressed){
    makesound(keypressed.key);
    animation(keypressed.key);
});
function makesound(key){
    switch(key){
        case "w": new Audio("snare.mp3").play();
        break;
        case "a": new Audio("kick-bass.mp3").play();
        break;
        case "s": new Audio("tom-1.mp3").play();
        break;
        case "d": new Audio("tom-2.mp3").play();
        break;
        case "j": new Audio("tom-3.mp3").play();
        break;
        case "k": new Audio("tom-4.mp3").play();
        break;
        case "l": new Audio("crash.mp3").play();
        break;
        default:console.log("2");
    }

}
function animation(keyval){
    document.querySelector("."+ keyval).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+ keyval).classList.remove("pressed");
    }, 100);
}