import ItemListContainer from "./components/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer.js"
import NavBar from "./components/NavBar.js"
import Counter from "./components/ItemCount.js"

const App = () =>{
    return(
        <>
            <NavBar/>
            <ItemDetailContainer/> {/* para probar que funciona el componente */}
            <h1>Pagina principal</h1>
            <Counter stock = "4" initial =  "0"/>
            <ItemListContainer/>
        </>
    )
}
export default App