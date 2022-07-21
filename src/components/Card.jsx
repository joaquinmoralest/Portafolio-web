import './Card.css'

const Card = () => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={'https://picsum.photos/200/150'} alt="" />
      </div>
      <div className='card-body'>
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default Card