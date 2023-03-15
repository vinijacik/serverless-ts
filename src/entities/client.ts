import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("client")
export default class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", {
    length: 255
  })
  fullName: string;

  @Column("varchar", {
    unique: true,
    length: 255
  })
  email: string;

  @Column("varchar", {
    length: 255
  })
  birthDate: Date;

  @Column("varchar", {
    unique: true,
    length: 11
  })
  cpf: string;

  @Column("varchar", {
    length: 8
  })
  cep: string;

  @Column("varchar", {
    length: 255
  })
  address: string;

  @Column("int")
  addressNumber: number;

  @Column("varchar", {
    length: 255
  })
  district: string;

  @Column("varchar", {
    length: 255
  })
  city: string;

  @Column("varchar", {
    length: 255
  })
  state: string;

  @Column("varchar", {
    length: 255
  })
  country: string;

  @Column("varchar", {
    nullable: true,
    length: 255
  })
  addressComplement: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}