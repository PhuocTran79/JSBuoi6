var thongBao2El = document.getElementById("thongBao2");
var nhapXEl = document.getElementById("nhapX");
var nhapNEl = document.getElementById("nhapN");

function tinhToan1() {
  var nhapX = nhapXEl.value * 1;
  var nhapN = nhapNEl.value * 1;
  var luyThua = 1;
  var tong = 0;

  for (i = 1; i <= nhapN; i++) {
    luyThua = luyThua * nhapX;
    tong += luyThua;
  }
  thongBao2El.innerText= "Tổng S là : " + tong
}
