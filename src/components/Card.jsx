import './Card.css'

const Card = ({url, title, description}) => {
  
  const goTo = () => {
    window.open(url, '_blank')
  }

  return (
    <div className='card' onClick={goTo}>
      <div className='card-img'>
        <img src={'https://picsum.photos/200/150'} alt="" />
      </div>
      <div className='card-body'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card