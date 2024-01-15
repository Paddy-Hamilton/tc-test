'use server';
import {revalidatePath} from 'next/cache';

export async function searchAirlinesAction(formData: FormData) {
  'use server';
  const name = formData.get('search');
  const data = await fetch(`https://api.api-ninjas.com/v1/airlines?name=${name}`, {
    headers: {
      'X-Api-Key': 'jjgrGFvxupM6V+hHCoAFpQ==BP3ZKlVU8uHu2kZz',
    },
  });

  if (!data.ok) {
    throw new Error('error fetching airline');
  }
  const airlines = await data.json();

  revalidatePath('/');

  return airlines;
}
