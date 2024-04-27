import { FC } from 'react';

export const Badge: FC<{
    name: string;
    className?: string;
}> = ({ name, className }) => {
    return (
        <div className={`text-white text-xs px-2 py-1 rounded-full ${className}`}>
            {name}
        </div>
    );
}