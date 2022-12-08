import { useRef } from "react"

import "./NewMeetupForm.css"
import Card from "../components/ui/Card"

const NewMeetupForm = (props) => {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const authorInputRef = useRef()
    const priceInputRef = useRef()
    const descriptionInputRef = useRef()

function submitHandler(event) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAuthor = authorInputRef.current.value
    const enteredPrice = priceInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        author: enteredAuthor,
        price: enteredPrice,
        description: enteredDescription,
    }

    props.onAddMeetup(meetupData)

}

    return(
        <Card>
            <form className="form" onSubmit={submitHandler}>
                <div className="control">
                    <label htmlFor="title">Nový Titulek</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className="control">
                    <label htmlFor="image">Obrázek</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className="control">
                    <label htmlFor="author">Autor</label>
                    <input type="text" required id="author" ref={authorInputRef}/>
                </div>
                <div className="control">
                    <label htmlFor="price">Cena</label>
                    <input type="text" required id="price" ref={priceInputRef}/>
                </div>             
                <div className="control">
                    <label htmlFor="description">Popis</label>
                    <textarea type="text" required rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className="actions">
                    <button>Přidat knihu</button>
                    
                </div>
            </form>

        </Card>

    )
}

export default NewMeetupForm