import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    scrollTo(0,0)
    api
     .get(`/products/${id}`)
     .then((res) => {
      setData(res.data);
    });
    
  }, []);

  if (!data) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white text-4xl">
      <p>Yuklanmoqda...</p>
    </div>
  );

  return (
    <div className="min-h-screen  text-white py-8 px-4 flex justify-center">
      <div className="container mx-auto bg-gray-900 rounded-xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={data.images[index]} alt='' className="rounded-lg w-full h-[300px] sm:h-[380px] md:h-[450px] object-cover mb-4" />
          <div className="flex gap-3 overflow-x-auto">
            {data.images.map((img, i) => (
              <img key={i} src={img} alt='' onClick={() => setIndex(i)} className='w-14 h-14 sm:w-16 sm:h-16 rounded-lg border-2 border-transparent transition duration-300 ease-in-out hover:border-yellow-400'
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{data.title}</h1>
          <p className="text-yellow-400 text-xl sm:text-2xl font-semibold mb-4">${data.price}</p>
          <p className="text-gray-300 mb-5 text-sm sm:text-base md:text-lg">{data.description}</p>
          <ul className="text-gray-400 space-y-2 mb-6 text-xs sm:text-sm md:text-base">
            <li><strong>Kategoriya:</strong> {data.category}</li>
            <li><strong>Brand:</strong> {data.brand}</li>
            <li><strong>Reyting:</strong> {data.rating} </li>
            <li><strong>Omborda:</strong> {data.stock} ta mavjud</li>
          </ul>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg w-full md:w-auto px-6">
            Savatchaga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
