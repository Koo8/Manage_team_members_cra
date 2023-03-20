import React, { useContext, useState } from 'react';
import EmployeeContext from './EmployeeContextProvider';

// Style this form, set up function
function AddingForm() {
  const { employees, setEmployees, selectedTeam, setSelectedTeam } =
    useContext(EmployeeContext);
  const newId = employees.slice(-1)[0].id + 1; // the member is added to the end of the array.
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('');
  const [designation, setDesignation] = useState('');
  const [team, setTeam] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    // if (fullname === '' || gender === '' || designation === '' || team === '') {
    //   alert('please fill all required blanks');
    //   return;
    // }

    const newMember = {
      id: newId,
      fullName: fullname,
      designation: designation,
      teamName: team,
      gender: gender,
    };
    setEmployees([...employees, newMember]);
    setDesignation('');
    setFullname('');
    setGender('');
    setTeam('');
  }
  return (
    <form className='w-full px-5' onSubmit={(e) => handleInputChange(e)}>
      <div className='mb-4'>
        <label
          className='block text-gray-700 font-bold mb-2'
          htmlFor='fullname'
        >
          Full Name{' '}
        </label>
        <input
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-teal-200 focus:border-4'
          id='fullname'
          type='text'
          value={fullname}
          name='fullName'
          required
          placeholder='Enter your full name'
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='gender'>
          Gender (male/female)
        </label>
        <input
          required
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-teal-200 focus:border-4'
          id='gender'
          name='gender'
          value={gender}
          type='text'
          placeholder='Enter your gender'
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 font-bold mb-2'
          htmlFor='designation'
        >
          designation
        </label>
        <input
          required
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:border-teal-200 focus:border-4'
          id='designation'
          name='designation'
          value={designation}
          type='text'
          placeholder='Enter your designation'
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='team'>
          Which team are you assigned?
        </label>
        <div className='relative'>
          <select
            required
            className='appearance-none border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight cursor-pointer outline-none focus:border-teal-200 focus:border-4'
            id='team'
            name='teamName'
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          >
            <option className='outline-none' value=''>
              Choose a Team
            </option>
            <option className='bg-teal-400' value='TeamA'>
              TeamA
            </option>
            <option value='TeamB'>TeamB</option>
            <option value='TeamC'>TeamC</option>
            <option value='TeamD'>TeamD</option>
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-teal-500'>
            <svg className='fill-current h-4 w-4' viewBox='0 0 20 20'>
              <path d='M14.414 7.414a2 2 0 00-2.828 0L10 8.586l-1.586-1.172a2 2 0 10-2.242 3.172l2.828 2.828a2 2 0 002.828 0l2.828-2.828a2 2 0 000-2.828z' />
            </svg>
          </div>
        </div>
      </div>
      <button
        className='w-full block leading-tight px-4 py-2 border-4 rounded text-white border-teal-500 bg-teal-500  hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
}

export default AddingForm;
