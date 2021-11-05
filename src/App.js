import ItemListContainer from "./components/ItemListContainer.js"
import NavBar from "./components/NavBar.js"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer.js"

const App = () =>{
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/category/:categoryId">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/item/:itemId">
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default App