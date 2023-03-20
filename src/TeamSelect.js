import React, { useContext } from 'react';
import EmployeeContext from './EmployeeContextProvider';

function TeamSelect() {
  const { selectedTeam, setSelectedTeam, employees } =
    useContext(EmployeeContext);

  const teamMembers = employees.filter((emp) => {
    return emp.teamName === selectedTeam;
  });
  const numOfMembers = teamMembers.length;

  return (
    <div className='flex sm:flex-row flex-col sm:justify-between items-center mb-5 w-full gap-4 px-2'>
      <div>
        <p className='pr-4 pb-2'>Choose a Team to see its members:</p>
        <div className='inline-block relative w-64'>
          <select
            className='block appearance-none w-full bg-white border border-teal-500  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer'
            value={selectedTeam}
            onChange={(e) =>
              setSelectedTeam(e.target.value)
            } /* how to add setSelectedTeam */
          >
            <option value='TeamA'>TeamA</option>
            <option value='TeamB'>TeamB</option>
            <option value='TeamC'>TeamC</option>
            <option value='TeamD'>TeamD</option>
          </select>
        </div>
      </div>
      <div>
        <p>
          {selectedTeam} has {numOfMembers} members
        </p>
        <p>Total {employees.length} members</p>
      </div>
    </div>
  );
}

export default TeamSelect;
