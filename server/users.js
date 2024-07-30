const users = [];

const addUser = ({ id, name, room }) => {
  // Check if name and room are provided
  if (!name || !room) return { error: 'Username and room are required.' };

  // Standardize the username and room
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Check for existing user in the same room
  const existingUser = users.find((user) => user.room === room && user.name === name);

  // If the user already exists, return an error
  if (existingUser) return { error: 'Username is taken.' };

  // Create new user object and add to users array
  const user = { id, name, room };
  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
