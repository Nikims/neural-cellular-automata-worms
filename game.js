// Creating variables
let myX = 0, myY = 0, updates = 0;
convolutionKernel = [
	[0.68, -0.9, 0.68],
	[-0.9, -0.66, -0.9],
	[0.68, -0.9, 0.68]]


let grid = []
for (let i = 0; i < 128; i++) {
	grid[i] = []
	for (let j = 0; j < 128; j++) {
		grid[i][j] = Math.random() * 2 - 1
	}

}
function activation(x) {
	return -1 / Math.pow(2, (0.6 * Math.pow(x, 2))) + 1
}
function updateGrid() {
	let tempGrid = []
	// try {
	for (let i = 2; i < 127; i++) {
		tempGrid[i] = []
		for (let j = 2; j < 127; j++) {
			tempGrid[i][j] = 0
			for (let m = 0; m < 3; m++) {
				for (let b = 0; b < 3; b++) {
					try {
						tempGrid[i][j] += convolutionKernel[m][b] * grid[i + (m) - 1][j + (b) - 1]
					} catch (e) {
					}
				}
			}
			if (i == 5) {
				// console.log(tempGrid[i][j])
			}
			tempGrid[i][j] = activation(tempGrid[i][j])
			// console.log(tempGrid[i][j])
		}

	}
	grid = JSON.parse(JSON.stringify(tempGrid))

	// console.log(tempGrid)
}


function update() {
	// Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
}

updates = 0
function draw() {
	updateGrid()

	updates++
	if (updates % 2 == 0) {
		context.fillStyle = "black"
		context.fillRect(0, 0, 700, 700)
		for (let i = 2; i < 126; i++) {
			for (let j = 2; j < 126; j++) {
				context.globalAlpha = ((grid[i][j]))
				context.fillStyle = `red`
				context.fillRect(i * 4, j * 4, 4, 4)
			}
		}
	}
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
function keydown() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
