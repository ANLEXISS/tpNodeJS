import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Collection {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nom: string;

    @Column()
    auteur: string;

    @Column()
    nb_tomes: number;


    constructor(nom: string, auteur: string, nb_tomes: number)
    {
        this.nom = nom;
        this.auteur = auteur;
        this.nb_tomes = nb_tomes;
    }
}
