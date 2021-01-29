import React, { useState, useEffect } from 'react';
import fetchQuestions from './api';

import getCategories from './api/getCategories';
import AnswerCard from './components/answers';
import QuestionCard from './components/question';
import useLocalStorage from './hooks/useLocalStorage';
import { AnswerType } from './types/answerType';
import { Category } from './types/categoryTypes';
import { Difficulty, QuestionsState } from './types/questionTypes';
import generateId from './utils/uuid';
import Loading from './components/loading';
import Header from './components/header';
import CategoryCard from './components/category';

const Q_COUNT: number = 5;

const App: React.FC = () => {
    const [loading, setLoading] = useState<Boolean>(true);
    const [cat, setCat] = useState<Category[]>([]);
    const [questions, setQuestions] = useState<QuestionsState[]>([]);
    const [qindex, setQindex] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useLocalStorage<AnswerType[]>('UserAnswers', []);
    const [score, setScore] = useLocalStorage<number>('Score', 0);

    const getData = async () => {
        const data = await getCategories();
        setCat(data);
        setLoading(false);
    };

    useEffect(() => { getData(); }, []);

    const displayquestions = async (id: number) => {
        setLoading(true);
        const QData = await fetchQuestions(Q_COUNT, Difficulty.EASY, id, false);
        setQuestions(QData);
        setLoading(false);
    };

    const handleNext = () => {
        const questionNum: number = qindex + 1;

        if (questionNum === Q_COUNT) {
            setQuestions([]);
            setQindex(0);
        } else {
            setQindex(questionNum);
        }
    };

    const handleAnswer = (a: string, ca: string) => {
        const correct = a === ca;

        const ansObj: AnswerType = {
            correct,
            question: questions[qindex].question,
            ans: a,
            ca,
        };

        setUserAnswers((prev: AnswerType[]) => [...prev, ansObj]);

        if (correct) {
            alert(`Yay you got it right the ans was ${ca}`);
            setScore((prev: number) => prev + 1);
        } else {
            alert(`Oops you got it wrong the ans was ${ca}`);
        }

        handleNext();
    };

    if (loading) return <Loading />;

    return (
        <div className="bg-gray-800 h-full h-screen w-full">
            <Header score={score} />
            {
                questions.length > 0
                    ? (
                        <>
                            <QuestionCard
                                qindex={qindex}
                                Qcount={Q_COUNT}
                                handleAns={handleAnswer}
                                question={questions[qindex]}
                                key={generateId(8)}
                            />
                        </>
                    )

                    : (
                        <>
                            <CategoryCard cat={cat} clickHandler={displayquestions} />
                            <hr />
                            <AnswerCard answers={userAnswers} />
                        </>
                    )
            }
        </div>
    );
};

export default App;
