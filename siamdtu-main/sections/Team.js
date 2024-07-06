import { seniorteam, juniorteam} from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import team from "@/pages/team"
import React from "react"

const Team = () => {
  return (
    <>
      <section className='agency bg-top prevent-select'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET OUR TEAM' /> <br />
            <br />
            <Title title='Senior Council 2023-24' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {seniorteam.map((item) => (
              <Card data={item} key={item.id} caption={item.post}/>
            ))}
          </div>
          <div className='heading-title'>
            <Title title='Junior Council 2023-24' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {juniorteam.map((item) => (
              <Card data={item} key={item.id} caption={item.post}/>
            ))}
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Team
