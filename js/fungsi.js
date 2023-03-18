let angka1, angka2, hsl, kalk;
kalk = document.getElementById("kalkulator");
hsl = kalk.hasil;
function removeFail(item) {
  item.classList.remove("fail");
}
function getValue() {
  if (kalk.angka1.value == "" || kalk.angka2.value == "") {
    if (kalk.angka1.value == "" && kalk.angka2.value == "") {
      kalk.angka1.classList.add("fail");
      kalk.angka2.classList.add("fail");
    } else if (kalk.angka1.value == "") {
      kalk.angka1.classList.add("fail");
    } else if (kalk.angka2.value == "") {
      kalk.angka2.classList.add("fail");
    }
    alert("Anda harus mengisi semua masukan yang ada!");
  } else {
    angka1 = parseFloat(kalk.angka1.value);
    angka2 = parseFloat(kalk.angka2.value);
    return true;
  }
  return false;
}
function penambahan() {
  if (getValue()) {
    hsl.value = angka1 + angka2;
  }
}
function pengurangan() {
  if (getValue()) {
    hsl.value = angka1 - angka2;
  }
}
function perkalian() {
  if (getValue()) {
    hsl.value = angka1 * angka2;
  }
}
function pembagian() {
  if (getValue()) {
    hsl.value = angka1 / angka2;
  }
}
function perpangkatan() {
  if (getValue()) {
    hsl.value = angka1 ** angka2;
  }
}
