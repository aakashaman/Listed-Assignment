import Navbar from "../components/Navbar/Navbar";
import Card from "../components/card/Card";
import Linechart from "../components/chart/Linechart";
import Piechart from "../components/chart/Piechart";
import ScheduleCard from "../components/schedulecard/Schedule";
import Sidebar from "../components/sidebar/Sidebar";
import './homepage.css'

export default function Homepage() {
  return (
    <div style={{zoom:"80%"}}>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{display:"flex", flexDirection:'column', marginLeft:'400px'}}>

     <Navbar/>
      
        <Card />
        
       
    
      <Linechart/>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"2.5%"}}>
      <Piechart/>
      <ScheduleCard/>
      
      </div>
      
      </div>
     
    </div>
    </div>
  );
}
