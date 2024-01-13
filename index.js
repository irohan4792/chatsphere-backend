const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put('https://api.chatengine.io/users/',{username:username, secret:username, first_name:username},
    {headers:{"private-key":"71afa0d0-e25e-44fd-8b87-e064bc3c54f4"}
  })
  return res.status(r.status).json(r.data)
  } catch (error) {
    return res.status(error.response.status).json(error.response.data)
  }
  // return res.json({ username: username, secret: "sha256..." });
});
console.log("working")
app.listen(3001);


//project id - 37da5e0e-313f-4356-b1e4-5f5105a7e95d
//private key - 