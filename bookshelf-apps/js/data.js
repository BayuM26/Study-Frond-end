const bookshelf_KEY = 'bookshelf-apps';

let books = [];

// cek browser
    function isStorageExist(){
        if(typeof(storage) === undefined){
            alert('Browser ini tidak mendukung aplikasi ini');
            return false;
        }
        return true;
    }
// end cek browser

function saveData() {
    const parsed = JSON.stringify(books);
    localStorage.setItem(bookshelf_KEY, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
 }

function loadDataFromStorage(){
    const serializedData = localStorage.getItem(bookshelf_KEY);

    let data = JSON.parse(serializedData);

    if(data !== null){
        books = data;
    }

    document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage(){
    if(isStorageExist()){
        saveData();
    }
}

function composeTodoObject(title, author, year, isCompleted){
    return{
        id: +new Date(),
        title,
        author,
        year,
        isCompleted,
      };
}

function findBook(book_id){
    for(let book of books){
        if(book.id == book_id){
            return book;
        }
    }
    return null;
}

function findBookIndex(book_id){
    let index = 0;
    for(let book of books){
        if(book.id === book_id){
            return index;
        }
        index++;
    }
    return -1;
}