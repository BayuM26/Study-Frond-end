const  Id_Book_Belum_Selesai_Membaca = "incompleteBookshelfList";
const Id_Book_Selesai_Membaca = "completeBookshelfList";
const itemId = "ID_ITEM";

function tambahDataBuku(){
     const IdEbook_BelumDibaca = document.getElementById(Id_Book_Belum_Selesai_Membaca);
     const IdBook_SelesaiDimbaca = document.getElementById(Id_Book_Selesai_Membaca)

     const checkedCek = document.getElementById("inputBookIsComplete").checked;
     const JudulEbook = document.getElementById("inputBookTitle").value;
     const PenulisEbook = document.getElementById("inputBookAuthor").value;
     const TahunEbook = document.getElementById("inputBookYear").value;
     
     const book = BuatTagHtml(JudulEbook,PenulisEbook,TahunEbook, checkedCek);
     const bookshelfObject = composeTodoObject(JudulEbook, PenulisEbook, TahunEbook, checkedCek);

     book[itemId] = bookshelfObject.id;
     books.push(bookshelfObject);

     if(checkedCek){
          IdBook_SelesaiDimbaca.append(book);
     }else{
          IdEbook_BelumDibaca.append(book);
     }
     updateDataToStorage();

     return true;
}

// membuat tag html dari javascript
     function BuatTagHtml(JudulEbook,PenulisEbook,TahunEbook, selesai) {

          const Tampil_Judul = document.createElement("h3");
          Tampil_Judul.innerText = JudulEbook;

          const Tampil_Penulis = document.createElement("p");
          Tampil_Penulis.classList.add("penulis");
          Tampil_Penulis.innerText = PenulisEbook;

          const Tampil_Tahun = document.createElement("p");
          Tampil_Tahun.classList.add("tahun");  
          Tampil_Tahun.innerText = TahunEbook;
                                
          if(selesai){
                btn1 = Btn_unDone(); 
                btn2 = Btn_Hapus();
          }else{           
                btn1 = btn_selesai_baca(); 
                btn2 = Btn_Hapus();
          }

          const buttonAction = document.createElement("div");
          buttonAction.classList.add("action");
          buttonAction.append(btn1,btn2);

          const textArticel = document.createElement("article");
          textArticel.classList.add("book_item");
          textArticel.append(Tampil_Judul,Tampil_Penulis,Tampil_Tahun,buttonAction); 
          
          return textArticel;  
     }
// end membuat tag html dari javascript

// pembuatan tombol
     function btn_create(buttonTypeClass, ButtonValue, eventListener){
          const button = document.createElement("button");

          button.classList.add(buttonTypeClass);
          button.innerText = ButtonValue;
          button.addEventListener("click", function(event){
               eventListener(event);
          });

          return button;
     }
// end pembuatan tombol 
     
// search 
     document.getElementById("searchSubmit").addEventListener("click", () =>{
          event.preventDefault();
          const search = document.getElementById("searchBookTitle").value.toLowerCase();  
          const getdata = document.querySelectorAll("article");

          for(getobject of getdata){
               const judul = getobject.firstElementChild.textContent.toLowerCase();
               
               if(judul.indexOf(search) != -1){
                    getobject.style.display = "block";
               }else{
                    getobject.style.display = "none";
               }
          }
     });
// end search

// tombol selsai membaca
     function btn_selesai_baca(){
          return btn_create("green","Selesai dibaca",function(){
               tambahKeSelesaiMembaca(event.target.parentElement.parentElement);
          });
     }
// end tombol selesai membaca

// tombol hapus
     function Btn_Hapus(){
          return btn_create("red","Hapus Buku",function(){
               const validsi = confirm("Pakah anda yakin ingin menghapus data ini?");
               if(validsi){
                    hapusData(event.target.parentElement.parentElement); 
               }else{
                    console.log("false");
               }
                                         
          });
     }
// end tombol hapus

// tombol belum selesai membaca
     function Btn_unDone(){
          return btn_create("green","Belum Selesai Dibaca",function(event){
               tambahKeBelumSelesaiMembaca(event.target.parentElement.parentElement);
          });
     }
// end tombol belum selesai membaca

// action btn selesai bacaa
     function tambahKeSelesaiMembaca(taskElement){
          const selesaiMembaca = document.getElementById(Id_Book_Selesai_Membaca);
          const Judul = taskElement.querySelector(".book_item > h3").innerText;
          const Penulis = taskElement.querySelector(".penulis").innerText;
          const tahun = taskElement.querySelector(".tahun").innerText;

          const newBuatTagHtml = BuatTagHtml(Judul,Penulis,tahun, true);
          
          const book = findBook(taskElement[itemId]);
          book.isCompleted = true;
          newBuatTagHtml[itemId] = book.id;

          selesaiMembaca.append(newBuatTagHtml);
          taskElement.remove();

          updateDataToStorage();
     }
// end action btn selesai bacaa

// action btn selesai bacaa
     function tambahKeBelumSelesaiMembaca(taskElement){
          const selesaiMembaca = document.getElementById(Id_Book_Belum_Selesai_Membaca);
          
          const Judul = taskElement.querySelector(".book_item > h3").innerText;
          const Penulis = taskElement.querySelector(".penulis").innerText;
          const tahun = taskElement.querySelector(".tahun").innerText;

          const newBuatTagHtml = BuatTagHtml(Judul,Penulis,tahun, false);
          
          const book = findBook(taskElement[itemId]);
          book.isCompleted = false;
          newBuatTagHtml[itemId] = book.id;

          selesaiMembaca.append(newBuatTagHtml);
          taskElement.remove();

          updateDataToStorage();
     }
// end action btn selesai bacaa


// action hapus dataaa
     function hapusData(taskElement) {
          const dataposisi = findBookIndex(taskElement[itemId]);
          books.splice(dataposisi, 1);
          
          taskElement.remove();
          console.log(taskElement);
          updateDataToStorage();
     }
// end action hapus data

function refreshDataFromBook() {
     const listUncompleted = document.getElementById(Id_Book_Belum_Selesai_Membaca);
     let listCompleted = document.getElementById(Id_Book_Selesai_Membaca);
 
     for(book of books){
         const newBook = BuatTagHtml(book.title, book.author, book.year, book.isCompleted);
         newBook[itemId] = book.id;
 
         if(book.isCompleted){
             listCompleted.append(newBook);
         } else {
             listUncompleted.append(newBook);
         }
     }
 }