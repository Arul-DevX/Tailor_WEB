interface EmailData {
  subject: string;
  body: string;
}

export const createMailtoLink = ({ subject, body }: EmailData): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:contactvallistailor@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
};

export const formatBookingEmail = (formData: any): EmailData => {
  return {
    subject: 'New Booking Request',
    body: `Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Notes: ${formData.notes}`,
  };
};

export const formatContactEmail = (formData: any): EmailData => {
  return {
    subject: 'New Contact Form Submission',
    body: `Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`,
  };
};