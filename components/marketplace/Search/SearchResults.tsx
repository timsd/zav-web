export function SearchResults({ results }) {
  return (
    <div className="absolute top-full mt-2 w-full bg-background border rounded-md shadow-lg">
      {results.map(design => (
        <Link 
          key={design.id} 
          href={`/marketplace/design/${design.id}`}
          className="flex items-center gap-4 p-4 hover:bg-muted"
        >
          <Image
            src={design.images[0]}
            alt={design.name}
            width={40}
            height={40}
            className="rounded"
          />
          <div>
            <h4 className="font-medium">{design.name}</h4>
            <p className="text-sm text-muted-foreground">₦{design.price.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
