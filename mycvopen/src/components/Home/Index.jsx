import React, { memo, useState, useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeData from '../../Data/dataHome'

const Index = memo(() => {
    const [about, setAbout] = useState(HomeData.About);
    const [project, setProject] = useState(HomeData.Project);
    const [quotations, setQuotations] = useState(HomeData.quotations);
    useEffect(() => {
        setAbout(HomeData.About)
        setProject(HomeData.Project)
        setQuotations(HomeData.quotations)
    }, [])
    return (
        <ul className="extend active">
            <li className="extend-item">
                <div className="extend-item--title-header">
                    <h1 className="extend-item--title-h1">Giới thiệu</h1>
                </div>
                {
                    about.map((item) => (
                        <p key={item.id} className="extend-item-para">
                            {item.text}
                        </p>
                    ))
                }
            </li>
            <li className="extend-item">
                <div className="extend-item--title-body">
                    <h3 className="extend-item--h3">Những gì mình làm được</h3>
                </div>
                <div className="row">
                    {
                        project.map((item) => (
                            <div key={item.id} className="col l-6 m-6">
                                <a href={item.link} className="case">
                                    <div id="zoom">
                                        <div className="case-item">
                                            <img src={item.img} alt="" className="case-item--img" />
                                        </div>
                                        <h3 className="case-item--h3">{item.title}</h3>
                                        <p className="title-p">{item.congnghe}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </li>
            <li className="extend-item">
                <div className="extend-item--title-body">
                    <h3 className="extend-item--h3">Những câu nói cho mình cảm hứng</h3>
                </div>
                <div className="slide">
                    <Carousel showThumbs={false} infiniteLoop={true}>
                        {
                            quotations.map((item) => (
                                <div key={item.id} style={{ height: "200px", color: "rgb(4 4 4)" }} className="slide-users fade active">
                                    <div className="slide-avatar">
                                        <img src={item.avatar} alt="" className="slide-avatar--img" />
                                    </div>
                                    <div className="slide-text">
                                        <h4 className="slide-text--title">{item.name}</h4>
                                        <p className="slide-text--para">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </li>
        </ul>
    );
});

export default memo(Index);