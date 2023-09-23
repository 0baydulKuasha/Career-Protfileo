import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import JobsCatagory from "./JobsCatagory";


const JobList = () => {
    const [Catagory, setCatagory]= useState();
    useEffect(() => {
        fetch('/public/categories.json')
        .then(res => res.json())
        .then(data => console.log(data))

    },[])


    return (
        <div className=" ">
            <div className="text-center py-10">
                <h1 className=" text-5xl font-semibold py-2 ">Job Catagory List</h1>
                <p className="text-2xl font-bold">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>

                {/* {
                    JobList.map(joblist => <JobsCatagory key={Catagory.id}  joblist={'joblist'}></JobsCatagory>)
                } */}
            </div>
        </div>
    );
};

export default JobList;