import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import configureStore from './store';
import NavBar from './components/navbar';
import LayoutBase from './layout/base';
import {routes} from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <LayoutBase>
        <Switch>
          {routes.map((route, index) => {
            return <Route key={index} {...route} />;
          })}
        </Switch>
      </LayoutBase>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
