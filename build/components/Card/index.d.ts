import type { ElementType, FC, MouseEvent, ReactNode } from 'react';
interface CardProps {
    as?: ElementType;
    children: ReactNode;
    className?: string;
    forceRounded?: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
export declare const Card: FC<CardProps>;
export {};
