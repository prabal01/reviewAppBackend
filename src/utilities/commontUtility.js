const axios = require("axios");
const { populateProfiles } = require("../model.js/profileModel");
exports.populateDB = async (req, res) => {
  console.log("hello");
  try {
    const peoples = await axios
      .get(
        "https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=ce"
      )
      .then((response) => {
        return response.data.people;
      });
    // console.log(peoples);

    //extraction 10 profiles
    let profiles = [];
    profileCount=0
    peoples.forEach((personProfile) => {
        // console.log(personProfile)
        if(profileCount<10){
        let profileInfo = []
        profileInfo.push(personProfile.slug) 
        profileInfo.push(personProfile.image) 
        profileInfo.push(personProfile.name) 
        profileInfo.push(personProfile.type) 
        profiles.push(profileInfo)
      } else return false
      profileCount++
    });
    const result = await populateProfiles(profiles)
    console.log(result)
    res.status(200).json({ res: "DB populated" });
  } catch (err) {
    console.log("ERROR::: in populating the db", err);
    res.status(400).json({ err: "something went wrond" });
  }

  res.status(200);
};
