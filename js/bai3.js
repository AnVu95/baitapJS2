/**
 * K1 : Giá 1 USD hiện nay là 23.500 VNĐ
 * Input 
 * VND = 23500
 * USD
 * 
 * K2 :
 * B1 : Khai báo biến và gán giá trị :
 * B2 : CT quy đổi USD sang VND
 * soTienVnd = USD * 23.500
 * 
 * 
 * K3 : Kết quả đạt được
 *output: soTienVnd 
 */


function quyDoi(){
    var oneUsd = 23500;
    var soUsd = Number(document.getElementById("inpUsd").value);
    var soTienVnd = oneUsd * soUsd;
    document.getElementById("txtQuyDoiVND").innerHTML = "Số tiền quy đổi được: " + soTienVnd + "VND";
}