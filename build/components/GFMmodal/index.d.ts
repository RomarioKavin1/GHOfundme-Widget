import React from 'react';
interface GFMmodalProps {
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    subscription: boolean;
}
export declare const GFMmodal: React.FC<GFMmodalProps>;
export {};
