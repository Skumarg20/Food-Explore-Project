import classes from './page.module.css'
import { getMeal1 } from '@/lib/meals';
import Image from 'next/image'
export default async function MealDetails({params}){
    const meal=await getMeal1(params.slug)
  
    return <>
   <header className={classes.header}>
<div className={classes.image}>
    <Image fill/>
</div>
<div className={classes.headerText}>
    <h1>Title</h1>
    <p className={classes.creator}> by <a href={`mailto:${'EMAIL'}`}/>Name</p>
    <p className={classes.summary}>summary</p>
</div>
   </header>
   <main>
    <p className={classes.instructions} dangerouslySetInnerHTML={{__html:'...',}}></p>

   </main>
   
    </>
}