import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = new URL(req.url);

  // Get the user's email for the waitlist
  const email = url.searchParams.get('email');
  console.log(email);
  // Store email
  let resp = await fetch('http://i.getinfr.com/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Infr-Email-Secret': process.env.INFR_EMAIL_SECRET,
    },
    body: JSON.stringify({ template_data: { email_id: email } }),
  });

  console.log(resp);

  // Return a 200 response
  return NextResponse.json({ success: 'Addded to waitlist successfully.' });
}
