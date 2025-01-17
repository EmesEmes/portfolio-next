import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
  isIndigo,
}: {
  title: string;
  description: string;
  className?: string;
  isIndigo?: boolean;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className={`size-9 ${isIndigo ? "text-white" : "text-indigo-700"}`}/>
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-sm text-white/60 mt-2">{description}</p>
    </div>
  );
};

export default CardHeader;
