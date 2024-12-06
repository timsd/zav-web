export function DownloadableDesigns() {
  const { data: designs } = useDownloadableDesigns()

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {designs?.map(design => (
        <Card key={design.id}>
          <CardHeader>
            <Image
              src={design.images[0]}
              alt={design.name}
              width={300}
              height={200}
              className="rounded-md"
            />
          </CardHeader>
          <CardContent>
            <h3 className="font-medium">{design.name}</h3>
            <div className="mt-4 space-y-2">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => downloadDesignFiles(design.id)}
              >
                Download Files
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => viewDesignSpecs(design.id)}
              >
                View Specifications
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
