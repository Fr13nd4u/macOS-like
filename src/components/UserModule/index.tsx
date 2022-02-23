import React, { FC } from "react";

import { Box, Card, CardContent, CardActions } from "@mui/material";
import PersonsList from "../PersonsList";

import "./UserModule.scss";

const UserModule: FC = () => {
  return (
    <Box className="user-module">
      <Card sx={{ borderRadius: "12px" }}>
        <CardActions className="user-module_search">SEARCH</CardActions>
        <Box className="user-module_box">
          <CardContent className="user-module_box_list">
            <PersonsList />
          </CardContent>
          <CardContent>info</CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default UserModule;
