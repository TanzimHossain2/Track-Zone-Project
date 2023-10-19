import { useState, useEffect } from "react";
import { addMinutes } from "date-fns";

// Define your initial state
const init = {
  id: "",
  title: "",
  timezone: {
    type: "",
    offset: "",
  },
  date_utc: null,
  date: null,
};

const TIME_ZONE_OFFSET = {
  PST: -7 * 60,
  EST: -4 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: -6 * 60,
};

const useClock = (timezone, offset = 0) => {
  const [state, setState] = useState({ ...init });
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let date = new Date();
    const localOffset = date.getTimezoneOffset();
    date = addMinutes(date, localOffset);
    setUtc(date);
  }, []);

  useEffect(() => {
    if (utc !== null && timezone) {
      offset = TIME_ZONE_OFFSET[timezone] ?? offset;

      const newUTC = addMinutes(utc, offset);
      setState({
        ...state,
        timezone: {
          type: timezone,
          offset: offset,
        },
        date: newUTC,
        date_utc: utc,
      });
    } else {
      setState({
        ...state,
        date: utc,
        date_utc: utc,
      });
    }
  }, [utc]);

  // Return the state and updater function
  return {
    Clock: state,
  };
};

export default useClock;
