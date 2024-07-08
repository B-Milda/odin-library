const myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  if (
    document.querySelector("#title").checkValidity() &&
    document.querySelector("#author").checkValidity() &&
    document.querySelector("#pages").checkValidity()
  ) {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    myLibrary.push(new book(title, author, pages, read));
    refresh();
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
  } else {
    if (!document.querySelector("#title").checkValidity()) {
      document.querySelector("#title").style.border = "1px solid red";
    }
    if (!document.querySelector("#author").checkValidity()) {
      document.querySelector("#author").style.border = "1px solid red";
    }
    if (!document.querySelector("#pages").checkValidity()) {
      document.querySelector("#pages").style.border = "1px solid red";
    }
  }
}

myLibrary.push(new book("The Hobbit", "J.R.R. Tolkien", "295", "Not Read Yet"));
myLibrary.push(new book("1984", "George Orwell", "328", "Read"));
myLibrary.push(
  new book("The Great Gatsby", "F. Scott Fitzgerald", "180", "Read")
);
myLibrary.push(
  new book("Pride and Prejudice", "Jane Austen", "279", "Not Read Yet")
);
myLibrary.push(
  new book("The Catcher in the Rye", "J.D. Salinger", "277", "Read")
);
myLibrary.push(
  new book("The Lord of the Rings", "J.R.R. Tolkien", "1178", "Not Read Yet")
);
myLibrary.push(new book("To Kill a Mockingbird", "Harper Lee", "324", "Read"));
myLibrary.push(new book("Moby-Dick", "Herman Melville", "624", "Not Read Yet"));

document.querySelector("#add").addEventListener("click", addBookToLibrary);

const inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", function () {
    if (inputs[i].style.border == "1px solid red") {
      inputs[i].style.border = "1px solid black";
    }
  });
}

const inputa = document.querySelectorAll("input");

for (let i = 0; i < inputa.length; i++) {
  inputa[i].addEventListener("focusout", function () {
    if (inputa[i].style.border == "1px solid black") {
      inputa[i].style.border = "none";
    }
  });
}

//

function refresh() {
  let e = document.querySelector("#cont");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const bookcont = document.createElement("div");
    const btncont = document.createElement("div");

    const heading = document.createElement("h3");
    heading.innerText = myLibrary[i].title;

    const para = document.createElement("p");
    para.innerText =
      myLibrary[i].author +
      "\n" +
      myLibrary[i].pages +
      "\n" +
      myLibrary[i].read;

    const btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener(
      "click",
      (del = () => {
        console.log(book.title);
        myLibrary.splice(
          myLibrary.indexOf(
            myLibrary.find(
              (book) =>
                book.title == myLibrary[i].title &&
                book.author == myLibrary[i].author &&
                book.pages == myLibrary[i].pages &&
                book.read == myLibrary[i].read
            )
          ),
          1
        );
        document.querySelector("#cont").removeChild(bookcont);
        refresh();
      })
    );

    const readbtn = document.createElement("button");
    readbtn.innerText = "Read";
    readbtn.addEventListener(
      "click",
      (chng = () => {
        if (myLibrary[i].read == "Read") {
          myLibrary[i].read = "Not Yet Read";
        } else {
          myLibrary[i].read = "Read";
        }
        refresh();
      })
    );
    document.querySelector("#cont").appendChild(bookcont);
    bookcont.appendChild(heading);
    bookcont.appendChild(para);
    bookcont.appendChild(btncont);
    btncont.appendChild(btn);
    btncont.appendChild(readbtn);
  }
}

refresh();
