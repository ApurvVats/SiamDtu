export const TitleLogo = () => {
  return (
    <img src="/images/logo.png" alt="" width={175} height={90} />
  )
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
