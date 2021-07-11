import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootRedcuer from "./rootReducer";


export default function configureStore() {
    return createStore(rootRedcuer,devToolsEnhancer())
}
 