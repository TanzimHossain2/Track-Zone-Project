import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-action";
import ClockDisplay from "../shared/clock-display";
import PropTypes from "prop-types";
import useTimer from "../../hooks/useTimmer";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  if (!date || !(date instanceof Date) || isNaN(date) || !timer) return null;

  return (
    <div>
      <ClockDisplay
        date={timer}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />
      <h3>{formatDistance(localClock.date, timer)}</h3>
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

ClockListItem.propTypes = {
  clock: PropTypes.object.isRequired,
  updateClock: PropTypes.func.isRequired,
  deleteClock: PropTypes.func.isRequired,
  localClock: PropTypes.object.isRequired,
};

export default ClockListItem;
