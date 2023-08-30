
import { styled } from "styled-components"
export default function MealsCard ({meal}) {


    return (
        <CardContainer>
            <div>{meal.strMeal}</div>
            <img src={meal.strMealThumb} alt={meal.strMeal}></img>
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
max-width: 800px;
height: auto; 

`