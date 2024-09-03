import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Card title="Card 1" red>Teste X</Card>
        <Card title="Card 2" green>Teste X</Card>
      </div>      
      <div className='linha'>
        <Card title="Card 3" blue>Teste Y</Card>
        <Card title="Card 4" purple>Teste Y</Card>
      </div>      
    </div>
  );
}

export default App;
