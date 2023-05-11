import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import logo from './logo.svg';
import './App.css';
import ProductList from "./component/ProductList";
import {Provider} from "react-redux";
import {store} from "./store/Store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="container">
                    <ProductList></ProductList>
                </div>
            </div>
        </Provider>
    );
}

export default App;
