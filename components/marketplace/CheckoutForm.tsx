'use client';

import { usePayment } from '@/lib/hooks/usePayment';
import { useCart } from '@/components/marketplace/Cart/CartProvider';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from 'react';

export function CheckoutForm() {
  const { cartItems, clearCart } = useCart();
  const { initiatePayment, loading, error } = usePayment();

  // Add form states
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = async () => {
    const total = calculateTotal();
    await initiatePayment({
      amount: total,
      type: 'MARKETPLACE',
      itemId: cartItems.map(item => item.id).join(','),
      paymentMethod,
      customerInfo: formData
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow space-y-6">
      {/* Customer Information */}
      <div className="space-y-4">
        {['name', 'email', 'phone'].map(field => (
          <div key={field}>
            <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
            <Input
              id={field}
              type={field === 'email' ? 'email' : 'text'}
              placeholder={`Enter your ${field}`}
              value={formData[field]}
              onChange={(e) => setFormData({...formData, [field]: e.target.value})}
            />
          </div>
        ))}
      </div>

      {/* Payment Method */}
      <div>
        <Label>Payment Method</Label>
        <RadioGroup
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="mt-2 space-y-2"
        >
          {['card', 'transfer'].map(method => (
            <div key={method} className="flex items-center space-x-2">
              <RadioGroupItem value={method} id={method} />
              <Label htmlFor={method}>{method === 'card' ? 'Card Payment' : 'Bank Transfer'}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <button 
        onClick={handleCheckout}
        disabled={loading || cartItems.length === 0}
        className="w-full bg-[var(--color-orange)] text-white py-3 rounded-lg"
      >
        {loading ? 'Processing...' : `Pay ${calculateTotal()} NGN`}
      </button>
    </div>
  );
}
