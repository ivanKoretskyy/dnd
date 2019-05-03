import * as React from 'react';

import s from './Target.module.scss'
import { DropTarget, DropTargetConnector, DropTargetMonitor, ConnectDropTarget } from 'react-dnd';

export interface TargetProps {
  canDrop: boolean
  isOver: boolean
  connectDropTarget: ConnectDropTarget
}
 
const Target: React.SFC<TargetProps> = ({
  canDrop,
  isOver,
  connectDropTarget,
}) => {
  const backgroundColor = isOver ? 'lightgreen' : 'white';
  return (
    <div ref={connectDropTarget} style={{backgroundColor}} className={s.targetContainer}>
      Target
    </div>
  );
}
 
export default DropTarget(
  'item',
  {
    drop: () => ({name: 'Dustbin'}),
  },
  (connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
  )(Target);