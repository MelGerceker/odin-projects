const container = document.querySelector("#container");

// 16 x 16 squares
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}