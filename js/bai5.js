/**
 * K1 : nhập vào một số có 2 chử số :
 * input 
 * num
 * 
 * K2
 * hangChuc = Math.floor(num / 10);
 * hangDonVi = num % 10;
 * tong2So = hangChuc + hangDonVi
 * K3
 * out
 * tong2So
 */




function tinhTong(){
    var num = Number(document.getElementById("inpNumber").value);
    var hangChuc = Math.floor(num / 10);
    var hangDonVi = num % 10;

    var tong2So = hangChuc + hangDonVi;

    document.getElementById("txtTong").innerHTML = "Tổng 2 ký số là: " + tong2So;


}