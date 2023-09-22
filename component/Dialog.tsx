import React, {
  useCallback,
  useEffect,
  useRef,
  type DetailedHTMLProps,
  type DialogHTMLAttributes,
  type ReactNode
} from 'react';

export interface DialogProps extends DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
  children: ReactNode;
  open: boolean;
  className?: string;
  onClose: () => void;
}

export default function Dialog({ children, title, open, onClose, className, ...rest }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
    onClose();
  }, [onClose]);

  const onDialogClick = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (!open || !dialogRef.current) return;

    const dialogDimensions = dialogRef.current.getBoundingClientRect();

    if (
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom
    )
      closeDialog();
  };

  useEffect(() => {
    if (open && !dialogRef.current?.open) dialogRef.current?.showModal();
    else if (!open && dialogRef.current?.open) closeDialog();
  }, [closeDialog, open]);

  return (
    <dialog
      onClick={onDialogClick}
      className={`z-10 grid transition-all duration-300 fixed top-24 mr-5 mt-5 right-[-100%] open:right-0 ml-auto bg-turquoise-800 w-fit h-fit rounded-xl backdrop:opacity-0 backdrop:cursor-pointer text-neutral-950 dark:text-neutral-50 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 !bg-opacity-80 backdrop-blur-md shadow-xl ${className}`}
      ref={dialogRef}
      onClose={closeDialog}
      {...rest}
    >
      {children}
    </dialog>
  );
}
