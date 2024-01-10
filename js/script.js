const blocks = document.querySelectorAll(".item-card");
let currBlock;
console.log(blocks);

currBlock = blocks[0];

blocks.forEach((b) => {
  b.onclick = () => {
    if (currBlock == b) {
      currBlock.classList.remove("selected");
      currBlock = null;
    } else if (currBlock == null) {
      b.classList.add("selected");
      currBlock = b;
    } else {
      currBlock.classList.remove("selected");
      b.classList.add("selected");
      currBlock = b;
    }
  };
});
