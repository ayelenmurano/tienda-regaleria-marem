import { useContext } from 'react';

import CategoryContext from '../../context/category';
import { Header } from './Header';
import { Home } from '../Bodies/Home';
import { Footer } from './Footer';
import { ProductsByCategory } from '../Bodies/ProductsByCategory';
import { Contact } from '../Bodies/Contact';
import { WhoWeAre } from '../Bodies/WhoWeAre';


export default function PrincipalPage () {
    const { actualCategory } = useContext(CategoryContext);

    const renderBody = () => {
        switch (actualCategory) {
            case "home":
                return <Home />
            case "products":
                return <ProductsByCategory />
            case "whoweare":
                return <WhoWeAre />
            case "contact":
                return <Contact />
            default:
                return <Home/>
        }
    }

    return (
        <div>
            {/* <Header changeBody={changeBody}/> */}
            <Header />
            {renderBody()}
            <Footer />
        </div>
        // <header className="App-header">
        // <img src={logo} className="App-logo" alt="logo" />
        // <Counter />
        // <p>
        //   Edit <code>src/App.js</code> and save to reload.
        // </p>
        // <span>
        //   <span>Learn </span>
        //   <a
        //     className="App-link"
        //     href="https://reactjs.org/"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     React
        //   </a>
        //   <span>, </span>
        //   <a
        //     className="App-link"
        //     href="https://redux.js.org/"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     Redux
        //   </a>
        //   <span>, </span>
        //   <a
        //     className="App-link"
        //     href="https://redux-toolkit.js.org/"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     Redux Toolkit
        //   </a>
        //   ,<span> and </span>
        //   <a
        //     className="App-link"
        //     href="https://react-redux.js.org/"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     React Redux
        //   </a>
        // </span>
        // </header>
    )
}