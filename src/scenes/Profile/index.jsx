import { Box } from "@mui/material";

import Header from "../../components/Header";

const Profile = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PROFILE" subtitle="Welcome to your dashboard" />

        <Box></Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box>{/* ROW 1 */}</Box>
      <Box width="100%" m="0 30px">
        <Box display="flex" justifyContent="space-between"></Box>
      </Box>
    </Box>
  );
};

export default Profile;
