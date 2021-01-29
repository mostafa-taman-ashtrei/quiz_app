import React from 'react';
import { Category } from '../types/categoryTypes';
import generateId from '../utils/uuid';

interface props {
    cat: Category[]
    // eslint-disable-next-line no-unused-vars
    clickHandler: (id: number) => Promise<void>
}

const CategoryCard: React.FC<props> = ({ cat, clickHandler }: props) => (
    <div className="overflow-auto whitespace-no-wrap py-3 px-4 text-center">
        <div className="flex justify-center p-4 mb-1">
            <h1 className="text-3xl text-green-300 uppercase">Categories</h1>
        </div>
        <div className="h-96 md:h-full">
            {
                cat.map((c) => (
                    <button
                        className="inline-block border border-green-500 rounded-full px-6 py-2 mr-4 mb-1 text-green-500 hover:bg-green-500 hover:text-white"
                        type="button"
                        onClick={() => clickHandler(c.id)}
                        key={generateId(8)}
                    >
                        {c.name}
                    </button>
                ))
            }
        </div>
    </div>
);

export default CategoryCard;
