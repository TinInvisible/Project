const authService = require('../authRepository');

exports.verifyEmail = async (req, res) => {
  const { email } = req.params;
  const result = await authService.emailExists(email);
  res.json(!result);
};