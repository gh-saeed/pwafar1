import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import Payment from '@/models/Payment';

export async function GET(request) {
  try {
    const { db } = await clientPromise;
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');
    
    let payments;
    if (userId) {
      payments = await Payment.findByUserId(db, userId);
    } else if (status) {
      payments = await Payment.findByStatus(db, status);
    } else {
      payments = await Payment.findAll(db);
    }
      
    return NextResponse.json(payments);
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در دریافت لیست پرداخت‌ها' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { db } = await clientPromise;
    const data = await request.json();
    
    // Check required fields
    if (!data.userId || !data.serviceId || !data.amount) {
      return NextResponse.json(
        { error: 'اطلاعات پرداخت ناقص است' },
        { status: 400 }
      );
    }

    const paymentId = await Payment.create(db, data);
    return NextResponse.json({ _id: paymentId });
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در ثبت پرداخت' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { db } = await clientPromise;
    const data = await request.json();
    const { _id, ...updateData } = data;

    if (!_id) {
      return NextResponse.json(
        { error: 'شناسه پرداخت الزامی است' },
        { status: 400 }
      );
    }

    await Payment.update(db, _id, updateData);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در بروزرسانی پرداخت' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { db } = await clientPromise;
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'شناسه پرداخت الزامی است' },
        { status: 400 }
      );
    }

    await Payment.delete(db, id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در حذف پرداخت' },
      { status: 500 }
    );
  }
} 