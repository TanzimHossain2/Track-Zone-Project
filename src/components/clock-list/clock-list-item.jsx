import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-action";
import ClockDisplay from "../shared/clock-display";
import PropTypes from "prop-types";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  if (!date) return null;

  return (
    <div>
      <ClockDisplay
        date={date}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />
      <h3>{formatDistance(localClock.date, date)}</h3>
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
