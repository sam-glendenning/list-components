import React from 'react';
import List from './components/List.component';

function App() {
  return (
    <div className="App">
      <List type="animal">
        <li>Penguin</li>
        <li>Dog</li>
        <li>Bowl of soup</li>
      </List>
      <List type="cat">
        <li>kitty</li>
      </List>
    </div>
  );
}

export default App;
