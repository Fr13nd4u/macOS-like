import React, { FC, useContext } from "react";
import { Context } from "../../context";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Divider,
  Link,
  Typography,
} from "@mui/material";

import "./PersonDescription.scss";

const PersonDescription: FC<Props> = ({ index }: Props) => {
  const { data } = useContext(Context);

  return (
    <Box sx={{ width: "100%" }}>
      <Card className="person-description">
        <CardMedia
          component="img"
          height="120"
          sx={{ borderRadius: "50%", width: 120, height: 120 }}
          image={data[index].avatar}
          alt={data[index].name}
        />
        <Typography variant="h5" component="h5">
          {data[index].name}
        </Typography>
        <Typography sx={{ mb: 4 }} color="text.secondary">
          {data[index].position}
        </Typography>
      </Card>
      <Divider />
      <Card className="person-contacts">
        <CardActions className="person-contacts-item">
          <Typography>Phone</Typography>
          <Typography color="text.secondary">{data[index].phone}</Typography>
        </CardActions>
        <CardActions className="person-contacts-item">
          <Typography>URL</Typography>
          <Typography>
            <Link href="#">{data[index].url}</Link>
          </Typography>
        </CardActions>
        <CardActions className="person-contacts-item">
          <Typography>Email</Typography>
          <Typography>
            <Link href="#">{data[index].email}</Link>
          </Typography>
        </CardActions>
        <CardActions>
          <Button
            size="large"
            variant="contained"
            sx={{
              textTransform: "none",
              width: "100%",
              background: "#13049b",
              mt: 5,
            }}
          >
            Send massage
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

interface Props {
  index: number;
}

export default PersonDescription;
