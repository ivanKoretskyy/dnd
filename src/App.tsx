import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dnd from './Dnd/Dnd';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const App: React.FC = () => {
  return (
    <div className="App">
      <Dnd/>
    </div>
  );
}

export default DragDropContext(HTML5Backend)(App);
