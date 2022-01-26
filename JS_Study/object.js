const dataDiri = {
    namaDepan: "Bayu",
    namaBelakang: "Maulana",
    Umur: 21,
    TempatLahir: "Karawang",
};

console.log(dataDiri.namaDepan+" "+dataDiri.namaBelakang);

// ubah data object
dataDiri.namaDepan = "BAYU";
dataDiri["namaBelakang"] = "MAULANA";
console.log(dataDiri);

// tambah data object
dataDiri.tglLahir = "26-06-2000";
console.log(dataDiri);

// delete data object
delete dataDiri.TempatLahir;
console.log(dataDiri);

const restaurant ={
	name: "BAYU MAULANA",
  	city: "Karawang",
  	"favorite drink": "Mineral water",
  	"favorite food": "Noodels",
  	isVegan: false,
};

let name = restaurant.name;
let favoriteDrink = restaurant["favorite drink"];
console.log(restaurant);
console.log(name);
console.log(favoriteDrink);