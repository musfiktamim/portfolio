import Components from "./Components"

function page() {
  const services = [
    {
      title:"Dotnet",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis!"
    },
    {
      title:"React",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis!"
    },
    {
      title:"Express",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis!"
    },
    {
      title:"Mern",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis!"
    },
    {
      title:"Next",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis!"
    },
    {
      title:"React Native",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis!"
    },
    {
      title:"Electron",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis!"
    },
    {
      title:"Cyber security",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis!"
    },
    {
      title:"Data Analysis",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis!"
    },

  ]
  
  return (
    <div className="px-2 pt-2 flex flex-wrap gap-x-2 gap-y-2">
      {
        services && services.map((item)=><Components item={item} />)
      }
    </div>
  )
}

export default page