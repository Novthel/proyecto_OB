import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/TaskListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;
