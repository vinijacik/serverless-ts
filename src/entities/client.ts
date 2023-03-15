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
    length: 255,
    nullable: true
  })
  email: string;

  @Column("varchar", {
    length: 255,
    nullable: true
  })
  birthDate: Date;

  @Column("varchar", {
    unique: true,
    length: 11,
    nullable: true
  })
  cpf: string;

  @Column("varchar", {
    length: 8,
    nullable: true
  })
  cep: string;

  @Column("varchar", {
    length: 255,
    nullable: true
  })
  address: string;

  @Column("int")
  addressNumber: number;

  @Column("varchar", {
    length: 255,
    nullable: true
  })
  district: string;

  @Column("varchar", {
    length: 255,
    nullable: true
  })
  city: string;

  @Column("varchar", {
    length: 255,
    nullable: true
  })
  state: string;

  @Column("varchar", {
    length: 255,
    nullable: true
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