
import { styled } from "styled-components"
import FavoriteButton from "../favorites/FavoriteButton"
export default function MealsCard ({meal}) {


    return (
        <CardContainer>
            <div>{meal.strMeal}</div>
            <Image src={meal.strMealThumb} alt={meal.strMeal}></Image>
            <FavoriteButton mealId={meal.idMeal}></FavoriteButton>
        </CardContainer>

    )
}

const CardContainer = styled.li`
text-align: center; 
list-style: none; 
border: 2px solid pink; 
border-radius: 7px; 
margin: 20px auto 20px auto; 
background-color: #AEC3B0; 
max-width: 500px; 
height: auto;
padding: 10px; 
`
const Image = styled.img`
width: 100%;
height: auto;
border-radius: 4px;
`