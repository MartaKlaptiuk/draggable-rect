var box = $(".box");

Draggable.create(box, {
    bounds: "#container",
    onPress: offsetBounds,
    onDrag: offsetBounds
});

function offsetBounds() {

    // Simulate offset
    //var maxX = this.maxX - 150;
    var maxY = this.maxY;
    var rLimit = (this.y+2000)/6-50;//((this.y + 4110)/5.9);
    var lLimit = (this.y+2000)/(-6.1)+50;
    if (this.x > rLimit) TweenLite.set(box, { x: rLimit });
    if (this.x < lLimit) TweenLite.set(box, { x: lLimit });
    if (this.y > maxY) TweenLite.set(box, { y: maxY });
}
