import * as React from 'react';

import s from './Item.module.scss'
import { DragSource, ConnectDragSource, DragSourceMonitor, DragSourceConnector } from 'react-dnd';

const itemSource = {
  beginDrag: (props: ItemProps) => props.item, //pass object as data of dragging
  endDrag: (props: ItemProps, monitor: DragSourceMonitor) => {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if(dropResult) {
      return props.handleDrop(props.item.id) // calback for ending drag
    }
  }
}

const collect = (connect: DragSourceConnector, monitor: DragSourceMonitor) => {
  return {
    connectDragSource: connect.dragSource(), // add property to component props
    isDragging: monitor.isDragging(), // add property to component props
    connectDragPreview: connect.dragPreview(), // can be used for preview

  }
}

export interface ItemProps {
  item: {
    name: string,
    id: string
  };
  handleDrop: (id: string) => void;

  // Collected Props
  connectDragSource: ConnectDragSource;
  isDragging: boolean;
}
 
const Item: React.SFC<ItemProps> = props => {
  const { isDragging, connectDragSource, item } = props;
  const opacity = isDragging ? 0.4 : 1
  return connectDragSource(
    <div className={s.itemContainer} style={{opacity}}>{props.item.name}</div>
  );
}
 
export default DragSource('item', itemSource, collect)(Item);