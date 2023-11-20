import logo from './logo.svg';
import './book.css';
import Book from './book';
import Test from './Test';

const books = [
  {
    title: 'The Woman in Me',
    author : 'Britney Spears',
    img : "./book-images/book-1.jpg" ,
    id:1
  },
  {
    title: 'Iron Flame',
    author : 'Rebecca Yarros',
    img : "https://m.media-amazon.com/images/I/519FLR72gyL._SY445_SX342_.jpg" ,
    id:2
  },
  {
    title: 'The War on Conservatives',
    author : 'Mark Dice',
    img : "https://m.media-amazon.com/images/I/71OMzvDi1TL._SY342_.jpg",
    id:3
  },
  {
    title: 'The War on Conservatives',
    author : 'Mark Dice',
    img : "https://m.media-amazon.com/images/I/71OMzvDi1TL._SY342_.jpg",
    id:4
  }
]
// const firstBook = 
// const secondBook = 
// const thirdBook = 



// const names = ['john','peter','james']
// const newNames = names.map((name)=>{
//   console.log(name);
//   return<h1>{name}</h1>
// })


function App() {
  const getBook = (id)=>{
    const book = books.find((book)=> book.id === id)
    console.log(book);
  }

  return (
    <>
      <h1>amazon best sellers</h1>
    <section className="booklist"> 
      {books.map((book,index)=>{
        // const {img, title, author, id} = book
        return <Book {...book} key={book.id} getBook={getBook} number={index}/>
      })}
    </section>
    </>
  );
}



export default App;
