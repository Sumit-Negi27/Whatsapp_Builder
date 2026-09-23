import { useState } from 'react'

function BusinessProfile() {
  const [businessName, setBusinessName] = useState("")
  const [category, setCategory] = useState("")
  const [phone, setPhone] = useState("")
  const [isSaved, setIsSaved] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Saved data:", { businessName, category, phone })

    setIsSaved(true)
    setTimeout(() => {
      setIsSaved(false)
    }, 3000)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Business Profile</h1>

      {isSaved && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
          ✅ Saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Business Name</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="e.g. ABC Cafe"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="e.g. Restaurant"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="e.g. 9876543210"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default BusinessProfile