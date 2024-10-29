const fill = document.querySelector(".fill");
const empty = document.querySelectorAll(".empty");

function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
    this.className = "fill";
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}

function dragLeave() {
    this.className = "empty";
}

function dragDrop() {
    this.className = "empty";
    this.append(fill);
}

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const mt of empty) {
    mt.addEventListener("dragover", dragOver)
    mt.addEventListener("dragenter", dragEnter)
    mt.addEventListener("dragleave", dragLeave)
    mt.addEventListener("drop", dragDrop)
}
