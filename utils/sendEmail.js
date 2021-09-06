const sgMail = require("@sendgrid/mail"); // импортируем пакет sendGreed
const { SENDGRID_API_KEY } = process.env; // забираем ключ из переменных окружения

sgMail.setApiKey(SENDGRID_API_KEY); //у объекта sgMail вызываем метод setApiKey и передаем ему ключ (он отвечает за отправку писем)

// Для отправки почты нужно создать письмо:

// const email = {
//   from: "trofimova.maria@ex.ua",
//   to: "cibari6344@mnqlm.com",
//   subject: "test mail",
//   html: `<p>Hello, Maria!</p>`,
// };

// создаем универсальную функцию, которая отправляет письмо от нашего имени
const sendEmail = async ({ to, subject, html }) => {
  const email = {
    from: "trofimova.maria@ex.ua",
    to,
    subject,
    html,
  };
  const result = await sgMail.send(email); // у обьекта sgMail вызываем метод send и передаем ему email
  return result;
};

module.exports = sendEmail;
