import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const account = {
  email: "rmcarga.logistica@gmail.com",
  password: "C@rg@l0gistic"
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: account.email,
    pass: account.password
  }
});

export default (req: NextApiRequest, res: NextApiResponse) => {
  const values = req.body;

  transporter.sendMail({
    from: values.email,
    to: account.email,
    subject: `${values.name} requiere de un servicio.`,
    html: `
Nombre: ${values.name}<br>
Email: ${values.email}<br>
Teléfono: ${values.telephone}<br>
<br>

<p>${values.description}</p>
    `
  });

  res.status(200).json({ response: true });
};
