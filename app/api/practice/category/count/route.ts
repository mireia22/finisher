import { NextResponse } from 'next/server';
import { getCategoryCount } from '@/lib/resolvers/question';

export async function GET() {
  try {
    const categoriesWithCount = await getCategoryCount();
    return NextResponse.json(categoriesWithCount, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch categories counts:', error);
    return NextResponse.json({ error: 'Failed to fetch categories counts' }, { status: 500 });
  }
}
