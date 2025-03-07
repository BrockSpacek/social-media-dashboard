import { Card } from "flowbite-react";
import FaceBookIcon from "../assets/icon-facebook.svg"
import UpIcon from "../assets/icon-up.svg"
import DownIcon from "../assets/icon-down.svg"
import InstagramIcon from "../assets/icon-instagram.svg"
import YoutubeIcon from "../assets/icon-youtube.svg"
import TwitterIcon from "../assets/icon-twitter.svg"
import { useState } from "react";

export default function LargeCard() {

const [fbname, setFbName] = useState('');
const [twittername, setTwitterName] = useState('');
const [igname, setIgName] = useState('');
const [ytname, setYtName] = useState('');




  return (
   <div className="flex justify-evenly">
    <Card className="lg:w-[275px] bg-[#f0f2fa]">

        <div className="flex justify-center">
            <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
            <h5 className="ml-1 text-[#63687e]">
            @nathanf
            </h5>
        </div>
        <div className="text-center">
            <p className="text-[60px] font-bold">1987</p>
            <p className="text-[#63687e] text-[21px] -mt-3 tracking-[0.2em]">Followers</p>
        </div>
        <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
                <img className="h-2 w-2" src={UpIcon}></img>
            </div>
            <p className="text-[#1db489] font-bold">12 Today</p>
        </div>
    
    </Card>

    <Card className="lg:w-[275px] bg-[#f0f2fa]">

        <div className="flex justify-center">
            <img className="h-6 w-6 mr-1" src={TwitterIcon}></img>
            <h5 className="ml-1">
            @nathanf
            </h5>
        </div>
        <div className="text-center">
            <p>1044</p>
            <p>Followers</p>
        </div>
        <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
                <img className="h-2 w-2" src={UpIcon}></img>
            </div>
            <p>99 Today</p>
        </div>
    
    </Card>

    <Card className="lg:w-[275px] bg-[#f0f2fa]">

        <div className="flex justify-center">
            <img className="h-6 w-6 mr-1" src={InstagramIcon}></img>
            <h5 className="ml-1">
            @realnathanf
            </h5>
        </div>
        <div className="text-center">
            <p>11k</p>
            <p>Followers</p>
        </div>
        <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
                <img className="h-2 w-2" src={UpIcon}></img>
            </div>
            <p>1099 Today</p>
        </div>
    
    </Card>

    <Card className="lg:w-[275px] bg-[#f0f2fa]">

        <div className="flex justify-center">
            <img className="h-6 w-6 mr-1" src={YoutubeIcon}></img>
            <h5 className="ml-1">
             Nathan F.
            </h5>
        </div>
        <div className="text-center">
            <p>8239</p>
            <p>Followers</p>
        </div>
        <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
                <img className="h-2 w-2" src={DownIcon}></img>
            </div>
            <p>144 Today</p>
        </div>
    
    </Card>


    </div> 
  );
}
