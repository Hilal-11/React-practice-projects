import React , { useState } from 'react'
import PlanWithMe from './PlanWithMe'
import "./Tour_Card.css";
function Tour_Card( props) {


  const newDescription = props.tourData[0].aboutLocation.substring(0 , 150);
  const[description , setDescription] = useState(newDescription)
  const[readMore , setReadMore] = useState(false)

  const ReadMoreHandler = () => {
    setReadMore(!readMore);
      if(!readMore){
        setDescription(props.tourData[0].aboutLocation)
      }else{
        setDescription(newDescription)
      }
  }

  return (
    <div>
      <PlanWithMe></PlanWithMe>
      <div className='container'>
        {
            props.tourData.map(
                
                (filteredData) => 
                    (
                     

                        <div className='card'>
                            <div>
                                <img src={filteredData.image} alt="Fuck ! Oop" />
                            </div>
                            <div>
                                <h2>{filteredData.tourExpense}</h2>
                            </div>
                            <div>
                                <h3>{filteredData.location}</h3>
                            </div>
                            <div>
                                <p>{description}    
                                 <span onClick={ ReadMoreHandler }>
                                   {readMore ? `Read Less` : `Read More`}
                                </span></p>
                            </div>


                            {/* not intrested button pending  */}
                            <button>Not Intrested</button>
                        </div>
                    ))
        }
      </div>
    </div>
  )
}

export default Tour_Card
