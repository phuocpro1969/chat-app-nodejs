import "dotenv/config";

export const config = {
	DB: {
		TYPE: "postgres",
		HOST: process.env.DATABASE_HOST,
		PORT: Number(process.env.DATABASE_PORT),
		USERNAME: process.env.DATABASE_USERNAME,
		PASSWORD: process.env.DATABASE_PASSWORD,
		DATABASE_NAME: process.env.DATABASE_NAME,
		DATABASE_SYNC: Boolean(process.env.DATABASE_SYNC),
		DATABASE_LOG: Boolean(process.env.DATABASE_LOG)
	}
};
