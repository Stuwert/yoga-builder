
exports.up = function(knex, Promise) {
    return knex.schema.createTable('poses', function(table) {
        table.increments();
        table.string('pose_name');
        table.string('sanskrit_name');
        table.json('translation');
        table.json('category');
        table.json('difficulty');
        table.json('description');
        table.json('benefits');
        table.json('benefits_array');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('poses')
};
