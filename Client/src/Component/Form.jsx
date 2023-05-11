import React from "react";
import "./Form.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const postData = {
      name: data.name,
      sex: data.sex,
      dob: data.dob,
      mobile: data.mobile,
    };
    axios
      .post("http://localhost:8080/user/add", postData)
      .then((response) => {
        console.log(response.data);
        alert("Form data submitted successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while submitting the form");
      });
  };

  return (
    <div className="form-elements">
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-details">
          <div>
            <label htmlFor="name" className="required-field">
              Name{" "}
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
              {...register("name")}
            />
            <label htmlFor="dob" className="required-field">
              Date of Birth or Age{" "}
            </label>
            <input
              id="dob"
              className="wid-style"
              name=" dob"
              placeholder="DD/MM/YYYY or Age in years"
              {...register("dob")}
            />
            <label htmlFor="sex" className="required-field">
              Sex{" "}
            </label>
            <select id="sex" className="select-sex" {...register("sex")}>
              <option value="">Enter Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <label htmlFor="mobile" className="required-field">
            Mobile Number
          </label>
          <input
            type="tel"
            className="tel-input"
            name="mobile"
            placeholder="Enter your Mobie"
            id="mobile"
            {...register("mobile")}
          />
        </div>
        <div className="btns">
          <Link to="/users">
            <button className="cancel">CANCEL (ESC)</button>
          </Link>
          <button type="submit">SUBMIT (Ctrl S) </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
