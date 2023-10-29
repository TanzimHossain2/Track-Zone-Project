import { useState } from "react";
import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";
import { generate } from "shortid";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock({ ...localClock, ...data });
  };

  const createNewClock = (clock) => {
    clock.id = generate();
    console.log(clock);
    setClocks((pre) => [...pre, clock]);
  };

  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) {
        return updatedClock;
      }
      return clock;
    });
    setClocks(updatedClocks);
  };

  const handleDeleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };

  return (
    <>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createNewClock}
      />

      <ClockList
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={handleDeleteClock}
      />
    </>
  );
}

export default App;
