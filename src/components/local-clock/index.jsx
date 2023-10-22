import PropTypes from "prop-types";
import ClockDisplay from "../shared/clock-display";
import ClockActions from "../shared/clock-action";
import useClock from "../../hooks/useClock";
import { useEffect } from "react";

const LocalClock = ({ clock, updateClock }) => {

  const { date,  timezone, offset } = useClock(
    clock.timezone,
    clock.offset
  );

  useEffect(() =>{
    if (date) {
      updateClock({ date, timezone, offset });
    }
  },[date]);

  return (
    <div>
      {date && (
        <ClockDisplay
        date={date}
        title={clock.title}
        timezone={timezone}
        offset={offset}
      />
      )}
      <ClockActions local={true} />
    </div>
  );
};


export default LocalClock;
