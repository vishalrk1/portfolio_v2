import { IconType } from "react-icons"

export interface Skill{
    name : string,
    icon : IconType
}

export interface Project{
    title : string,
    description : string,
    gitlink : string,
    livelink : string|null,
    skills : {name : string}[]
}
