import nodemailer from "nodemailer";

const mailSender = process.env.MAIL_SENDER;
const mailToken = process.env.MAIL_TOKEN;
const clientId = process.env.CLIENT_ID

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: mailSender,
    clientSecret: mailToken,
    clientId: clientId
  },
});

export class Mailer {
  static createMessageObject(
    emailToBeSendedTo: string,
    subject: string,
    messageText: string
  ) {
    const messageObject = {
      from: mailSender,
      to: emailToBeSendedTo,
      subject: subject,
      text: messageText,
    };

    return messageObject;
  }

  public static sendEmail(
    emailToBeSendedTo: string,
    subject: string,
    messageText: string
  ) {

    const messageObject = Mailer.createMessageObject(
      emailToBeSendedTo,
      subject,
      messageText
    );

    transporter.sendMail(messageObject, (error) => {
      throw error;
    });
  }
}
