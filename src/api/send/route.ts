import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
    const { firstname, lastname, email, subject, message } = await req.json();
    console.log(firstname, lastname,email, subject, message);
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [fromEmail, toEmail, email],
            subject: subject,
            react: (
                <>
                    <h1>Dear {firstname}&nsbp;{lastname}</h1>
                    <p>Your request</p>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>Your new message submitted:</p>
                    <p>{message}</p>
                </>
            ),
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}