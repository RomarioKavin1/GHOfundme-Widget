import { ElementType, FC, MouseEvent, ReactNode } from 'react';

// Card Component
interface CardProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  forceRounded?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
export declare const Card: FC<CardProps>;

// Modal Component
interface ModalProps {
  children: ReactNode | ReactNode[];
  icon?: ReactNode;
  onClose?: () => void;
  show: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  title?: ReactNode;
}
export declare const Modal: FC<ModalProps>;

// Stepper Component
interface StepperProps {
  step: number;
}
export declare const Stepper: FC<StepperProps>;

interface GbuttonProps {
  onClick: () => void;
  subscription: boolean;
}

declare const Gbutton: React.FC<GbuttonProps>;

interface GmodalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  subscription: boolean;
}

declare const Gmodal: React.FC<GmodalProps>;
