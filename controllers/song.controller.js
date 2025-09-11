const songs = [
    {
        id: 1,
        songTitle: "Favour", 
        songArtist: "Lawrence Oyor", 
        songUrl: "https://music.youtube.com/watch?v=V1IvFbIFY_4&si=hikpKnO8xIRvBb_3", 
        artistImage: "https://lh3.googleusercontent.com/nZcLcCB4dLKgjyYG6J_NXwsT28Gae-NBbitbR_WICgMuLL7ddLsXtLAAvkFu6fiCNW_4KP3_7Xizgo8w=w544-h544-l90-rj",
    },
    {
        id: 2,
        songTitle: "Tkeyz & Stevehills", 
        songArtist: "Oluwatosin", 
        songUrl: "https://music.youtube.com/watch?v=g2U65UIuDQ4&si=vzuDGqBNIf5rdPg7", 
        artistImage: "https://lh3.googleusercontent.com/8WIuIM1RCVOWA8GIvNVdolmIK0sT3dTA7vSXqE6B16_lslLPlD9-BuE417tT-5sp8nChnvUSILaX1rBn=w544-h544-l90-rj",
    },
    {
        id: 3,
        songTitle: "Promise Keeper", 
        songArtist: "Sound Of Salem & Pst. Oche Ogebe", 
        songUrl: "https://music.youtube.com/watch?v=6cT9U1RAVQs&si=DOiiDTtmhb1q0IQR", 
        artistImage: "https://lh3.googleusercontent.com/8bgKTUiJulG07Y76JI-Yg3ZXtgbJ_hh7nZ0mQj4Ku2DPZwN6D_m8vEPflD99-L8_wSYQfXyVR-kiIjI=w544-h544-l90-rj",
    }, 
    {
        id: 4,
        songTitle: "Gratitude", 
        songArtist: "Anendlessocean", 
        songUrl: "https://music.youtube.com/watch?v=49mF49MR_Es&si=RG2-y7gmF9vudmTc", 
        artistImage: "https://lh3.googleusercontent.com/a4VstV3Qir0ccSNw2ogOEm3H-4ySrGhEm5MQ_WwwsgrTGSQ0bt3MT2RAwYFdBhhYa1cUVzj2yvrPWm7Y=w544-h544-l90-rj",
    },
    {
        id: 5,
        songTitle: "Omo Baba", 
        songArtist: "Spirit Of Prophecy", 
        songUrl: "https://music.youtube.com/watch?v=1nHcF9zrMlw&si=AVL4nM48gcsi6DHD", 
        artistImage: "https://lh3.googleusercontent.com/TA_Ezgxq4a2KQtjlkrWMmoYLsMFzZDHJfnGSLu5VlmX_nA0cdCN2AJCE1n4hS09naghfuwS_bb6eNprBJg=w544-h544-l90-rj",
    },
    {
        id: 6,
        songTitle: "We will be many", 
        songArtist: "Sound of Salem & Glitch Gospel", 
        songUrl: "https://music.youtube.com/watch?v=2XNuJ_v5r3k&si=kuSvBC1_jgtEs7Zo", 
        artistImage: "https://lh3.googleusercontent.com/o25Hqbp_Y_0mSlP_dzCbzjYlP_zxK4tP7fPzVMKwOZmtJf6vfn_4VBrfo0oCndEvWsUIHv3CZvw8pIY=w544-h544-l90-rj",
    },
    {
        id: 7,
        songTitle: "No Turning Back II", 
        songArtist: "Gaise Baba & Lawrence Oyor", 
        songUrl: "https://music.youtube.com/watch?v=mOSWqg7neWc&si=j02PiWyrM_gGXyQL", 
        artistImage: "https://lh3.googleusercontent.com/Gybn3Ozf-edX2ps6zUUmW--6p__oHcShrzKWZ6gugVBQ1c3uiybv2lMF-lACWbv73EDNSl-TCKp1oA0d=w544-h544-l90-rj",
    },
    {
        id: 8,
        songTitle: "Under the Canopy", 
        songArtist: "Frank Edwards", 
        songUrl: "https://music.youtube.com/watch?v=mu_F-GaaxmE&si=Zldg4aVjUqptUS8W", 
        artistImage: "https://lh3.googleusercontent.com/nFN3-OpOrkJoKZgDkMA4_KUGFgIBrybnbSMsmmz-XjoxAWmOISVUtRIky2DIzaQUG7kq3SWwWthomWif=w544-h544-l90-rj",
    },
    {
        id: 9,
        songTitle: "Wonderful Wonder (feat. Lovesong)", 
        songArtist: "Nathaniel Bassey", 
        songUrl: "https://music.youtube.com/watch?v=yP8Q_lh9Rxw&si=szE3cIovaP93Up-a", 
        artistImage: "https://lh3.googleusercontent.com/ywLxP5xoUadK7pdUKccH_KTBMKhvtX5p6xMxfJU539P2pzCAd0uqcUWDEkDTnR4fSdhWmFE1WSvEUF4DFw=w544-h544-l90-rj"
    },
    {
        id: 10,
        songTitle: "Jugular Jugular", 
        songArtist: "Lawrence Oyor & Greatman Takit", 
        songUrl: "https://music.youtube.com/watch?v=xrFIIJvR6RU&si=zk1PT0bi8a11hpms", 
        artistImage: "https://lh3.googleusercontent.com/5LT92h53xZmgvMchy894sB-jGB_eZM8XLYCuvTySrNwK0XJ40Wu-VfjES5vvQFqMs0jmVuW_J9NRmz_I=w544-h544-l90-rj",
    },
    {
        id: 11,
        songTitle: "Juba", 
        songArtist: "Anendlessocean", 
        songUrl: "https://music.youtube.com/watch?v=AaFsEVj2JrY&si=txGJVdHEj8c_xDLC", 
        artistImage: "https://lh3.googleusercontent.com/WZJg1smuyFXs3QYGsldRZIW-xQeX5LxyyClhWEU9pyMQ4bAWtd0hneuD9wCs6jir1yHD8eXQ8OLhe2NzXw=w544-h544-l90-rj",
        linkToDownload: ""
    },
    {
        id: 12,
        songTitle: "Miracle No Dey Tire Jesus", 
        songArtist: "Moses Bliss Festizie & Chizie", 
        songUrl: "https://music.youtube.com/watch?v=e50jJgpqtDA&si=mGw-swMiX7jVrntY", 
        artistImage: "https://lh3.googleusercontent.com/XCzC21Vl-WHDJE0YYD0_TFZukAqOLvc_cSyElE2_9LwXKgUUkMfsEdN-AaY-UbVg38k3T9JfWN4laXtiaQ=w544-h544-l90-rj",
    },
    {
        id: 13,
        songTitle: "God Only Knows", 
        songArtist: "Burn The Ships", 
        songUrl: "https://music.youtube.com/watch?v=4i8wLMwOfgo&si=eomhelyLIESIUASw", 
        artistImage: "https://lh3.googleusercontent.com/SRyjrtt-WhBuFlkUMyct-j7CXE1X4iR56Efz_cCCnPJVA3k0HLt16nPLeOlrBG7vftASHVDOijAXTOaL=w544-h544-l90-rj"
    },
    {
        id: 14,
        songTitle: "What A Beautiful Name (Live)", 
        songArtist: "Hillsong Worship & Brooke Ligertwood", 
        songUrl: "https://music.youtube.com/watch?v=H2T97r08MeU&si=CiePnXvp6s6MFFP-", 
        artistImage: "https://lh3.googleusercontent.com/NtSE-QcGJoEpkFnU0d9zLdva6Um0KdnYQ5o-vBU8wtM4zmMMXdCW-1CFumBkuFTVRQuVxwu4hZXZSjM=w544-h544-l90-rj"
    },
    {
        id: 15,
        songTitle: "Baba (Live)", 
        songArtist: "Dunsin Oyekan", 
        songUrl: "https://music.youtube.com/watch?v=uiT9P3T4_dQ&si=WJkNt9e_HBxnWzAp", 
        artistImage: "https://lh3.googleusercontent.com/eOCWrtMvbVts_aUMozUszqPdIoXmdElX3XfABE1SaESBy1GOxwCoMbwyMepEi4AaPFUvdTTRK5zpmIw=w544-h544-l90-rj"
    },
    {
        id: 16,
        songTitle: "More Than a Song", 
        songArtist: "Dusin Oyekan", 
        songUrl: "https://music.youtube.com/watch?v=DscAzeyUYJo&si=QYh58SSUhQaszyOx", 
        artistImage: "https://lh3.googleusercontent.com/i9WoKClhjQXof0Saf2Eu4VXShjRtvP1c-PXk44rbI9Uluii0qmDW6AOsdNfcZhfPqztU1kNnqn4erQ9CfQ=w544-h544-l90-rj"
    }
]



const getSongs = (req, res) => {
    res.send(songs)
}


export {getSongs}