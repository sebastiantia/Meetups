import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
//allows us to add a new meetup
function NewMeetupPage(prop) {
  const navigate = useNavigate();

  function AddMeetupHandler(meetupData) {
    fetch(
      "https://react-gettingstarted-8b839-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
