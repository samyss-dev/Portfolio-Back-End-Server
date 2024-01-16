import { Contact } from "@prisma/client";
import { prisma } from "../settings/db";
import { MAIL_TEMPLATE, transporter } from "../settings/mail";

export class ContactsController {
  private static _instance = new ContactsController();

  private constructor() {}

  static get instance() {
    return this._instance;
  }

  async create(contact: Contact) {
    const { name, email, message } = contact;

    await Promise.all([
      prisma.contact.create({
        data: contact,
      }),
      transporter.sendMail({
        from: `Samuel Souza <${process.env.MAIL_USER}>`,
        to: email,
        subject: `Thanks for reaching out ${name}! Your message means a lot.`,
        html: MAIL_TEMPLATE(name),
      }),
      transporter.sendMail({
        from: `Samuel Souza <${process.env.MAIL_USER}>`,
        to: `${process.env.MAIL_USER}`,
        subject: `Hey man, ${name} send you a message, check out`,
        text: message,
      }),
    ]);
  }
}
