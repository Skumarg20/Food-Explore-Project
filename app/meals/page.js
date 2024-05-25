
import { getMeals } from "@/lib/meals";
import classes from './page.module.css';
import Link from 'next/link';
import MealItem from "@/components/MealsComponents/meal-item";
import { Suspense } from "react";
async function Meal(){
  const meals=await getMeals();
  return <ul className={classes.meals}>
  {meals.map((meal)=>(
      <li key={meal.id}>
          <MealItem {...meal}/>
      </li>
  ))};
</ul>
}
export default async function Meals(){
  
  
    return <>
    <header className={classes.header}>
    <h1>
        Delicius Meals,Created
        <span className={classes.highlight}> by you</span>
        <p>Choose your favorite recipe and cook it youself.it is easy and fun!</p>
    </h1>
   <p className={classes.cta}>
    <Link href="/meals/share">Share Your favorite Recipe</Link>
   </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>fetching data .....</p>}>
     <Meal/>
     </Suspense>
    </main>
    </>
}