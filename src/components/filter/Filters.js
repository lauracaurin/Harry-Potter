import FilterHouse from "../filter/FilterHouse";
import FilterName from "../filter/FilterName";

const Filters = ({ inputName, handleInputName, handleInputHouse, inputHouse }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <section className='section__form'>
      <form className="form" action="" onSubmit={handleSubmit}>
        <FilterName inputName={inputName} handleInputName={handleInputName} />
        <FilterHouse inputHouse={inputHouse} handleInputHouse={handleInputHouse} />
      </form>
    </section>
  )
}
export default Filters