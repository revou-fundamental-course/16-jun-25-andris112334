function showLuas() {
  document.getElementById("luasSection").classList.remove("hidden");
  document.getElementById("kelilingSection").classList.add("hidden");
}

function showKeliling() {
  document.getElementById("kelilingSection").classList.remove("hidden");
  document.getElementById("luasSection").classList.add("hidden");
}

function hitungLuas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  if (!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
    const luas = 0.5 * alas * tinggi;
    document.getElementById("luasHasil").innerText = `Luas = 1/2 × ${alas} × ${tinggi} = ${luas}`;
  } else {
    document.getElementById("luasHasil").innerText = "Masukkan nilai alas dan tinggi yang valid.";
  }
}

function hitungKeliling() {
  const s1 = parseFloat(document.getElementById("sisi1").value);
  const s2 = parseFloat(document.getElementById("sisi2").value);
  const s3 = parseFloat(document.getElementById("sisi3").value);
  if (!isNaN(s1) && !isNaN(s2) && !isNaN(s3) && s1 > 0 && s2 > 0 && s3 > 0) {
    const keliling = s1 + s2 + s3;
    document.getElementById("kelilingHasil").innerText = `Keliling = ${s1} + ${s2} + ${s3} = ${keliling}`;
  } else {
    document.getElementById("kelilingHasil").innerText = "Masukkan semua sisi segitiga yang valid.";
  }
}

function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("luasHasil").innerText = "";
}

function resetKeliling() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("kelilingHasil").innerText = "";
}
