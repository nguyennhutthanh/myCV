import React from 'react';

const Main = ({ children }) => {
    return (
        <div>
            <div className="main">
                <div className="grid wide wide-low">
                    {children}
                </div>
            </div>
            <div className="circle1" />
            <div className="circle2 hide-on-tablet hide-on-mobile" />
            <div className="circle3 hide-on-low-pc" />
        </div>
    );
};

export default Main;