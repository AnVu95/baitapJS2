function tinhTong(){
    var num = Number(document.getElementById("inpNumber").value);
    var hangChuc = Math.floor(num / 10);
    var hangDonVi = num % 10;

    var tong2So = hangChuc + hangDonVi;

    document.getElementById("txtTong").innerHTML = "Tổng 2 ký số là: " + tong2So;


}