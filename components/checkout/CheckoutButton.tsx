import { usePayment } from '@/lib/hooks/usePayment';

interface CheckoutButtonProps {
  amount: number;
  type: 'MARKETPLACE' | 'STORE' | 'ACADEMY';
  itemId: string;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({ amount, type, itemId }) => {
  const { initiatePayment, loading, error } = usePayment();

  const handleCheckout = async () => {
    await initiatePayment({ amount, type, itemId });
  };

  return (
    <div>
      <button 
        onClick={handleCheckout}
        disabled={loading}
        className="bg-primary text-white px-6 py-2 rounded-lg"
      >
        {loading ? 'Processing...' : 'Proceed to Payment'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
