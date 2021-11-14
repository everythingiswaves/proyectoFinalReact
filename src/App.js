import ItemListContainer from "./components/item/ItemListContainer.js"
import NavBar from "./components/NavBar.js"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer.js"
import Cart from "./components/cart/Cart.js"
import { CartProvider } from "./CartContext.js"

const App = () =>{
    return(
        <>
            <BrowserRouter>
                <CartProvider>
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
                        <Route exact path="/cart">
                            <Cart />
                        </Route>
                    </Switch>
                </CartProvider>
            </BrowserRouter>
        </>
    )
}
export default App