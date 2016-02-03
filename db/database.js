var knex = require('./knex')

module.exports = {
    knex: knex,
    outputAll: function() {
        return knex('poses');
    },

    addPose: function(insert) {
        return knex('the_table').insert(insert);
    }
};
