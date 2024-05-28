import Link from 'next/link'
import React from 'react'

export default function FeaturedCard({firstSixTodos}) {
    
    return (
        <div className=" ml-20 mr-20">
            <div className="grid grid-cols-5 gap-6">
                {firstSixTodos?.map((todo, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md relative">
                        <Link href={`/product/${todo?.id}`}>
                            <img
                                className="bg-gray-100 w-full h-auto rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                                src={todo?.image}
                                alt=""
                            />
                        </Link>
                        <div className="p-4 text-surface dark:text-dark">
                            <h5 className="mb-2 text-lg font-medium leading-tight">{todo?.title}</h5>
                            <p className="mb-4 font-Caveat text-base text-gray-500 ">
                                {todo?.description}
                            </p>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    )
}
