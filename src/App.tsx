import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore, { history } from "./redux/store";
import { AppRoutes } from "@/src/app/routes";

import "./styles/main.less";

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
