function kali(a,b){
    console.log("bayu maulana");

    return a*b;
}

function nama(nama,tmplhr){
    if(nama == "Bayu Maulana" && tmplhr == "Karawang"){
        console.log("Nama saya "+nama+" lahir di "+tmplhr);
    }else{
        console.log("siapa anda???????????????");
    }
}

let result = kali(100,54);
console.log(result);
nama("Bayu Maulana","Karawang");

function nama1(nama,tmplhr){
    if(nama == "Bayu Maulana" && tmplhr == "Karawang"){
        return "Nama saya "+nama+" lahir di "+tmplhr;
    }else{
        return "siapa anda???????????????";
    }
}


let tes = nama1("Bayu Maulana","Karawang");
console.log(tes);

// expression function
let tes1 = function (nama,tmplhr){
    if(nama == "Bayu Maulana" && tmplhr == "Karawang"){
        return "Nama saya "+nama+" lahir di "+tmplhr;
    }else{
        return "siapa anda???????????????";
    }
}

console.log(tes1('bay','krw'));


function minimal (a,b){
    if (a < b) {
        return a;
    }else if (b < a){
        return b;
    }else if (a === b){
        return a;
    }
}

let MIN = minimal(3,3);
console.log(MIN);

function power(a,b){
    return a**b    
}

let PW = power(7,3);
console.log(PW);

