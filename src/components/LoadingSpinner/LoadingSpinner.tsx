import { FC } from 'react';

import s from './LoadingSpinner.module.scss';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

export const LoadingSpinner: FC<Props> = ({ children }) => (
  <div className={`${s.loadingSpinner}`}>
    <div className={`${s.boxes}`}>
      <div className={`${s.box}`}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className={`${s.box}`}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className={`${s.box}`}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className={`${s.box}`}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
    <div className={`${s.info}`}>{children}</div>
  </div>
);
