import { useState } from "react";
import MealsCard from "./MealsCard";
import { useGetAllMealsQuery } from "./mealsApi"
import { styled } from "styled-components";

export default function MealsList () {
    const [visibleMeals, setVisibleMeals] = useState(3);
    const {data, isError, isLoading} = useGetAllMealsQuery(); 
    
    if (isLoading){
        return <div>Loading...</div>;
    }

    if (isError){
        return <div>Error loading meals.</div>;
    }

    const showMoreMeals = () => {
        setVisibleMeals(visibleMeals + 2)

    }

    return (
        <Container>
            <div>Meals List</div>
            <MealsUList>
              {data.meals.slice(0, visibleMeals).map((meal) => 
               <MealsCard key={meal.idMeal} meal={meal}/>
              
              )}
              <Button onClick={showMoreMeals} disabled={visibleMeals >= data.meals.length}>Show more</Button>
            </MealsUList>
           
        </Container>
        
    )
}

const Container = styled.h1`
text-align: center; 
font-size: 1.5rem; 
margin-top: 20px; 
color: #DB5375;
`
const MealsUList = styled.ul`
padding: 10px 40px 10px 40px;
`

const Button = styled.button`
color: #ffff; 
background-color: #ff99ac; 
padding: 8px 16px; 
border: none;
border-radius: 4px; 

&:hover {
    background-color: #ff5c8a;
}

`