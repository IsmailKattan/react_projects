import Alert from "./components/ui/alert/Alert"
import { Ban, Bell, Info, CheckCheck, TriangleAlert   } from 'lucide-react';

const App = () => {
  return (
    <div>
      <Alert 
        type={"alert-default"} 
        headerIcon={<Bell size={20}/>} 
        title="Default Alert">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <a href="">Deleniti</a> eum autem itaque aliquid aut blanditiis quae provident ratione iure quos.
        </p>

      </Alert>
      <Alert 
        type={"alert-info"} 
        headerIcon={<Info size={20}/>} 
        title="Nevet Forget ToDo Somthing" 
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio culpa ducimus minus. Tempore, aliquid ullam illo nulla modi molestiae repudiandae." 
      />  
      <Alert 
        type={"alert-success"} 
        headerIcon={<CheckCheck  size={20}/>} 
        title="Login Successful" 
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio culpa ducimus minus. Tempore, aliquid ullam illo nulla modi molestiae repudiandae." 
      />
      <Alert 
        type={"alert-error"} 
        headerIcon={<Ban size={20}/>} 
        title="Something Went Wrong" 
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio culpa ducimus minus. Tempore, aliquid ullam illo nulla modi molestiae repudiandae." 
      />
      <Alert 
        type={"alert-warning"} 
        headerIcon={<TriangleAlert  size={20}/>} 
        title="Caannot Login Without Email Verification" 
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio culpa ducimus minus. Tempore, aliquid ullam illo nulla modi molestiae repudiandae." 
      />
      
    </div>
  )
}
export default App

