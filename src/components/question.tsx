import React from 'react';
import { QuestionsState } from '../types/questionTypes';
import generateId from '../utils/uuid';

interface props {
    question: QuestionsState;
    qindex: number;
    // eslint-disable-next-line no-unused-vars
    handleAns: (a: string, ca: string) => void;
    Qcount: number;
}

const QuestionCard: React.FC<props> = ({
    question, qindex, Qcount, handleAns,
}: props) => (
    <div className="w-5/6 mx-auto sm:px-6 lg:px-8 bg-gray-800 p-5">
        <div className="py-10">
            <div className="max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-gray-700 max-h-screen shadow-2xl flex-row rounded relative">
                <div className="p-2 bg-gray-600 text-blue-900 rounded-t">

                    <h5 className="text-white text-2xl capitalize">
                        {question.category}
                        {' '}
                    </h5>
                    <h3 className="text-white text-2xl capitalize">
                        question
                        {' '}
                        {' '}
                        {qindex + 1}
                        /
                        {Qcount}
                    </h3>
                </div>
                <div className="p-2 w-full h-full overflow-y-auto text-gray-100">
                    <p className="text-justify py-2">
                        {question.question}
                    </p>
                </div>
            </div>
        </div>

        {question.answers.map((a: string) => (
            <div className="m-4 flex flex-col-reverse space-x-6 space-x-reverse ..." key={generateId(8)}>
                <button
                    type="button"
                    className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase"
                    onClick={() => handleAns(a, question.correct_answer)}
                >
                    {a}
                </button>
            </div>
        ))}

    </div>
);

export default QuestionCard;
