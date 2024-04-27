import { FC, Suspense } from 'react';

import { Content3D } from './Content3D';
import { Scene } from './Scene';

export const Hero3D: FC = () => {
  return (
    <Scene>
      <Suspense fallback={null}>
        <Content3D />
      </Suspense>
    </Scene>
  );
};
