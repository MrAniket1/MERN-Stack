function filterAndCapitalizeBooks(books) {
    const filteredBooks = [];

    for (const book of books) {
        const { title, author, year } = book;

        if (year >= 2010) {
            filteredBooks.push({
                title,
                author: author.toUpperCase(),
                year
            });
        }
    }

    return filteredBooks;
}

// Example input: array of books with title, author, and year
const books = [
    { title: "Book 1", author: "Author 1", year: 2005 },
    { title: "Book 2", author: "Author 2", year: 2015 },
    { title: "Book 3", author: "Author 3", year: 2012 },
    { title: "Book 4", author: "Author 4", year: 2008 },
    { title: "Book 5", author: "Author 5", year: 2018 }
];

const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
console.log(filteredAndCapitalizedBooks);
