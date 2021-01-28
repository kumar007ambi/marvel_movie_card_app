import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';



function App() {
  return (
    <>
      <h1 className="heading_style">Creating MARVEL Movies Card App</h1>
      {Sdata.map((val, index) => {
        return (
          <Card cid={val.id}
            imgsrc={val.imgscr}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
}

export default App;
