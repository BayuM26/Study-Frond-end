// Number
    let angka = 5;
    console.log(angka);

    let angka2 = 45;
    let hasil = angka + angka2;
    console.log(hasil);

    let bigint = 633333333333333333333333333333333333333333333333333334789n;
    let intbiasa = 7844444444444444444444444444444444444444444444444444444;
    console.log(intbiasa);
    console.log(bigint);
// end number

// string
    let hello = "hello";
    let world = "world";
    console.log(hello+world);

    // meyatukan kata dengan (\)
    const nama = '"BAYU\'MAULANA" BAYYYYYYYYYYYYYYY';
// end string

// null
    let datayangakandatang = null;
    console.log(datayangakandatang);
// end null

// simbol seperti primary key di database bersifat uniqe 
    const id1 = Symbol("id");
    const id2 = Symbol("id");

    console.log(id1 === id2);
