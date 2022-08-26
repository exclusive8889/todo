import {useReducer,useState} from 'react'
const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value
    }
   }
   
function Dashboard() {
    // console.log(formReducer)
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
  
    const handleSubmit = event => {
      event.preventDefault();
      setSubmitting(true);
  
      setTimeout(() => {
        setSubmitting(false);
      }, 3000)
    }
  
    return(
      <div className="wrapper">
        <h1>How About Them Apples</h1>
        {submitting &&
          <div>Submtting Form...</div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="name" onChange={setFormData}/>
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default Dashboard;