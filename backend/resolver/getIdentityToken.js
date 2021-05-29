var IBAN = require("iban");
var jwt = require("jsonwebtoken");
const { encrypt, decrypt } = require("./../utils/encrypt");

const requestUser = (uid) => {
  // this would be an API call to the entity of the country
  // prefixes can be used to distinguish between many countries and regions within
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        valid: true,
        expires: new Date(2021, 6, 10),
        name: "Max Mustermann",
      });
    }, 100);
  });
};

module.exports = async (_, { uid }) => {
  console.log(uid);
  // 1. Verify that the UID is valid
  if (!IBAN.isValid(uid)) {
    throw new Error("Invalid UID");
  }

  // 2. now get the user
  const verification = await requestUser(uid);
  if (!verification) {
    throw new Error("Error during verification");
  }

  // 3. create the jwt
  const encryptedUID = encrypt(uid);

  const jwtContent = {
    ...verification,
    encryptedUID,
  };
  const expiredIn = Math.floor(
    (verification.expires.getTime() - Date.now()) / 1000
  );
  const token = jwt.sign(
    {
      exp: expiredIn,
      data: jwtContent,
    },
    process.env.JWT_PRIVATE_KEY,
    { algorithm: "RS256" }
  );

  return {
    token,
  };
};
