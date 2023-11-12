import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export function MAIL_TEMPLATE(name: string) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Mail Template</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .container {
          padding: 2rem;
          font-size: 1.1rem;
        }
        .container h1 {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        .container p {
          margin-bottom: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hey ${name}</h1>
        <p>
          It's a pleasure to connect with you. I appreciate your message and the
          opportunity to provide you with further information.
        </p>
        <p>
          I'll make sure to respond as soon as possible. If there's any further information 
          you'd like to share, please don't hesitate to include it in your message
          to help me provide a comprehensive answer.
        </p>
        <p>Again, thank you for getting in touch.</p>
        <span>Sincerely,<br>Samuel Souza ✍</span>
      </div>
    </body>
  </html>
  `;
}
