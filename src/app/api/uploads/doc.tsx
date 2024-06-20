import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { path: paths } = req.query;
  const filePath = path.join(process.cwd(), 'uploads', 'doc');

  if (fs.existsSync(filePath)) {
    console.log("file path", filePath)
    res.setHeader('Content-Type', 'application/pdf');
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.status(404).json({ message: 'File not found' });
  }
};

export default handler;
