
const ClockActions = ({ local = false }) => {

    return (
        <div>
            <button> Edit </button>
            {local ? <button>Create</button> : <button>Delete</button>}
        </div>
    )
}

export default ClockActions;