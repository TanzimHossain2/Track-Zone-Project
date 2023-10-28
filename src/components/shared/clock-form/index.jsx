/**
 * 1. for local clock title won't be changed
 * 2. to create a new clock we have to manage title, timezone and offset
 * 3. for edit we will have title, timezone, offset
 */
import PropTypes from "prop-types";
import { useState } from "react";
import { getOffset } from "../../../utils/timezone";

// const values={
//     title:'',
//     timezone:'',
//     offset:0
// }

const ClockForm = ({ values, handleClock, title = true, edit = false }) => {
  const [formValues, setFormValues] = useState(values);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = Number(value) * 60;
    }
    setFormValues((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formValues.title}
            onChange={handleChange}
            disabled={!title}
          />
        </div>

        <div>
          <label htmlFor="timezone">Enter Timezone</label>
          <input
            type="text"
            name="timezone"
            id="timezone"
            value={formValues.timezone}
            onChange={handleChange}
          />
        </div>

        {(formValues.timezone == "GMT" || formValues.timezone == "UTC") && (
         
          <div>
            <label htmlFor="offset">Enter Offset</label>

            <select
              id="offset"
              name="offset"
              value={formValues.offset / 60}
              onChange={handleChange}
            >
              {getOffset().map((offset, id) => (
                <option key={id} value={offset}>
                  {offset}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <button type="submit">{edit ? "Update" : " Create"} Clock</button>
        </div>
      </form>
    </>
  );
};

export default ClockForm;
