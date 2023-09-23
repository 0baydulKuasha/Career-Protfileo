import Banner from "../Banner/Banner";
import JobList from "../JobList/JobList";
import Statistics from "../Statisties/Statistics";
import FeatureJobs from "./FeatureJobs/FeatureJobs";




const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <JobList></JobList>
            <FeatureJobs></FeatureJobs>
            <Statistics></Statistics>
        </div>


    );
};

export default Home;