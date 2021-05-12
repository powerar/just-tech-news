const User = require('./User');
const Post = require('./Post');

// create the association btween POST and USER
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//defines the relationship between Post and User models
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Post };
