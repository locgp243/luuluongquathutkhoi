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
  let vungkhoi = parseFloat(document.getElementById("vungkhoi2").value);

  // Kiểm tra nếu nhập sai
  if (isNaN(vungkhoi)) {
      alert("Vui lòng nhập vùng khói tính toán!");
      return;
  }

  // Tính diện tích
  let b = Math.sqrt(vungkhoi);
  console.log(b)
  let area = 0.38 * b;

  // Gán giá trị vào ô input disabled
  document.getElementById("area-3").value = area.toFixed(2) + " m²";
}

function calculateArea4() {
  let y = parseFloat(document.getElementById("y").value);
  let pf = parseFloat(document.getElementById("pf").value);
  let ks = parseFloat(document.getElementById("ks").value);

  let tam = Math.pow(y, 1.5);

  let kq = 678.8 * pf * tam * ks;

  document.getElementById("g").value = kq.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " kg/h²";

}


function calculateArea5() {
  let G = parseFloat(document.getElementById("g1").value);
  let g = parseFloat(document.getElementById("g2").value);


  let kq = G / g;
  // const formattedNumber = kq.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById("area-5").value = kq.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " kg/m3";

}