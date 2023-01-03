import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <div className="container">
        <h2>Questions and answers about login</h2>
        <section className="info">
          {data.map((datum) => {
            const { title, info } = datum;
            return (
              <SingleQuestion key={datum.id} title={title} info={info} />
            )
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
