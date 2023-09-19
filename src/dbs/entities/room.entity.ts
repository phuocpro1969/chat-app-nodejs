import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";

@Entity()
export class Room extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		nullable: true
	})
	name?: string;

	@Column("bigint")
	createdBy: string;

	@Column("bigint")
	updatedBy: string;

	@CreateDateColumn({
		type: "timestamptz",
		default: () => "CURRENT_TIMESTAMP"
	})
	createdAt: Date;

	@UpdateDateColumn({
		type: "timestamptz",
		default: () => "CURRENT_TIMESTAMP"
	})
	updatedAt: Date;

	@DeleteDateColumn({
		type: "timestamptz",
		nullable: true
	})
	deletedAt?: Date;
}
