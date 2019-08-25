
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.timeStamp('created_at').defaultTo(knex.fn.now);
        table.timeStamp('updated_at').defaultTo(knex.fn.now);
    })
        .createTable('todos', (table) => {
            table.increments();
            table.timeStamp('created_at').defaultTo(knex.fn.now);
            table.timeStamp('updated_at').defaultTo(knex.fn.now);
            table.string('title').notNullable();
            table.boolean('completed').notNullable().defaultTo(false);
            table.integer('user_id').references('id').inTable('users');
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('todos').dropTable('users');
};
