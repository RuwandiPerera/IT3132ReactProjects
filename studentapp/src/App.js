import logo from './logo.svg';
import './App.css';
import { student } from './data/StudentsDb';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="App">
      <h1>Students Informtion Portal</h1>
      <hr/>
      <table>
        <tr>
          <td>
            <StudentTable students={students}/>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
