import { useProgress } from "@react-three/drei";
import { FC, useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";

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
        <div className="absolute bg-purple-300 w-full h-screen z-10 flex justify-center items-center">
          <LoadingSpinner  />
        </div>
      )}
    </>
  );
};
