import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { useState } from 'react';
import { ProductsByCategory } from '../ProductsByCategory';
import { Contact } from '../Contact';

export default function Home () {
    const [body, setBody] = useState("home");

    const changeBody = ({newBody}) => {
        setBody(newBody);
        console.log(`Se ha seteado la variable a ${body}`)
    };

    const renderBody = () => {
        switch (body) {
            case "home":
                return <Body />
            case "products":
                return <ProductsByCategory />
            case "contact":
                return <Contact />
            default:
                return <Body/>
        }
    }

    return (
        <div>
            <Header changeBody={changeBody}/>
            {renderBody(body)}
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