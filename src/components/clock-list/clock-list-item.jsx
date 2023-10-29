import useClock from "../../hooks/useClock";
import ClockDisplay from "../shared/clock-display";

const ClockListItem = ({ clock }) => {
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
    </div>
  );
};

export default ClockListItem;
