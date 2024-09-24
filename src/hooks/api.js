const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

export const fetchCategoria= async()=>{ 
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const platos= async( categoria)=>{

const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`);
const data =await response.json()

return data.meals
}

