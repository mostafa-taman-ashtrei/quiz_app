import React from 'react';
import { AnswerType } from '../types/answerType';
import generateId from '../utils/uuid';

interface props {
    answers: AnswerType[]
}

const AnswerCard: React.FC<props> = ({ answers }: props) => {
    console.log(answers);
    return (
        <div className="h-screen">
            <h2 className="text-black text-2xl capitalize text-center m-1 text-white">
                You answerd
                {' '}
                {answers.length}
                {' '}
                questions
            </h2>
            <div className="overflow-auto w-full h-52 ">
                {
                    answers.map((a: AnswerType, i: number) => (

                        <div className=" flex flex-col justify-center w-full md:w-full m-2" key={generateId(8)}>
                            {
                                a.correct ? (
                                    <div className="inline-flex items-center bg-gray-700 text-white leading-none text-black rounded p-2 shadow text-black text-sm w-full">
                                        <span className="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center">✔️</span>
                                        <span className="inline-flex px-2">
                                            Q:
                                            {i + 1}
                                            {' '}
                                            {a.question}
                                        </span>
                                        <span className="inline-flex px-2 p-1 rounded bg-green-600 ">
                                            {a.ans}
                                        </span>
                                    </div>
                                )
                                    : (
                                        <div className="inline-flex items-center bg-gray-700 text-white leading-none text-black rounded p-2 shadow text-black text-sm w-full">
                                            <span className="inline-flex bg-red-600 text-white rounded-full h-6 px-3 justify-center items-center">❌</span>
                                            <span className="inline-flex px-2">
                                                Q:
                                                {i + 1}
                                                {' '}
                                                {a.question}
                                            </span>
                                            <span className="inline-flex px-2 p-1 rounded bg-red-600 ">{a.ans}</span>
                                            <span className="inline-flex px-2 p-1 ml-1 rounded bg-green-600 ">{a.ca}</span>
                                        </div>
                                    )
                            }

                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default AnswerCard;
