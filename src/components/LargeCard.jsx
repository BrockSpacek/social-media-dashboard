import { Card } from "flowbite-react";
import FaceBookIcon from "../assets/icon-facebook.svg";
import UpIcon from "../assets/icon-up.svg";
import DownIcon from "../assets/icon-down.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import { useState } from "react";

export default function LargeCard() {
  const [fbname, setFbName] = useState("");
  const [twittername, setTwitterName] = useState("");
  const [igname, setIgName] = useState("");
  const [ytname, setYtName] = useState("");

  return (
    <div>
      <div className="flex justify-evenly">
        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="bg-[#198ff5] w-[275px] h-[8px] rounded -mt-6 -ml-6"></div>

          <div className="flex justify-center mt-3">
            <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
            <h5 className="ml-1 text-[#63687e]">@nathanf</h5>
          </div>
          <div className="text-center">
            <p className="text-[60px] font-bold">1987</p>
            <p className="text-[#63687e] text-[21px] -mt-3 tracking-[0.2em]">
              Followers
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
              <img className="h-2 w-2 mr-1" src={UpIcon}></img>
            </div>
            <p className="text-[#1db489] font-bold">12 Today</p>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="bg-[#1ca0f2] w-[275px] h-[8px] rounded -mt-6 -ml-6"></div>

          <div className="flex justify-center mt-3">
            <img className="h-6 w-6 mr-1" src={TwitterIcon}></img>
            <h5 className="ml-1 text-[#63687e]">@nathanf</h5>
          </div>
          <div className="text-center">
            <p className="text-[60px] font-bold">1044</p>
            <p className="text-[#63687e] text-[21px] -mt-3 tracking-[0.2em]">
              Followers
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
              <img className="h-2 w-2 mr-1" src={UpIcon}></img>
            </div>
            <p className="text-[#1db489] font-bold">99 Today</p>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)] w-[275px] h-[8px] rounded -mt-6 -ml-6"></div>

          <div className="flex justify-center mt-3">
            <img className="h-6 w-6 mr-1" src={InstagramIcon}></img>
            <h5 className="ml-1 text-[#63687e]">@realnathanf</h5>
          </div>
          <div className="text-center">
            <p className="text-[60px] font-bold">11K</p>
            <p className="text-[#63687e] text-[21px] -mt-3 tracking-[0.2em]">
              Followers
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
              <img className="h-2 w-2 mr-1" src={UpIcon}></img>
            </div>
            <p className="text-[#1db489] font-bold">1099 Today</p>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="bg-[#c4032a] w-[275px] h-[8px] rounded -mt-6 -ml-6"></div>

          <div className="flex justify-center mt-3">
            <img className="h-6 w-6 mr-1" src={YoutubeIcon}></img>
            <h5 className="ml-1 text-[#63687e]">Nathan F.</h5>
          </div>
          <div className="text-center">
            <p className="text-[60px] font-bold">8239</p>
            <p className="text-[#63687e] text-[21px] -mt-3 tracking-[0.2em]">
              Followers
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
              <img className="h-2 w-2 mr-1" src={DownIcon}></img>
            </div>
            <p className="text-[#dc414c] font-bold">144 Today</p>
          </div>
        </Card>
      </div>
      <div className="flex justify-evenly">
        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="bg-[#198ff5] w-[275px] h-[8px] rounded -mt-6 -ml-6"></div>

          <div className="flex justify-center mt-3">
            <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
            <h5 className="ml-1 text-[#8b97c6]">@nathanf</h5>
          </div>
          <div className="text-center">
            <p className="text-[60px] font-bold text-white">1987</p>
            <p className="text-[#8b97c6] text-[21px] -mt-3 tracking-[0.2em]">
              Followers
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
              <img className="h-2 w-2 mr-1" src={UpIcon}></img>
            </div>
            <p className="text-[#1db489] font-bold">12 Today</p>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="bg-[#1ca0f2] w-[275px] h-[8px] rounded -mt-6 -ml-6"></div>

          <div className="flex justify-center mt-3">
            <img className="h-6 w-6 mr-1" src={TwitterIcon}></img>
            <h5 className="ml-1 text-[#8b97c6]">@nathanf</h5>
          </div>
          <div className="text-center">
            <p className="text-[60px] font-bold text-white">1044</p>
            <p className="text-[#8b97c6] text-[21px] -mt-3 tracking-[0.2em]">
              Followers
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
              <img className="h-2 w-2 mr-1" src={UpIcon}></img>
            </div>
            <p className="text-[#1db489] font-bold">99 Today</p>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)] w-[275px] h-[8px] rounded -mt-6 -ml-6"></div>

          <div className="flex justify-center mt-3">
            <img className="h-6 w-6 mr-1" src={InstagramIcon}></img>
            <h5 className="ml-1 text-[#8b97c6]">@realnathanf</h5>
          </div>
          <div className="text-center">
            <p className="text-[60px] font-bold text-white">11K</p>
            <p className="text-[#8b97c6] text-[21px] -mt-3 tracking-[0.2em]">
              Followers
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
              <img className="h-2 w-2 mr-1" src={UpIcon}></img>
            </div>
            <p className="text-[#1db489] font-bold">1099 Today</p>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="bg-[#c4032a] w-[275px] h-[8px] rounded -mt-6 -ml-6"></div>

          <div className="flex justify-center mt-3">
            <img className="h-6 w-6 mr-1" src={YoutubeIcon}></img>
            <h5 className="ml-1 text-[#8b97c6]">Nathan F.</h5>
          </div>
          <div className="text-center">
            <p className="text-[60px] font-bold text-white">8239</p>
            <p className="text-[#8b97c6] text-[21px] -mt-3 tracking-[0.2em]">
              Followers
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-content-center mt-2">
              <img className="h-2 w-2 mr-1" src={DownIcon}></img>
            </div>
            <p className="text-[#dc414c] font-bold">144 Today</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
