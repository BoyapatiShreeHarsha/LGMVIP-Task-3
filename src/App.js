import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import DataState from './contest/DataState';

function App() {
  return (
    <>
    <DataState>
      <h2 style={{textAlign:"center",margin:"10px 0px"}}>Student Enrollment form</h2>
    <div className='App_body' >
    <Form/>
    <Display/>
    </div>
    </DataState>
    </>
  );
}

export default App;
