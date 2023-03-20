import React from 'react';
import { EmployContextProvider } from './EmployeeContextProvider';
import Footer from './Footer';

import TeamList from './TeamList';

function GroupTeam() {
  return (
    <>
      <EmployContextProvider>
        <div className='max-w-lg mx-auto md:max-w-3xl lg:max-w-4xl flex flex-col justify-center gap-5 px-2'>
          <TeamList />
          <Footer />
        </div>
      </EmployContextProvider>
    </>
  );
}

export default GroupTeam;
