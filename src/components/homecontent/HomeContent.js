'use client';
import React, { useEffect } from 'react';
import { store } from '@/stores/store';
import { fetchTodos } from '@/stores/glasses-store/todoSlice';
import { TiArrowRightOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading/Loading';
export default function HomeContent() {
  //     const images = [
  //         "/images/featuredImages/7l3FMZqY8JdfssalDgx2.png",
  //         "/images/featuredImages/ALz5M4DI7MF7CdZrq3gS.png",
  //         "/images/featuredImages/LIu8tS4yHSU28Xi8BXCj.png",
  //         "/images/featuredImages/YVPdTsyxJybMCsdKpXhq.png",
  //         "/images/featuredImages/YZ7LM3vZjWbIIJH2tgEb.png",
  //         "/images/featuredImages/bS1hHdO7NvbR1yN5ZPlR.png",
  //     ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // store.dispatch(fetchTodos())
  const { todos } = useSelector((state) => state.todos);
  console.log(todos);

  const firstSixTodos = todos.slice(0, 6);

  if (firstSixTodos.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <div className='bg-gray-100  flex items-center ml-20 mr-20 mt-6'>
        <div className='mr-8  pl-8'>
          <h1 className='text-2xl font-bold mb-4'>Furkan</h1>
          <p className='text-gray-700'>
            Buying eyewear should leave you happy and good-looking, with money
            in your pocket. Glasses, sunglasses, and contacts—we’ve got your
            eyes covered.
          </p>
          <button className='mt-12 ml-5 bg-black hover:bg-black-600 text-white px-4 py-2 flex items-center space-x-2'>
            <span>Shop Now</span>
            <TiArrowRightOutline />
          </button>
        </div>
        <div>
          <img
            className='object-cover w-full h-full'
            src='/images/banner-girl.png'
            alt=''
          />
        </div>
      </div>
      <div className='flex justify-between ml-20 mt-20 font-bold'>
        Featured Products
        <button className='underline mr-20'>See All</button>
      </div>
      <div className=' ml-20 mr-20'>
        <div className='grid grid-cols-5 gap-6'>
          {firstSixTodos?.map(
            (todo, index) => (
              console.log(todos[index]?.title),
              (
                <div
                  key={index}
                  className='bg-white rounded-lg overflow-hidden shadow-md relative'>
                  <a href='#!'>
                    <img
                      className='bg-gray-100 w-full h-auto rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105'
                      src={todo?.image}
                      alt=''
                    />
                  </a>
                  <div className='p-4 text-surface dark:text-white'>
                    <h5 className='mb-2 text-lg font-medium leading-tight'>
                      {todo?.title}
                    </h5>
                    <p className='mb-4 font-Caveat text-base'>
                      {todo?.description}
                    </p>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
      <div className='flex justify-between ml-20 mt-20 font-bold'>
        Recommended Products
        <button className='underline mr-20'>See All</button>
      </div>
      <div className='ml-20 mr-20'>
        <div className='grid grid-cols-5 gap-6'>
          {firstSixTodos?.map(
            (todo, index) => (
              console.log(todos),
              (
                <div
                  key={index}
                  className='bg-white rounded-lg overflow-hidden shadow-md relative'>
                  <a href='#!'>
                    <img
                      className='bg-gray-100 w-full h-auto rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105'
                      src={todo?.image}
                      alt=''
                    />
                  </a>
                  <div className='p-4 text-surface dark:text-white'>
                    <h5 className='mb-2 text-lg font-medium leading-tight'>
                      {todo?.title}
                    </h5>
                    <p className='mb-4 font-Caveat text-base'>
                      {todo?.description}
                    </p>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </>
  );
}
