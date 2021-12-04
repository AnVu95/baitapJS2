function tinhToan(){
    var chieuDai = Number(document.getElementById("inpDai").value);
    var chieuRong = Number(document.getElementById("inpRong").value);
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    document.getElementById("txtKetQua").innerHTML = "Chu vi là: " + chuVi + " Diện tích là: " + dienTich;

}