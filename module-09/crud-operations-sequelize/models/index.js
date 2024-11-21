import {User} from './User.js';
import {Note} from './Note.js';

User.hasMany(Note);
Note.belongsTo(User, {
    foreignKey: {
        name: 'tralala',
    },
});

await User.sync();
await Note.sync();
