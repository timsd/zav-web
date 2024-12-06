'use client';

import { usePayment } from '@/lib/hooks/usePayment';

export function EnrollmentButton({ course }) {
  const { initiatePayment, loading, error } = usePayment();

  const handleEnrollment = async () => {
    await initiatePayment({
      amount: course.price,
      type: 'ACADEMY',
      itemId: course.id
    });
  };

  return (
    <button 
      onClick={handleEnrollment}
      disabled={loading}
      className="w-full bg-[var(--color-orange)] text-white py-3 rounded-lg"
    >
      {loading ? 'Processing...' : `Enroll Now - ${course.price} NGN`}
    </button>
  );
}
