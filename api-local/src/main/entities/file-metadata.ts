import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IFileMetadata} from "@archiveboy/api";

@Entity()
export class FileMetadataEntity implements IFileMetadata {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;
}
