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

      pathway,

      tradeSkill,
      operationSkill,
      experience,
      certifications,

      employmentStatus,

      resident,
      apprenticeship,
      notifyHiring,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"CUFD Workforce Registry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,

      subject: `New Workforce Registration: ${firstName} ${lastName}`,

      html: `
        <h2>New Workforce Registration</h2>

        <hr />

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>ZIP Code:</strong> ${zip}</p>

        <hr />

        <h3>Workforce Track</h3>

        <p><strong>Selected Pathway:</strong> ${pathway}</p>

        ${
          pathway === "trades"
            ? `
          <p><strong>Primary Trade:</strong> ${
            tradeSkill || "N/A"
          }</p>
        `
            : ""
        }

        ${
          pathway === "operations"
            ? `
          <p><strong>Primary Skill Area:</strong> ${
            operationSkill || "N/A"
          }</p>
        `
            : ""
        }

        <p><strong>Years of Experience:</strong>
        ${experience || "Not specified"}</p>

        <p><strong>Certifications:</strong>
        ${certifications || "None provided"}</p>

        <p><strong>Employment Status:</strong>
        ${employmentStatus || "Not specified"}</p>

        <hr />

        <h3>Additional Information</h3>

        <ul>
          <li>
            Rocky Mount/Nash resident:
            ${resident ? "Yes" : "No"}
          </li>

          <li>
            Interested in apprenticeship:
            ${apprenticeship ? "Yes" : "No"}
          </li>

          <li>
            Wants hiring notifications:
            ${notifyHiring ? "Yes" : "No"}
          </li>
        </ul>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Workforce registration submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to submit workforce registration.",
      },
      {
        status: 500,
      }
    );
  }
}