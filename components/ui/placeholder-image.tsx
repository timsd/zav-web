export function PlaceholderImage({ text, width, height }: { text: string; width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill="#374151" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="16"
      >
        {text}
      </text>
    </svg>
  )
}
