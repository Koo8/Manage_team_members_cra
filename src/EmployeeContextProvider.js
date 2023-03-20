import { createContext, useEffect, useState } from 'react';

const EmployeeContext = createContext();

const EmployeesData = [
  {
    id: 1,
    fullName: 'Bob Jones',
    designation: 'JavaScript Developer',
    gender: 'male',
    teamName: 'TeamA',
  },
  {
    id: 2,
    fullName: 'Jill Bailey',
    designation: 'Node Developer',
    gender: 'female',
    teamName: 'TeamA',
  },
  {
    id: 3,
    fullName: 'Gail Shepherd',
    designation: 'Java Developer',
    gender: 'female',
    teamName: 'TeamA',
  },
  {
    id: 4,
    fullName: 'Sam Reynolds',
    designation: 'React Developer',
    gender: 'male',
    teamName: 'TeamB',
  },
  {
    id: 5,
    fullName: 'David Henry',
    designation: 'DotNet Developer',
    gender: 'male',
    teamName: 'TeamB',
  },
  {
    id: 6,
    fullName: 'Sarah Blake',
    designation: 'SQL Server DBA',
    gender: 'female',
    teamName: 'TeamB',
  },
  {
    id: 7,
    fullName: 'James Bennet',
    designation: 'Angular Developer',
    gender: 'male',
    teamName: 'TeamC',
  },
  {
    id: 8,
    fullName: 'Jessica Faye',
    designation: 'API Developer',
    gender: 'female',
    teamName: 'TeamC',
  },
  {
    id: 9,
    fullName: 'Lita Stone',
    designation: 'C++ Developer',
    gender: 'female',
    teamName: 'TeamC',
  },
  {
    id: 10,
    fullName: 'Daniel Young',
    designation: 'Python Developer',
    gender: 'male',
    teamName: 'TeamD',
  },
  {
    id: 11,
    fullName: 'Adrian Jacobs',
    designation: 'Vue Developer',
    gender: 'male',
    teamName: 'TeamD',
  },
  {
    id: 12,
    fullName: 'Devin Monroe',
    designation: 'Graphic Designer',
    gender: 'male',
    teamName: 'TeamD',
  },
];
export function EmployContextProvider({ children }) {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('data')) || EmployeesData
  );
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem('selected_Team')) || 'TeamB'
  );

  const [teams, setTeams] = useState(
    JSON.parse(localStorage.getItem('teams')) || [
      'TeamA',
      'TeamB',
      'TeamC',
      'TeamD',
    ]
  );

  // NOTE: use useEffect() to save important data to localStorage, and update it whenever data is updated.
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selected_Team', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        selectedTeam,
        setSelectedTeam,
        teams,
        setTeams,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeContext;
