import React, { useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const PREDICT = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [isLoading, setIsloading] = useState(false);
  const [values, setValues] = useState({
        Last_funding_round_raised_amount: 4,
        age_of_company: 2,
        Amount_of_the_last_funding_type: 1,
        Companies_Information_Level_of_Completeness: 0,
        Stage_DA_Classified_Early: 0,
        number_of_founders: 0,
        number_of_bussiness_categories: 0,
        number_of_market_countires: 0,
        Female_Co_Founder: 0,
        Average_time_of_rounds: 0,
        number_of_investors: 0,
        Sector_Information_Technology: 0,
        Business_model_B2C: 0

    });

  const [result, setResult] = useState("");


  const handleChange = (event) => {
      const value = event.target.value;
      const name = event.target.name;
      let inputData = {...values};
      inputData[name]=value;
      setValues(inputData);
    }

    const handleCancelClick = (event) => {
        setResult("");
    }

  const handlePredictClick = (event) => {
      //const proxyurl = "https://salty-reaches-05509.herokuapp.com/";
      const url = "http://127.0.0.1:5000/prediction/";
      setIsloading(true);
      fetch(url,
      {
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(values)
      })  //https://salty-reaches-05509.herokuapp.com/http://127.0.0.1:5000/prediction
      .then(response => response.json())
      .then(response => {
          setResult(response.result);
          setIsloading(false);
      });
  }

  return (
    <Box m="20px">
      <Header title="PREDICT" subtitle="Insert x variables " />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="16_Last funding round raised amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Last_funding_round_raised_amount}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="age_of_company"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age_of_company}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Amount of the last funding type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Amount_of_the_last_funding_type}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Companies Information, Level of Completeness"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Companies_Information_Level_of_Completeness}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Stage, DA Classified_Early"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Stage_DA_Classified_Early}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="number of founders"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.number_of_founders}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="number of bussiness categories"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.number_of_bussiness_categories}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="number of market countires"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.number_of_market_countires}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Female_Co-Founder"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Female_Co_Founder}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Average time of rounds(days)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Average_time_of_rounds}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="number of investors"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.number_of_investors}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sector_Information Technology"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Sector_Information_Technology}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Business_model_B2C"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Business_model_B2C}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              {/* <Button type="submit" color="secondary" variant="contained">
                Predict
              </Button> */}

               {/* <Row> */}
                    {/* <Col> */}
                        <Button  type="submit" color="secondary"
                            block
                            variant="success"
                            disabled={isLoading}
                            onClick={!isLoading ? handlePredictClick : null}>
                            { isLoading ? 'Making prediction' : 'Predict' }
                        </Button>
                    {/* </Col> */}
                    {/* <Col> */}
                        <Button color="secondary" 
                            block
                            variant="danger"
                            disabled={isLoading}
                            onClick={handleCancelClick}>
                            Reset prediction
                        </Button>
                    {/* </Col> */}
                {/* </Row> */}
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default PREDICT;
