import Navbar from "../components/Navbar/Navbar";
import Card from "../components/card/Card";
import Linechart from "../components/chart/Linechart";
import Piechart from "../components/chart/Piechart";
import ScheduleCard from "../components/schedulecard/Schedule";
import Sidebar from "../components/sidebar/Sidebar";
import LoginPage from "./Login";

export default function Homepage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{display:"flex", flexDirection:'column', marginLeft:'400px'}}>

     <Navbar/>
      
        <Card />
        
       
    
      <Linechart/>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Piechart/>
      <ScheduleCard/>
      <LoginPage/>
      </div>
      
      </div>
     
    </div>
  );
}
