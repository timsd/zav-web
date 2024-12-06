export function SearchBar({ searchQuery, setSearchQuery }) {
  const [searchResults, setSearchResults] = useState([])
  
  const handleSearch = (value: string) => {
    setSearchQuery(value)
    // Implement debounced search
    const results = designs.filter(design => 
      design.name.toLowerCase().includes(value.toLowerCase()) ||
      design.seller.toLowerCase().includes(value.toLowerCase()) ||
      design.description.toLowerCase().includes(value.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="relative flex-grow mx-4">
      <Input
        type="search"
        placeholder="Search designs, sellers, or styles"
        className="w-full pl-10 pr-4 py-2"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      {searchQuery && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg mt-1 z-50">
          {/* Search results dropdown */}
        </div>
      )}
    </div>
  )
}
