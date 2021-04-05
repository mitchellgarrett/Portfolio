const ID_NUM_FACTORS = "NUM_FACTORS";
const ID_NUM_OPTIONS = "NUM_OPTIONS";
const ID_MATRIX = "MATRIX";

function initializeMatrix() {
	var factors = window.localStorage.getItem(ID_NUM_FACTORS);
	var options = window.localStorage.getItem(ID_NUM_OPTIONS);
	
	if (factors != null) {
		document.getElementById(ID_NUM_FACTORS).value = factors;
	}
	
	if (options != null) {
		document.getElementById(ID_NUM_OPTIONS).value = options;
	}
	
	generateMatrix();
}

function calculateMatrix() {
	var factors = document.getElementById(ID_NUM_FACTORS).value;
	var options = document.getElementById(ID_NUM_OPTIONS).value;
	
	for (var o = 0; o < options; o++) {
		var total = 0;
		for (var f = 0; f < factors; f++) {
			var weight = parseInt(document.getElementById(`WEIGHT_${f}`).value);
			var value = parseInt(document.getElementById(`VALUE_${f}_${o}`).value);
			total += weight * value;
		}
		document.getElementById(`OUTPUT_${o}`).value = total;
	}
}

function generateMatrix() {
	var factors = document.getElementById(ID_NUM_FACTORS).value;
	var options = document.getElementById(ID_NUM_OPTIONS).value;
	
	window.localStorage.setItem(ID_NUM_FACTORS, factors);
	window.localStorage.setItem(ID_NUM_OPTIONS, options);
	
	var matrix = document.getElementById(ID_MATRIX);
	matrix.innerHTML = "";
	
	var tr;
	var th;
	
	// Create header
	tr = document.createElement("tr");
	matrix.appendChild(tr);
	
	th = document.createElement("th");
	th.innerHTML = "<b>Factors</b>";
	tr.appendChild(th);
	
	th = document.createElement("th");
	th.innerHTML = "<b>Weights</b>";
	tr.appendChild(th);
	
	// Columns
	for (var o = 0; o < options; o++) {
		th = document.createElement("th");
		th.innerHTML = `<input type="text" value="Option ${(o + 1)}">`;
		tr.appendChild(th);
	}
	
	// Rows
	for (var f = 0; f < factors; f++) {
		matrix.appendChild(generateRow(f, options));
	}
	
	// Outputs
	tr = document.createElement("tr");
	matrix.appendChild(tr);
	
	th = document.createElement("th");
	tr.appendChild(th);
		
	th = document.createElement("th");
	th.innerHTML = "<b>Totals</b>"
	tr.appendChild(th);
	
	for (var o = 0; o < options; o++) {
		th = document.createElement("th");
		th.innerHTML = `<output id="OUTPUT_${o}"><b>0</b></output>`;
		tr.appendChild(th);
	}
	
	calculateMatrix();
}

function generateRow(f, options) {
	var tr = document.createElement("tr");
	
	// Title
	var th;
	th = document.createElement("th");
	th.innerHTML = `<input type="text" value="Factor ${(f + 1)}">`;
	tr.appendChild(th);
	
	// Weight slider
	tr.appendChild(generateSlider(`WEIGHT_${f}`));
	
	// Value sliders
	for (var o = 0; o < options; o++) {
		tr.appendChild(generateSlider(`VALUE_${f}_${o}`));
	}
	
	return tr;
}

function generateSlider(id) {
	th = document.createElement("th");
	th.innerHTML = `<output>3</output> <br> 1 <input id="${id}" type="range" max="5" min="1" oninput="this.previousElementSibling.previousElementSibling.value = this.value; calculateMatrix();"> 5`;
	return th;
}