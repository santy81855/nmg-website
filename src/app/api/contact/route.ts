import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
    try {
        const { name, email, phone, message, company } = await request.json();

        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const emailPattern = /.+@.+\..+/;
        if (!emailPattern.test(String(email))) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 16px; background: #f7f7f7;">
              <div style="background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
                <div style="background:#b91c1c;color:#fff;padding:16px 20px;">
                  <h2 style="margin:0;font-size:18px;">New Contact Form Submission</h2>
                </div>
                <div style="padding:20px;">
                  <p style="margin:0 0 12px 0; color:#111827;">You received a new message from the website contact form.</p>
                  <table style="width:100%; border-collapse: collapse;">
                    <tbody>
                      <tr><td style="padding:8px 0; color:#6b7280; width:120px;">Name</td><td style="padding:8px 0; color:#111827;">${escapeHtml(
                          String(name)
                      )}</td></tr>
                      ${
                          company
                              ? `<tr><td style="padding:8px 0; color:#6b7280; width:120px;">Company</td><td style=\"padding:8px 0; color:#111827;\">${escapeHtml(
                                    String(company)
                                )}</td></tr>`
                              : ""
                      }
                      <tr><td style="padding:8px 0; color:#6b7280; width:120px;">Email</td><td style="padding:8px 0; color:#111827;">${escapeHtml(
                          String(email)
                      )}</td></tr>
                      <tr><td style="padding:8px 0; color:#6b7280; width:120px;">Phone</td><td style="padding:8px 0; color:#111827;">${escapeHtml(
                          String(phone)
                      )}</td></tr>
                    </tbody>
                  </table>
                  <div style="margin-top:16px;">
                    <div style="color:#6b7280; margin-bottom:6px;">Message</div>
                    <div style="white-space:pre-wrap; color:#111827; background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px;">${escapeHtml(
                        String(message)
                    )}</div>
                  </div>
                </div>
              </div>
              <div style="text-align:center; color:#9ca3af; font-size:12px; margin-top:12px;">Contact Form Email</div>
            </div>
        `;

        const from = "resend@mailer.nmgremodeling.com";
        const to = "mynameissantiagogarcia@gmail.com";
        const subject = "Contact Form Email";

        const { error } = await resend.emails.send({
            from,
            to,
            subject,
            replyTo: email,
            html,
        });

        if (error) {
            console.error("Resend send error:", error);
            return NextResponse.json(
                { error: "Failed to send" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact form error:", err);
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}

function escapeHtml(input: string) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
