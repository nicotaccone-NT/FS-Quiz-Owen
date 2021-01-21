$(img.keydown(function(event) {
    console.log(event);
    if(event.keycode === 68) {
        $(".Character_spritesheet").removeClass(direction);
        direction = "face-right";
        $(".Character_spritesheet").addClass(direction);


    }
})