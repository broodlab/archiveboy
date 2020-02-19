import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IFile} from "@archiveboy/api";

@Entity()
export class FileEntity implements IFile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;
}
