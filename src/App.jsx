import Form from "./components/Form"
import GradesTable from "./components/GradesTable"
import { useState } from 'react';

const classes = [
  {id:1, crsName: 'TECHNOPRENEURSHIP 1', crsNum: 'IS 3149', units: 5, grade:'A', numGrade:4},
  {id:2, crsName: 'NETWORKING  1', crsNum: 'IT 3147', units: 5, grade:'B',numGrade:3},
  {id:3, crsName: 'IT ELECTIVE 2', crsNum: 'IT 3148', units: 5, grade:'C',numGrade:2},
]

const numEquiv = {
  'A':4,
  'B+':3.5,
  'B':3,
  'C+':2.5,
  'C':2,
  'D':1,
  'F':0
}

function App() {
  const [data, setData] = useState(classes)
  
  const handleFormSubmit = (formData) => {
    setData([...data, formData]);
  };
  return (
    <>
      <Form numbers={numEquiv} classList={data} set={setData} onSubmit={handleFormSubmit}></Form>
      <GradesTable items={data}></GradesTable>
    </>
  )
}

export default App
