if(1==1){
    let tes = 4;
    console.log(tes);
}else{
    let tes = 0;
    console.log(tes);
}


// sama saja seperti if di atas
const tes = 1==1 ? 4 : 0;
console.log(tes);

/* 
truthy dan falsy
tipe data atau nilai yang dianggap falsy, antara lain:

Number 0
BigInt 0n
String kosong seperti “” atau ‘’
null
undefined
NaN, atau Not a Number

*/

let name = "";

if (name){
    console.log("true");
}else{
    console.log("false");
}


let score = 50;
if(score >= 90){
    result = 'Selamat! Anda mendapatkan nilai A.';
    console.log(result);

}else if( (score >= 80) && (score <= 89) ){
    result = 'Anda mendapatkan nilai B.';
    console.log(result);

}else if( (score >= 70) && (score <= 79) ){
    result = 'Anda mendapatkan nilai C.';
    console.log(result);

}else if( (score >= 60) && (score <= 69) ){
       result = 'Anda mendapatkan nilai D.';
       console.log(result);

}else if(score <= 60){
    result = 'Anda mendapatkan nilai E.';
    console.log(result);
}