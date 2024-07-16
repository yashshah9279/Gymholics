import React from 'react'
import { Check, CheckCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    const pricing=[
        {
            imgUrl: "/pricing.jpg",
            title: "Quaterly",
            price: 18000,
            length: 3 
        },
        {
            imgUrl: "/pricing.jpg",
            title: "Half_yearly",
            price: 34000,
            length: 6
        },
        {
            imgUrl: "/pricing.jpg",
            title: "yearly",
            price: 67000,
            length: 12 
        },
    ]
  return (
    <section className="pricing">
        <h1>Elite Edge Fitness Plans</h1>
        <div className="wrapper">
            {
                pricing.map(element=>{
                    return(
                        <div className="card" key={element.title}>
                            <img src={element.imgUrl} alt={element.title} />
                            <div className="title">
                                <h1>{element.title}</h1>
                                <h1>Package</h1>
                                <h3>Rs {element.price}</h3>
                                <p>For {element.length} Months</p>
                            </div>
                            <div className="description">
                                <p> 
                                <Check/> Equipment
                                </p>
                                <p> 
                                <Check/> All Day Free Training
                                </p>
                                <p> 
                                <Check/> Free Restroom
                                </p>
                                <p> 
                                <Check/> 24/7 Skilled Support
                                </p>
                                <p> 
                                <Check/> 3 Day free trial
                                </p>
                                <Link to={"/"}>Join Now</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Pricing