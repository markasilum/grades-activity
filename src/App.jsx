import Form from "./components/Form"
import GradesTable from "./components/GradesTable"
import Mainpage from "./components/Mainpage"
import Sidebar from "./components/Sidebar"

const classes = [
  {id:1, crsName: 'TECHNOPRENEURSHIP 1', crsNum: 'IS 3149', units: 5, grade:'A', numGrade:4},
  {id:2, crsName: 'NETWORKING  1', crsNum: 'IT 3147', units: 5, grade:'B',numGrade:3},
  {id:3, crsName: 'IT ELECTIVE 2', crsNum: 'IT 3148', units: 5, grade:'C',numGrade:2},
]

function App() {
  return (
    <>
      <Form></Form>
      <GradesTable items={classes}></GradesTable>
    </>
  )
}

export default App
