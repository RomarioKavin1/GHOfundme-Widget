import type { FC, ReactNode } from 'react';
interface ModalProps {
    children: ReactNode | ReactNode[];
    icon?: ReactNode;
    onClose?: () => void;
    show: boolean;
    size?: 'lg' | 'md' | 'sm' | 'xs';
    title?: ReactNode;
}
export declare const Modal: FC<ModalProps>;
export {};
