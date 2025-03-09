const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS

app.get("/api/communities", async (req, res) => {
  try {
    const response = await axios.get(
      "https://devsow.wpengine.com/wp-json/communities/all/",
      {
        headers: {
          Authorization: "Basic bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU=",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(2000, () => console.log("Proxy server running on port 5000"));
