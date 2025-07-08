const connectDB = require('./config/database');
const User = require('./models/user');

const run = async () => {
  await connectDB();

  const newUser = new User({
    name: 'Sanvika',
    email: 'sanvika@example.com'
  });

  await newUser.save();
  console.log('👤 User saved:', newUser);
  process.exit(0);
};

run();
