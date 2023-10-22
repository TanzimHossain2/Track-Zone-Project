import { useState, useEffect } from "react";
import { addMinutes } from "date-fns";

const TIME_ZONE_OFFSET = {
  PST: -7 * 60,
  EST: -4 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: -6 * 60,
};

const useClock = (timezone, offset) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimezone, setLocalTimezone] = useState("");
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let date = new Date();
    const lo = date.getTimezoneOffset();
    date = addMinutes(date, lo);
    setUtc(date);
    setLocalOffset(lo);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIME_ZONE_OFFSET[timezone] ?? offset;

        const newUTC = addMinutes(utc, offset);
        setLocalDate(newUTC);
      } else {
        const localUTC = addMinutes(utc, -localOffset);
        const dateStrArr = localUTC.toUTCString().split(" ");
        setLocalDate(localUTC);

        setLocalTimezone(dateStrArr.pop()); // peak timezone
      }
    }
  }, [utc]);

  // Return the state and updater function
  return {
    date: localDate,
    dateUTC: utc,
    offset: offset || -localOffset,
    timezone: timezone || localTimezone,
  };
};

export default useClock;
