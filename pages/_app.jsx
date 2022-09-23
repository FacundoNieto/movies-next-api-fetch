/*archivo de configuraciones que nos permite llamar a los estilos globales para que se mapeen, 
lo que hace es que cada cosa que importemos acá se importan encima de todas las páginas o de todas
las rutas. Es un componente más */
import 'bootstrap/dist/css/bootstrap.min.css'; /*siempre bootstrap se importa primero que las demás hojas de estilos, para que los estilos de los archivos css que le siguen se impongan por los de bootstrap */
import '../styles/global.css'

import Header from "../components/Header"
import MovieWrapper from "../context/movies/moviesContext" /*con este componente vamos a "englobar" los componentes a los que necesitemos que se les pase el estado creado por createContext  */

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="main__content">
      <MovieWrapper> {/*los componentes hijos de este componente podrán usar el estado creado por createContext en el archivo moviesContext.jsx*/}
        <Header />
        <Component {...pageProps} /> {/*este componente representa o tiene la información de todos los componentes que retornen las funciones de los archivos de la carpeta pages (o sea las páginas del proyecto)*/}
      </MovieWrapper>
    </div>
  )
}

export default MyApp;