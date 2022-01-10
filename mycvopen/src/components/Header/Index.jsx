import React, { memo, useState, useEffect } from 'react';
import calendarEventDB from '../../Data/aside';
import './share.css';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    EmailShareButton,
    EmailIcon,
} from "react-share";
import LinkShare from '../../Data/aside';

const shareLink = LinkShare.linkShare;

const Index = () => {
    const [info, setInfo] = useState(calendarEventDB.Info);
    const [linkInfo, setLinkInfo] = useState(calendarEventDB.Info.LinkInfo);
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    function formatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return '(' + match[1] + ') ' + match[2].replace('5', '*') + match[3].replace('91', '**')
        }
        return null
    }
    useEffect(() => {
        setInfo(calendarEventDB.Info)
        setLinkInfo(calendarEventDB.Info.LinkInfo)
    }, [])

    return (
        <div className="row">
            <div className="col l-12 m-12">
                <div className="intro">
                    <div className="intro-user">
                        <div className="intro-user-left">
                            <img src={info.avatar} alt="" className="intro-user-avt" />
                        </div>
                        <div className="intro-user-right">
                            <h1 className="intro-user-right__name">{info.name}</h1>
                            <div className="intro-user-right__job">
                                {info.nghenghiep}
                            </div>
                            <div className="intro-user-right__job dnc-logo">
                                {info.chuyennganh}
                                <img src={info.logo} alt="" className="intro-user-avt dncLogo" />
                            </div>
                            <ul className="intro-user-right__social">
                                {
                                    linkInfo.map((item) => (
                                        <li key={item.id} className={
                                            "intro-user-right__social-icon " + item.class}>
                                            <div className="tooltip">{item.name}</div>
                                            <a href={item.link}>
                                                <span id="tooltip-icon" className={item.class}>
                                                    <i className={item.icon} id="tooltip-icon--icon" />
                                                </span>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="intro-contact">
                        <ul className="intro-contact-list">
                            <li className="intro-contact-list__item">
                                <span className="overhead">
                                    Email
                                </span>
                                {info.gmail}
                            </li>
                            <li className="intro-contact-list__item">
                                <span className="overhead">
                                    Số Điện Thoại
                                </span>
                                {formatPhoneNumber(info.sdt.toString())}
                            </li>
                        </ul>
                        <ul className="intro-contact-list">
                            <li className="intro-contact-list__item">
                                <span className="overhead">
                                    Ngày Sinh
                                </span>
                                {info.ngaysinh}
                            </li>
                            <li className="intro-contact-list__item">
                                <span className="overhead">
                                    Địa Chỉ
                                </span>
                                {info.diachi}
                            </li>
                        </ul>
                        <div className="share-website">
                            <li className="intro-user-right__social-icon margin-share">
                                <div className="tooltip share-map">Chia sẻ</div>
                                <button onClick={onOpenModal}>
                                    <span id="tooltip-icon" className='share'>
                                        <i className="fas fa-share-alt share-icon" id="tooltip-icon--icon" />
                                    </span>
                                </button>
                            </li>

                            <Modal open={open} onClose={onCloseModal} center>
                                <span className="mar-left-1">
                                    <FacebookShareButton
                                        url={shareLink}
                                        quote="Nguyễn Nhựt Thanh CV"
                                        hashtag="#NT_CV">
                                        <FacebookIcon size={40} round={true} />
                                    </FacebookShareButton>
                                </span>

                                <span className="mar-left-1">
                                    <TwitterShareButton className="ml-3" url={shareLink}
                                        url={shareLink}
                                        quote="Nguyễn Nhựt Thanh CV"
                                        hashtag="#NT_CV">
                                        <TwitterIcon size={40} round={true} />
                                    </TwitterShareButton>
                                </span>

                                <span className="mar-left-1">
                                    <LinkedinShareButton className="ml-3" url={shareLink} url={shareLink}
                                        quote="Nguyễn Nhựt Thanh CV"
                                        hashtag="#NT_CV">
                                        <LinkedinIcon size={40} round={true} />
                                    </LinkedinShareButton>
                                </span>

                                <span className="mar-left-1">
                                    <TelegramShareButton className="ml-3" url={shareLink} url={shareLink}
                                        quote="Nguyễn Nhựt Thanh CV"
                                        hashtag="#NT_CV">
                                        <TelegramIcon size={40} round={true} />
                                    </TelegramShareButton>
                                </span>

                                <span className="mar-left-1">
                                    <EmailShareButton className="ml-3" url={shareLink} url={shareLink}
                                        quote="Nguyễn Nhựt Thanh CV"
                                        hashtag="#NT_CV">
                                        <EmailIcon size={40} round={true} />
                                    </EmailShareButton>
                                </span>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default memo(Index);