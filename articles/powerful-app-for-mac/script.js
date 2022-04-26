// remove outline effect in Safari

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
	const boxes = document.querySelectorAll(".editorial-image-right");
	boxes.forEach((box) => {
		box.style.outline = "none";
	});
	const boxes1 = document.querySelectorAll(".editorial-image-left");
	boxes1.forEach((box) => {
		box.style.outline = "none";
	});
}