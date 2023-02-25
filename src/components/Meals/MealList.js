import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Рол "Найомі"',
    description:
      "Сир Филадельфія, куряче філе, масаго, помідор, огірок, кунжут",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Спайс в лососі",
    description: "Рис, лосось, соус спайс",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Суші з вугрем",
    description: "Вугор копчений, соус унагі, кунжут",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Салат "Поке з лососем"',
    description:
      "Рис, лосось, огірок, чука, норі, стружка тунця, соус горіховий",
    price: 7.99,
  },
];

const MealList = function () {
  const mealList = DUMMY_MEALS.map((meal, index) => <MealItem id={meal.id} key={index} name={meal.name} description={meal.description} price={meal.price}/>);
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  );
};
export default MealList;
