import React, { memo, useEffect, useState } from 'react';
import Target from '../../Data/aside';

const Index = () => {
    const [limit, setLimit] = useState(Target.Target.Limit);
    const [knowledge, setKnowledge] = useState(Target.Target.Knowledge);

    useEffect(() => {
        setLimit(Target.Target.Limit);
        setKnowledge(Target.Target.Knowledge)
    }, [])
    return (
        <ul className="extend active">
            <div className="extend-item--title-header">
                <h1 className="extend-item--title-h1">Mục tiêu</h1>
            </div>
            <li className="extend-item">
                <div className="extend-item-text-title">
                    <div className="extend-item--title-body">
                        <h3 className="extend-item--h3">Ngắn hạn</h3>
                    </div>
                    <div className="extend-item--bodys">
                        {
                            limit.map((item) => (
                                <div key={item.id} className={item.style}>
                                    <h4 className="extend-item-text-title--h4">
                                        {item.title}
                                    </h4>
                                    <p className="extend-item-para-title">
                                        {item.time}
                                    </p>
                                    <p className="extend-item-para-text">
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </li>
            <li className="extend-item">
                <div className="extend-item-text-title">
                    <div className="extend-item--title-body">
                        <h3 className="extend-item--h3">Khi ổn định kiến thức</h3>
                    </div>
                    <div className="extend-item--bodys">
                        {
                            knowledge.map((item) => (
                                <div key={item.id} className={item.style}>
                                    <h4 className="extend-item-text-title--h4">
                                        {item.title}
                                    </h4>
                                    <p className="extend-item-para-title">
                                        {item.time}
                                    </p>
                                    <p className="extend-item-para-text">
                                        {item.description}
                                    </p>
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