
import { Zap, Sofa, HardHat, MessageCircle } from 'lucide-react'

export const services = [
    {
      title: "Renewable Energy Solutions",
      icon: <Zap className="h-12 w-12 text-[var(--color-orange)]" />,
      description: "We offer comprehensive renewable energy solutions including solar panel installation, inverter design, and minigrid systems.",
      details: [
        "Solar panel installation and maintenance",
        "Custom inverter design and setup",
        "Minigrid design and implementation",
        "Energy efficiency consultations",
        "Battery storage solutions"
      ],
      image: "/placeholder.svg?text=Renewable+Energy&width=400&height=300",
      testimonial: {
        text: "Zavolah's renewable energy solutions have significantly reduced our energy costs and carbon footprint.",
        author: "John Doe, CEO of GreenTech Inc."
      },
      faqs: [
        { 
          question: "How long does a typical solar panel installation take?",
          answer: "A typical residential solar panel installation takes 1-3 days, depending on the system size and complexity."
        },
        {
          question: "What maintenance do solar panels require?",
          answer: "Solar panels generally require minimal maintenance. Annual cleaning and inspection are recommended to ensure optimal performance."
        }
      ]
    },
    {
      title: "Smart Furniture",
      icon: <Sofa className="h-12 w-12 text-[var(--color-green)]" />,
      description: "Our smart furniture solutions combine style, functionality, and technology to maximize space and enhance comfort.",
      details: [
        "Space-saving furniture designs",
        "Smart home integration",
        "Customizable modular furniture",
        "Ergonomic office solutions",
        "Tech-enabled furniture for institutions"
      ],
      image: "/placeholder.svg?text=Smart+Furniture&width=400&height=300",
      testimonial: {
        text: "Zavolah's smart furniture has transformed our office space, improving both aesthetics and productivity.",
        author: "Jane Smith, Director of Operations at TechCorp"
      },
      faqs: [
        {
          question: "Can smart furniture be integrated with existing smart home systems?",
          answer: "Yes, our smart furniture is designed to be compatible with popular smart home ecosystems like Google Home and Amazon Alexa."
        },
        {
          question: "What kind of warranty do you offer on smart furniture?",
          answer: "We offer a 2-year warranty on all electronic components and a 5-year warranty on furniture construction."
        }
      ]
    },
    {
      title: "Construction Services",
      icon: <HardHat className="h-12 w-12 text-[var(--color-orange)]" />,
      description: "From pre-construction planning to post-construction maintenance, we offer end-to-end construction services.",
      details: [
        "Site clearing and preparation",
        "Architectural design and consultation",
        "Green building practices",
        "Construction project management",
        "Renovation and repair services"
      ],
      image: "/placeholder.svg?text=Construction&width=400&height=300",
      testimonial: {
        text: "Zavolah's construction team delivered our project on time and within budget. Their attention to detail was impressive.",
        author: "Robert Johnson, Property Developer"
      },
      faqs: [
        {
          question: "Do you handle all necessary permits for construction projects?",
          answer: "Yes, we manage all required permits and ensure compliance with local building codes and regulations."
        },
        {
          question: "What sustainable practices do you implement in your construction projects?",
          answer: "We prioritize energy-efficient designs, use sustainable materials when possible, and implement waste reduction strategies throughout the construction process."
        }
      ]
    },
    {
      title: "Consultation Services",
      icon: <MessageCircle className="h-12 w-12 text-[var(--color-green)]" />,
      description: "Our expert consultants are ready to guide you through your project, offering tailored advice and solutions.",
      details: [
        "Virtual consultations",
        "On-site assessments",
        "Project planning and feasibility studies",
        "Sustainability audits",
        "Technology integration consultations"
      ],
      image: "/placeholder.svg?text=Consultation&width=400&height=300",
      testimonial: {
        text: "The insights from Zavolah's consultation services were invaluable in shaping our sustainability strategy.",
        author: "Emily Chen, Sustainability Manager at EcoFriendly Co."
      },
      faqs: [
        {
          question: "How long does a typical consultation process take?",
          answer: "The duration varies depending on the project scope. Initial consultations usually take 1-2 hours, while comprehensive assessments may span several weeks."
        },
        {
          question: "Can you provide ongoing support after the initial consultation?",
          answer: "We offer various support packages to ensure the successful implementation and monitoring of our recommendations."
        }
      ]
    }
  ]
  