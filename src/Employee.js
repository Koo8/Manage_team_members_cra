import React, { useContext } from 'react';
import EmployeeContext from './EmployeeContextProvider';
import femaleImg from './images/femaleProfile.jpg';
import maleImg from './images/maleProfile.jpg';

function Employee({ em }) {
  const { selectedTeam, setEmployees, employees } = useContext(EmployeeContext);
  function handleClick() {
    const newEmployeess = employees.map((employee) => {
      if (employee.id === em.id && em.teamName !== selectedTeam) {
        return {
          ...employee,
          teamName: selectedTeam,
        };
      } else {
        return employee;
      }
    });
    setEmployees(newEmployeess);
  }
  return (
    <div
      className={`bg-white rounded-lg shadow-md  border-2 ${
        em.teamName === selectedTeam ? 'border-teal-200 ' : 'border-gray-100'
      }`}
      onClick={handleClick}
    >
      <img
        className='h-36 w-full object-cover'
        src={em.gender === 'male' ? maleImg : femaleImg}
        alt={em.fullName}
      />
      <div className='px-4 py-2'>
        <h4 className='text-lg font-semibold mb-2'>{em.fullName}</h4>
        <p className='text-gray-600 text-sm'>
          {em.designation}{' '}
          <span
            className={`${
              em.teamName === selectedTeam
                ? 'text-teal-500 font-bold'
                : 'text-gray-600'
            }`}
          >
            {em.teamName}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Employee;
