import e, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Livre } from '../database/entities/Livre';

export const check = async (res: Response) =>
{
    res.send("hello world");
}

export const getAllLivres = async (req: Request, res: Response): Promise<void> => {
    try {
        const livre = getRepository(Livre);
        const livres = await livre.find();
        res.status(200).json({ livres });
    } catch (error) {
        console.error('Error while fetching all livres:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getLivreById = async (req: Request, res: Response): Promise<void> => {
    try {
        const livreR = getRepository(Livre);
        const livre = await livreR.findOne(req.params);
        if (!livre) {
            res.status(404).json({ error: 'Livre not found' });
            return;
        }
        res.status(200).json({ livre });
    } catch (error) {
        console.error('Error while fetching livre by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createLivre = async (req: Request, res: Response): Promise<void> => {
    try {
        const livre = getRepository(Livre);
        const newLivre = livre.create(req.body);
        const savedLivre = await livre.save(newLivre);
        res.status(201).json({ livre: savedLivre });
    } catch (error) {
        console.error('Error while creating livre:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateLivre = async (req: Request, res: Response): Promise<void> => {
    try {
        const livreRepository = getRepository(Livre);
        const  id  = req.params;
        const existingLivre = await livreRepository.findOne(id);
        if (!existingLivre) {
            res.status(404).json({ error: 'Livre not found' });
            return;
        }
        livreRepository.merge(existingLivre, req.body);
        const updatedLivre = await livreRepository.save(existingLivre);
        res.status(200).json({ livre: updatedLivre });
    } catch (error) {
        console.error('Error while updating livre:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteLivre = async (req: Request, res: Response): Promise<void> => {
    try {
        const livreRepository = getRepository(Livre);
        const  id  = req.params;
        const existingLivre = await livreRepository.findOne(id);
        if (!existingLivre) {
            res.status(404).json({ error: 'Livre not found' });
            return;
        }
        await livreRepository.remove(existingLivre);
        res.status(204).send();
    } catch (error) {
        console.error('Error while deleting livre:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
