import './App.css';
import Todo from './components/todo';

function App() {

  const todo = [
    {id: 1, title: 'wash dishes', completed: false,},
    {id: 2, title: 'wash car', completed: true,},
  ]

  return (
    <div className="App">
      {
        todo.map((todo) => {
          return (<Todo todo={todo}/>)
        })
      }
      
    </div>
  );
}

export default App;
