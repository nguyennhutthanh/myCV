import React from 'react';

const Index = ({ children }) => {
    return (
        <div className="col l-10 respon-layout">
            <div className="extends">
                {children}
            </div>
        </div>
    );
};

export default Index;