exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, resource_name: "Editor" },
        { id: 2, resource_name: "Internet" },
        { id: 3, resource_name: "Oven" },
        { id: 4, resource_name: "Bleach" },
        { id: 5, resource_name: "Cloth" },
        { id: 6, resource_name: "Gloves" }
      ]);
    });
};
