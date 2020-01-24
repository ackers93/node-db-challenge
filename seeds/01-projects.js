exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Portfolio",
          project_description: "Make it pretty so I can get hired",
          completed: false
        },
        {
          id: 2,
          project_name: "Make dinner",
          project_description: "Food is required to live",
          completed: false
        },
        {
          id: 3,
          project_name: "clean bathroom",
          project_description: "Stop living like a hobo",
          completed: false
        }
      ]);
    });
};
