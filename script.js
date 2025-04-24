window.setTimeout("tampilWaktu()", 1000);
darkMode();

function tampilWaktu() {
  let waktu = new Date();
  let bulan = waktu.getMonth() + 1;

  setTimeout("tampilWaktu()", 1000);
  document.getElementById("tanggal").innerHTML =
    waktu.getDate() + "/" + bulan + "/" + waktu.getFullYear();
  document.getElementById("jam").innerHTML =
    waktu.getHours() + ":" + waktu.getMinutes() + ":" + waktu.getSeconds();
}

function darkMode() {
  let buttonDark = document.getElementById("dark-button");
  let buttonLight = document.getElementById("light-button");
  let tagHTML = document.querySelector("html");

  buttonDark.onclick = function () {
    tagHTML.setAttribute("data-bs-theme", "dark");
  };
  buttonLight.onclick = function () {
    tagHTML.setAttribute("data-bs-theme", "light");
  };
}
