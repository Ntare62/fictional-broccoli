exports.up = function (knex, Promise) {
    return knex.schema
    .createTable('Playlist', (table) => {
        table.increments('id').unique().notNullable();
        table.integer('show_id').references('id').inTable('Show').notNullable();
        table.string('time_window').unique().notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Playlist');
};