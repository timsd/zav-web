import axios from 'axios';

const ONEAPP_SECRET_KEY = process.env.ONEAPP_SECRET_KEY;
const ONEAPP_PUBLIC_KEY = process.env.ONEAPP_PUBLIC_KEY;

interface PaymentInitializeParams {
  amount: number;
  email: string;
  currency?: string;
  reference?: string;
  callback_url?: string;
  metadata?: any;
}

export class PaymentService {
  private static baseURL = 'https://api.1app.online/v1';

  static async initializePayment(params: PaymentInitializeParams) {
    try {
      const response = await axios.post(
        `${this.baseURL}/payments/initialize`,
        params,
        {
          headers: {
            Authorization: `Bearer ${ONEAPP_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Payment initialization failed');
    }
  }

  static async verifyPayment(reference: string) {
    try {
      const response = await axios.get(
        `${this.baseURL}/payments/verify/${reference}`,
        {
          headers: {
            Authorization: `Bearer ${ONEAPP_SECRET_KEY}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Payment verification failed');
    }
  }
}
