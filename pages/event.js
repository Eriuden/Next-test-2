import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
//Note, dans l'arrow function component, c'est juste avant les params qu'on déclare l'async


export const EventList = ({eventList}) => {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvents = async () => {
        const response = await fetch("http://localhost:4000/events")
        const data = await response.json()
        setEvents(data)
        router.push("events/category=sports", undefined, { shallow:true})
    }

    return (
        <>
            <button onClick={fetchSportsEvents}>Sports</button>
            <h1>Liste d'évènements</h1>
            {
                events.map(event => {
                    return (
                        <div key={event.id}>
                            <h2>
                                {event.id} {event.title} {event.date} | { event.category}
                            </h2>
                            <p>{event.description}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { query } = context
    const {category } = query
    /* Souvenir, il s'agit d'une version simplifié de if*/ 
    const queryString = category ? "category=sports" : ""
  const response = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await response.json()

  return {
    props: {
        eventList: data,
    },
  }
}

