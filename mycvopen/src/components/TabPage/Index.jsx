import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const noStyle = {
    position: 'static',
    marginTop: '0px',
    transition: 'all 0.2s linear 0s',
    top: '0px',
    width: '163.32px',
}
const style = {
    position: 'fixed',
    marginTop: '30px',
    transition: 'all 0.2s linear 0s',
    top: '0px',
    width: '163.32px'
}

const Index = () => {
    const tab = [
        {
            id: 1,
            title: "Giới Thiệu",
            path: "/",
            icon: "https://cdn.lordicon.com/eszyyflr.json",
        },
        {
            id: 2,
            title: "Học Vấn",
            path: "student",
            icon: "https://cdn.lordicon.com/wxnxiano.json",
        },
        {
            id: 3,
            title: "Mục Tiêu",
            path: "target",
            icon: "https://cdn.lordicon.com/iltqorsz.json",
        },
        {
            id: 4,
            title: "Sở Thích",
            path: "hoppy",
            icon: "https://cdn.lordicon.com/rjzlnunf.json",
        },
    ];
    const [type, setType] = useState(1);

    const [scrollTop, seScrollTop] = useState(noStyle);

    useEffect(() => {
        window.onscroll = function () {
            if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
                seScrollTop(style)
            } else {
                seScrollTop(noStyle)
            }
        }
    }, [])
    return (
        <div className="col l-2 c-12">
            <div className="options" style={scrollTop} >
                <ul className="option">
                    {
                        tab.map((item) => (
                            <li className={type === item.id ? "option-item active" : "option-item"} key={item.id}>
                                <Link to={item.path} className="option-item-icon"
                                    onClick={() => setType(item.id)}>
                                    <lord-icon src={item.icon} trigger="morph" colors="primary:#121331,secondary:#08a88a" style={{ width: '65px', height: '65px' }}>
                                    </lord-icon>
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Index;