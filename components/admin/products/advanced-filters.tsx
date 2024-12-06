export function AdvancedFilters() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <Select label="Category" options={categories} />
      <Select label="Stock Status" options={stockStatuses} />
      <RangeSlider label="Price Range" min={0} max={1000} />
      <DateRangePicker label="Date Added" />
    </div>
  )
}
