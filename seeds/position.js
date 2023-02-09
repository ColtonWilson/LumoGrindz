const { Position } = require("../models");

const positionData = [
  {
    title: "Data Analytics Sales Specialist",
    job_desc: "Generate a plan to ensure Data Analytics into Google Cloud Public Sector accounts, Build and maintain executive relationships with customers as the Data Analytics subject matter expert, influence long-term strategic direction, and act as a trusted advisor",
    salary: 125000,
    // admin
    user_id: 2,
    company_id: 1,
    is_in_queue: true,
  },
  {

    title: "AR/VR Software Engineer",
    job_desc: "Investigate and apply machine learning / reinforcement learning / AI planning techniques to practical problems, Optimize code performance for both real-time and low-power environments",
    salary: 132125,
    // john Smith
    user_id: 1,
    company_id: 1,
    is_in_queue: false,
  },
  {
    title: "Customer Engineer, Data and Analytics",
    job_desc: "As a Customer Engineer, you will work with the Sales team to introduce Google Cloud to our customers, Work with the team to identify and qualify business opportunities, identify key customer technical objections, and develop a strategy to resolve technical blockers",
    salary: 139000,
    user_id: 2,
    company_id: 1,
    is_in_queue: false,
  }


];

const seedUser = () => Position.bulkCreate(positionData);

module.exports = seedUser;