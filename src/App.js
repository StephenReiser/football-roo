import { useState } from 'react';
import Title from './components/Title'
import NameForm from './components/NameForm'
import NameDisplay from './components/NameDisplay';
import Summary from './components/Summary'

function App() {
  const [name, setName] = useState('');

  const handleNameSubmit = (name) => {
    setName(name);
  };

  return (
    <div className="App">
      <Title />
      <main>
      <NameForm onSubmit={handleNameSubmit} />
      {name && <NameDisplay name={name} />}
      <Summary />

      </main>
    </div>
  );
}

export default App;