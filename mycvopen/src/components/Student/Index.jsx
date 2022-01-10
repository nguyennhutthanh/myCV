import React, { memo, useEffect, useState } from 'react';
import Student from '../../Data/dataHome';

const style = {
    opacity: '1',
    transition: 'all 0.4s linear 0s'
}
const Index = () => {
    const [student, setStudent] = useState(Student.student.Education)
    const [experience, setExperience] = useState(Student.student.Experience)
    const [skills, setSkills] = useState(Student.Skill.Languages)
    useEffect(() => {
        setStudent(Student.student.Education)
        setExperience(Student.student.Experience)
        setSkills(Student.Skill.Languages)
    }, [])
    return (
        <ul className="extend active">
            <div className="extend-item--title-header">
                <h1 className="extend-item--title-h1">Học vấn</h1>
            </div>
            <li className="extend-item">
                <div className="extend-item-text-title">
                    <h2 className="extend-item-text-title--h2">
                        <img src="./assets/img/Svg/icon-education.svg" alt="" className="extend-item-text-title--img" /> Giáo dục
                    </h2>
                    <div className="extend-item--bodys">
                        {
                            student.map((item) => (
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
                    <h2 className="extend-item-text-title--h2">
                        <img src="./assets/img/Svg/bag.svg" alt="" className="extend-item-text-title--img" /> Kinh nghiệm
                    </h2>
                    <div className="extend-item--bodys">
                        {
                            experience.map((item) => (
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
            <li className="extend-item ">
                <div className="extend-item-text-title">
                    <h2 className="extend-item-text-title--h2">
                        Kỹ năng của tôi
                    </h2>
                    <div className="skills-section">
                        <div className="container-skills">
                            {
                                skills.map((item) => (
                                    <div key={item.id} className="container-skills-progress">
                                        <div className="container-skills-progress-bar" style={style,
                                            { width: item.chiso, backgroundImage: item.color }}>
                                            <p>{item.title}</p>
                                            <span>{item.chiso}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default memo(Index);