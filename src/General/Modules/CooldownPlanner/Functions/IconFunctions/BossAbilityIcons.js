import React from "react";
import { bossAbilities } from "../../Data/CooldownPlannerBossAbilityList";

export default function bossAbilityIcons(guid, bossID, style) {
  let alt = "";
  let iconName = bossAbilities[bossID]
    .filter((obj) => {
      return obj.guid === guid;
    })
    .map((obj) => obj.icon);

  alt = bossAbilities[bossID]
    .filter((obj) => {
      return obj.guid === guid;
    })
    .map((obj) => obj.ability)
    .toString();

  if (guid === undefined) {
    return null;
  }
  return <img style={{ ...style }} src={iconName} alt={alt} />;
}
