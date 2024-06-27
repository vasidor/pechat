import type { NextApiRequest, NextApiResponse } from 'next';
import transporter from '@/utils/nodemailer.config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const info = await transporter.sendMail({
        from: process.env.YANDEX_EMAIL,
        to: process.env.YANDEX_EMAIL,
        subject: 'Новое сообщение!',
        html: `<p>Имя: ${name}</p><p>Email: ${email}</p><p>Сообщение: ${message}</p>`,
      });

      if (info.accepted.length > 0) {
        res.status(200).json({ success: true, message: 'Email sent successfully.' });
      } else {
        res.status(200).json({ success: true, message: 'Email sent, but not delivered.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
