import './App.css';
import { createAction } from '@babbage/sdk';
import { Button } from '@material-ui/core';

function App() {

  const handleClick = async () => {
    const result = await createAction({
      description: 'Create a Hello World Action',
      keyName: 'primarySigning',
      keyPath: 'm/1033/1',
      data:[
        btoa('Hello Babbage, My name is Patrick')
      ]

    });

    console.log(result)
    alert(result.txid)

  }

  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant='contained'
          color='primary'
          onClick={handleClick}
          >
          Create First Action
          </Button>
      </header>
    </div>
  );
}

export default App;
