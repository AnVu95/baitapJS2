/**
 * K1: Nhập vào 2 chiều dài và chiều rộng của hcn
 * input :
 * chieuDai 
 * chieuRong
 * 
 * 
 * K2
 * B1: Khai báo biến và gán giá trị
 * B2: Lập CT tính
 * dienTich = chieuDai * chieuRong;
 * chuVi = (chieuDai + chieuRong) * 2
 * 
 * 
 * K3
 * output
 * chuVi
 * dienTich
 */


function tinhToan(){
    var chieuDai = Number(document.getElementById("inpDai").value);
    var chieuRong = Number(document.getElementById("inpRong").value);
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    document.getElementById("txtKetQua").innerHTML = "Chu vi là: " + chuVi + " Diện tích là: " + dienTich;

}