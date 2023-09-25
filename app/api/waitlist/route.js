import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = new URL(req.url);

  // Get the user's email for the waitlist
  const email = url.searchParams.get('email');
  
  // Store email
  await fetch(`${process.env.INFR_SERVER_HOST}/api/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Infr-Admin-Secret': process.env.INFR_ADMIN_SECRET,
    },
    body: JSON.stringify({ template_data: { email_id: email } }),
  });

  // Return a 200 response
  return NextResponse.json({ success: 'Added to waitlist successfully.' });
}
