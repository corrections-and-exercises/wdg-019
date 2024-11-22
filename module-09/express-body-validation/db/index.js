import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(process.env.PG_URI, {dialect: 'postgres'});

export default sequelize;
