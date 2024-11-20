import sequelize from '../db/index.js';
import {DataTypes} from 'sequelize';

export const Note = sequelize.define('Note', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
