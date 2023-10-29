import { useState } from "react";
import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";
import {generate} from "shortid";

const LOCAL_CLOCK_INIT = {
  title: 'My Clock',
  timezone: '',
  offset: 0,
  date: null,
}

function App() {
  const [localClock, setLocalClock] = useState({...LOCAL_CLOCK_INIT});
  const [clocks, setClocks]= useState([]);

  const updateLocalClock = (data) => {
    setLocalClock({...localClock, ...data});
  }

  const createNewClock = (clock) => {
    clock.id = generate();
    console.log(clock);
    setClocks(pre=>[...pre, clock]);
  }

  return (
    <>
      <LocalClock clock={localClock} updateClock={updateLocalClock} createClock={createNewClock} />
      

      <ClockList clocks={clocks} />
    </>
  );
}

export default App;
