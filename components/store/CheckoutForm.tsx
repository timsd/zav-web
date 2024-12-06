'use client';

import { usePayment } from '@/lib/hooks/usePayment';

export function StoreCheckoutForm({ product }) {
  const { initiatePayment, loading, error } = usePayment();

  const handleCheckout = async () => {
    await initiatePayment({
      amount: product.price,
      type: 'STORE',
      itemId: product.id
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <input 
        type="text"
        placeholder="Full Name"
        className="w-full mb-3 p-2 border rounded"
      />
      <input 
        type="email"
        placeholder="Email Address"
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        placeholder="Shipping Address"
        className="w-full mb-3 p-2 border rounded"
      />
      <button 
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-[var(--color-orange)] text-white py-3 rounded-lg"
      >
        {loading ? 'Processing...' : `Buy Now - ${product.price} NGN`}
      </button>
    </div>
  );
}
