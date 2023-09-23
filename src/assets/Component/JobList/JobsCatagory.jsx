
const JobsCatagory = ({joblist}) => {

    const [id, logo]= joblist;
    return (
        <div>
            <h1>this is best job : {joblist.id}</h1>
        </div>
    );
};

export default JobsCatagory;