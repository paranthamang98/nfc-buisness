import React ,{useState , useEffect} from 'react'
// import  logo from '../image/Group 19.png'
import Header from './Header'
import SideMenu from './SideMenu'
import ReactDOM from 'react-dom';
import Donut from 'react-donut';
import  axios  from 'axios'
import DonutChart from 'react-donut-chart';




function DashboardPage() {

  const [showSidebar, setShowSidebar] = useState(true);
  const [item , setitem] = useState([])

    const onSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    useEffect(() => {
      const response=async()=>{
         await axios.get("http://localhost:8001/profile").then(response =>   {
           setitem(response.data)
        console.log(response.data)}); 
      }
      response();
  }, []);
  console.log(item, "fun")


  
  console.log(item);
  return (
    <>
      <Header onSidebar={onSidebar}/>
    <div className='side_inner'>
    {showSidebar? <SideMenu />:null}
    <div className='das_body'>
      <h1 className='das_header'>Overview</h1>
      <div className='row'>
        <div className='col-lg-6 col-md-12 '>
        <div className='  total_nu'>
        <p>Total Number of Taps / Scans </p>
          <h1>650</h1>
        </div>
        </div>
        <div className='col-lg-6 col-md-12 '>
          <div className='total_nu'>
          <p> Total Number of Contacts Saved </p>
          <h1>400</h1>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 '>
         
            <div className='count_header'>
            <div className='count_city'>
              <p>Number of Taps / Scans by City</p>
              <div><button>View Report
                </button></div>
        
            
          </div>
          <h2>55</h2>
          <div>
      <DonutChart
  data={[
    {
      value: 41.5,
      label: 'Washington',
      // isEmpty:true
      clickToggle:true
    }, {
      value: 26.1,
      label: 'Los Angeles',
      // isEmpty:true
      clickToggle:true
    }, {
      value: 14,
      label: 'North Coast ',
      // isEmpty:true
      clickToggle:true
    },
    {
      value:  9.1,
      label: 'Great Basin ',
      // isEmpty:true
      clickToggle:true
    },{
      value:  41.5,
      label:'Central California',
      clickToggle:true
    }
   
  ]}
  colors= { ['#D9B648', '#CA9C31', '#1170CB','#E37E06','#854095']}
  colorFunction	={ (colors, index) => colors[(index % colors.length)]}	
  innerRadius ={0.5}
  outerRadius={0.8}
  chartWidth={700}
  chartHeight={300}
  title="Marvel movies that were popular this year"
  // chartThemeConfig={{
  //   series: {
  //     ,
  //   },
  // }}
/>;
          </div>
            </div>
        </div>
        <div className='col-lg-6 col-md-12 '>
          <div className='contacts_saved'>
          <p>Number of Contacts Saved By User</p> 
          <div className='filter_input'><lable>Search</lable><input type="text" placeholder='Search By User Name...'/>
          <div></div></div>
          <div className='contact_list'>
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Saved Contacts</th>
                </tr>
              </thead>
              <tbody>
              {item.map((e) =>(
                <tr key={e.id} >
              <td>{e.id}</td>
              <td><a href='#'>{e.name}</a> </td>
              <td>{e.ContactsCount}</td>
              </tr>
              ))  }
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </div>
   
    </div>
   
    </>
  )
}

export default DashboardPage
