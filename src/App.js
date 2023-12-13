import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CardItems } from './components/CardItems';

function App() {
  return (
    <div className="App">
      <CardItems/>
      <div>
      <h1>
        Example heading
        <Badge bg="danger"  as={Button}>
          New
        </Badge>
      </h1>
    </div>
    </div>
  );
}

export default App;
