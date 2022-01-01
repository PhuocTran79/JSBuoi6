// var thongBao5El = document.getElementById("thongBao5");

// function kiemTraSnt(n) {
//   var soNguyenTo = true;
//   if (n < 2) {
//     soNguyenTo = false;
//   } else if (n == 2) {
//     soNguyenTo = true;
//   } else if (n % 2 == 0) {
//     soNguyenTo = false;
//   } else {
//     for (i = 3; i <= Math.sqrt(n); i += 2) {
//       if (n % i == 0) {
//         soNguyenTo = false;
//         break;
//       }
//     }
//   }
//   return soNguyenTo;
// }

// function printNumber() {
//   var nhapSo = document.getElementById("nhapSo").value;
//   nhapSo = parseInt(nhapSo);
//   var ketQua5;
//   for (i = 1; i <= nhapSo; i++) {
//     if (kiemTraSnt(i)) {
//       ketQua5 += i;
//     }
//   }
//   thongBao3El.innerText = "Kết quả là : " + ketQua5;
// }
function kiem_tra_snt(n) {
  var soNguyenTo = true;

  if (n < 2) {
    soNguyenTo = false;
  } else if (n == 2) {
    soNguyenTo = true;
  } else if (n % 2 == 0) {
    soNguyenTo = false;
  } else {
    for ( i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        soNguyenTo = false;
        break;
      }
    }
  }

  return soNguyenTo;
}

function printNumber() {
  var number = document.getElementById("nhapSo").value;

  number = parseInt(number);

  var ketQua = "";
  for (var i = 1; i <= number; i++) {
    if (kiem_tra_snt(i)) {
        ketQua += i + "   ";
    }
  }
  document.getElementById("thongBao5").innerHTML = ketQua;
}
