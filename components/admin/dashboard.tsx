export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 shadow-xl">
          <h3 className="text-[var(--color-orange)] font-semibold">Total Sales</h3>
          <p className="text-3xl font-bold text-white mt-2">₦2.4M</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 shadow-xl">
          <h3 className="text-[var(--color-green)] font-semibold">Orders</h3>
          <p className="text-3xl font-bold text-white mt-2">156</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 shadow-xl">
          <h3 className="text-[var(--color-orange)] font-semibold">Customers</h3>
          <p className="text-3xl font-bold text-white mt-2">1.2K</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50">
          <h2 className="text-xl font-bold text-white mb-4">Recent Orders</h2>
          {/* Order content */}
        </div>
        <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50">
          <h2 className="text-xl font-bold text-white mb-4">Top Products</h2>
          {/* Products content */}
        </div>
      </div>
    </div>
  )
}
