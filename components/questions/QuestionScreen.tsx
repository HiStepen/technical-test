'use client';

import { MouseEventHandler, useState } from 'react';
import CDialog from '../common/CDialog';
import { Button } from '@headlessui/react';
import Question from './Question';

const QuestionScreen = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const questionList = [
    {
      id: 1,
      question: '1. Relative Sort Array',
    },
    {
      id: 2,
      question: '2. Relative Ranks',
    },
    {
      id: 3,
      question: '3. Integer to Roman',
    },
  ];

  const onSelectQuestion = (_: React.MouseEvent<HTMLButtonElement>, questionId: number) => {
    setSelectedQuestion(questionId);
    setIsShowModal(false);
  };

  return (
    <>
      <Button
        className='border rounded px-8 py-2 hover:bg-white hover:text-black'
        onClick={() => {
          setIsShowModal(true);
        }}
      >
        Select Question
      </Button>

      <CDialog open={isShowModal} onClose={() => setIsShowModal(false)} title='Select Question'>
        <div className='grid gap-2'>
          {questionList.map((question) => (
            <Button key={question.id} className='border border-slate-300 rounded p-2 w-auto hover:bg-slate-600/10 hover:text-black' onClick={(event) => onSelectQuestion(event, question.id)}>
              {question.question}
            </Button>
          ))}
        </div>
      </CDialog>
      {selectedQuestion !== 0 && <Question selectedQuestion={selectedQuestion} />}
    </>
  );
};

export default QuestionScreen;
