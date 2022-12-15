const nodemailer = require("nodemailer");

export default async (req, res) => {

const problem = req.body.problem
const address = req.body.address
const city = req.body.city
const zip = req.body.zip
const firstname = req.body.firstname
const lastname = req.body.lastname
const email = req.body.email
const phone = req.body.phone
const additional_info = req.body.additional_info


const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "wrightsbot@gmail.com",
        pass: "vdtuqqdrkairrmkz",
    },
    secure: true,
});

await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

let mailData = await {
    from: 'wrightsbot@gmail.com',
    to: 'jaydencrowther@gmail.com',
    subject: `Booking Form For ${firstname} ${lastname}`,
    text: `
    𝗢𝗡𝗟𝗜𝗡𝗘 𝗕𝗢𝗢𝗞𝗜𝗡𝗚 𝗙𝗢𝗥𝗠
    𝗡𝗮𝗺𝗲: ${firstname} ${lastname}
    𝗣𝗿𝗼𝗯𝗹𝗲𝗺: ${problem}
    𝗘𝗺𝗮𝗶𝗹: ${email}
    𝗣𝗵𝗼𝗻𝗲: ${phone}
    𝗔𝗱𝗱𝗿𝗲𝘀𝘀: ${address}
    𝗖𝗶𝘁𝘆: ${city} ${zip}
    𝗘𝘅𝘁𝗿𝗮 𝗶𝗻𝗳𝗼 𝘁𝗵𝗲𝘆 𝘄𝗮𝗻𝘁 𝘆𝗼𝘂 𝘁𝗼 𝗸𝗻𝗼𝘄:
    ${additional_info}
    `
}

await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});

res.status(200).json({ status: "OK" });
};
