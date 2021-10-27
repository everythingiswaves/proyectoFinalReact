import ItemListContainer from "./components/ItemListContainer.js"
import NavBar from "./components/NavBar.js"
import Counter from "./components/ItemCount.js"

const App = () =>{
    return(
        <>
            <NavBar/>
            <h1>Pagina principal</h1>
            <ItemListContainer productos= "remeras"/>
            <Counter stock = "4" initial =  "0"/>
        </>
    )
}
export default App