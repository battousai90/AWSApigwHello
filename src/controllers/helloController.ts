import { Request, Response } from 'express';

const sayHello = (req: Request, res: Response): void => {
    res.send('Bonjour');
};

export { sayHello };
