import { Box, Card, CardMedia, Divider } from "@mui/material";
import React, { FC, useContext } from "react";
import { Context } from "../../context";

const PersonDescription: FC<Props> = ({ index }: Props) => {
  const data = useContext(Context);

  return (
    <Box sx={{ width: "100%" }} className="description">
      <Card sx={{ boxShadow: "none" }}>
        <CardMedia
          component="img"
          height="120"
          sx={{ borderRadius: "50%", width: 120, height: 120 }}
          image={data[index].avatar}
          alt={data[index].name}
        />
      </Card>
      <Divider />
      <Card sx={{ boxShadow: "none" }}>3</Card>
    </Box>
  );
};

interface Props {
  index: number;
}

export default PersonDescription;
