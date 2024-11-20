import sequelize from '../db/index.js';
import {DataTypes} from 'sequelize';

export const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
