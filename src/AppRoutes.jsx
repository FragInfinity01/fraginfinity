import ContactPage from "./Pages/ContactPage";
import Home from "./Pages/Home";

const AppRoutes = [
    { index: true, element: <Home /> },
    { path: '/contact', element: <ContactPage /> },
    // { path: '/products/razer-product-view/:sku', element: <ProductView /> },
    // { path: '/product-search', element: <ProductSearch /> }
];

export default AppRoutes;