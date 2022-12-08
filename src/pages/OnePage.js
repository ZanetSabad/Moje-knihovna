import { useNavigate } from "react-router-dom"

import NewMeetupForm from "../meetups/NewMeetupForm"


const OnePage = () => {
    const navigate = useNavigate()

    function addMeetupHandler(meetupData) {
        fetch(
            "https://first-project-books-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST", 
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            navigate.replace("/")
        })
    }

    return(
        <section>
            <h1>Nová kniha</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default OnePage