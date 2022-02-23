import React, { FC, useContext } from "react";
import { Context } from "../../context";
import PersonsItem from "./PersonsItem";

import "./Persons.scss";

const PersonsList: FC<Props> = ({
  showPersonDescroption,
  activePerson,
}: Props) => {
  const data = useContext(Context);

  return (
    <ul className="persons">
      {data.map((item: TData) => (
        <PersonsItem
          key={item.id}
          data={item}
          showPersonDescroption={showPersonDescroption}
          activePerson={activePerson}
        />
      ))}
    </ul>
  );
};

interface Props {
  showPersonDescroption: (index: number) => void;
  activePerson: number;
}

type TData = {
  id: number;
  name: string;
  position: string;
  avatar: string;
  phone: string;
  url: string;
  email: string;
};

export default PersonsList;
