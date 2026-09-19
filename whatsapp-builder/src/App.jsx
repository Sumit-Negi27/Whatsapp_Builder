import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import BusinessProfile from './pages/BusinessProfile'
import Products from './pages/Products'



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<BusinessProfile />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Layout>
  )
}

export default App