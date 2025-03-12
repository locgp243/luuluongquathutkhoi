function calculateArea1() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);

  // Kiểm tra nếu nhập sai
  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      alert("Vui lòng nhập đúng chiều dài và chiều rộng!");
      return;
  }

  // Tính diện tích
  let area = length * width;

  // Gán giá trị vào ô input disabled
  document.getElementById("area-1").value = area.toFixed(2) + " m²";
}



function calculateArea3() {
  let dientich = parseFloat(document.getElementById("a").value);

  // Kiểm tra nếu nhập sai
  if (isNaN(dientich)) {
      alert("Vui lòng nhập A!");
      return;
  }

  // Tính diện tích
  let b = Math.sqrt(dientich);
  console.log(b)
  let area = 0.38 * b;

  // Gán giá trị vào ô input disabled
  document.getElementById("area-3").value = area.toFixed(2) + " m";
}

function calculateArea4() {
  let y = parseFloat(document.getElementById("y").value);
  let pf = parseFloat(document.getElementById("pf").value);
  let ks = parseFloat(document.getElementById("ks").value);

  if (isNaN(y) || isNaN(pf) || isNaN(ks)) {
    alert("Vui lòng điền đầy đủ thông số yêu cầu (pf, y, ks) trước khi tính toán")
  }

  let tam = Math.pow(y, 1.5);

  let kq = 678.8 * pf * tam * ks;

  document.getElementById("G").value = kq.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " kg/h²";

}


function calculateArea5() {
  let G = parseFloat(document.getElementById("G").value);
  let g = parseFloat(document.getElementById("g").value);

  console.log(g)

  if (isNaN(G)) {
    alert("Vui lòng tính G trước")
  }
  if (isNaN(g)) {
    alert("Vui lòng nhập g")
  }
  let kq = G / g;
  // const formattedNumber = kq.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  console.log("Giá trị gốc của kq:", kq);

  document.getElementById("area-5").value = kq + " kg/m3";

}

function roundUp(num, decimals) {
  let factor = Math.pow(10, decimals);
  return Math.ceil(num * factor) / factor;
}
function calculateArea6() {
  let Q = parseFloat(document.getElementById("area-5").value);
  let quat = parseFloat(document.getElementById("quat").value);

  let b = roundUp(Q, 1).toFixed(1);
  let c = roundUp(Q, 1);

  console.log(Q, b, c)
  console.log(roundUp(Q, 1))
  console.log(roundUp(26.83, 1));

  let kq = b * quat;

  document.getElementById("area-6").value = kq.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " kg/m3";


}

function calculateArea7() {
  let ak = parseFloat(document.getElementById("ak").value);

  let kq = ak / 1600;
  kq = kq.toFixed(1);
  document.getElementById("area-7").value = roundUp(kq, 3) + " kg/m3";

}

function calculateArea8() {
  let a = parseFloat(document.getElementById("area-7").value);
  let Q = parseFloat(document.getElementById("area-5").value);


  let kq = a * Q

  document.getElementById("area-8").value = kq + " kg/m3";

}