import React from 'react';
import AddingForm from './AddingForm';
import Footer from './Footer';
import { EmployContextProvider } from './EmployeeContextProvider';

function AddMember() {
  return (
    <div>
      <EmployContextProvider>
        <div className=' max-w-lg mx-auto md:max-w-3xl lg:max-w-4xl flex flex-col justify-center items-center gap-5 px-2'>
          <AddingForm />
          <Footer />
        </div>
      </EmployContextProvider>
    </div>
  );
}

export default AddMember;
