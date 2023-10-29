import PropTypes from "prop-types";
import { format } from "date-fns";
import classes from './index.module.css'

const ClockDisplay = ({ date, title, timezone, offset }) => {
  let localoffset = offset / 60;
  return (
    <div className={classes.card}>
      <h1>{title}</h1>
      <h3>{format(date, "yyyy-MM-dd hh:mm:ss a")}</h3>
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
