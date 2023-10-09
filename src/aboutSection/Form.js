import React from "react";
import classes from "./Form.module.css";
import form from "./aboutusAssets/formsimg.png";
import TextField from "@mui/material/TextField";
import Mainab from "./mainAbout";
import phone from "./aboutusAssets/phone.png";
import Message from "./aboutusAssets/Message.png";

const Form = () => {
  const Formpassage = [
    {
      image: phone,
      Text: "134 003 9252",
    },
    {
      image: Message,
      Text: "abccompany@gmail.com",
    },
  ];
  return (
    <div className={classes.mainForm}>
      <div>
        <p className={classes.mainFoFolder}>
          Contact <span className={classes.mainSpan}>Us</span>
        </p>
      </div>
      <div className={` container ${classes.mainform}`}>
        <div>
          <div className={classes.innermain}>
            <TextField
              label="Full Name"
              placeholder="Enter your Name"
              focused
              className={classes["custom-textfield"]}
              style={{ width: "385px", height: "90px" }}
            />

            <TextField
              label="Email ID "
              placeholder="Enter your Email ID"
              className={classes["custom-textfield"]}
              style={{ width: "385px", height: "90px", color: "red" }}
            />
            <TextField
              label="Country/Region"
              placeholder="Enter your Country"
              className={classes["custom-textfield"]}
              style={{ width: "385px", height: "90px" }}
            />

            <TextField
              label="Mobile Number"
              placeholder="Enter your Country"
              focused
              style={{ width: "385px", height: "90px" }}
              className={classes["custom-textfield"]}
            />
          </div>
          <div>
            <TextField
              label="Mobile Number"
              focused
              placeholder="Enter your Key Description..."
              style={{ width: "810px" }}
              multiline
              rows={5}
              inputProps={{
                style: {
                  textAlign: "left",
                },
              }}
              className={classes["custom-textfield"]}
            />
          </div>
          <div className={classes.formButton}>
            <button className={classes.mainButton}>SUBMIT</button>
          </div>
        </div>

        <div className={classes.innerImg}>
          <div>
            <img src={form} className={classes.mainImage} />
            <div>
              <ul>
                {Formpassage.map((item) => (
                  <div className={classes.outerImg}>
                    <img src={item.image} className={classes.imagemap} />
                    <p className={classes.Textmap}>{item.Text}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
