import PropTypes from "prop-types";
import ClockDisplay from "../shared/clock-display";
import ClockActions from "../shared/clock-action";
import useClock from "../../hooks/useClock";
import { useEffect } from "react";
import useTimer from "../../hooks/useTimmer";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  const localTimer = useTimer(date);

  useEffect(() => {
    if (date) {
      updateClock({ date, timezone, offset });
    }
  }, [date]);

  return (
    <div>
      {localTimer && (
        <ClockDisplay
          date={localTimer}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockActions
        local={true}
        clock={clock}
        updateClock={updateClock}
        createClock={createClock}
      />
    </div>
  );
};

LocalClock.propTypes = {
  clock: PropTypes.shape({
    title: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired,
  }).isRequired,
  updateClock: PropTypes.func.isRequired,
  createClock: PropTypes.func.isRequired,
};

export default LocalClock;
