import React from "react";
import { Card } from "flowbite-react";
import FaceBookIcon from "../assets/icon-facebook.svg";
import UpIcon from "../assets/icon-up.svg";
import DownIcon from "../assets/icon-down.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import { useState } from "react";

const SmallCard = () => {
  return (
    <div>
        <div>
      <div className="lg:flex lg:justify-evenly mt-10">
        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#63687e] font-semibold text-[20px]">
              Page Views
            </h5>
            <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16">87</p>
            <div className="flex justify-content-evnly ml-16 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">3%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#63687e] font-semibold text-[20px]">
              Likes
            </h5>
            <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16">52</p>
            <div className="flex justify-content-evnly ml-16 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={DownIcon}></img>
              <p className="text-[#dc414c] font-bold mt-4">2%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#63687e] font-semibold text-[20px]">
              Likes
            </h5>
            <img className="h-6 w-6 mr-1" src={InstagramIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16">5462</p>
            <div className="flex justify-content-evnly ml-1 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">2257%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#63687e] font-semibold text-[20px]">
              Profile Views
            </h5>
            <img className="h-6 w-6 mr-1" src={InstagramIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16">52K</p>
            <div className="flex justify-content-evnly ml-1 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">1375%</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="lg:flex lg:justify-evenly mt-10">
        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#63687e] font-semibold text-[20px]">
              Retweets
            </h5>
            <img className="h-6 w-6 mr-1" src={TwitterIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16">117</p>
            <div className="flex justify-content-evnly ml-8 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">303%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#63687e] font-semibold text-[20px]">
              Likes
            </h5>
            <img className="h-6 w-6 mr-1" src={TwitterIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16">505</p>
            <div className="flex justify-content-evnly ml-8 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">533%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#63687e] font-semibold text-[20px]">
              Likes
            </h5>
            <img className="h-6 w-6 mr-1" src={YoutubeIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16">107</p>
            <div className="flex justify-content-evnly ml-10 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={DownIcon}></img>
              <p className="text-[#dc414c] font-bold mt-4">19%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#f0f2fa]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#63687e] font-semibold text-[20px]">
              Page Views
            </h5>
            <img className="h-6 w-6 mr-1" src={YoutubeIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16">1407</p>
            <div className="flex justify-content-evnly ml-5 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={DownIcon}></img>
              <p className="text-[#dc414c] font-bold mt-4">12%</p>
            </div>
          </div>
        </Card>
      </div>

      </div>

      <div className="hidden">




      <div className="lg:flex lg:justify-evenly mt-10">
        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#8b97c6] font-semibold text-[20px]">
              Page Views
            </h5>
            <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16 text-white">87</p>
            <div className="flex justify-content-evnly ml-16 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">3%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#8b97c6] font-semibold text-[20px]">
              Likes
            </h5>
            <img className="h-6 w-6 mr-1" src={FaceBookIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16 text-white">52</p>
            <div className="flex justify-content-evnly ml-16 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={DownIcon}></img>
              <p className="text-[#dc414c] font-bold mt-4">2%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#8b97c6] font-semibold text-[20px]">
              Likes
            </h5>
            <img className="h-6 w-6 mr-1" src={InstagramIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16 text-white">5462</p>
            <div className="flex justify-content-evnly ml-1 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">2257%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#8b97c6] font-semibold text-[20px]">
              Profile Views
            </h5>
            <img className="h-6 w-6 mr-1" src={InstagramIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16 text-white">52K</p>
            <div className="flex justify-content-evnly ml-1 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">1375%</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="lg:flex lg:justify-evenly mt-10">
        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#8b97c6] font-semibold text-[20px]">
              Retweets
            </h5>
            <img className="h-6 w-6 mr-1" src={TwitterIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16 text-white">117</p>
            <div className="flex justify-content-evnly ml-8 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">303%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#8b97c6] font-semibold text-[20px]">
              Likes
            </h5>
            <img className="h-6 w-6 mr-1" src={TwitterIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16 text-white">505</p>
            <div className="flex justify-content-evnly ml-8 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={UpIcon}></img>
              <p className="text-[#1db489] font-bold mt-4">533%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#8b97c6] font-semibold text-[20px]">
              Likes
            </h5>
            <img className="h-6 w-6 mr-1" src={YoutubeIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16 text-white">107</p>
            <div className="flex justify-content-evnly ml-10 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={DownIcon}></img>
              <p className="text-[#dc414c] font-bold mt-4">19%</p>
            </div>
          </div>
        </Card>

        <Card className="lg:w-[275px] bg-[#252a41]">
          <div className="flex justify-between mt-3">
            <h5 className="ml-1 text-[#8b97c6] font-semibold text-[20px]">
              Page Views
            </h5>
            <img className="h-6 w-6 mr-1" src={YoutubeIcon}></img>
          </div>

          <div className="flex justify-evenly mt-3">
            <p className="text-[40px] font-bold mr-16 text-white">1407</p>
            <div className="flex justify-content-evnly ml-5 mt-2">
              <img className="h-2 w-2 mt-6 mr-1" src={DownIcon}></img>
              <p className="text-[#dc414c] font-bold mt-4">12%</p>
            </div>
          </div>
        </Card>
      </div>

    </div>

    </div>
  );
};

export default SmallCard;
