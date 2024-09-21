import ProjectItems from "../Component/ProjectItems"

import {projects} from "../../data"

function page() {
  
  return (
    <div className='w-full h-full gap-2 overflow-y-auto flex flex-wrap'>
      {
        projects && projects.map((item,index)=><ProjectItems key={index} item={item} />)
      }
    </div>
  )
}

export default page