'use-client ';
import React from 'react';
import { DialogPanel, DialogTitle, Dialog } from '@headlessui/react';

interface CDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

const CDialog: React.FC<React.PropsWithChildren<CDialogProps>> = ({ children, ...props }) => {
  return (
    <>
      <Dialog open={props.open} onClose={() => props.onClose && props.onClose()} className='fixed inset-0 flex w-[100vw] items-center justify-center text-slate-800 bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0' transition>
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4 '>
          <DialogPanel className='max-w-lg space-y-4 border bg-white p-8  rounded-xl'>
            <DialogTitle className='font-bold'>{props.title}</DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default CDialog;
