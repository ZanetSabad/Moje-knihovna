import { useState, useEffect } from "react"

import MeetupList from "../meetups/MeetupList"


const books = [
    {
      id: 1,
      image: "https://img-cloud.megaknihy.cz/3419324-large/aef986c10ba5adbfe5f86ec764aa9a66/zaklinac-i-posledni-prani.jpg",
      title: "Zaklínač I: Poslední přání",
      author: "Andrzej Sapkowski",
      price: "268 Kč",
      description: "",
    },
    {
      id: 2,
      image: "https://img-cloud.megaknihy.cz/3419749-large/5f068f7176320e20001a24733f81befa/zaklinac-ii-mec-osudu.jpg",
      title: "Zaklínač II: Meč osudu",
      author: "Andrzej Sapkowski",
      price: "294 Kč",
      description: "",
    },
    {
      id: 3,
      image: "https://img-cloud.megaknihy.cz/139570-large/ca825d90b716b31936a575a68d8d2890/zaklinac-vii-pani-jezera.jpg",
      title: "Zaklínač VII: Paní jezera",
      author: "Andrzej Sapkowski",
      price: "357 Kč",
      description: "",
    },
    {
      id:4,
      image: "https://img-cloud.megaknihy.cz/238921-large/63314f0ec6d2e7ebda1e7ee38d3584b0/zaklinac-viii-bourkova-sezona.jpg",
      title: "Zaklínač VIII: Bouřková sezóna",
      author: "Andrzej Sapkowski",
      price: "209 Kč",
      description: "",
    }
  ]


const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://first-project-books-default-rtdb.firebaseio.com/meetups.json"
    ).then(response => {
      return response.json()
    }).then(data => {
          const books = []

          for (const key in data) {
            const book = {
              id: key,
              ...data[key]
            };

            books.push(book)
          }

      setIsLoading(false);
      setLoadedMeetups(books);
    })
  }, [setIsLoading, setLoadedMeetups])



    if (isLoading) {
      return (
        <section>
          <p>Načítá se...</p>
        </section>
      )
    }

    return(
        <section> 
            <h1>Moje knížky</h1>
            <MeetupList books={loadedMeetups}/>
            {/* <ul> 
                {books.map((book) => {
                    return <li key={book.id}>{book.title}</li>
                })}
                </ul> */}
        </section>
    )
}

export default Home