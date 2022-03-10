import React, { FC } from "react";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

interface Props {
  data: {
    id: number;
    name: string;
    position: string;
    avatar: string;
    phone: string;
    url: string;
    email: string;
  };
  showPersonDescroption: (index: number) => void;
  activePerson: number;
}

const PersonsItem: FC<Props> = ({
  data,
  showPersonDescroption,
  activePerson,
}: Props) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton disabled>
          <span className="arrow"></span>
        </IconButton>
      }
      className={
        activePerson === data.id ? "persons-item active-item" : "persons-item"
      }
      onClick={() => showPersonDescroption(data.id)}
    >
      <ListItemAvatar>
        <Avatar src={data.avatar} alt={data.name} />
      </ListItemAvatar>
      <ListItemText primary={data.name} />
    </ListItem>
  );
};

export default PersonsItem;
