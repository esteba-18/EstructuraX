"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return {
      success: false,
      message: "Todos los campos son obligatorios",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Por favor ingresa un email válido",
    }
  }

  // Validate phone format (Colombian format)
  const phoneRegex = /^(\+57)?[\s]?[0-9]{3}[\s]?[0-9]{3}[\s]?[0-9]{4}$/
  if (!phoneRegex.test(phone)) {
    return {
      success: false,
      message: "Por favor ingresa un teléfono válido (formato: +57 300 123 4567)",
    }
  }

  try {
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", { name, email, phone, message })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "¡Gracias por contactarnos! Te responderemos pronto.",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "Hubo un error al enviar el mensaje. Por favor intenta de nuevo.",
    }
  }
}
