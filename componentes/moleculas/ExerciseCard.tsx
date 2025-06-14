import { ExerciseInfo } from "../moleculas/ExerciseInfo";
import { ImageAtom } from "../atomos/Image";

type Props = {
  image: string;
  title: string;
  series: string;
  borderColor?: string;
  titleColor?: string;
};

export const ExerciseCard = ({
  image,
  title,
  series,
  borderColor = "border-gray-700",
  titleColor = "text-white",
}: Props) => (
  <div className={`flex items-center border-l-4 ${borderColor} bg-[#1e1e1e] rounded-md p-2 mb-3`}>
    <ImageAtom src={image} alt={title} />
    <ExerciseInfo title={title} series={series} color={titleColor} />
    <span className="ml-auto text-gray-400 text-xl font-bold">{'>'}</span>
  </div>
);
