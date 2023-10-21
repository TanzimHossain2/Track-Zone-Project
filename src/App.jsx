import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import ClockDisplay from "./components/shared/clock-display";
import useClock from "./hooks/useClock";

function App() {
  const { date: localDate, localOffset, localTimezone } = useClock();
  const { date: india, offset, timezone } = useClock("GMT", 5.5 * 60);
  return (
    <>

      {localDate !== null && (
        <LocalClock
          date={localDate}
          timezone={localTimezone}
          offset={-localOffset}
        />
      )}


      {india !== null && (
        <ClockDisplay
          date={india}
          title={"India"}
          timezone={timezone}
          offset={offset}
        />
      )}
      

      <ClockList />
    </>
  );
}

export default App;
