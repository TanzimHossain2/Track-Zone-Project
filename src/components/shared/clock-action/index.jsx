import { useState } from "react";
import PropTypes from "prop-types";
import ClockForm from "../clock-form";


const ClockActions = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);



  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}> Edit </button>
      {local ? <button>Create</button> : <button>Delete</button>}
      {isEdit && 
      <ClockForm 
      values={clock}
      handleClock={updateClock}
      title={!local}
      edit={true}
      />
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
