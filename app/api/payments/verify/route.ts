import { NextResponse } from 'next/server';
import { PaymentService } from '@/lib/services/payment';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { reference } = await req.json();

  try {
    const verificationData = await PaymentService.verifyPayment(reference);
    
    if (verificationData.status === 'success') {
      // Update payment status in database
      const payment = await prisma.payment.update({
        where: { reference },
        data: { status: 'COMPLETED' }
      });

      // Handle different payment types
      switch (payment.type) {
        case 'MARKETPLACE':
          await handleMarketplacePayment(payment);
          break;
        case 'STORE':
          await handleStorePayment(payment);
          break;
        case 'ACADEMY':
          await handleAcademyPayment(payment);
          break;
      }
    }

    return NextResponse.json(verificationData);
  } catch (error) {
    return NextResponse.json({ error: 'Payment verification failed' }, { status: 500 });
  }
}
