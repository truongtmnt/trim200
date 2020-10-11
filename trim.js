var maxChar = document.getElementById("maxInput").value;
document.getElementById("max").textContent = "To " + maxChar + " characters:";

// when type in input max number
document.getElementById("maxInput").onkeyup = function () {
	maxChar = document.getElementById("maxInput").value;
	document.getElementById("max").textContent = "To " + maxChar + " characters:";
	trimText();
};

// when click input max number
document.getElementById("maxInput").onclick = function () {
	maxChar = document.getElementById("maxInput").value;
	document.getElementById("max").textContent = "To " + maxChar + " characters:";
	trimText();
};

document.getElementById("text-container").onkeyup = trimText;

function trimText() {
	let text = document.getElementById("text-container").value;
	let n = text.length;
	document.getElementById("length").innerHTML = "Length: " + n;
	try {
		// debugger;
		let char = text.charAt(maxChar);
		let i = 0;
		while (char !== " ") {
			i++;
			char = text.charAt(maxChar - i);
			if ((text.length = 1 || i === text.length)) {
				break;
			}
		}
		text = text.substr(0, maxChar - i);
	} catch (e) {
		console.log("error: " + e);
	}
	document.getElementById("result-container").innerHTML = text + "...";
}

function CopyToClipboard() {
	var r = document.createRange();
	r.selectNode(document.getElementById("result-container"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}

$(document).ready(function () {
	$('[data-toggle="popover"]').popover();
	$('[data-toggle="popover"][data-timeout]').on(
		"shown.bs.popover",
		function () {
			this_popover = $(this);
			setTimeout(function () {
				this_popover.popover("hide");
			}, $(this).data("timeout"));
		}
	);
});
