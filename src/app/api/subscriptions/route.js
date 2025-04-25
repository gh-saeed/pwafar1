import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import Subscription from '@/models/Subscription';

export async function GET(request) {
  try {
    const { db } = await clientPromise;
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    const subscriptions = userId 
      ? await Subscription.findByUserId(db, userId)
      : await Subscription.findAll(db);
      
    return NextResponse.json(subscriptions);
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در دریافت لیست اشتراک‌ها' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { db } = await clientPromise;
    const data = await request.json();
    
    // بررسی وجود فیلدهای ضروری
    if (!data.userId || !data.serviceId || !data.startDate || !data.endDate) {
      return NextResponse.json(
        { error: 'اطلاعات اشتراک ناقص است' },
        { status: 400 }
      );
    }

    const subscriptionId = await Subscription.create(db, data);
    return NextResponse.json({ _id: subscriptionId });
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در ثبت اشتراک' },
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
        { error: 'شناسه اشتراک الزامی است' },
        { status: 400 }
      );
    }

    await Subscription.update(db, _id, updateData);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در بروزرسانی اشتراک' },
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
        { error: 'شناسه اشتراک الزامی است' },
        { status: 400 }
      );
    }

    await Subscription.delete(db, id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در حذف اشتراک' },
      { status: 500 }
    );
  }
} 