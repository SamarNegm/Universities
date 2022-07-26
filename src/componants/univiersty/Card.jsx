import React from 'react'

function Card({ university }) {
    return (
        <div className="uni-card uni-card-card uni-fc-h " id="card">



            <h3>{university.name}</h3>
            <div className="uni-flex uni-ml-10">
                <p>{university.country}</p>
                <p>{university.state_province}</p>
                <p>{university.alpha_two_code}</p>



            </div>
            <hr className="uni-hr" />
            <p className="uni-domains-p uni-ml-10 ">Domains</p>
            <div className="uni-domains uni-fc-h">
                {
                    university.domains.map((domain, i) => <p className="uni-ml-10 " key={i} >{domain}</p>)
                }

            </div>

            <div className="uni-web uni-flex">
                {
                    university.web_pages.map((domain, i) => <a className="uni-web-item" href={domain} key={i} >Web Page {i + 1}</a>)
                }

            </div>


        </div>
    )
}

export default Card