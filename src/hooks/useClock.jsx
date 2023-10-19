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
  date_utc0: null,
  date: null,
};

const TIME_ZONE_OFFSET = {
  PST: -7 * 60,
  EST: -4 * 60,
};

const useClock = (label, timezone, offset = 0) => {
  const [state, setState] = useState({ ...init });

  useEffect(() => {
    let utc = new Date();
    const localOffset = utc.getTimezoneOffset();
    utc = addMinutes(utc, localOffset);

    if (timezone) {
      if (timezone === "PST" || timezone === "EST") {
        offset = TIME_ZONE_OFFSET[timezone];
      }
      utc = addMinutes(utc, offset);
      console.log(label, utc);
      return;
    }

    console.log(label, utc);
  }, []);

  // Return the state and updater function
  return {
    Clock: state,
  };
};

export default useClock;
