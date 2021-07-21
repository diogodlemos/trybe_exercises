import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tarefas = [ 'estudar', 'trabalhar' , 'Atividade Física' ];
  return (
    <div className="App">
      <header className="App-header">
        <span>{tarefas.map((tarefa)=> Task(tarefa))}</span>
       
      </header>
    </div>
  );
}

export default App;
