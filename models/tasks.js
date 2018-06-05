'use strict';
module.exports = (sequelize, DataTypes) => {
  var tasks = sequelize.define('tasks', {
    task: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  tasks.associate = function(models) {
    // associations can be defined here
  };
  return tasks;
};