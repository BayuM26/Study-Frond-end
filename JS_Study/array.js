const data = [
    "Bayu Maulana",
    21,
    "karawang",
];

console.log(data);
// panjang Array
console.log("panjang array = "+data.length);

// mengeluarkan data paling akkhir
console.log(data.pop());

// menegeluarkan dan menambahkan data paling depan data
data.shift();
data.unshift("bayyyyyyy");
console.log(data);

data.splice(1,1);
console.log(data);


let evenNumber = [];

for (let i=1; i<=100; i++){
    if(i%2 == 0){
        evenNumber.push(i);
    }
}
console.log(evenNumber);