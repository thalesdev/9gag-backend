import { createTransport, SendMailOptions } from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import { resolve } from 'path';

const mailer = createTransport({
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  service: 'gmail',
});

mailer.use(
  'compile',
  hbs({
    viewEngine: {
      layoutsDir: resolve(__dirname, '..', 'mails'),
      partialsDir: resolve(__dirname, '..', 'mails'),
    },
    viewPath: resolve(__dirname, '..', 'mails'),
  }),
);

export default mailer;
