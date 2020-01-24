exports.seed = async knex => {
  await knex("projects").truncate();
  await knex("project_resources").truncate();
  await knex("resources").truncate();
  await knex("tasks").truncate();
};
