import React, { useContext } from 'react';
import EmployeeContext from './EmployeeContextProvider';
import Button from './components/Button';

function TeamList() {
  const { employees, setEmployees, teams } = useContext(EmployeeContext);
  const noTeamMembers = employees.filter((mem) => {
    return mem.teamName === '';
  });

  function removeFromTeam(member, teamName) {
    const newList = employees.map((mem) => {
      if (mem === member) {
        return {
          ...mem,
          teamName: '',
        };
      } else return mem;
    });
    setEmployees(newList);
  }

  function assignTeam(e, member) {
    // console.log(member);
    // console.log(e.target.value);
    const newEmps = employees.map((mem) => {
      if (mem === member) {
        return {
          ...mem,
          teamName: e.target.value,
        };
      } else {
        return mem;
      }
    });
    setEmployees(newEmps);
  }

  function removeMember(member, e) {
    const newMembs = employees.filter((mem) => mem !== member);
    setEmployees(newMembs);
  }

  return (
    <div className=''>
      {teams.map((team) => {
        const members = employees.filter((member) => {
          return member.teamName === team;
        });
        return (
          <div
            key={teams.indexOf(team)}
            className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4 py-5 bg-gray-200 shadow-md mb-8 w-full px-2'
          >
            <div className='hidden md:block md:col-span-1 '></div>
            <div className=' col-span-1  rounded-md flex items-center justify-center h-full bg-gray-50 shadow-md'>
              {team}
            </div>
            <div className='sm:col-span-2  col-span-1'>
              {members.map((mem) => {
                return (
                  <div key={mem.id} className=' py-2'>
                    <div className='sm:flex sm:flex-row  sm:justify-between'>
                      <div>
                        {mem.fullName}{' '}
                        <small className='mr-5'>({mem.designation})</small>
                      </div>
                      <Button handleClick={() => removeFromTeam(mem, team)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='hidden md:block md:col-span-1 '></div>
          </div>
        );
      })}
      <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4 py-5 bg-gray-200 shadow-md mb-8 w-full px-2'>
        <div className='hidden md:block md:col-span-1 '></div>
        <div className=' col-span-1  rounded-md flex items-center justify-center h-full bg-gray-50 shadow-md'>
          ? Team
        </div>
        <div className='sm:col-span-2 col-span-1 '>
          {noTeamMembers.map((mem) => {
            return (
              <div key={mem.id} className=' py-2'>
                <div>
                  <div>
                    {mem.fullName}{' '}
                    <small className='mr-5'>({mem.designation})</small>
                  </div>
                  <select
                    onChange={(e) => assignTeam(e, mem)}
                    className='mr-5 rounded '
                  >
                    <option>Choose a Team</option>
                    <option value='TeamA'>TeamA</option>
                    <option value='TeamB'>TeamB</option>
                    <option value='TeamC'>TeamC</option>
                    <option value='TeamD'>TeamD</option>
                  </select>
                  <Button handleClick={(e) => removeMember(mem, e)}>
                    Remove
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className='hidden md:block md:col-span-1 '></div>
      </div>
    </div>
  );
}

export default TeamList;
