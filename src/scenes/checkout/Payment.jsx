import { Box, Typography, TextField } from "@mui/material";

const Payment = ({ values, errors, touched, handleBlur, handleChange }) => {
  return (
    <Box mb="30px 0">
      {/* CONTACT INFO */}

      <Box>
        <Typography
          sx={{
            mn: "15px",
            fontSize: "18px",
          }}
        >
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helper={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helper={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
