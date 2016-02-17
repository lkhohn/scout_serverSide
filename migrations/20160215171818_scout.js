
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.integer('user_id');
    table.string('username');
    table.string('firstName');
    table.string('lastName');
    table.string('password');
    table.string('phoneNumber');
    table.string('city');
    table.string('state');
    table.string('preferredPayment');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
