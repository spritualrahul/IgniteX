import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'google5396855dfc341632.html');
    const content = await readFile(filePath, 'utf8');
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
    } catch (error) {
    console.error('Google verification file read error:', error);
    return new NextResponse('Not Found', { status: 404 });
  }
}

export const dynamic = 'force-static';
