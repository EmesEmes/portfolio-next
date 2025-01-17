import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  spinDuration = 30,
  shouldOrbit = false,
  isReverse = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration?: number;
  shouldOrbit?: boolean;
  isReverse?: boolean;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
      <div
        className={twMerge(
          shouldOrbit && "animate-spin",
          isReverse && "reverse-spin"
        )}
        style={{
          animationDuration: `${spinDuration}s`,
        }}
      >
        <div
          className="flex justify-start items-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            rotate: `${rotation}deg`,
          }}
        >
          <div
            className="inline-flex"
            style={{ transform: `rotate(${rotation * -1}deg)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
