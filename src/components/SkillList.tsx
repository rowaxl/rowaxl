import React from 'react'

type SkillListProps = {
  skillLabel: string,
  iconSrc: string,
  iconAlt: string,
  projectCount: number
}

export const SkillList = (props: SkillListProps) => {
  return (
    <div>
      <div className="flex items-center my-4">
        <div className="w-16">
          <img className="w-12 h-12 rounded" src={`${process.env.PUBLIC_URL}/img/${props.iconSrc}`} alt={props.iconAlt} />
        </div>
        <div className="flex-1 pl-2">
          <div className="text-gray-700 font-semibold">
            {props.skillLabel}
          </div>
        </div>
        <div className="text-blue-400">{props.projectCount} projects</div>
      </div>
      <hr className="boder-b-0 my-4" />
    </div>
  );
}