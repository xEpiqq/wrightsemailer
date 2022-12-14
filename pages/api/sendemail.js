const nodemailer = require('nodemailer')

export default async function fetchinfo(req, res) { 

    const problem = req.body.problem
    const address = req.body.address
    const city = req.body.city
    const zip = req.body.zip
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const phone = req.body.phone
    const additional_info = req.body.additional_info

    let mailTransporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'wrightsbot@gmail.com',
            pass: 'vdtuqqdrkairrmkz'
        }
    })

    let mailDetails = await {
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

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs')
        } else {
            console.log('Email sent successfully')

        }
    })

    res.status(200).json({ message: 'Email Sent' })
}