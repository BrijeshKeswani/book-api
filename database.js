const books = [
 { 
    ISBN : "12345Book" ,
    title : "The power of subconsious mind" ,
    pubDate : "2021-04-10" ,
    language : "eng" ,
    numPage : 200 ,
    authors : [1,2] ,
    publications : [1] ,
    category : ["consious mind" , "subconsious mind" , "self-help books"]
 },
];

const authors = [
    {
     id : 1 ,
     name : "Joseph Murphy" ,
     books : ["12345Book" , "Rich Dad Poor Dad"] ,
    },

    {
      id : 2 ,
      name : "Brijesh" ,
      books : ["12345Book"] ,
    },
];

const publications = [
    {
     id :1 ,
     name : "writex" , 
     books : "12345Book" ,
    } ,
    {
      id :2 ,
      name : "Books corner" , 
      books : "Rich Dad Poor Dad" ,
     } ,
];

module.exports = {books , authors , publications} ;