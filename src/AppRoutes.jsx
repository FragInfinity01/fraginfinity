import ContactPage from "./Pages/ContactPage";
import Hero from "./Pages/Hero";

const AppRoutes = [
    { index: true, element: <Hero /> },
    { path: '/contact', element: <ContactPage /> },
    // { path: '/products/razer-product-view/:sku', element: <ProductView /> },
    // { path: '/product-search', element: <ProductSearch /> }
];

export default AppRoutes;