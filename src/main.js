const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

async function getSlogan(request) {
  let response = await generateSlogan(request)
    console.log(`Your request was: ${request}`);
    console.log(`Your slogan is: ${response.slogan}`);
  }

async function fullSession(request) {
  let message = await generateMessage()
  console.log(message)
  let slogan = await getSlogan(request)
  let bye = await goodbye();
  console.log(bye)
    
}

module.exports = { getSlogan, fullSession };
