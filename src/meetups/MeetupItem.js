import Card from "../components/ui/Card"
import "./MeetupItem.css"

const MeetupItem = (props) => {

      return( <li className="item">
        <Card> 
        <div className="image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
            <h3>{props.title}</h3>
            <h4>{props.author}</h4>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
        
        </Card>
    </li>
    
    )
}

export default MeetupItem

