const Messages = require('../models/Messages/Messages.js')


async function handleHelloWorld(req, res) {
  res.status(200).json({message: 'hello'});
}



async function postMessage(request, response, next) {
  try {
    let createdMessage = await Messages.create(request.body);
    response.status(200).send(createdMessage);
  } catch (e) {
    next(e);
  }
}

async function getMessage(request, response, next) {
  try {
    let results = await Messages.find({});
    response.status(200).send(results);
  }
  catch (e) {
    next(e);
  }
}

module.exports = { handleHelloWorld, getMessage, postMessage };