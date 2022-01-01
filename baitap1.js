var thongBao1El = document.getElementById("thongBao1");

function ketQua1() {
  var n = 1,
    s = 0;
  while (s < 10000) {
    s = s + n;
    n++;
  }
  thongBao1El.innerText = " Số n nhỏ nhất là : " + n;
}
