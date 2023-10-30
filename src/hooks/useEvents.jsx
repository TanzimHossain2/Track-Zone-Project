import { useState } from "react";
import shortid from "shortid";

const useEvents = () => {
  const [state, setState] = useState({});

  const getEventByClockId = (clockId) => {
    return Object.keys(state).filter((item) => item.startsWith(clockId));
  };

  const getEvents = (isArray = false) => {
    if (isArray) {
      return Object.values(state);
    }
    return state;
  };

  const addEvent = (event) => {
    event.id = shortid.generate();
    const { id, clockId } = event;
    setState((pre) => ({ ...pre, [`${clockId}|${id}`]: event }));

    return event;
  };

  const deleteEvent = (id) => {
    const events = { ...state };
    delete events[id];
    setState(events);
  };

  const deleteIdByClockId = (clockId) => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clockId)
    );

    setState(events);
  };

  const updateEvent = (updateEvent, id) => {
    const events = { ...state };
    events[id] = {
      ...events[id],
      ...updateEvent,
    };
    setState(events);
  };

  return {
    events: state,
    getEventByClockId,
    getEvents,
    addEvent,
    deleteEvent,
    deleteIdByClockId,
    updateEvent,
  };
};

export default useEvents;
