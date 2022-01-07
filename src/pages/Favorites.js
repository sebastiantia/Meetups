//allow us to view our favorite
import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(prop) {
    
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
      content = <p>Currently no favorites...</p>
  } else {
      content = <MeetupList meetups={favoritesCtx.favorites}/>
  }

  return <section>
      <h1>My Favorites</h1>
      {content}
  </section>;
}

export default FavoritesPage;
