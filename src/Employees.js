import React, { useContext } from 'react';
import TeamSelect from './TeamSelect';
import Employee from './Employee';
import EmployeeContext from './EmployeeContextProvider';

function Employees() {
  const { employees } = useContext(EmployeeContext);
  return (
    <>
      <TeamSelect />
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 sm:px-2 px-10 w-full '>
        {employees.map((em) => {
          return <Employee em={em} key={em.id} />;
        })}
      </div>
    </>
  );
}

export default Employees;
