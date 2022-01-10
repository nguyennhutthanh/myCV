const calendarEventDB = {
    Info: {
        name: 'Nguyễn Nhựt Thanh',
        avatar: 'assets/img/hinhnen.jpg',
        nghenghiep: "Sinh Viên DNC",
        logo: "assets/img/logoC.png",
        chuyennganh: "FE / BE - Fullstack Developer",
        ngaysinh: '19-07-2000',
        sdt: "0856059125",
        gmail: "thanhnguyen1907dt@gmail.com",
        diachi: "Ninh Kiều, Cần Thơ",
        LinkInfo: [
            {
                id: 1,
                name: "Facebook",
                class: "facebook",
                icon: "fab fa-facebook-f",
                link: "https://www.facebook.com/profile.php?id=100021434405634",
            },
            {
                id: 2,
                name: "LinkedIn",
                class: "tiktok",
                icon: "fab fa-linkedin-in",
                link: "https://www.linkedin.com/in/nguy%E1%BB%85n-nh%E1%BB%B1t-thanh-a28027217/",
            },
            {
                id: 3,
                name: "Instagram",
                class: "instagram",
                icon: "fab fa-instagram",
                link: "https://www.instagram.com",
            },
            {
                id: 4,
                name: "GitHub",
                class: "github",
                icon: "fab fa-github",
                link: "https://github.com/nguyennhutthanh",
            },
        ]
    },
    interests: [
        {
            id: 1,
            sothich: 'Chơi game',
            icon: "assets/img/Svg/game.png",
            hoppy: [
                {
                    id: 1,
                    title: "Hero Wars",
                    img: '/assets/img/hoppy/game1.jpg',
                    content: 'Giải trí tí sau một thời gian code.',
                },
            ]
        },
        {
            id: 2,
            sothich: 'Thể thao',
            icon: "assets/img/Svg/ball.png",
            hoppy: [
                {
                    id: 1,
                    title: "Đá bóng",
                    img: '/assets/img/hoppy/bongda1.jpg',
                    content: 'Rèn luyện cơ thể năng cáo sức khỏe bản thân',
                },
            ]
        },
        {
            id: 3,
            sothich: 'Xem phim',
            icon: "assets/img/Svg/phim.png",
            hoppy: [
                {
                    id: 1,
                    title: "Avengers",
                    img: '/assets/img/hoppy/xemphim1.jpg',
                    content: 'xem tất cả các phần của Avengers, với những công nghệ tối tân, đồ họa ảo diệu.',
                },
                {
                    id: 2,
                    title: "Review phim",
                    img: '/assets/img/hoppy/xemphim2.png',
                    content: 'Các loại phim khinh dị, hành động, ma, khoa học viễn tưởng...',
                },
            ]
        },
        {
            id: 4,
            sothich: 'Khác',
            icon: "assets/img/Svg/setting.png",
            hoppy: [
                {
                    id: 1,
                    title: "Code linh tinh vài cái hay ho",
                    img: '/assets/img/hoppy/code1.jpg',
                    content: 'Giải trí code khơi khơi chơi cho vui, cho có cảm giác mới mẻ.',
                },
                {
                    id: 2,
                    title: "Nghe nhạc",
                    img: '/assets/img/hoppy/nghenhac1.jpg',
                    content: 'Thư giản sau một ngày làm việc mệt mổi',
                },
                {
                    id: 3,
                    title: "Xem đá bóng",
                    img: '/assets/img/hoppy/xembong.jpg',
                    content: 'Thư giản và phục vụ cho việc cập nhật tin tức bóng đá.',
                }
            ]
        },
    ],
    Target: {
        Limit: [
            {
                id: 1,
                time: "01/01/2022 - hiện tại",
                title: "Học và rèn luyện thêm Javascript",
                style: "extend-item--body active-line",
                description: "JavaScript là ngôn ngữ lập trình phổ biến nhất, vì vậy học thêm để ứng dụng nó nhiều vào dự án hoặc là phát triển 1 ứng dụng nào đó bằng JavaScript",
            },
            {
                id: 2,
                time: "2022 - hiện tại",
                title: "Học và rèn luyện thêm C# (ASP.NET Core)",
                style: "extend-item--body active-line",
                description: "Có những ký thuật và cách viết mới theo từng phiên bản, vậy nên học và rèn luyện một số kỹ thuật mà mình chưa biết.",
            },
            {
                id: 3,
                time: "2022 - hiện tại",
                title: "Học và rèn luyện thêm React Js",
                style: "extend-item--body",
                description: "React Js Với tốc độ xử lý nhanh, tạo cho người dùng cảm giác thao tác mượt mà, vì vậy muốn mượt mà phải có những kỹ thuật tối ưu hóa 1 trang web để có thể trở nên nhanh và mượt như thế.",
            },
        ],
        Knowledge: [
            {
                id: 1,
                time: ".../5/2022",
                title: "Đi xin thực tập",
                style: "extend-item--body active-line",
                description: "Thực tập là một cơ hội để mình học hỏi, áp dụng những lý thuyết được học vào thực tế và làm quen với môi trường làm việc quy củ và có được thành công cao hơn khi đi làm thực sự.",
            },
            {
                id: 2,
                time: ".../.../2022",
                title: "Thực tập xong",
                style: "extend-item--body",
                description: "Tập trung bổ sung các vấn đề còn thiếu sót mình nhận ra được sau khi thực tập, nếu ổn định sẽ xin ở lại thử việc.",
            },
        ]
    },
    linkShare: "https://hungry-payne-7e9dd1.netlify.app"
}
export default calendarEventDB;