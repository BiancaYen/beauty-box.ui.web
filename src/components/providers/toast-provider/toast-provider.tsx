import classNames from 'classnames';
import React from 'react';
import { resolveValue, Toaster } from 'react-hot-toast';

export const ToastProvider = () => (
    <Toaster
        position="top-right"
    >
        {(t) => (
            <div
                className={classNames(
                    t.className,
                    'overflow-hidden rounded-2xl bg-default-white shadow-toast',
                    t.visible ? 'animate-enter' : 'animate-leave',
                    t.type !== 'blank' && 'p-2.5',
                )}
            >
                {resolveValue(t.message, t)}
            </div>
        )}
    </Toaster>
);
