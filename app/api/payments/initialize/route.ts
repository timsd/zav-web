import { NextResponse } from 'next/server';
import { PaymentService } from '@/lib/services/payment';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await auth();
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const data = await req.json();
  const { amount, type, itemId } = data;

  // Generate unique reference
  const reference = `ZAV_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  try {
    const paymentData = await PaymentService.initializePayment({
      amount,
      email: session.user.email,
      reference,
      metadata: {
        type, // 'marketplace', 'store', or 'academy'
        itemId,
        userId: session.user.id
      }
    });

    // Store payment attempt in database
    await prisma.payment.create({
      data: {
        reference,
        amount,
        status: 'PENDING',
        type,
        userId: session.user.id,
        itemId
      }
    });

    return NextResponse.json(paymentData);
  } catch (error) {
    return NextResponse.json({ error: 'Payment initialization failed' }, { status: 500 });
  }
}
