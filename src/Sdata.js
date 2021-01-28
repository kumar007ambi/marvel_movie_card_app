const Sdata = [
    {

        id: 1,
        sname: "IRON MAN",
        imgscr: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMoliPRgy5xgoyg_eZmuKyptS9s1weVooX5tLqTBnGBYMRtE-t",
        title: "MARVEL Original Series",
        link: "https://www.hotstar.com/in/movies/iron-man/1660000038/watch?utm_source=gwa"
    },
    {
        id: 2,
        sname: "INFINITY WAR",
        imgscr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmE2vwxy5KaCu7cRuYYdgNdQKddux5OYgGwsPo0kqP_xzLnsDV",
        title: "MARVEL Original Series",
        link: "https://www.hotstar.com/in/movies/avengers-infinity-war/1660010677/watch?utm_source=gwa"
    },
    {
        id: 3,
        sname: "AVENGERS",
        imgscr: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTp0qlAoWcOOswIkL_qpjYzJqCCDmWXiBzCXiqbE43Obo8c0Z-s",
        title: "MARVEL Original Series",
        link: "https://www.hotstar.com/in/movies/marvels-the-avengers/1660000015/watch?utm_source=gwa"
    },
    {
        id: 4,
        sname: "CAPTION AMERICA",
        imgscr: "data:image/jpeg;base64,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",
        title: "MARVEL Original Series",
        link: "https://www.hotstar.com/in/movies/captain-america-the-first-avenger/1660000034/watch?utm_source=gwa"
    },
    {
        id: 5,
        sname: "SPIDER MAN",
        imgscr: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQH8I5CSIwuRLVDYRb_19ezmmMoWK6xmEAlJZMAgqNLjhW8Oj2",
        title: "MARVEL Original Series",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.38b58290-0e31-6256-b2d1-a39542ff1875?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
        id: 6,
        sname: "THOR",
        imgscr: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
        title: "MARVEL Original Series",
        link: "https://www.hotstar.com/in/movies/thor/1660000044/watch?utm_source=gwa"
    },

]

export default Sdata;