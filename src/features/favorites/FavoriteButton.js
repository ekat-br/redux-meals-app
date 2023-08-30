import { useDispatch, useSelector } from "react-redux"
import { styled } from "styled-components"
import { selectFavoritesIds, toggledFavorite } from "./FavoriteSlice"
export default function FavoriteButton({mealId}){
    const favoritesIds = useSelector(selectFavoritesIds);
    const dispatch = useDispatch();
    return(
        <Button onClick={() => dispatch(toggledFavorite(mealId))}>
            {favoritesIds.includes(mealId) ? "❤️" : "🤍"}

        </Button>
    )
}

const Button = styled.button`
border: none; 
background-color: pink;
border-radius: 20%;
font-size: 24px; 
display: block; 
margin: 10px 385px 20px; 
&:hover{
    background-color: #ff7096; 
}
`