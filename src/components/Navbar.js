import React from "react"
import { BsFillBasketFill } from "react-icons/bs"
import { useSelector } from "react-redux"

function Navbar() {
  const { quantity } = useSelector((store) => store.cart)
  return (
    <nav>
      <div className="navBar">
        <h3>Kurs Uygulaması</h3>
        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
        </div>
        <BsFillBasketFill className="itemsIcon" />
      </div>
    </nav>
  )
}

export default Navbar
