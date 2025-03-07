import React from "react";
import { Card } from "flowbite-react";
import FaceBookIcon from "../assets/icon-facebook.svg";
import UpIcon from "../assets/icon-up.svg";
import DownIcon from "../assets/icon-down.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import { useState, useEffect } from "react";
import data from '../data/data.json'


const SmallCard = ({ darkMode }) => {

    const [fbPageViews, setFbPageViews] = useState('')
    const [fbPageViewsChange, setFbPageViewsChange] = useState('')
    const [fbPageLikes, setFbPageLikes] = useState('')
    const [fbPageLikesChange, setFbPageLikesChange] = useState('')
    const [twitterRetweets, setTwitterRetweets] = useState('');
    const [twitterRetweetsChange, setTwitterRetweetsChange] = useState('');
    const [twitterLikes, setTwitterLikes] = useState('');
    const [twitterLikesChange, setTwitterLikesChange] = useState('');
    const [igLikes, setIgLikes] = useState('');
    const [igLikesChange, setIgLikesChange] = useState('');
    const [igProfileViews, setIgProfileViews] = useState('');
    const [igProfileViewsChange, setIgProfileViewsChange] = useState('');
    const [ytLikes, setYtLikes] = useState('');
    const [ytLikesChange, setYtLikesChange] = useState('');
    const [ytTotalViews, setYtTotalViews] = useState('');
    const [ytTotalViewsChange, setYtTotalViewsChange] = useState('')
    


    useEffect(() => {
    
        setFbPageViews(data.platforms[0].pageViews);
        setFbPageViewsChange(data.platforms[0].pageViewsChange)
        setFbPageLikes(data.platforms[0].likes)
        setFbPageLikesChange(data.platforms[0].likesChange)
        setTwitterRetweets(data.platforms[1].retweets);
        setTwitterRetweetsChange(data.platforms[1].retweetsChange);
        setTwitterLikes(data.platforms[1].likes);
        setTwitterLikesChange(data.platforms[1].likesChange);
        setIgLikes(data.platforms[2].likes);
        setIgLikesChange(data.platforms[2].likesChange);
        setIgProfileViews(data.platforms[2].profileViews);
        setIgProfileViewsChange(data.platforms[2].profileViewsChange);
        setYtLikes(data.platforms[3].likes);
        setYtLikesChange(data.platforms[3].likesChange);
        setYtTotalViews(data.platforms[3].totalViews);
        setYtTotalViewsChange(data.platforms[3].totalViewsChange);
        

    }, []);


  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      <h1 className={`text-3xl mt-16 ml-9 font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-500'}`}>Overview - Today</h1>
      <div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:flex-wrap gap-6">
          <Card className={`w-[275px] ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="flex justify-between mt-3">
              <h5 className={`ml-1 font-semibold text-[20px] ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
                Page Views
              </h5>
              <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
            </div>

            <div className="flex justify-evenly mt-3">
              <p className={`text-[40px] font-bold mr-16 ${darkMode ? 'text-white' : ''}`}>{fbPageViews}</p>
              <div className="flex justify-content-evnly ml-16 mt-2">
                <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
                <p className="text-[#1db489] font-bold mt-4">{fbPageViewsChange}%</p>
              </div>
            </div>
          </Card>

          <Card className={`w-[275px] ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="flex justify-between mt-3">
              <h5 className={`ml-1 font-semibold text-[20px] ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
                Likes
              </h5>
              <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
            </div>

            <div className="flex justify-evenly mt-3">
              <p className={`text-[40px] font-bold mr-16 ${darkMode ? 'text-white' : ''}`}>{fbPageLikes}</p>
              <div className="flex justify-content-evnly ml-16 mt-2">
                <img className="h-2 w-2 mt-6 mr-1" src={DownIcon}></img>
                <p className="text-[#dc414c] font-bold mt-4">{fbPageLikesChange}%</p>
              </div>
            </div>
          </Card>

          <Card className={`w-[275px] ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="flex justify-between mt-3">
              <h5 className={`ml-1 font-semibold text-[20px] ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
                Likes
              </h5>
              <img className="h-6 w-6 mr-1" src={InstagramIcon}></img>
            </div>

            <div className="flex justify-evenly mt-3">
              <p className={`text-[40px] font-bold mr-16 ${darkMode ? 'text-white' : ''}`}>{igLikes}</p>
              <div className="flex justify-content-evnly ml-1 mt-2">
                <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
                <p className="text-[#1db489] font-bold mt-4">{igLikesChange}%</p>
              </div>
            </div>
          </Card>

          <Card className={`w-[275px] ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="flex justify-between mt-3">
              <h5 className={`ml-1 font-semibold text-[20px] ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
                Profile Views
              </h5>
              <img className="h-6 w-6 mr-1" src={InstagramIcon}></img>
            </div>

            <div className="flex justify-evenly mt-3">
              <p className={`text-[40px] font-bold mr-16 ${darkMode ? 'text-white' : ''}`}>{igProfileViews}</p>
              <div className="flex justify-content-evnly ml-1 mt-2">
                <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
                <p className="text-[#1db489] font-bold mt-4">{igProfileViewsChange}%</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:flex-wrap gap-6 mt-6">
          <Card className={`w-[275px] ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="flex justify-between mt-3">
              <h5 className={`ml-1 font-semibold text-[20px] ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
                Retweets
              </h5>
              <img className="h-6 w-6 mr-1" src={TwitterIcon}></img>
            </div>

            <div className="flex justify-evenly mt-3">
              <p className={`text-[40px] font-bold mr-16 ${darkMode ? 'text-white' : ''}`}>{twitterRetweets}</p>
              <div className="flex justify-content-evnly ml-8 mt-2">
                <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
                <p className="text-[#1db489] font-bold mt-4">{twitterRetweetsChange}%</p>
              </div>
            </div>
          </Card>

          <Card className={`w-[275px] ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="flex justify-between mt-3">
              <h5 className={`ml-1 font-semibold text-[20px] ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
                Likes
              </h5>
              <img className="h-6 w-6 mr-1" src={TwitterIcon}></img>
            </div>

            <div className="flex justify-evenly mt-3">
              <p className={`text-[40px] font-bold mr-16 ${darkMode ? 'text-white' : ''}`}>{twitterLikes}</p>
              <div className="flex justify-content-evnly ml-8 mt-2">
                <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
                <p className="text-[#1db489] font-bold mt-4">{twitterLikesChange}%</p>
              </div>
            </div>
          </Card>

          <Card className={`w-[275px] ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="flex justify-between mt-3">
              <h5 className={`ml-1 font-semibold text-[20px] ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
                Likes
              </h5>
              <img className="h-6 w-6 mr-1" src={YoutubeIcon}></img>
            </div>

            <div className="flex justify-evenly mt-3">
              <p className={`text-[40px] font-bold mr-16 ${darkMode ? 'text-white' : ''}`}>{ytLikes}</p>
              <div className="flex justify-content-evnly ml-10 mt-2">
                <img className="h-2 w-2 mt-6 mr-1" src={DownIcon}></img>
                <p className="text-[#dc414c] font-bold mt-4">{ytLikesChange}%</p>
              </div>
            </div>
          </Card>

          <Card className={`w-[275px] ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="flex justify-between mt-3">
              <h5 className={`ml-1 font-semibold text-[20px] ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
                Page Views
              </h5>
              <img className="h-6 w-6 mr-1" src={YoutubeIcon}></img>
            </div>

            <div className="flex justify-evenly mt-3">
              <p className={`text-[40px] font-bold mr-16 ${darkMode ? 'text-white' : ''}`}>{ytTotalViews}</p>
              <div className="flex justify-content-evnly ml-5 mt-2">
                <img className="h-2 w-2 mt-6 mr-1" src={DownIcon}></img>
                <p className="text-[#dc414c] font-bold mt-4">{ytTotalViewsChange}%</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
      
    </div>

  );
};

export default SmallCard;
