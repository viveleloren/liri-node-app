console.log("this is loaded");

exports.spotify = {
  id: "d696742712134fde9e6a8fdc8ee56f34",
  secret: "49ebcc19776a41b38ebfae511abf90b5"
};

exports.bandsintown = {
  id: process.env.BANDSINTOWN_ID
};

exports.omdb = {
  id: process.env.OMDB_ID
};

exports.mapquest = {
  id: process.env.MAPQUEST_ID
};
