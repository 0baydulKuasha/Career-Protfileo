import Banner from "../Banner/Banner";
import Statistics from "../Statisties/Statistics";
import JobList from "./JobList/JobList";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobList></JobList>


            <Statistics></Statistics>
        </div>


    );
};

export default Home;