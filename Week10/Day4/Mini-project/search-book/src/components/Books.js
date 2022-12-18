import {useState} from 'react';



const API_KEY = process.env.REACT_APP_API_KEY;

const Books = (props) =>{
    const  [request, setRequest] = useState([]);
    const[books, setBooks] = useState('');
    const[sort, setSort] = useState('');



const handleChange = (e) => {
    setRequest(e.target.value)
}

const handleSort = (e) => {
    setSort(e.target.value);
}


    const getBooks = (e) =>{
        e.preventDefault()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${request}&key=${API_KEY}`)
        .then(res=>res.json())
        .then(data=>{
            filteredBooks(data)
        })
        .catch(err=>{
            console.log(err);
        })
        
    }


    const filteredBooks = (data) => {
        console.log(data.items);
        let sortedData = data.items.sort((a, b) => {
            let twoSortedBooks;
            if(sort === 'Newest'){
                twoSortedBooks = parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
            }
            else if(sort === 'Oldest'){
                twoSortedBooks =  parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
            }
            return twoSortedBooks
        }
        )
        setBooks(sortedData);
        console.log(books);
    }

    


    return(
        <div >

        <form onSubmit={getBooks} style={{textAlign:'center'}}>
            <input onChange={handleChange} placeholder="Search books" type="text"/>
            <button type="submit">Search</button>
            <select value={sort} onChange={handleSort} >
                <option default value="" >Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </form>


             <div className="list" >

                {
                    books && books.map(item =>{
                        return(
                            <div key={item.id} className = "textarea">
                                <p>
                                    <img src={item.volumeInfo.imageLinks.thumbnail} />
                                </p>
                                <div className="desc"></div>
                                <h3 style={{paddingLeft:'10px'}}>{item.volumeInfo.title}</h3>
                                <p>Author: {item.volumeInfo.authors}</p>
                                <p>Published: {item.volumeInfo.publishedDate.slice(0,4)}</p>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Books


