const { User } = require('../models');

const userData = [
  {
    username: 'John Smith',
    email: 'john@test.com',
    password: 'password',
    job_title: "Data Analytics Sales Specialist",
    job_salary: 125000.00,
    job_desc: "Generate a plan to ensure Data Analytics into Google Cloud Public Sector accounts, Build and maintain executive relationships with customers as the Data Analytics subject matter expert, influence long-term strategic direction, and act as a trusted advisor",
    company_id: 1,
  },
  {
    username: 'admin',
    email: 'admin@test.com',
    password: '123456',
    is_admin: true,
    job_title: "AR/VR Software Engineer",
    job_salary: 132125.00,
    job_desc: "Investigate and apply machine learning / reinforcement learning / AI planning techniques to practical problems, Optimize code performance for both real-time and low-power environments",
    company_id: 2,
  },
    {
    username: 'kevin',
    email: 'kevin@test.com',
    password: '123456k',
    is_admin: true,
    job_title: "Customer Engineer, Data and Analytics",
    job_salary: 139000.00,
    job_desc: "As a Customer Engineer, you will work with the Sales team to introduce Google Cloud to our customers, Work with the team to identify and qualify business opportunities, identify key customer technical objections, and develop a strategy to resolve technical blockers",
    company_id: 1,
  },


];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;