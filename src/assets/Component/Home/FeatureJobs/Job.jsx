// import { GrLocation } from "react-icons/ai";

import { Link } from "react-router-dom";

// import { PiCurrencyDollar } from "react-icons/ai";
const Job = ({ job }) => {

    const { id,logo,job_title ,company_name,remote_or_onsite,job_type,salary,location} = job;

    return (
        <div className="m-10">
            <div className="card card-compact bg-base-200 py-5 px-5   shadow">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body text-2xl font-bold">
                    <h2 className="card-title text-3xl font-bold"> {job_title} </h2>
                    <p className="text-2xl font-bold">{company_name}</p>
                    <div className=" flex gap-3 ">
                        <button className="btn border-gray-800 text-2xl font-bold">{remote_or_onsite}</button>
                        <button className="btn text-2xl font-bold">{job_type}</button>
                    </div>
                    <div className=" flex gap-2 font-bold text-2xl font-bold">
                        <h3 >{location}</h3>
                        <h3>{salary}</h3>
                    </div>
                    <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}><button className="btn btn-primary text-2xl font-bold"> View Details</button></Link>
                    </div>
                </div>
            </div>            
        </div>

    );
};

export default Job;