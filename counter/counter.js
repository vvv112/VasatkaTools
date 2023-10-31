
alert(document.getElementById("numbox"))
var num = 0
function plus() {
num++
alert(num)
document.getElementById("numbox").value = num
};

function minus() {
num--
alert(num)
document.getElementById("numbox").value = num
};
