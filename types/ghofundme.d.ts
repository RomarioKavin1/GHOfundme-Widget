import { FC, MouseEvent, ReactNode, ElementType } from 'react';

declare module 'ghofundme'{
interface CardProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  forceRounded?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Card: FC<CardProps>;

// Gbutton Component
interface GbuttonProps {
  onClick: () => void;
  subscription: boolean;
}

export const Gbutton: FC<GbuttonProps>;

// Gmodal Component
interface GmodalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  subscription: boolean;
}

export const Gmodal: FC<GmodalProps>;

// Modal Component
interface ModalProps {
  children: ReactNode | ReactNode[];
  icon?: ReactNode;
  onClose?: () => void;
  show: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  title?: ReactNode;
}

export const Modal: FC<ModalProps>;

// Stepper Component
interface StepperProps {
  step: number;
}

export const Stepper: FC<StepperProps>;

// cn Function
type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

type ClassDictionary = { [id: string]: boolean | undefined | null };
type ClassArray = ClassValue[];

declare function cn(...classes: ClassValue[]): string;

export default cn;
}