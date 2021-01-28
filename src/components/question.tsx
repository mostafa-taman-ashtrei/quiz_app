import React from 'react';
import { QuestionsState } from '../types/questionTypes';

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
    <div>
        <h1>{question.category}</h1>
        <h2>{question.question}</h2>
        <h3>
            question
            {qindex + 1}
            {' '}
            /
            {Qcount}
        </h3>
        <ul>
            {question.answers.map((a: string) => (
                <button
                    type="button"
                    onClick={() => handleAns(a, question.correct_answer)}
                >
                    {a}
                </button>
            ))}
        </ul>
    </div>
);

export default QuestionCard;
