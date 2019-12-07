import nodemailer from "nodemailer";

export default (request, response) => {
  const { nameOrEmail, company, email, tel, description } = request.body;

  if (!nameOrEmail) {
    response.send({ ok: false });
  }

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  if (!company) {
    transporter.sendMail({
      from: process.env.EMAIL,
      to: nameOrEmail,
      subject: "Test chanllenge diey.io",
      html: `hey! My email is ${nameOrEmail} and I'm interested on all the products of diey.`
    });
  }

  if (nameOrEmail && company && email && tel && description) {
    transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Register Test chanllenge diey.io",
      html: `
        Hey! My name is ${nameOrEmail}, the company is ${company}, the email is ${email}, the tel is ${tel} and We're interested on all the products of diey.
        ${description}`
    });
  }

  response.send({ ok: true });
};
