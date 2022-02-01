const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'CodyTA',
    email: 'CODYTA@Codingbootcamp.com',
    password: 'password123'
  },
  {
    username: 'CharlesTA',
    email: 'CharlesTA@Codingbootcamp.com',
    password: 'password123'
  },
  {
    username: 'TANK_Teach',
    email: 'Tank_teach@Codingbootcamp.com',
    password: 'password123'
  },
  {
    username: 'CamyTA',
    email: 'CAMYTA@Codingbootcamp.com',
    password: 'password123'
  },
  {
    username: 'DarianTA',
    email: 'DarianTA@Codingbootcamp.com',
    password: 'password123'
  },
  {
    username: 'GaryTA',
    email: 'GARYTA@Codingbootcamp.com',
    password: 'password123'
  },
  {
    username: 'RonnyTA',
    email: 'RonnyTA@Codingbootcamp.com',
    password: 'password123'
  },
  {
    username: 'Omar_Teach',
    email: 'Omar_Teach@Codingbootcamp.com',
    password: 'password123'
  },
  {
    username: 'Jeffery',
    email: 'Jeffery@student.Codingbootcamp.com',
    password: 'password123'
  },
  {
    username: 'Luis',
    email: 'Luis@student.Codingbootcamp.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
