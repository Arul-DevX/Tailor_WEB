import { useState } from 'react';
import { isValidPhone } from '../../utils/validation';

interface FormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  notes: string;
}

interface FormErrors {
  [key: string]: string;
}

export function useBookingForm(initialService?: string) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: initialService || 'Custom Tailoring',
    date: '',
    notes: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<boolean> => {
    e.preventDefault();
    
    if (!validateForm()) return false;

    try {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          phone: '',
          service: initialService || 'Custom Tailoring',
          date: '',
          notes: ''
        });
      }, 3000);
      return true;
    } catch (error) {
      console.error('Error sending booking request:', error);
      return false;
    }
  };

  return {
    formData,
    setFormData,
    errors,
    isSuccess,
    handleSubmit
  };
}