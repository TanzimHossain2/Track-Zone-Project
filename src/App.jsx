import ClockList from "./components/clock-list"
import LocalClock from "./components/local-clock"
import useClock from "./hooks/useClock"


function App() {
  const {Clock:local} = useClock();
  const {Clock:est} =useClock( "EST");
  const {Clock:pst} =useClock( "PST");
  const {Clock:edt} =useClock( "EDT");
  const {Clock:bst} =useClock( "BST");
  const {Clock:pakistan} =useClock("UTC",5*60);
  const {Clock:Bangladesh} =useClock( "UTC",6*60);
  const {Clock:mst} =useClock( "MST");


  console.log('local',local.date);
  console.log('est',est.date);
  console.log('pst',pst.date);
  console.log('edt',edt.date);
  console.log('bst',bst.date);
  console.log('pakistan',pakistan.date);
  console.log('Bangladesh',Bangladesh.date);
  console.log('mst',mst.date);
  return (
    <>
      <LocalClock />
      <ClockList />
    </>
  )
}

export default App
