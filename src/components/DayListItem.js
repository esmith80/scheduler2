import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem({ name, spots, selected, setCurrentDay }) {

  const dayClass = classNames(
    "day-list__item",
    {"day-list__item--selected": selected},
    {"day-list__item--full": spots === 0}
  );

  const formatSpots = () => {
    if (spots === 0) {
      return "no spots remaining";
    }
    if (spots === 1) {
      return "1 spot remaining";
    }

    return `${spots} spots remaining`;   
  }

  return (
    <li className={dayClass} onClick={() => setCurrentDay(name)} selected={selected}>
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}