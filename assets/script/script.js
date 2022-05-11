function hitungLuas() {
  let alas = document.getElementById("luas-alas").value;
  let tinggi = document.getElementById("luas-tinggi").value;
  alas = parseInt(alas);
  tinggi = parseInt(tinggi);

  if (isNaN(alas) || isNaN(tinggi)) {
    alert("Masukan inputan!!!");
    return;
  }

  let luas = 1 / 2 * alas * tinggi;
  luas = Math.round(luas * 1000) / 1000;

  let hasil = document.getElementById("hasil-luas");
  hasil.innerHTML = luas;
}

function hitungSisi() {
  let a = document.getElementById("sisi-a").value;
  let b = document.getElementById("sisi-b").value;
  a = parseInt(a);
  b = parseInt(b);

  if (isNaN(a) || isNaN(b)) {
    alert("Masukan inputan!!!");
    return;
  }

  //cara ribet
  let arr = [a, b];
  let sum = 0;
  for (i of arr) {
    i = i * i;
    sum += i;
  }
  let c = Math.sqrt(sum);
  c = Math.round(c * 1000) / 1000;

  let hasilSisi = document.getElementById("hasil-sisi");
  hasilSisi.innerHTML = c;
}

function hitungSudut() {
  let a = document.getElementById("sudut-a").value;
  let b = document.getElementById("sudut-b").value;
  a = parseInt(a);
  b = parseInt(b);

  if (isNaN(a) || isNaN(b)) {
    alert("Masukan inputan!!!");
    return;
  }

  console.log(a);
  let c = 0;
  if (a + b >= 180) {
    alert("Sudut tidak valid!!!");
    return;
  } else {
    c = 180 - a - b;
  }

  let hasilSudut = document.getElementById("hasil-sudut");
  hasilSudut.innerHTML = c;
}