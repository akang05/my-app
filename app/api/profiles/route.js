import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const major = searchParams.get('major');

  try {
    const profiles = await prisma.profile.findMany({
      where: major ? { 
        major: {
          equals: major,
          mode: 'insensitive' 
        } 
      } : {},
    });
    return NextResponse.json(profiles);
  } catch (error) {
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}