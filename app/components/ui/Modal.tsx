import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import clsx from 'clsx';
import { Dialog, Transition } from '@headlessui/react';

type props = { visible: any; toggle: any; children: ReactNode; title?: string; size?: 'sm' | 'md' | 'lg' | 'xl'; align?: 'top' | 'middle' };
export const Modal: FC<props> = ({ visible, toggle, children, title, size = 'sm', align = 'middle' }) => {
  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={toggle}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={clsx(
                'my-8 inline-block w-full max-w-[90vw] transform overflow-hidden bg-white p-3 text-left shadow-xl transition-all lg:p-6',
                {
                  'align-middle': align === 'middle',
                  'align-top': align === 'top',
                  'lg:max-w-md': size === 'sm',
                  'lg:max-w-[34rem]': size === 'md',
                  'lg:max-w-1/2': size === 'lg',
                  'lg:max-w-2/3': size === 'xl',
                },
              )}
            >
              {title && (
                <Dialog.Title as="h3" className="mb-2 text-lg font-medium leading-6 text-gray-900">
                  {title}
                </Dialog.Title>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
