import { Card } from "flowbite-react";
import FaceBookIcon from "../assets/icon-facebook.svg"
import UpIcon from "../assets/icon-up.svg"
import DownIcon from "../assets/icon-down.svg"
import InstagramIcon from "../assets/icon-instagram.svg"
import YoutubeIcon from "../assets/icon-youtube.svg"
import TwitterIcon from "../assets/icon-twitter.svg"

export default function LargeCard() {






  return (
   <div className="flex justify-evenly">
    <Card className="lg:w-[275px]">

        <div className="flex justify-center">
            <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
            <h5 className="ml-1">
            @nathanf
            </h5>
        </div>
        <div className="text-center">
            <p>1987</p>
            <p>Followers</p>
        </div>
        <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
                <img className="h-2 w-2" src={UpIcon}></img>
            </div>
            <p>12 Today</p>
        </div>
    
    </Card>

    <Card className="lg:w-[275px]">

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

    <Card className="lg:w-[275px]">

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

    <Card className="lg:w-[275px]">

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
