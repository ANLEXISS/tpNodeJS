import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Livre {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nom: string;

    @Column()
    auteur: string;


    constructor(nom: string, auteur: string) {
        this.nom = nom;
        this.auteur = auteur;
    }
}
