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
    <div>
      <ListItem label={skillLabel} iconSrc={iconSrc} iconAlt={iconAlt}>
        <div className="text-blue-400">{projectCount} projects</div>
      </ListItem>
      <hr className="boder-b-0 my-4" />
    </div>
  );
}