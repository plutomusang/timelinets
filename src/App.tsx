import React from 'react';
import logo from './logo.svg';

import Timenode from './component/timenode';
import SampleData from './json/fetchData.json';
function App() {
  let data = SampleData.timelineData;
  return (
    
    <div className="App">
      {data.map((value)=>
        {
        return <Timenode 
          personName={value.personName}
          description={value.description}
          timeRecieved={value.timeRecieved}
          timeReleased={value.timeReleased}
          documentStatus={value.documentStatus}
          isLastItem={value.isLastItem} />
        })
      }
    </div>
  );
}

export default App;
