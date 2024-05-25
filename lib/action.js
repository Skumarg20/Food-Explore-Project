'use sever'

import { redirect } from "next/dist/server/api-utils";
import { saveMeals } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(formData) {
    
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'), // Corrected spelling
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    };
    await saveMeals(meal);
    revalidatePath('/meals')
    redirect('/meals');
}