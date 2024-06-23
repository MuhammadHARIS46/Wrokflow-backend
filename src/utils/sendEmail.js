const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey("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");

const sendEmail = (receiver, otp) => {
  const msg = {
    to: receiver,
    from: "muhammadhariskuk123@gmail.com",
    subject: "Your One Time password is:",
    text: `Your OTP is: ${otp}`,
    html: `<p>Your One Time password is: <strong>${otp}</strong></p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
module.exports = sendEmail;
