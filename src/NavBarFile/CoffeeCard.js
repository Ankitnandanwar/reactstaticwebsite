import React from 'react'

const CoffeeCard = ({cardData}) => {

  
  return (
    <>
    <div class="row-cols-1 row-cols-md-3 cardcont">
    {   
        cardData.map((currELem)=>{

            const {id,image,title,description,buy} = currELem

            return (
                <>
                    <div className="col gallery-div" key={id}>
                        <div className="card coffee1">
                            <img src={image} className="card-img-top" alt="coffeeimgs" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                            </div>
                            <button className='buy-1'>{buy}</button>
                        </div>
                    </div>
                </>
            )
        })
    }
    </div>
    </>
  )
}

export default CoffeeCard