document.addEventListener("DOMContentLoaded", function() {
    const btnSubmit = document.getElementById("inputBook");

    btnSubmit.addEventListener("submit", function(event) {
        event.preventDefault();
        if(tambahDataBuku()){
            alert("Buku Berhasil di Simpan");
        }else{
            alert("Buku Gagal di Simpan")
        }
    });
    if(isStorageExist){
        loadDataFromStorage();
    }
});

document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil di simpan.");
});

document.addEventListener("ondataloaded", () => {
    refreshDataFromBook();
});
