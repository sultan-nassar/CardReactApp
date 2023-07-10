import { Avatar, Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";

export default function Countries() {
  const [countries, setCountries] = useState();
  const { isDark } = useTheme();
  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Container sx={{ color: isDark ? "white" : "primary" }}>
        {countries?.map((country) => {
          return (
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              key={JSON.stringify(country)}
            >
              <Avatar
                src={country.flags.png}
                alt={`${country.name.common}flag`}
              />
              <Typography>{country.name.common}</Typography>

              <Typography>{country.capital?.[0]}</Typography>
            </Box>
          );
        })}
      </Container>
    </div>
  );
}

//https://restcountries.com/v3.1/all

//conditional rendering
//condition ? return if true : return if false
