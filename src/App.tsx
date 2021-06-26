import {Provider} from 'react-redux';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>Hello React</p>
        </header>
      </div>
    </Provider>
  );
}

export default App;
