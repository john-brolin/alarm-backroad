import { logDOM } from "@testing-library/react"

const Book = (props) => {
    // console.log(props);
    const {img, title, author,getBook,id,number} =props
  // const getSingleBook = ()=>{
  //   getBook(id)
  // }

  return (
    <article className="book"> 
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <button onClick={()=> getBook(id)}>click me</button>
        <h4>{author}</h4>
        <span className="number">{`#${number+1}`}</span>

        {/* <p>{children}</p> */}
        {/* {console.log(props)} */}
    </article>
    )
    
}



// const Image = ()=> 
// const Title = ()=> 
// const Author = ()=>{
//     const inlineHeadingStyles = {
//         color:'red', 
//         fontSize:'.75rem', 
//         marginTop:'.5em'
//     }

//     return 
// }

export default Book

