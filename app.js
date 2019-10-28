const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:hheezziiee@127.0.0.1:5432/ppltest');

const User = sequelize.define('user',{
    firstName: {
        type:Sequelize.STRING,
        allowNull:false
    },
    lastName: {
        type:Sequelize.STRING
    }
},{});


  // Find all users
User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
  });
  
  // Create a new user
  User.create({ firstName: "kim", lastName: null }).then(kim => {
    console.log("Jane's auto-generated ID:", kim.id);
  });
  
  // Delete everyone named "Jane"
  User.destroy({
    where: {
      firstName: "Jane"
    }
  }).then(() => {
    console.log("Done");
  });
  
  // Change everyone without a last name to "Doe"
  User.update({ lastName: "Doe" }, {
    where: {
      lastName: null
    }
  }).then(() => {
    console.log("Done");
  });
  