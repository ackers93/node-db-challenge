// many to many sql knex db create and export for schema
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name')
                .notNullable();
            tbl.string('project_description')
                .notNullable()
            tbl.boolean('completed')
                .defaultTo(0);
        })
        .createTable('project_resources', tbl => {
            tbl.increments();
            tbl.string('name')
                .notNullable()
                .unique();
            tbl.string('resource_description')
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_description')
                .notNullable();
            tbl.string('task_notes')
                .notNullable()

            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.boolean('completed')
                .defaultTo(0);
        })
        .createTable('projects_resources', tbl => {
            tbl.increments();
            tbl.integer('project_resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project_resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects_resources')
};

