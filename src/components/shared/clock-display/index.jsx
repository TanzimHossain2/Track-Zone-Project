import PropTypes from "prop-types";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  let localoffset = offset / 60;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{date.toString()}</h3>
      <p>
        {timezone} |{" "}
        {localoffset > 0
          ? `+${Math.abs(localoffset)}`
          : `-${Math.abs(localoffset)} `}{" "}
      </p>
    </div>
  );
};

ClockDisplay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
};

export default ClockDisplay;
