import { Card } from "flowbite-react";
import FaceBookIcon from "../assets/icon-facebook.svg";
import UpIcon from "../assets/icon-up.svg";
import DownIcon from "../assets/icon-down.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import { useEffect, useState } from "react";
import data from '../data/data.json'


export default function LargeCard({ darkMode, toggleTheme }) {
    
    const [totalFollowers, setTotalFollowers] = useState('')
    const [fbFollowers, setFbFollowers] = useState('');
    const [fbFollowersToday, setFbFollowersToday] = useState('')
    const [twitterFollowers, setTwitterFollowers] = useState('');
    const [twitterFollowersToday, setTwitterFollowersToday] = useState('')
    const [igFollowers, setIgFollowers] = useState('');
    const [igFollowersToday, setIgFollowersToday] = useState('')
    const [ytFollowers, setYtFollowers] = useState('');
    const [ytFollowersToday, setYtFollowersToday] = useState('')

    useEffect(() => {
        setTotalFollowers(data.totalFollowers);

        setFbFollowers(data.platforms[0].followers);
        setFbFollowersToday(data.platforms[0].change);

        setTwitterFollowers(data.platforms[1].followers);
        setTwitterFollowersToday(data.platforms[1].change);

        setIgFollowers(data.platforms[2].followers);
        setIgFollowersToday(data.platforms[2].change);

        setYtFollowers(data.platforms[3].subscribers); 
        setYtFollowersToday(data.platforms[3].change);

    }, []);

   

  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 ml-9">
        <div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Social Media Dashboard
          </h1>
          <p className={`${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
            Total Followers: {totalFollowers}
          </p>
        </div>
        
        <div className="flex items-center mt-4 sm:mt-0 mr-10">
          <span className={`mr-2 ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
          <button 
            onClick={toggleTheme}
            className={`w-12 h-6 rounded-full relative ${darkMode ? 'bg-gradient-to-r from-[#378fe6] to-[#3eda82]' : 'bg-[#aeb3cb]'}`}
          >
            <div 
              className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${darkMode ? 'left-6' : 'left-1'}`}
            />
          </button>
        </div>
      </div>
        
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:flex-wrap gap-6">
          
          <Card className={`w-[275px] border-none ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="bg-[#198ff5] w-[275px] h-[8px] rounded-t -mt-6 -ml-6"></div>
            <div className="flex justify-center mt-3">
              <img className="h-6 w-6 mr-1" src={FaceBookIcon} alt="Facebook" />
              <h5 className={`ml-1 ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>@nathanf</h5>
            </div>
            <div className="text-center">
              <p className={`text-[60px] font-bold ${darkMode ? 'text-white' : ''}`}>{fbFollowers}</p>
              <p className={`${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'} text-[16px] -mt-3 tracking-[0.2em]`}>
                FOLLOWERS
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-content-center mt-2">
                <img className="h-2 w-2 mr-1" src={UpIcon} alt="Up" />
              </div>
              <p className="text-[#1db489] font-bold">{fbFollowersToday} Today</p>
            </div>
          </Card>

        
          <Card className={`w-[275px] border-none ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="bg-[#1ca0f2] w-[275px] h-[8px] rounded-t -mt-6 -ml-6"></div>
            <div className="flex justify-center mt-3">
              <img className="h-6 w-6 mr-1" src={TwitterIcon} alt="Twitter" />
              <h5 className={`ml-1 ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>@nathanf</h5>
            </div>
            <div className="text-center">
              <p className={`text-[60px] font-bold ${darkMode ? 'text-white' : ''}`}>{twitterFollowers}</p>
              <p className={`${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'} text-[16px] -mt-3 tracking-[0.2em]`}>
                FOLLOWERS
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-content-center mt-2">
                <img className="h-2 w-2 mr-1" src={UpIcon} alt="Up" />
              </div>
              <p className="text-[#1db489] font-bold">{twitterFollowersToday} Today</p>
            </div>
          </Card>

          
          <Card className={`w-[275px] border-none ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)] w-[275px] h-[8px] rounded-t -mt-6 -ml-6"></div>
            <div className="flex justify-center mt-3">
              <img className="h-6 w-6 mr-1" src={InstagramIcon} alt="Instagram" />
              <h5 className={`ml-1 ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>@realnathanf</h5>
            </div>
            <div className="text-center">
              <p className={`text-[60px] font-bold ${darkMode ? 'text-white' : ''}`}>{igFollowers}</p>
              <p className={`${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'} text-[16px] -mt-3 tracking-[0.2em]`}>
                FOLLOWERS
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-content-center mt-2">
                <img className="h-2 w-2 mr-1" src={UpIcon} alt="Up" />
              </div>
              <p className="text-[#1db489] font-bold">{igFollowersToday} Today</p>
            </div>
          </Card>

        
          <Card className={`w-[275px] border-none ${darkMode ? 'bg-[#252a41]' : 'bg-[#f0f2fa]'}`}>
            <div className="bg-[#c4032a] w-[275px] h-[8px] rounded-t -mt-6 -ml-6"></div>
            <div className="flex justify-center mt-3">
              <img className="h-6 w-6 mr-1" src={YoutubeIcon} alt="YouTube" />
              <h5 className={`ml-1 ${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'}`}>Nathan F.</h5>
            </div>
            <div className="text-center">
              <p className={`text-[60px] font-bold ${darkMode ? 'text-white' : ''}`}>{ytFollowers}</p>
              <p className={`${darkMode ? 'text-[#8b97c6]' : 'text-[#63687e]'} text-[16px] -mt-3 tracking-[0.2em]`}>
                SUBSCRIBERS
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-content-center mt-2">
                <img className="h-2 w-2 mr-1" src={DownIcon} alt="Down" />
              </div>
              <p className="text-[#dc414c] font-bold">{ytFollowersToday} Today</p>
            </div>
          </Card>
          
        </div>
      </div>
    </div>
  );
}
