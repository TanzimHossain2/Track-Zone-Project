import ClockListItem from "./clock-list-item"

const ClockList = ({clocks}) => {
 
  return (<>
    <div>
      <h3>Other Clocks</h3>
      <hr />
      {clocks.length === 0 ?(<p>No clocks to display, Plese create one</p>):(
        <div>
          {clocks.map(clock=>(
            <ClockListItem clock={clock} />
          ))}
        </div>
      )}
    </div>
    
  </>
    
  )
}

export default ClockList