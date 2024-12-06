interface ServiceDetailsProps {
  details: string[]
  textClass: string
}

export const ServiceDetails = ({ details, textClass }: ServiceDetailsProps) => (
  <ul className="list-disc list-inside mb-4">
    {details.map((detail, index) => (
      <li key={index} className={textClass}>
        {detail}
      </li>
    ))}
  </ul>
)
