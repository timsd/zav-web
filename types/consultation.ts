export interface ConsultationData {
  service: string
  date: Date | undefined
  time: string
  name: string
  email: string
  message: string
}

export interface EmailData {
  to: string
  cc?: string
  subject: string
  content: string
}
