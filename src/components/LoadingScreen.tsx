import { useProgress } from "@react-three/drei";
import { FC, useEffect } from "react";

type Props = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

export const LoadingScreen: FC<Props> = ({ isLoading, setIsLoading }) => {
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [progress, total, loaded, item, setIsLoading]);

  return (
    <>
      {isLoading && (
        <div className="absolute bg-white w-full h-full z-999 flex justify-center">
          <p>Loading...</p>
          <p>{progress}%</p>
        </div>
      )}
    </>
  );
};
