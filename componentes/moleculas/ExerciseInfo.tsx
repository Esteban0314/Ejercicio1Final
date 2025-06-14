import { Title } from "../atomos/Title";
import { Text } from "../atomos/Text";

type Props = {
  title: string;
  series: string;
  color?: string;
};

export const ExerciseInfo = ({ title, series, color = 'text-white' }: Props) => (
  <div className="flex flex-col justify-center ml-3">
    <Title className={color}>{title}</Title>
    <Text>{series}</Text>
  </div>
);
