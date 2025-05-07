// const coding = ['java', 'js', 'cpp', 'ruby', 'python']



// const values = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })

// console.log(values)




// filter function

// (method) Array<number>.filter<number>(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[] (+1 overload)

// Returns the elements of an array that meet the condition specified in a callback function.

// @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.filter((num) => {
//     if (num > 4) {
//         return num
//     }
// })

// OR

// const newNums = myNum.filter(((num) => (num > 4)))



// For Each method in filter sam Q


// const newNums = []
// myNum.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })


// console.log(newNums)


// In database pass a book data

const book = [
    {
        "title": "The Great Gatsby",
        "genre": "Fiction",
        "publish_year": 1925,
        "author": "F. Scott Fitzgerald",
        "ISBN": "9780743273565",
        "publisher": "Charles Scribner's Sons",
        "language": "English",
        "pages": 218,
        "description": "A novel about the American dream, wealth, and societal expectations in the Jazz Age.",
        "rating": 4.4,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    },
    {
        "title": "To Kill a Mockingbird",
        "genre": "Fiction",
        "publish_year": 1960,
        "author": "Harper Lee",
        "ISBN": "9780061120084",
        "publisher": "J.B. Lippincott & Co.",
        "language": "English",
        "pages": 281,
        "description": "A novel about racial injustice and the loss of innocence in the Deep South.",
        "rating": 4.8,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    },
    {
        "title": "1984",
        "genre": "Dystopian",
        "publish_year": 1949,
        "author": "George Orwell",
        "ISBN": "9780451524935",
        "publisher": "Secker & Warburg",
        "language": "English",
        "pages": 328,
        "description": "A dystopian novel about totalitarianism and surveillance.",
        "rating": 4.7,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    },
    {
        "title": "Pride and Prejudice",
        "genre": "Romance",
        "publish_year": 1813,
        "author": "Jane Austen",
        "ISBN": "9780141199078",
        "publisher": "T. Egerton",
        "language": "English",
        "pages": 279,
        "description": "A classic novel exploring themes of love, class, and societal expectations.",
        "rating": 4.6,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    },
    {
        "title": "Moby-Dick",
        "genre": "Adventure",
        "publish_year": 1851,
        "author": "Herman Melville",
        "ISBN": "9781503280786",
        "publisher": "Harper & Brothers",
        "language": "English",
        "pages": 635,
        "description": "An epic tale of obsession and revenge set against the backdrop of the whaling industry.",
        "rating": 4.2,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    },
    {
        "title": "The Catcher in the Rye",
        "genre": "Fiction",
        "publish_year": 1951,
        "author": "J.D. Salinger",
        "ISBN": "9780316769488",
        "publisher": "Little, Brown and Company",
        "language": "English",
        "pages": 277,
        "description": "A story about teenage rebellion and alienation narrated by Holden Caulfield.",
        "rating": 4.3,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    },
    {
        "title": "The Hobbit",
        "genre": "Fantasy",
        "publish_year": 1937,
        "author": "J.R.R. Tolkien",
        "ISBN": "9780547928227",
        "publisher": "George Allen & Unwin",
        "language": "English",
        "pages": 310,
        "description": "A fantasy adventure following Bilbo Baggins on his quest to reclaim treasure guarded by a dragon.",
        "rating": 4.8,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    },
    {
        "title": "War and Peace",
        "genre": "Historical Fiction",
        "publish_year": 1869,
        "author": "Leo Tolstoy",
        "ISBN": "9781400079988",
        "publisher": "The Russian Messenger",
        "language": "English",
        "pages": 1225,
        "description": "A sweeping narrative of Russian society during the Napoleonic era.",
        "rating": 4.5,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    },
    {
        "title": "The Alchemist",
        "genre": "Philosophical Fiction",
        "publish_year": 1988,
        "author": "Paulo Coelho",
        "ISBN": "9780061122415",
        "publisher": "HarperTorch",
        "language": "English",
        "pages": 208,
        "description": "A fable about following your dreams and discovering your destiny.",
        "rating": 4.7,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    },
    {
        "title": "The Divine Comedy",
        "genre": "Epic Poetry",
        "publish_year": 1320,
        "author": "Dante Alighieri",
        "ISBN": "9780140448955",
        "publisher": "N/A",
        "language": "English",
        "pages": 798,
        "description": "A journey through Hell, Purgatory, and Paradise, exploring themes of sin, redemption, and divine justice.",
        "rating": 4.9,
        "formats": ["Hardcover", "Paperback", "eBook", "Audiobook"]
    }
]


let userBook = book.filter((bk) => bk.genre === "Historical Fiction")
// 

// userBook = book.filter((bk) => {
//     return bk.publish_year >= 1890
// })

// 

// userBook = book.filter((bk) => (bk.genre ==="Philosophical Fiction"))

// 

userBook = book.filter((bk)=>{
    return bk.author === "J.D. Salinger" && bk.language ==="English"
})
console.log(userBook)