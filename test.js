// script to test bcrypt
const bcrypt = require('bcrypt');

async function testBcrypt() {
  const saltRounds = 10;
  const password = 'testpassword';

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed password:', hashedPassword);
  } catch (error) {
    console.error('Error hashing password:', error);
  }
}

testBcrypt();
