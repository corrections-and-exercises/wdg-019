import {User} from './User.js';
import {Note} from './Note.js';

User.hasMany(Note, {
    foreignKey: 'myUserId',
});

Note.belongsTo(User, {
    foreignKey: 'myUserId',
});

await User.sync({force: true});
await Note.sync({force: true});
