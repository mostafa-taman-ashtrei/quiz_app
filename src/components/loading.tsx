import React from 'react';

const Loading: React.FC = () => (
    <div className="w-full h-full fixed bg-gray-900 grid justify-items-center">
        <span
            className="text-green-500 absolute top-1/2 left-auto"
        >
            <i className="fas fa-circle-notch fa-spin fa-5x" />
        </span>
    </div>
);

export default Loading;
