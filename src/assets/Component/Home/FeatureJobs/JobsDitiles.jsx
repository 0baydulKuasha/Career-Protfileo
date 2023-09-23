import { useLoaderData, useParams } from "react-router-dom";

const JobsDitiles = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(id, job);


    return (
        <div>
            <h2>this is the best{id}</h2>
            <div className="grid md:grid-cols-4">
                <div className="  md:col-span-3 p-10 text-2xl font-semibold">
                    <h1 className=""><span className="text-3xl">Job Description: </span>{job.job_description} </h1>
                    <h1 className="py-5"><span className="text-3xl ">Job Responsibility: </span>{job.job_responsibility}</h1>
                    <div>
                        <p className="text-3xl">Education Requirements:</p>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div className="pt-5">
                        <p className="text-3xl">Experiences:</p>
                        <p>{job.experiences}</p>
                    </div>
                </div>


                <div className=" "> 
                    <div className="p-8 bg-slate-100 my-8 ">
                        <div>
                            <h1 className="text-2xl font-bold py-5 border-b-2">Job Details</h1>
                            <h2> <span className=" text-xl font-bold py-10">Salary:</span> {job.salary}</h2>
                            <h2> <span className=" text-xl font-bold " > Job Title:</span> {job.job_title}</h2>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold py-5 border-b-2" >Contact Informatin</h2>
                            <h3> <span className=" text-xl font-bold "> Phone: </span> {job.contact_information.phone}</h3>
                            <h3> <span className=" text-xl font-bold py-8">Email: </span> {job.contact_information.email}</h3>
                            <h3> <span className=" text-xl font-bold ">Address: </span> {job.contact_information.address}</h3>
                        </div>
                    </div>
                    <button className="btn btn-primary w-full">Apply now</button>
                </div>
            </div>



        </div>
    );
};

export default JobsDitiles;