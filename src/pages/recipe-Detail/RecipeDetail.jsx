import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        Yuklanmoqda...
      </div>
    );
  }

  if (error ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-red-600">
        Xatolik yuz berdi.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-900 p-8 rounded-2xl shadow-2xl">
        <div>
          <img  src={recipe.image} alt={recipe.name}  className="w-full h-[400px] object-cover rounded-xl border-2 border-yellow-500 shadow-lg"/>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-white mb-4">Masalliqlar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {recipe.ingredients.map((item, i) => (
                <div  key={i}  className="bg-gray-800 text-gray-200 text-sm px-3 py-2 rounded-lg shadow-sm border border-gray-700"  >  {item} </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold leading-tight text-yellow-400">{recipe.name}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-base">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <p><strong>Kaloriyalar:</strong> {recipe.caloriesPerServing} kcal</p>
              <p><strong>Servislar:</strong> {recipe.servings}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <p><strong>Pishirish vaqti:</strong> {recipe.cookTimeMinutes} daqiqa</p>
              <p><strong>Murakkablik:</strong> O'rta</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Tavsif</h2>
            <p className="text-gray-400 leading-relaxed">
              {recipe.instructions}
            </p>
          </div>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg shadow-md w-fit">
            Tayyorlashni boshlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
