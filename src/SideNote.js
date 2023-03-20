import React from 'react';
import Footer from './Footer';

function SideNote() {
  return (
    <div className='max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto px-5'>
      <h2 className='text-lg font-bold  text-zinc-600 mb-4 mt-5'>
        How This App is Made?
      </h2>
      <p>
        This project was originated from a youtube tutorial, part of a React
        project-based course by freecodecamp. My apporach was to listen to the
        tutorial first, then start the coding myself from scratch.{' '}
      </p>
      <br />
      <p>
        With some previous React knowledge, what I needed was a project idea.
        After understanding what this app would look like, I made pages of
        'Home' and 'Group Team' in my own way. I used Tailwind instead of
        Bootstrap for styling. The 'Group Team' page is totally different from
        what was taught in the video.{' '}
      </p>
      <br />
      <p>
        In the home page, a manager can access all members and all teams, it can
        switch any member to any other team and the database will be updated
        accordingly.
      </p>
      <br />
      <p>
        In the Group Team page, a manager can still access all teams and their
        members. I add delete button for each member, so that the manager can
        decide who it can remove from the team.{' '}
      </p>
      <br />
      <p>
        Beyond that, I add an 'Add Member' page. In this page, a manager can
        manually add a member to the database, the member should show up in the
        home page and the group team page.{' '}
      </p>
      <br />
      <p>
        For those members who have been deleted in the Group Team page, since
        they don't have any team assigned yet, I added a section to show all
        these members, and they are able to be assigned to any team, or to be
        erased from the database if the manager deems that particular member is
        not needed anymore.
      </p>
      <br />
      <p>
        Next is for creating more teams, or remove teams and change all their
        members to 'no team' status. First, I need to store all teams into
        database, then I need to access this information and use it for defining
        member variable. After creating a new team and add it to the teams
        array, it should show on Group Team page and Home page and all
        select/option places. For that purpose, dealing with store teams and
        conncect it with select/option is the first step.
        <br />
        since all context related data is stored in EmployeeContextProvider
        file, useEffect is called to populate data to localstorage for better
        performance, so easily the 'teams' data can be added into this file and
        called in other components.
      </p>
      {/* <p>
        I create a new file 'Create Team' for adding new team and make team name
        changes.
      </p> */}
      <br />
      <p>
        Tailwind is very easy to use for responsiveness. A bit of work is
        required for styling a responsive navbar. Basically with useState to set
        up a 'isOpen setIsOpen' state and use this state to control when the div
        should be 'block' or 'hidden'.
      </p>
      <br />
      <p>
        When trying to get rid of the OS blue highlight background of option
        element in select tag, it seems not easy. I will try that next time.{' '}
      </p>
      <p>
        In order to make this application a PWA, I updated manifest.json, as
        well as registered service worker. The benefit of PWA is the ability to
        work offline, using caching. The core function that help makes app
        offline possible is the service worker. React don't have service worker
        preconfigured anymore. By runding 'npx create-react-app my-app-name
        --template cra-template-pwa' this will have a offline first cra ready.
        Go to npmjs.com, search more templates using keywords 'cra-temlate'.
        Since I didn't use the pwa template from the beginning
      </p>
      <Footer />
    </div>
  );
}

export default SideNote;
