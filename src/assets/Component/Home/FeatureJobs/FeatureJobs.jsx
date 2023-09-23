import { useEffect, useState } from "react";
import Job from "./Job";
const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);


    const [dataLength, setdataLength] = useState(4);
    useEffect(() => {
        fetch('/public/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className=" ">
            <div className="text-center py-8">
                <h1 className=" text-5xl font-semibold py-2 ">Featured Jobs </h1>
                <p className="text-2xl font-bold">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div >
                <div className=" grid   xl:grid-cols-2">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={jobs.id} job={job}></Job>)
                    }
                </div>
            </div>
            <div className="text-center">
                <div className={dataLength === jobs.length && 'hidden'}  >
                    <button onClick={() => setdataLength(jobs.length)} className="btn btn-primary ">Show all</button>
                </div>
            </div>

        </div>
    );
};

export default FeatureJobs;