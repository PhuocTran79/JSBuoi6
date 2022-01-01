var nhapVaoNEl = document.getElementById("nhapVaoN");
var thongBao3El = document.getElementById("thongBao3");

function tinhToan2() {
  var nhapVaoN = nhapVaoNEl.value * 1;
  var giaiThua = 1;
  for (i = 1; i <= nhapVaoN; i++) {
    giaiThua *= i;
  }

  thongBao3El.innerText = "Kết quả là : " + giaiThua;
  return 0;
}
