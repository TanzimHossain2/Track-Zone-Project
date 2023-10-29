import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-action";
import ClockDisplay from "../shared/clock-display";
import PropTypes from "prop-types";

const ClockListItem = ({ clock, updateClock, deleteClock }) => {
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
};

export default ClockListItem;
