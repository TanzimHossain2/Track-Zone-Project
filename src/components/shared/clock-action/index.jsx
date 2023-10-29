import { useState } from "react";
import PropTypes from "prop-types";
import ClockForm from "../clock-form";

const ClockActions = ({ local = false, clock, updateClock,createClock }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const createHandleClock =(values)=>{
    createClock(values);
  }

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}> Edit </button>
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      ) : (
        <button>Delete</button>
      )}
      {isEdit && (
        <>
          <h3>Edit Clock</h3>
          <ClockForm
            values={clock}
            handleClock={updateClock}
            title={!local}
            edit={true}
          />
        </>
      )}

      {isCreate && 
      <>
      <h3>Create a New Clock</h3>
      <ClockForm 
      handleClock={createHandleClock}
      />
      </>
      }
    </div>
  );
};

ClockActions.propTypes = {
  local: PropTypes.bool,
  clock: PropTypes.shape({
    title: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired,
  }).isRequired,
  updateClock: PropTypes.func.isRequired,
};

export default ClockActions;
