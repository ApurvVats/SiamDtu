import Link from "next/link"
import { TitleSm } from "./Title"

export const Card = ({ data, caption, show, path}) => {
  return (
    <>
      <div className='card prevent-select'>
        <div className='card-img'>
          <img src={data.cover} alt={data.title} />
        </div>
        <div className='card-details'>
          {data.linkedin? <Link href={`${data.linkedin}`} className='title-link' target="___blank">
            <TitleSm title={data.title} />
          </Link>:<Link href={`${path}/${data.id}`} className='title-link' target="__blank">
            <TitleSm title={data.title} />
          </Link>}
          {caption}
          <div className='flex'>
            {data.date && <span> {data.date}</span>}
          </div>
          
          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
