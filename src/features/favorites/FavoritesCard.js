import { styled } from "styled-components";

const FavoritesCard = ({ meal }) => {
  return (
    <CardContainer>
      <MealName>{meal.strMeal}</MealName>
      <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
    </CardContainer>
  );
};

export default FavoritesCard;

const CardContainer = styled.div``;

const MealName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  color: #fff;
`;

const MealImage = styled.img`
  max-width: 100px;
  height: auto;
  padding: 5px;
`;
