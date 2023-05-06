/* eslint-disable @next/next/no-img-element */
"use client";

import { Endpoints } from "../../../../endpoints";
import { useParams } from "next/navigation";
import Image from "next/image";
import localFont from "next/font/local";

const lolfont = localFont({ src: "../../../../fonts/LOL.ttf" });
const fontTitle = localFont({ src: "../../../../fonts/TittleLol.ttf" });
export default async function Lol() {
  const { slug } = useParams();
  const championList = await Endpoints.champions();
  const infoChampionList = await Endpoints.infoChampion(slug);
  const infoChampion = infoChampionList.data[`${slug}`];
  const champion = championList.data[`${slug}`];
  let read = champion.blurb;
  function click() {
    read = infoChampion.lore;
  }

  if (champion == undefined) {
    return <h1>404 error</h1>;
  } else {
    return (
      <>
        <header className="w-full h-[45px] bg-[#111] z-[1]"></header>
        <div className="bg-">
          <div className="overflow-hidden gradient-effect absolute w-[100%] h-[100%]">
            <img
              className="object-cover blur-sm opacity-25"
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${slug}_0.jpg`}
              alt=""
            />
          </div>
          <div className="content-start w-full h-full flex justify-center ">
            <div className="w-full h-full flex flex-col items-center">
              <img
                className="mt-4 object-cover w-[700px] h-[400px] absolute"
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${slug}_0.jpg`}
                alt=""
              />
            </div>
            <div className="absolute flex flex-col justify-center items-center mt-[25vw] ">
              <h2
                className={`${fontTitle.className} z-[2] pt-10 tracking-widest font-[lolfont] text-center text-white text-[1rem]`}
              >
                {champion.title.toUpperCase()}
              </h2>
              <h1
                className={`${lolfont.className} leading-[1] z-[2] text-center text-[65px] text-white fontLol`}
              >
                {champion.name.toUpperCase()}
              </h1>
              <div>
                <p className="z-[3] text-white">{read}</p>
                <button>Ver mais...</button>
              </div>
              <p className="z-[3] text-white">{champion.tags[0]}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
