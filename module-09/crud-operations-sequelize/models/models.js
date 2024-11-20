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

User.hasMany(Note);
Note.belongsTo(User);

await User.sync();
await Note.sync();
