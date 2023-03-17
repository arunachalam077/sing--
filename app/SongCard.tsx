import React from "react";
import Image from "next/image";
import { SongProps } from "./songDetails";
import Link from "next/link";

const SongCard = ({ id, title, artist, image, link }: SongProps) => {
  return (
    <Link href={link} target="_blank">
      <div
        style={
          {
            backgroundImage: `url(${image})`,
            // height: "100vh",
            //   backgroundColor: bgColor,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            position: "relative",
          } as React.CSSProperties
        }
        className={`w-[270px] h-[190px] relative  items-stretch z-10 justify-center py-0  bg-center rounded-xl overflow-hidden`}
      >
        <p className="text-white hidden">{artist}</p>
        <h1 className="text-white hidden">{title}</h1>
      </div>
    </Link>
  );
};

export default SongCard;