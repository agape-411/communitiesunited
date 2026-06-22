import { NextResponse } from "next/server";
import nodemailer from  "nodemailer";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      zip,
      message,
      interests,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"CUFD Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Coalition Member: ${firstName} ${lastName}`,

      html: `
        <h2>New Coalition Signup</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>ZIP Code:</strong> ${zip}</p>

        <p><strong>Interested In:</strong></p>
        <ul>
          ${
            interests?.length
              ? interests.map((i: string) => `<li>${i}</li>`).join("")
              : "<li>No selections</li>"
          }
        </ul>

        <p><strong>Reason for Joining:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}