import './Form.css'

const Form = () => {
  return (
    <form action='#'>
      <input type='text' placeholder='Tu nombre' required/>
      <input type='email' placeholder='Tu correo' required/>
      <textarea name='' id='' cols='30' rows='10' placeholder='Tu mensaje' required ></textarea>
      <input type="submit" />
    </form>
  )
}

export default Form