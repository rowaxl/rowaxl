import React, { FunctionComponent } from 'react'
import { ListItem } from './ListItem'

type SkillListProps = {
  skillLabel: string,
  iconSrc: string,
  iconAlt: string
}

export const SkillList: FunctionComponent<SkillListProps> = ({ skillLabel, iconSrc, iconAlt }) => {
  return (
    <div>
      <ListItem label={skillLabel} iconSrc={iconSrc} iconAlt={iconAlt} />
      <hr className="boder-b-0 my-4" />
    </div>
  );
}