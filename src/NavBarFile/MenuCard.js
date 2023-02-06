import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    {
        menuData.map((currElem)=>{
          const {id,title1,title2,description1,description2,price1,price2} = currElem
          return(
            <div className="container text-center">
              <div className="row">
                <div className="col-md-4 Snacks" key={id}>
                  <table>
                    <tr>
                      <th>{title1}</th>
                    </tr>
                    <tr>
                      <p>{description1}</p>
                    </tr>
                  </table>
                </div>
                <div className="col-md-1">
                  <table>
                    <tr>
                      <th>{price1}</th>
                    </tr>
                  </table>
                </div>

                <div className="col-md-4 offset-md-2 Snacks" key={id}>
                  <table>
                    <tr>
                      <th>{title2}</th>
                    </tr>
                    <tr>
                      <p>{description2}</p>
                    </tr>
                  </table>
                </div>
                <div className="col-md-1">
                  <table>
                    <tr>
                      <th>{price2}</th>
                    </tr>
                  </table>
                </div>
              </div>
              

            </div>
          )
        })
    }
    </>
  )
}

export default MenuCard