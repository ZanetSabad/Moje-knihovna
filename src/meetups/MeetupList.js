import MeetupItem from "./MeetupItem"
import "./MeetupList.css"

const MeetupList = (props) => {
    return( <ul className="list">
        {props.books.map((book) => (
        <MeetupItem 
            key={book.id} 
            id={book.id} 
            image={book.image} 
            title={book.title}
            author={book.author}
            price={book.price}
            description={book.description}
            />
        ))}

    </ul>

    )
}

export default MeetupList