exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          project_id: 1,
          task_description: "Create React App",
          completed: false
        },
        {
          id: 2,
          project_id: 1,
          task_description: "Choose Styling Library",
          completed: false
        },
        {
          id: 3,
          project_id: 1,
          task_description: "Work",
          completed: false
        },
        {
          id: 4,
          project_id: 2,
          task_description: "Cook",
          completed: false
        },
        {
          id: 6,
          project_id: 3,
          task_description: "Wipe surfaces",
          completed: false
        },
        {
          id: 5,
          project_id: 3,
          task_description: "Clean Toilet",
          completed: false
        },
        {
          id: 7,
          project_id: 3,
          task_description: "Mop Floor",
          completed: false
        }
      ]);
    });
};
