
exports.up = function (knex, Promise) {
    return knex.schema.createTable("persons", function (t) {
        t.increments("id"),
            t.string("name"),
            t.float("age")

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("persons")
};
