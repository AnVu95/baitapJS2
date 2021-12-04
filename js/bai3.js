function quyDoi(){
    var oneUsd = 23500;
    var soUsd = Number(document.getElementById("inpUsd").value);
    var soTienVnd = oneUsd * soUsd;
    document.getElementById("txtQuyDoiVND").innerHTML = "Số tiền quy đổi được: " + soTienVnd + "VND";
}