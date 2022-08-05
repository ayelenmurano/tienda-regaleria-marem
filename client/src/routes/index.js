import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ProductsByCategory } from '../views/Bodies/ProductsByCategory';
import Form from '../views/Form';
import PrincipalPage from '../views/PrincipalPage';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrincipalPage />} />
                <Route path="/category/:category" element={<ProductsByCategory />} />
                <Route path="/form" element={<Form /> } />
            </Routes>
        </BrowserRouter>
    )
}