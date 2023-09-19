import "reflect-metadata";

import { DataSource } from "typeorm";

import dbConfig from "~dbs/ormconfig.db";

const dataSource = new DataSource(dbConfig);

export default dataSource;
