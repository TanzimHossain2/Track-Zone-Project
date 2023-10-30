import { addSeconds } from "date-fns";
import { useEffect, useState } from "react";

const useTimer = (date) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Ensure that date is valid before setting the timer
    if (date instanceof Date && !isNaN(date)) {
      setTimer(date);
    }
  }, [date]);

  useEffect(() => {
    let timerId = null;

    // Only start the interval if timer is a valid date
    if (timer instanceof Date && !isNaN(timer) && timerId === null) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => addSeconds(prevTimer, 1));
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [timer]);

  return timer;
};

export default useTimer;
