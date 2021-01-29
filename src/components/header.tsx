import React from 'react';

interface props {
    score: number
}

const Header: React.FC<props> = ({ score }: props) => (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 px-6 mb-2">
        <div className="flex flex items-center flex-no-shrink text-white mr-6">
            <img className="w-10 h-10 m-1" src="/logo.svg" alt="React Logo" />
            <span className="font-semibold text-xl tracking-tight">NEO QUIZ</span>
        </div>
        <div className="text-right">
            <span className="  text-xl ">
                {' '}
                Score:
                <span className="inline-flex px-2 p-1 rounded-full bg-gray-700 text-white m-2">{score}</span>
            </span>
        </div>

    </nav>
);
export default Header;
