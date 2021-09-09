import { useState } from "react"

export default function CityForm(props) {
  const [formData, setFormData] = useState({
    city: ""
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.onSubmit(formData)
    setFormData({ city: "" })
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />
      <button>Fetch weather!</button>
    </form>
  )
}