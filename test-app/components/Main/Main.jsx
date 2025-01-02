import React from "react";

import Quests from "../Quests/Quests";
import CharacterInventory from "../CharacterInventory/CharacterInventory";
import PageTemplate from "../PageTemplate/PageTemplate";

const Main = () => {
  return (
    <div>
     <PageTemplate>
      <CharacterInventory />
      <Quests />
     </PageTemplate>
    </div>
  );
};
export default Main;
