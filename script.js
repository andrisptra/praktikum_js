window.setTimeout("tampilWaktu()", 1000);

function tampilWaktu() {
  let waktu = new Date();
  let bulan = waktu.getMonth() + 1;

  setTimeout("tampilWaktu()", 1000);
  document.getElementById("tanggal").innerHTML =
    waktu.getDate() + "/" + bulan + "/" + waktu.getFullYear();
  document.getElementById("jam").innerHTML =
    waktu.getHours() + ":" + waktu.getMinutes() + ":" + waktu.getSeconds();
}
