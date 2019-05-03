import * as React from 'react';

import s from './Target.module.scss'

export interface TargetProps {
  
}
 
const Target: React.SFC<TargetProps> = () => {
  return (
    <div className={s.targetContainer}>
      Target
    </div>
  );
}
 
export default Target;