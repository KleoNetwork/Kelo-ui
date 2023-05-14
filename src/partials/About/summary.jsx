import React from 'react';
import BlogList from '../TutorialsList';

function Tutorials() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      
      

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
      
        <BlogList />

      </main>

      
      

    </div>
  );
}

export default Tutorials;