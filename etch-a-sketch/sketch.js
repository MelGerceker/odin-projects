const container = document.querySelector("#container");

let amount = 256;

function resizeFunction() {

    let sideCount = prompt("Enter the number of squares per side (max 100):", "16");
    sideCount = parseInt(sideCount);

    // do i do amount * amount sinxxe the i =256 when one amount = 16
    // Validate input

    if (isNaN(sideCount) || sideCount < 1 || sideCount > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    // Clear existing grid
    container.innerHTML = "";

    createGrid(sideCount);

}


function createGrid(sideCount) {
    const totalSquares = sideCount * sideCount;
    const squareSize = 640 / sideCount; // container is 640px

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "gray";
        });

          square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

console.log(createGrid(16));