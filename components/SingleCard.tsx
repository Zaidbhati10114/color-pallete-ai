"use client";
import React, { useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface SingleCardProps {
  pallete: { id: string; colors: string[] };
}

const SingleCard: React.FC<SingleCardProps> = ({ pallete }) => {
  const [activeHex, setActiveHex] = useState<string | null>(null);

  const handleMouseEnter = (hexValue: string) => {
    setActiveHex(hexValue);
  };

  const handleMouseLeave = () => {
    setActiveHex(null);
  };

  return (
    <div className="w-[250px] h-[200px] box-content rounded relative">
      <div className="grid grid-cols-1 rounded-t-lg text-white">
        <div
          style={{ backgroundColor: `#${pallete?.colors[0]}` }}
          className={`h-[8vh] rounded-t-lg relative`}
          onMouseEnter={() => handleMouseEnter(pallete?.colors[0])}
          onMouseLeave={handleMouseLeave}
        >
          {activeHex === pallete?.colors[0] && (
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black transition duration-300 delay-400 ease-in-out font-medium">
              {pallete?.colors[0]}
            </p>
          )}
        </div>

        <div
          style={{ backgroundColor: `#${pallete?.colors[1]}` }}
          className={`h-[6vh] relative`}
          onMouseEnter={() => handleMouseEnter(pallete?.colors[1])}
          onMouseLeave={handleMouseLeave}
        >
          {activeHex === pallete?.colors[1] && (
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black transition duration-300 delay-400 ease-in-out font-medium">
              {pallete?.colors[1]}
            </p>
          )}
        </div>

        <div
          style={{ backgroundColor: `#${pallete?.colors[2]}` }}
          className={`h-10 relative`}
          onMouseEnter={() => handleMouseEnter(pallete?.colors[2])}
          onMouseLeave={handleMouseLeave}
        >
          {activeHex === pallete?.colors[2] && (
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black transition duration-300 delay-400 ease-in-out font-medium">
              {pallete?.colors[2]}
            </p>
          )}
        </div>

        <div
          style={{ backgroundColor: `#${pallete?.colors[3]}` }}
          className={`h-10 rounded-b-lg relative`}
          onMouseEnter={() => handleMouseEnter(pallete?.colors[3])}
          onMouseLeave={handleMouseLeave}
        >
          {activeHex === pallete?.colors[3] && (
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black transition duration-300 delay-400 ease-in-out font-medium">
              {pallete?.colors[3]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

export const CardSkeleton = () => {
  return (
    <div className="w-[250px] h-[200px] box-content rounded relative">
      <div className="grid grid-cols-1 rounded-t-lg text-white">
        <Skeleton className="h-[8vh] rounded-t-lg relative" />
        <Skeleton className="h-[6vh] rounded-t-lg relative" />
        <Skeleton className="h-[10] rounded-t-lg relative" />
        <Skeleton className="h-[10] rounded-t-lg relative" />
      </div>
    </div>
  );
};
