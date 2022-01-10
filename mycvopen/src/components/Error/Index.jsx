import React, { memo } from 'react';

const Index = () => {
    return (
        <div>
            <h1 className="text-center text-primary text-bold" style={{ fontSize: "5rem" }}>404</h1>
            <h1 className="text-center text-primary text-bold" style={{ fontSize: "5rem" }}>Not Found</h1>
        </div>
    );
};

export default memo(Index);