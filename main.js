let persons = [];

const btnSaqla = document.getElementById("btnSaqlash");

class Address {
  constructor(viloyati, tumani, uyi) {
    this.viloyati = viloyati;
    this.tumani = tumani;
    this.uyi = uyi;
  }
}

class Person {
  constructor(
    ismi,
    familiyasi,
    sharifi,
    tugilgan_sanasi,
    tel_nomeri,
    unvoni,
    lavozimi,
    address
  ) {
    this.ismi = ismi;
    this.familiyasi = familiyasi;
    this.sharifi = sharifi;
    this.tugilgan_sanasi = tugilgan_sanasi;
    this.tel_nomeri = tel_nomeri;
    this.unvoni = unvoni;
    this.lavozimi = lavozimi;
    this.address = address;
  }
}

const unvonlar = [
  { id: 1, text: "leytenant" },
  { id: 2, text: "katta leytenant" },
  { id: 3, text: "kapitan" },
];

const viloyatlar = [
  { id: 1, text: "Toshkent" },
  { id: 2, text: "Qashqadaryo" },
  { id: 3, text: "Surxondaryo" },
];

const tumanlarSurxon = [
  { id: 1, text: "Termiz" },
  { id: 2, text: "Angor" },
  { id: 3, text: "Muzrabot" },
];

const tumanlarToshkent = [
  { id: 1, text: "Chirchiq" },
  { id: 2, text: "Yangiariq" },
  { id: 3, text: "Bo'stonliq" },
];

const unvonId = document.getElementById("unvonId");

const viloyatId = document.getElementById("viloyatId");

const tumanId = document.getElementById("tumanId");

unvonlar.forEach((unvon) => {
  const opt = document.createElement("option");
  opt.value = unvon.id;
  opt.text = unvon.text;
  unvonId.appendChild(opt);
});

viloyatlar.forEach((viloyat) => {
  const opt = document.createElement("option");
  opt.value = viloyat.id;
  opt.text = viloyat.text;
  viloyatId.appendChild(opt);
});

tumanlarSurxon.forEach((tuman) => {
  const opt = document.createElement("option");
  opt.value = tuman.id;
  opt.text = tuman.text;
  tumanId.appendChild(opt);
});

btnSaqla.addEventListener("click", (e) => {
  console.log("bosildi");
  add();
  console.log(persons);
});

/* ** functions ** */

function add() {
  //add into array

  const myForm = document.forms.myForm;
  const ism = myForm.elements.ism.value;
  const familiya = myForm.elements.familiya.value;
  const sharif = myForm.elements.sharif.value;
  const tsana = myForm.elements.tsana.value;
  const traqam = myForm.elements.traqam.value;
  const unvonId = myForm.elements.unvonId.value;
  const lavozim = myForm.elements.lavozim.value;
  const viloyatId = myForm.elements.viloyatId.value;
  const tumanId = myForm.elements.tumanId.value;
  const uy = myForm.elements.uy.value;

  const newItem = new Person(
    ism,
    familiya,
    sharif,
    tsana,
    traqam,
    unvonId,
    lavozim,
    new Address(viloyatId, tumanId, uy)
  );
  persons.push(newItem);
}
