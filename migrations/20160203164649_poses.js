
exports.up = function(knex, Promise) {
    return knex.schema.createTable('poses', function(table) {
        table.increments();
        table.string('pose_name');
        table.string('sanskrit_name');
        table.text('translation');
        table.text('category');
        table.text('difficulty');
        table.text('description');
        table.text('benefits');
        table.text('benefits_array');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('poses')
};
