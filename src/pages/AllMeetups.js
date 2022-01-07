import { useState, useEffect } from "react";
//Component used for displaying all the meetups we have
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage(prop) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  //whenever we visit the below page we need to send a http request

  useEffect(() => {
      setIsLoading(true);
    fetch(
      "https://react-gettingstarted-8b839-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        
        for(const key in data) {
            const meetup = {
                id: key,
                ...data[key]

            };

            meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
