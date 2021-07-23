const express = require("express");


// Database 
const database = require("./database");

//initialization
const booky = express();

//configuration 
booky.use(express.json());

/*       (these are comments to describe an API created below) (This Apis are of books section in database,js )
Route          /
Description    to get all books     
Access         public(as we have not provided any password or something)
Parameter      none
Methods        get 
*/ 
booky.get("/" , (req , res) => {
  return res.json({ books : database.books });
});
/*  (these are comments to describe an API created below)  (This Apis are of books section in database,js )

Route          /
Description    to get specific book based on ISBN    
Access         public(as we have not provided any password or something)
Parameter      isbn
Methods        get 
*/ 
booky.get("/is/:isbn" , (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if (getSpecificBook.length === 0) {
    return res.json({
        error : `no book found for the ISBN of ${req.params.isbn}`,
    });
  } 
  return res.json({ book : getSpecificBook});
});
/*  (these are comments to describe an API created below) (This Apis are of books section in database,js )
Route          /c (here /c is route because we are accessing a book through category)
Description    to get specific book based on category     
Access         public(as we have not provided any password or something)
Parameter      category
Methods        get 
*/ 
booky.get("/c/:category" , (req ,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    );
    if(getSpecificBook.length === 0) {
        return res.json({
            error : `No book found for the category of ${req.params.category}`,
        });
    }
    return res.json({book : getSpecificBook});
});
/*  (these are comments to describe an API created below) (This Apis are of books section in database,js )
Route          /l
Description    to get specific book based on language   
Access         public(as we have not provided any password or something)
Parameter      language
Methods        get 
*/ 
booky.get("/l/:language" , (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.language.includes(req.params.language)
    );
    if(getSpecificBook.length === 0)
    return res.json({
        error : `no book found for this language ${req.params.language}`,
    });
    return res.json({book : getSpecificBook});
});







/*  (these are comments to describe an API created below) (This Apis are of authors section in database,js )
Route          /author
Description    to get all authors    
Access         public(as we have not provided any password or something)
Parameter      none
Methods        get 
*/ 
booky.get("/authors" , (req, res) => {
    return res.json({ authors : database.authors});
});
/*  (these are comments to describe an API created below)  (This Apis are of authors section in database,js )
Route          /i 
Description    to get specific author based on id   
Access         public(as we have not provided any password or something)
Parameter      id
Methods        get 
*/ 
booky.get("/i/:id" , (req, res) => {
    const getSpecificAuthor = database.authors.filter(
     (author) => (author.id === (parseInt(req.params.id)))
    );
    if(getSpecificAuthor.length === 0)
    return res.json({
        error : `No author found for this id ${req.params.id}` ,
      });
      return res.json({authors : getSpecificAuthor});
    });
   /*  (these are comments to describe an API created below)  (This Apis are of authors section in database,js )
Route          /author/book
Description    to get specific author based on books   
Access         public(as we have not provided any password or something)
Parameter      isbn
Methods        get 
*/ 
booky.get("/authors/books/:isbn" , (req , res) => {
const getSpecificAuthor = database.authors.filter(
    (author) => author.books.includes(req.params.isbn)
);
if(getSpecificAuthor.length === 0)
return res.json({
    error : ` no author found for this book ${req.params.isbn}` , 
  });
return res.json({authors : getSpecificAuthor });
});






   /*  (these are comments to describe an API created below)  (This Apis are of publications section in database,js )
Route          /publications
Description    to get all publications   
Access         public(as we have not provided any password or something)
Parameter      none
Methods        get 
*/ 
booky.get("/publications" , (req, res) => {
    return res.json({publications : database.publications});
});
  /*  (these are comments to describe an API created below)  (This Apis are of publications section in database,js )
Route          /i/:id
Description    to get all publications based on id   
Access         public(as we have not provided any password or something)
Parameter      id
Methods        get 
*/ 
booky.get("/identification/:id" , (req, res) => {
    const getSpecificPublication = database.publications.filter (
    (publication) => (publication.id === (parseInt(req.params.id)))
    );
    if(getSpecificPublication.length === 0)
    return res.json ({
        error : `no publication found for the id ${req.params.id}` ,
    });
    return res.json({publications : getSpecificPublication});
});
/*  (these are comments to describe an API created below)  (This Apis are of publications section in database,js )
Route          /n/:name
Description    to get all publications based on name   
Access         public(as we have not provided any password or something)
Parameter      name
Methods        get 
*/ 
booky.get("/n/:name" , (req, res) => {
    const getSpecificPublication = database.publications.filter (
    (publication) => publication.name.includes(req.params.name)
    );
    if(getSpecificPublication.length === 0)
    return res.json ({
        error : `no publication found for the name ${req.params.name}` ,
    });
    return res.json({publications : getSpecificPublication});
});

/*  (these are comments to describe an API created below)  (This Apis are of publications section in database,js )
Route          /publications/books
Description    to get all publications based on books   
Access         public(as we have not provided any password or something)
Parameter      isbn
Methods        get 
*/ 
booky.get("/publications/books/:isbn" , (req, res) => {
    const getSpecificPublication = database.publications.filter (
    (publication) => publication.books.includes(req.params.isbn)
    );
    if(getSpecificPublication.length === 0)
    return res.json ({
        error : `no publication found for the name ${req.params.isbn}` ,
    });
    return res.json({publications : getSpecificPublication});
});

/*
Route           /book/add
Description     add new book
Access          PUBLIC
Parameter       NONE
Methods         POST
*/
booky.post("/book/add", (req, res) => {
    const { newBook } = req.body; // we are getting the data from the req body
    database.books.push(newBook);  // we are pushing newBook to our database 
    return res.json({ books: database.books }); // then we are returning it 
  });
   

/*
Route           /author/add
Description     add new author
Access          PUBLIC
Parameter       NONE
Methods         POST
*/
booky.post("author/add" , (req, res) => {
    const {newAuthor} = req.body;
    database.authors.push(newAuthor);
    return res.json({authors : database.authors})

})
// to create a local host server
booky.listen(3000 , () => console.log("Hey the server is running"));  