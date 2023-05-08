const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, MAIL_FROM } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: MAIL_FROM };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
