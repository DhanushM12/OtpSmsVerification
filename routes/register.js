require("dotenv").config();
const express = require("express");
const router = express.Router();
const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "1d704741",
  apiSecret: "PAE6OzDp1VIfKXMN",
});

router.post("/register", (req, res) => {
  // A user registers with a mobile phone number
  let phoneNumber = req.body.number;
  let message = req.body.message;

  console.log(phoneNumber);
  nexmo.verify.request(
    { number: phoneNumber, brand: message },
    (err, result) => {
      if (err) {
        res.render("status", { message: "Server Error" });
      } else {
        console.log(result);
        let requestId = result.request_id;
        if (result.status == "0") {
          res.render("verify", { requestId: requestId });
        } else {
          res.render("status", {
            message: result.error_text,
            requestId: requestId,
          });
        }
      }
    }
  );
});

module.exports = router;
