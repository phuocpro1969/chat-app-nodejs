import { DataSourceOptions } from "typeorm";

import { config } from "~configs";

const { DB } = config;

export default {
	type: DB.TYPE,
	host: DB.HOST,
	port: DB.PORT,
	username: DB.USERNAME,
	password: DB.PASSWORD,
	database: DB.DATABASE_NAME,
	synchronize: DB.DATABASE_SYNC,
	logging: DB.DATABASE_LOG,
	entities: ["src/db/entities/**/*.ts"],
	migrations: ["src/db/migrations/**/*.ts"],
	subscribers: ["src/db/subscribers/**/*.ts"],
	cli: {
		entitiesDir: "src/db/entities",
		migrationsDir: "src/db/migrations",
		subscribersDir: "src/db/subscribers"
	}
} as DataSourceOptions;
