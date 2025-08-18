import React from 'react';
import { Calendar, Check } from 'lucide-react';
import { useBookingForm } from './useBookingForm';
import { createMailtoLink, formatBookingEmail } from '../../utils/email';

interface BookingFormProps {
  initialService?: string;
  compact?: boolean;
}

export default function BookingForm({ initialService, compact = false }: BookingFormProps) {
  const { formData, setFormData, errors, isSuccess, handleSubmit } = useBookingForm(initialService);

  const sendEmail = () => {
    const emailData = formatBookingEmail(formData);
    const mailtoLink = createMailtoLink(emailData);
    window.location.href = mailtoLink;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await handleSubmit(e)) {
      sendEmail();
    }
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation to discuss your tailoring needs
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:border-rose-500 focus:ring-rose-500 text-sm`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:border-rose-500 focus:ring-rose-500 text-sm`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-sm"
              >
                <option value="Custom Tailoring">Custom Tailoring</option>
                <option value="Saree Blouse">Saree Blouse</option>
                <option value="Designing Blouse">Designing Blouse</option>
                <option value="Bridal Blouse">Bridal Blouse</option>
                <option value="Pavadai Dhavani">Pavadai Dhavani</option>
                <option value="Salwar Kameez">Salwar Kameez</option>
                <option value="Kids Pattu Pavadai">Kids Pattu Pavadai</option>
                <option value="Girls School Uniform">Girls School Uniform</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                } focus:border-rose-500 focus:ring-rose-500 text-sm`}
              />
              {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                id="notes"
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className={`w-full flex justify-center items-center px-4 py-2 rounded-md transition-all duration-300 ${
                isSuccess 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-rose-600 hover:bg-rose-700'
              } text-white text-sm`}
            >
              {isSuccess ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Thank you!
                </>
              ) : (
                <>
                  Book Now
                  <Calendar className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}