import { useState } from 'react'

function Products() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const handleAddProduct = (e) => {
    e.preventDefault()


    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      description: description
    }

    setProducts([...products, newProduct])

    setName("")
    setPrice("")
    setDescription("")
  }
 const handleDeleteProduct = (idToDelete) => {
    setProducts(products.filter((product) => product.id !== idToDelete))
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products / Services</h1>

      <form onSubmit={handleAddProduct} className="flex flex-col gap-4 max-w-md mb-8">
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="e.g. Cappuccino"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price (₹)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="e.g. 120"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="e.g. Hot coffee with milk foam"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Product
        </button>
      </form>

      <div>
        <h2 className="text-xl font-bold mb-3">Your Products</h2>

        {products.length === 0 && (
          <p className="text-gray-500">No products added yet.</p>
        )}

        <div className="flex flex-col gap-3">
          {products.map((product) => (
  <div key={product.id} className="border border-gray-300 rounded p-4 flex justify-between items-start">
    <div>
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-gray-500 text-sm">{product.description}</p>
    </div>
    <button
      onClick={() => handleDeleteProduct(product.id)}
      className="text-red-500 hover:text-red-700 text-sm"
    >
      Delete
    </button>
  </div>
))}
        </div>
      </div>
    </div>
  )
}

export default Products