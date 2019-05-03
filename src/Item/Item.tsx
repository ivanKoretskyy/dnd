import * as React from 'react';

import s from './Item.module.scss'

export interface ItemProps {
  item: {
    name: string,
    id: string
  }
}
 
const Item: React.SFC<ItemProps> = props => {
  return (
    <div className={s.itemContainer}>{props.item.name}</div>
  );
}
 
export default Item;