import React from 'react';
interface GmodalProps {
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    subscription: boolean;
}
export declare const Gmodal: React.FC<GmodalProps>;
export {};
