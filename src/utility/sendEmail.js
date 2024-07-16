import { createTransport } from "nodemailer";
import { emailTemplate } from "./emailTemplate.js";

export default function sendOurEmail(email){
    const transporter = createTransport({
        service:"gmail",
        auth: {
        user: "noteapp08@gmail.com",
        pass: "mamr dvbi vwgs cpcz",
      },
    });
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"note app" <noteapp08@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: emailTemplate(email), // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }
    
    main().catch(console.error);
}
