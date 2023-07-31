let books = [ // sample data
//Book Id      Book Title              Author              Price  Quantity
    [ 1,   "Start with why",       "Simon Sinek",          80.0,   13 ],
    [ 2,   "But how do it know",   "J. Clark Scott",       59.9,   22 ],
    [ 3,   "Clean Code",           "Robert Cecil Martin",  50.0,   5  ],
    [ 4,   "Zero to One",          "Peter Thiel",          45.0,   12 ],
    [ 5,   "You don't know JS",    "Kyle Simpson",         39.9,   9  ]
];

function addBook(id, title, author, price, quantity) {
    books.push([id, title, author, price, quantity]);
}

function editBook(id, title, author, price, quantity) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === id) {
            books[i][1] = title;
            books[i][2] = author;
            books[i][3] = price;
            books[i][4] = quantity;
            break;
        }
    }
}

function searchBook(id, title, author) {
    for (let i = 0; i < books.length; i++) {
        if (id && books[i][0] === id) {
            return books[i];
        }
        if (title && books[i][1] === title) {
            return books[i];
        }
        if (author && books[i][2] === author) {
            return books[i];
        }
    }
    return null;
}

// Search book by id
function searchBookById(id) {
    console.log(searchBook(id, null, null))
}

// Search book by title
function searchBookByTitle(title) {
    console.log(searchBook(null, title, null))
}

// Search book by author
function searchBookByAuthor(author) {
    console.log(searchBook(null, null, author))
}

function removeBook(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === id) {
            books.splice(i, 1);
            break;
        }
    }
}

function sellBook(id, quantity, customerBalance) {
    const book = searchBook(id, null, null);
    if (!book) {
        console.log("Book not found.");
        return;
    }
    // console.log(book)
    const bookPrice = parseFloat(book[3]);
    const bookQuantity = parseInt(book[4]);
    // console.log(typeof bookPrice, typeof bookQuantity)
    // console.log(typeof customerBalance, typeof quantity)

    if (bookQuantity < quantity) {
        console.log("The required quantity is not available.");
        return;
    }
    const totalPrice = bookPrice * quantity;
    if (customerBalance < totalPrice) {
        console.log("The customer's balance is insufficient.");
        return;
    }
    book[4] -= quantity;
    console.log(`
    ✅ successfully sold ${quantity} of ${book[1]}
    ============================
    Invoice:
      Book Title: ${book[1]}
      Quantity: ${quantity}
      Price per unit: ${book[3]}
      Total Price: ${totalPrice}
      Customer Balance: ${customerBalance - totalPrice}
    ============================
    `);
}


var readline = require('readline-sync');  // npm install readline-sync

function displayBooks() {

    // convert array of arrays to array of objects
    const arrayOfObjects = books.map(book => {
        return {
            "Book Id": book[0],
            "Book Title": book[1],
            "Author": book[2],
            "Price": book[3],
            "Quantity": book[4]
        }
    })
    console.table(arrayOfObjects)
    const choice = readline.question(`
    Enter 'sell' to sell book
    or 'add' to add a new book
    or 'edit' to edit a book
    or 'remove' to remove a book
    or 'search' to search for a book
    or 'exit' to exit\n`);
    if (choice === "add") {
        const id = books[books.length - 1][0] + 1;
        const title = readline.question("Enter book title: ");
        const author = readline.question("Enter book author: ");
        const price = parseFloat(readline.question("Enter book price: "));
        const quantity = parseInt(readline.question("Enter book quantity: "));
        addBook(id, title, author, price, quantity);
    } else if (choice === "edit") {
        const id = parseInt(readline.question("Enter book ID to edit: "));
        const title = readline.question("Enter book title: ");
        const author = readline.question("Enter book author: ");
        const price = parseFloat(readline.question("Enter book price: "));
        const quantity = parseInt(readline.question("Enter book quantity: "));
        editBook(id, title, author, price, quantity);
    } else if (choice === "remove") {
        const id = parseInt(readline.question("Enter book ID to remove: "));
        removeBook(id);
    } else if (choice === "search") {
        const searchBy = readline.question("Enter search by 'id', 'title' or 'author': ");
        if (searchBy === "id") {
            const id = parseInt(readline.question("Enter book ID to search: "));
            searchBookById(id);
        } else if (searchBy === "title") {
            const title = readline.question("Enter book title to search: ");
            searchBookByTitle(title);
        } else if (searchBy === "author") {
            const author = readline.question("Enter book author to search: ");
            searchBookByAuthor(author);
        }
    } else if (choice === "exit") {
        process.exit();
    } else if (choice === "sell"){
        const id = parseInt(readline.question("Enter book ID: "));
        const quantity = parseInt(readline.question("Enter quantity: "));
        const customerBalance = parseFloat(readline.question("Enter your balance: "));
        sellBook(id, quantity, customerBalance);
    } else {
        console.log("Invalid choice.");
    }
}

while (true) {
    console.log("\n==================================================")
    displayBooks();
}
