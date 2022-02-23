import React, { FC, useState } from "react";
import { Box, Card, CardContent, CardActions } from "@mui/material";

import PersonsList from "../PersonsList";
import PersonDescription from "../PersonDescription";

import "./UserModule.scss";

const UserModule: FC = () => {
  const [activePerson, setActivePerson] = useState(0);

  const showPersonDescroption = (index: number) => {
    setActivePerson(index);
  };

  return (
    <Box className="user-module">
      <Card sx={{ borderRadius: "12px" }}>
        <CardActions className="user-module_search">SEARCH</CardActions>
        <Box className="user-module_box">
          <CardContent className="user-module_box_list">
            <PersonsList
              showPersonDescroption={showPersonDescroption}
              activePerson={activePerson}
            />
          </CardContent>
          <CardActions sx={{ padding: 0 }}>
            <PersonDescription index={activePerson} />
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default UserModule;
