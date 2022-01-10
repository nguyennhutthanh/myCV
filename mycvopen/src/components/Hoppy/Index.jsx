import React, { memo, useState, useEffect } from 'react';
import Hoppy from '../../Data/aside';

const Index = () => {
    const [interests, setInterests] = useState(Hoppy.interests);
    useEffect(() => {
        setInterests(Hoppy.interests);
    }, [])
    return (
        <ul className="extend active">
            <div className="extend-item--title-header">
                <h1 className="extend-item--title-h1">Sở thích</h1>
            </div>
            <li className="extend-item">
                <div className="extend-item-text-title">
                    <div className="extend-item-text-title--contain">
                        {
                            interests.map((item) => (
                                <div key={item.id} style={{ marginBottom: '15px' }}>
                                    <h2 className="extend-item-text-title--h2">
                                        <img src={item.icon} alt="" />
                                        {item.sothich}
                                    </h2>
                                    {
                                        item.hoppy.map((test) => (
                                            <div key={test.id} className="ententain">
                                                <div className="ententain-avatar">
                                                    <img src={test.img} alt="" className="ententain-avatar--avt" />
                                                </div>
                                                <div className="ententain-text">
                                                    <h3 className="ententain-text--h3">
                                                        {test.title}
                                                    </h3>
                                                    <span className="ententain-text-span">
                                                        {test.content}
                                                    </span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </li>
        </ul>

    );
};

export default memo(Index);