alert("test")
numbox = document.getElementById("numbox")

var num = 0
function plus() {
num++
alert(num)
numbox.value = num
};

function minus() {
num--
alert(num)
numbox.value = num
};
