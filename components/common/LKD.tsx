import { ReactNode } from 'react';

interface LKDProps {
  children: ReactNode;
}

const LKD = ({ children }: LKDProps) => {
  return <span className='rounded border border-slate-500 bg-slate-700 text-slate-300 px-1 py-[2px]'>{children}</span>;
};

export default LKD;
