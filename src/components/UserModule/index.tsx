import React, { FC, useContext, useState } from "react";
import { Box, Card, CardContent, CardActions } from "@mui/material";

import PersonsList from "../PersonsList";
import PersonDescription from "../PersonDescription";
import Search from "../Search";

import "./UserModule.scss";
import { Context } from "../../context";

const UserModule: FC = () => {
  const { data } = useContext(Context);
  const [activePerson, setActivePerson] = useState(0);

  const showPersonDescroption = (index: number) => {
    setActivePerson(index);
  };

  return (
    <Box className="user-module">
      <Card sx={{ borderRadius: "12px" }}>
        <CardActions className="user-module_search">
          <Search />
        </CardActions>
        {!data ? (
          <Box>no data</Box>
        ) : (
          <Box className="user-module_box">
            <CardContent className="user-module_box_list">
              <PersonsList
                showPersonDescroption={showPersonDescroption}
                activePerson={activePerson}
                data={data}
              />
            </CardContent>
            <CardActions sx={{ padding: 0 }}>
              <PersonDescription index={activePerson} />
            </CardActions>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default UserModule;
