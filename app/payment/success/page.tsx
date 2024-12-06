'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState('verifying');

  useEffect(() => {
    const reference = searchParams.get('reference');
    if (reference) {
      verifyPayment(reference);
    }
  }, []);

  const verifyPayment = async (reference: string) => {
    try {
      const response = await axios.post('/api/payments/verify', { reference });
      if (response.data.status === 'success') {
        setStatus('success');
        // Redirect based on payment type
        const paymentType = response.data.metadata.type;
        setTimeout(() => {
          switch (paymentType) {
            case 'MARKETPLACE':
              router.push('/marketplace/orders');
              break;
            case 'STORE':
              router.push('/store/orders');
              break;
            case 'ACADEMY':
              router.push('/academy/my-courses');
              break;
          }
        }, 2000);
      }
    } catch (error) {
      setStatus('failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white max-w-md">
        {status === 'verifying' && (
          <div>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold">Verifying Payment</h2>
            <p className="text-gray-600 mt-2">Please wait while we confirm your payment...</p>
          </div>
        )}
        
        {status === 'success' && (
          <div>
            <div className="text-green-500 mb-4">
              <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
            <p className="text-gray-600 mt-2">Thank you for your purchase. You will be redirected shortly.</p>
          </div>
        )}
        
        {status === 'failed' && (
          <div>
            <div className="text-red-500 mb-4">
              <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
            <p className="text-gray-600 mt-2">Something went wrong with your payment. Please try again.</p>
            <button 
              onClick={() => router.push('/')}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Return Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
