function myFunction() {
    var i, j;
    i = "lixiaomu";
    j = document.getElementById("password").value;
    if (j == i) {
        location.href = "xiaomu.html";
    } else {
        alert("密码错误！请重新输入！");
    }
}