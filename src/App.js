import React, { useState, useEffect } from 'react';
import ResourceList from './ResourceList';
import './App.css';

function App() {

  let [resources, setResources] = useState([]);

  function getResources() {
    fetch('/api/resources',
        { method: 'GET' }
    ).then((response) => {
        if(response.status === 200) 
            return response.json();
    }).then((response) => {
        setResources(response);
    });
  }

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div style={ { height: '100%' }}>
      <h1 style={ { textAlign: 'center', color: 'AliceBlue', fontFamily: 'Roboto', paddingTop: '10px' }}>Open Educational Resources</h1>
      <ResourceList resources = { resources } />
    </div>
  );

}

export default App;
