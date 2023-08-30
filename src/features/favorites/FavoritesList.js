import { styled } from "styled-components";
import { useGetAllMealsQuery } from "../meals/mealsApi";
import { selectFavoritesIds } from "./FavoriteSlice";
import { useSelector } from "react-redux";
import FavoritesCard from "./FavoritesCard";

export default function FavoritesList() {
  const { data, isError, isLoading } = useGetAllMealsQuery();

  const favortitesIds = useSelector(selectFavoritesIds);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading meals.</div>;
  }

  const favoriteMeals = data.meals.filter((meal) =>
    favortitesIds.includes(meal.idMeal)
  );

  return (
    <Container>
      <Title>Favorite Meals</Title>
      <MealsContainer>
        {favoriteMeals.map((meal) => (
          <FavoritesCard key={meal.idMeal} meal={meal}/>
        ))}
      </MealsContainer>
    </Container>
  );
}
const Container = styled.div`
  text-align: center;
`;
const MealsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #DB5375;
`;
