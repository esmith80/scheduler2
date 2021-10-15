import React from 'react';
import DayListItem from './DayListItem';

export default function DayList({days, value, onChange}) {

  const dayListItems = days.map(({name,spots,id}) => {
    return (
     <DayListItem
       key={id} 
       name={name} 
       spots={spots} 
       selected={name === value}
       setCurrentDay={() => onChange(name)}
     />
    );
  });

  return <ul>{dayListItems}</ul>;

}
