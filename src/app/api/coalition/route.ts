import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      zip,
      role,
      notifyMeetings,
      publicHearing,
      organizationRep,
      skilledTrades,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"CUFD Coalition Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,

      subject: `New Coalition Member: ${firstName} ${lastName}`,

      html: `
        <h2>New Coalition Signup</h2>

        <hr />

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${
          phone || "Not provided"
        }</p>

        <p><strong>ZIP Code:</strong> ${zip}</p>

        <p><strong>I am a:</strong> ${role}</p>

        <hr />

        <h3>Interests</h3>

        <ul>
          <li>
            Council votes & meetings:
            ${notifyMeetings ? "Yes" : "No"}
          </li>

          <li>
            Public hearing speaker:
            ${publicHearing ? "Yes" : "No"}
          </li>

          <li>
            Represents organization/business:
            ${organizationRep ? "Yes" : "No"}
          </li>

          <li>
            Construction/Trades worker:
            ${skilledTrades ? "Yes" : "No"}
          </li>
        </ul>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Coalition form submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit coalition form.",
      },
      {
        status: 500,
      }
    );
  }
}