import React from 'react';
import Footer from './Footer';
import Employees from './Employees';
import { EmployContextProvider } from './EmployeeContextProvider';

function Home() {
  return (
    <div>
      <EmployContextProvider>
        <div className=' max-w-lg mx-auto md:max-w-3xl lg:max-w-4xl flex flex-col justify-center items-center gap-5 px-2'>
         
          <Employees />
          <Footer />
        </div>
      </EmployContextProvider>
    </div>
  );
}

export default Home;
