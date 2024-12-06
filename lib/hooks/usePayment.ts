import { useState } from 'react';
import axios from 'axios';

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initiatePayment = async ({
    amount,
    type,
    itemId
  }: {
    amount: number;
    type: 'MARKETPLACE' | 'STORE' | 'ACADEMY';
    itemId: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/payments/initialize', {
        amount,
        type,
        itemId
      });

      // Redirect to payment page
      window.location.href = response.data.authorization_url;
    } catch (err) {
      setError('Payment initialization failed');
    } finally {
      setLoading(false);
    }
  };

  return { initiatePayment, loading, error };
};
