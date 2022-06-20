import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import { ProductsByCategory } from '../views/Bodies/ProductsByCategory';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<ProductsByCategory />} />
            </Routes>
        </BrowserRouter>
    )
}