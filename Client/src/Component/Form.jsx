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
    //posting from data with the hep of axios using method post
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
      {/* using onsubmit function for submiting form data */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-details">
          {/* in this personal details form elements are mentioned */}
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
              placeholder="age"
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
            {/*from  here you can go to another page while clicking on data button */}
            <button className="data">Data</button>
          </Link>
          <button type="submit">SUBMIT  </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
