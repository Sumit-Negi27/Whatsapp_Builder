import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">WhatsApp Builder</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:text-green-400">Dashboard</Link>
        <Link to="/profile" className="hover:text-green-400">Business Profile</Link>
        <Link to="/products" className="hover:text-green-400">Products</Link>
        {/* <a href="#" className="hover:text-green-400">Dashboard</a>
        <a href="#" className="hover:text-green-400">Business Profile</a>
        <a href="#" className="hover:text-green-400">WhatsApp Setup</a>
        <a href="#" className="hover:text-green-400">Messages</a>
        <a href="#" className="hover:text-green-400">Products</a>
        <a href="#" className="hover:text-green-400">Preview</a>
        <a href="#" className="hover:text-green-400">Settings</a> */}
      </nav>
    </div>
  )
}

export default Sidebar