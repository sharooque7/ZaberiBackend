import bcrypt from "bcryptjs";

const users = [
  {
    name: "Randeep Rana",
    isAdmin: true,
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Suraj Rana",
    isAdmin: true,
    email: "suraj@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Chintu Rana",
    isAdmin: true,
    email: "chintu@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
