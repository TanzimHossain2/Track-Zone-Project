import ClockListItem from "./clock-list-item";
import PropTypes from "prop-types";

const ClockList = ({ clocks, updateClock, deleteClock }) => {
  return (
    <>
      <div>
        <h3>Other Clocks</h3>
        <hr />
        {clocks.length === 0 ? (
          <p>No clocks to display, Plese create one</p>
        ) : (
          <div>
            {clocks.map((clock) => (
              <ClockListItem
                key={clock.id}
                clock={clock}
                updateClock={updateClock}
                deleteClock={deleteClock}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

ClockList.propTypes = {
  clocks: PropTypes.array.isRequired,
  updateClock: PropTypes.func.isRequired,
  deleteClock: PropTypes.func.isRequired,
};

export default ClockList;
