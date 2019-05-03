import * as React from 'react';
import Item from '../Item/Item';
import Target from '../Target/Target';

import s from './Dnd.module.scss'

export interface DndProps {
  
}

interface Item {
  name: string;
  id: string;
}
 
export interface DndState {
  items: Item[]
}
 
class Dnd extends React.Component<DndProps, DndState> {
  handleDrop = (id: string) => {
    const items = this.state.items.filter(element => element.id !== id);
    this.setState({ items})
  }
  state = {
    items:[
      {id: 'first', name: 'item 1'},
      {id: 'item 2', name: 'item 2'},
      {id: 'item 3', name: 'item 3'},
      {id: 'item 4', name: 'item 4'},
      {id: 'item 5', name: 'item 5'},
    ]
  }
  render() { 
    return (
      <div className={s.dndContainer}>
        <div>
          {this.state.items.map(item => <Item key={item.id} item={item} handleDrop={this.handleDrop}/>)}
        </div>
        <div>
          <Target/>
        </div>
      </div>
    );
  }
}
 
export default Dnd;