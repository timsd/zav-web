export const adminTemplate = (data) => `
<div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
  <h1 style="color: #FF5722;">New Consultation Booking</h1>
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
    <h2>Booking Details</h2>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Date:</strong> ${data.date}</p>
    <p><strong>Time:</strong> ${data.time}</p>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Message:</strong> ${data.message}</p>
  </div>
</div>
`

export const userTemplate = (data) => `
<div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
  <h1 style="color: #FF5722;">Your Consultation is Booked!</h1>
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
    <h2>Booking Details</h2>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Date:</strong> ${data.date}</p>
    <p><strong>Time:</strong> ${data.time}</p>
  </div>
  <p>We're excited to meet with you! A Zavolah advisor will be in touch shortly.</p>
</div>
`
