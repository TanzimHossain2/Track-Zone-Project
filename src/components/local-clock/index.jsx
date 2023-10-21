import PropTypes from "prop-types";
import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ date, timezone, offset }) => {
  return (
    <div>
      <ClockDisplay
        date={date}
        title={"My Clock"}
        timezone={timezone}
        offset={offset}
      />
    </div>
  );
};

LocalClock.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  timezone: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
};

export default LocalClock;
