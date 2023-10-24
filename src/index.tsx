import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Application from './Application'
import { ROUTE_CONSTANTS } from './Routes/constants/route-constants';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter basename={ROUTE_CONSTANTS.ROOT.ABSOLUTE}>
        <Application />
    </BrowserRouter>
);