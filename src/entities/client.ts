import {
  BeforeInsert,
  BeforeSoftRemove,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("client")
export default class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", {
    length: 255,
  })
  fullName: string;

  @Column("varchar", {
    unique: true,
    length: 255,
    nullable: true,
  })
  email: string;

  @Column("varchar", {
    length: 255,
    nullable: true,
  })
  birthDate: Date;

  @Column("varchar", {
    unique: true,
    length: 11,
    nullable: true,
  })
  cpf: string;

  @Column("varchar", {
    length: 8,
    nullable: true,
  })
  cep: string;

  @Column("varchar", {
    length: 255,
    nullable: true,
  })
  address: string;

  @Column("int", { nullable: true })
  addressNumber: number;

  @Column("varchar", {
    length: 255,
    nullable: true,
  })
  district: string;

  @Column("varchar", {
    length: 255,
    nullable: true,
  })
  city: string;

  @Column("varchar", {
    length: 255,
    nullable: true,
  })
  state: string;

  @Column("varchar", {
    length: 255,
    nullable: true,
  })
  country: string;

  @Column("varchar", {
    nullable: true,
    length: 255,
  })
  addressComplement: string;

  @Column({ type: "timestamp" })
  created_at: number;

  @Column({ type: "timestamp" })
  updated_at: number;

  @Column({ type: "timestamp", default: null })
  deleted_at: number | null;

  @BeforeInsert()
  beforeInsert() {
    this.created_at = Date.now();
    this.updated_at = Date.now();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updated_at = Date.now();
  }

  @BeforeSoftRemove()
  beforeRemove() {
    this.deleted_at = Date.now();
  }
}
