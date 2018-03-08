jQuery(function () {
function a() {
	var b = baffle('#logo').start().set({
		characters: '👋 ✍ 💻 📚',
		speed: 60
	}).text(function (currentText) {
		if (window.location.href.indexOf('home') > -1){
        return "ss4ws | Home";
    } else {
        return "Spyridon Simotas";
    }
	});
	setTimeout(function () {
		b.reveal(500);
	}, 500);
}
function b() {
	var b = baffle('#logo').start().set({
		characters: '👋 ✍ 💻 📚',
		speed: 30
	}).text(function (currentText) {
		return "ss4ws";
	});
	setTimeout(function () {
		b.reveal(500);
	}, 500);
}
function c() {
	var b = baffle('#logo').start().set({
		characters: '👋 ✍ 💻 📚',
		speed: 60
	}).text(function (currentText) {
		if (window.location.href.indexOf("index" > -1)) {
      return "Spyridon Simotas";
    }
		return "Back Home";
	});
	setTimeout(function () {
		b.reveal(500);
	}, 500);
}
if (window.location.href.indexOf("index" > -1)) {
    window.onload=function(){b();};
} else {
  window.onload=function(){a();};
}
document.getElementById('logo').onmouseover=function(){c();};
document.getElementById('logo').onmouseleave=function(){a();};
});
