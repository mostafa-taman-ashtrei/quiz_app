import React from 'react';
import { AnswerType } from '../types/answerType';
import generateId from '../utils/uuid';

interface props {
    answers: AnswerType[]
}

const AnswerCard: React.FC<props> = ({ answers }: props) => {
    console.log(answers);
    return (
        <div>
            <h2>
                You answerd
                {' '}
                {answers.length}
                {' '}
                questions
            </h2>
            {
                answers.map((a: AnswerType) => (
                    <div key={generateId(8)}>
                        <h3>
                            Q:
                            {a.question}
                        </h3>
                        <div>
                            {a.correct ? (
                                <>
                                    <p>
                                        Your ans :
                                        {' '}
                                        {a.ans}
                                    </p>
                                    <span>✔️</span>
                                </>
                            )
                                : (
                                    <>
                                        <span>❌</span>
                                        <p>
                                            Correct ans:
                                            {' '}
                                            {a.ca}
                                        </p>
                                    </>
                                )}
                        </div>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
};

export default AnswerCard;
