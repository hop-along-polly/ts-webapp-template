import { Request, Response } from 'express';

const health = async (req: Request, res: Response) => {
  res.status(200).send('healthy');
};

export default { health };
