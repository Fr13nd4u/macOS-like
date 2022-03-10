import React, { FC } from "react";
import PersonsItem from "./PersonsItem";

import "./Persons.scss";

const PersonsList: FC<Props> = ({
  showPersonDescroption,
  activePerson,
  data,
}: Props) => {
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

type TData = {
  id: number;
  name: string;
  position: string;
  avatar: string;
  phone: string;
  url: string;
  email: string;
};

interface Props {
  showPersonDescroption: (index: number) => void;
  activePerson: number;
  data: [TData];
}

export default PersonsList;
