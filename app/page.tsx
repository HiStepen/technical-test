import Image from 'next/image';
import QuestionScreen from '../components/questions/QuestionScreen';

export default function Home() {
  return (
    <>
      <Image className='dark:invert' src='https://nextjs.org/icons/next.svg' alt='Next.js logo' width={180} height={38} priority />
      <QuestionScreen />
    </>
  );
}
