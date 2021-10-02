import { SmtpClient } from "smtp";
import { config } from "./../config/config.ts";

const client = new SmtpClient();

const mailerObj = async (data: any) => {
  await client.connectTLS({
    hostname: config.SMTP_HOSTNAME,
    port: +config.SMTP_PORT,
    username: config.SMTP_USERNAME,
    password: config.SMTP_PASSWORD,
  });

  await client.send({
    from: config.SMTP_USERNAME,
    to: data.to,
    subject: "Clouds",
    content: data.body,
  });
  await client.close();
};

export default mailerObj;
