import { createContext } from "react";
import { useState } from "react";
//when building react components in javascript objects start, capitalize first letter
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
}); // a javascript object

//manipulating favorites
//using regular react component
export function FavoritesContextProvider(props) {
    const [userFavorites, settingUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        settingUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
        //Garuntees we get the latest state snapshot
        //this is the better way of updating your state if you depend on your state
    }

    function removeFavoriteHandler(meetupId) {
        settingUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite : itemIsFavoriteHandler

    };

    return <FavoritesContext.Provider value ={context}>
        {props.children} 
    </FavoritesContext.Provider>
}
//allows the FavoritesContext.Provider to wrap around other components
export default FavoritesContext;