const field = document.getElementById("field");

// tombol 0 - 10
const nol = document.getElementById("nol");
const satu = document.getElementById("satu");
const dua = document.getElementById("dua");
const tiga = document.getElementById("tiga");
const empat = document.getElementById("empat");
const lima = document.getElementById("lima");
const enam = document.getElementById("enam");
const tujuh = document.getElementById("tujuh");
const delapan = document.getElementById("delapan");
const sembilan = document.getElementById("sembilan");
const sepuluh = document.getElementById("sepuluh");

// tombol operator aritmatika
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const bagi = document.getElementById("bagi");
const dikali = document.getElementById("kali");
const mod = document.getElementById("mod");

// tombol samadengan
const samadengan = document.getElementById("samadengan");

// tombol hapus
const del = document.getElementById("del");

const HubungkanKeField = (content) => {
  field.innerHTML += content;
};

nol.addEventListener("click", () => HubungkanKeField(nol.textContent));
satu.addEventListener("click", () => HubungkanKeField(satu.textContent));
dua.addEventListener("click", () => HubungkanKeField(dua.textContent));
tiga.addEventListener("click", () => HubungkanKeField(tiga.textContent));
empat.addEventListener("click", () => HubungkanKeField(empat.textContent));
lima.addEventListener("click", () => HubungkanKeField(lima.textContent));
enam.addEventListener("click", () => HubungkanKeField(enam.textContent));
tujuh.addEventListener("click", () => HubungkanKeField(tujuh.textContent));
delapan.addEventListener("click", () => HubungkanKeField(delapan.textContent));
sembilan.addEventListener("click", () => HubungkanKeField(sembilan.textContent));
sepuluh.addEventListener("click", () => HubungkanKeField(sepuluh.textContent));

// aritmatika
tambah.addEventListener("click", () => HubungkanKeField(tambah.textContent));
kurang.addEventListener("click", () => HubungkanKeField(kurang.textContent));
dikali.addEventListener("click", () => HubungkanKeField(dikali.textContent));
bagi.addEventListener("click", () => HubungkanKeField(bagi.textContent));
mod.addEventListener("click", () => HubungkanKeField("%"));

// hapus
del.addEventListener("click", () => (field.innerHTML = ""));
// method samadengan
samadengan.addEventListener("click", () => {
  try {
    let expression = field.innerHTML.replace(/x/g, "*").replace(/:/g, "/").replace(/mod/g, "%");
    field.innerHTML = eval(expression);
  } catch (e) {
    field.innerHTML = "Error";
  }
});
