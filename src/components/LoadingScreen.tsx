import { useProgress } from "@react-three/drei";
import { FC, useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";


export const LoadingScreen: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
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
