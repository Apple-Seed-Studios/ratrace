
async function handleHelloWorld(req, res) {
  res.status(200).json({message: 'hello'});
}

module.exports = { handleHelloWorld };