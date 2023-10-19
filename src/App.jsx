import ClockList from "./components/clock-list"
import LocalClock from "./components/local-clock"
import useClock from "./hooks/useClock"


function App() {
  useClock('Local Clock');
  useClock('EST Clock', "EST");
  useClock('PST Clock', "PST");
  useClock('UTC Clock', "UTC",5*60);
  useClock('Bangladesh Clock', "UTC",6*60);
  return (
    <>
      <LocalClock />
      <ClockList />
    </>
  )
}

export default App
