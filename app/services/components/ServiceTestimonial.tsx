interface ServiceTestimonialProps {
  testimonial: {
    text: string
    author: string
  }
  textClass: string
}

export const ServiceTestimonial = ({ testimonial, textClass }: ServiceTestimonialProps) => (
  <blockquote className="border-l-4 border-[var(--color-orange)] pl-4 mb-4">
    <p className={`${textClass} italic mb-2`}>{testimonial.text}</p>
    <cite className={textClass}>— {testimonial.author}</cite>
  </blockquote>
)
