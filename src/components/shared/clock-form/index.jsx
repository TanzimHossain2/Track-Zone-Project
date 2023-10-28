/**
 * 1. for local clock title won't be changed
 * 2. to create a new clock we have to manage title, timezone and offset
 * 3. for edit we will have title, timezone, offset
 */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getOffset } from "../../../utils/timezone";
import { TIME_ZONE_OFFSET } from "../../../CONSTANT/timezone";

const defValues={
    title:'',
    timezone:'UTC',
    offset:0
}

const ClockForm = ({ values=defValues, handleClock, title = true, edit = false }) => {
  const [formValues, setFormValues] = useState(values);

    useEffect(()=>{
        if(TIME_ZONE_OFFSET[formValues.timezone]){
            setFormValues(pre=>({
                ...pre,
                offset:TIME_ZONE_OFFSET[formValues.timezone]
            }))
        }
    },[formValues.timezone])

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

          <select
            name="timezone"
            value={formValues.timezone}
            onChange={handleChange}
            id="timezone"
          >
            <option value="GMT">GMT</option>
            <option value="UTC">UTC</option>
            <option value="EST">EST</option>
            <option value="MST">MST</option>
            <option value="PST">PST</option>
            <option value="EDT">EDT</option>
            <option value="BST">BST</option>
          </select>
        </div>

        {/* This is part for offset*/}
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

ClockForm.propTypes = {
    values: PropTypes.shape({
        title: PropTypes.string.isRequired,
        timezone: PropTypes.string.isRequired,
        offset: PropTypes.number.isRequired,
    }),
    handleClock: PropTypes.func.isRequired,
    title: PropTypes.bool,
    edit: PropTypes.bool,
    };

export default ClockForm;
