export function PartnersSection({ partners }) {
  return (
    <section className="py-8 overflow-hidden bg-[#1d1c21]">
      <div className="flex animate-scroll">
        {partners.concat(partners).map((partner, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <img src={`/placeholder.svg?text=${partner}&width=150&height=50`} alt={partner} className="h-12" />
          </div>
        ))}
      </div>
    </section>
  )
}
