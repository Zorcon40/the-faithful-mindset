# TODO: Resend API Integration for Contact Form

## Contact Form Backend Setup

The contact form at `/contact` currently has no backend integration. Need to set up Resend API for email delivery.

### Steps:
1. Sign up at https://resend.com
2. Get API key
3. Create API route: `/app/api/contact/route.ts`
4. Add environment variables to `.env.local`:
   ```
   RESEND_API_KEY=re_xxx
   CONTACT_EMAIL=hello@thefaithfulmindset.com
   ```

### Sample API Route:
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  
  try {
    await resend.emails.send({
      from: 'contact@thefaithfulmindset.com',
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
```

### Install Resend:
```bash
npm install resend
```

Priority: Low (client can handle when ready)
