import BlogList from "../components/BlogList"
import FetchData from "../components/fetchData"
const Home = () => {
   const blogs = FetchData();
   return (
      <>
      
      <div className="home">
         <div className="blogs">
         <BlogList blogs = {blogs}/>
         </div>
      </div>
      
      </>
   );
}

export default Home;