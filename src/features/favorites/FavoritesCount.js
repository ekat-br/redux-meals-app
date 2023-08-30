import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { selectFavoritesIds } from "./FavoriteSlice";

const FavoritesCount = () => {
    const favoriteMealsIds = useSelector(selectFavoritesIds);
  const favoritesCount = favoriteMealsIds.length
  return (
    <FavoriteCounter>{favoritesCount}❤️</FavoriteCounter>
  )
}

export default FavoritesCount

const FavoriteCounter = styled.span`
font-size: 1.5rem;
color: #fff;
text-align: center; 
position: fixed; 
top: 5px; 
right: 5px; 
`