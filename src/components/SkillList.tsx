import React, { FunctionComponent } from 'react'
import { ListItem } from './ListItem'

type SkillListProps = {
  skillLabel: string,
  iconSrc: string,
  iconAlt: string,
  projectCount: number
}

export const SkillList: FunctionComponent<SkillListProps> = ({ skillLabel, iconSrc, iconAlt, projectCount }) => {
  return (
    <ListItem label={skillLabel} iconSrc={iconSrc} iconAlt={iconAlt}>
      <div className="text-blue-400">{projectCount} projects</div>
    </ListItem>
  );
}