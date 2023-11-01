import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const CheckOut = () => {

    const service = useLoaderData();

    const { title , _id , price, img} = service;


    const {user} = useContext(AuthContext)


    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target ;

        const name = form.name.value ;

        const date = form.date.value ;

        const email = user?.email;

        const booking ={

            customerName : name ,
            email,
            img,
            date,
            service : title ,
            service_id : _id ,
            price : price 

        }

        console.log(booking);
        // send BOOKING data to the backend 

        fetch('http://localhost:5000/bookings',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'

            },
            body : JSON.stringify(booking)

        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })
    }

    return (



       




        <div>

            <h3 className="text-3xl font-semibold text-center underline"> Book your Service : {title} </h3>


      
    
    
      <form onSubmit={handleBookService} className="card-body">

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"
          defaultValue={user?.displayName}
           name='name' className="input input-bbookinged" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' className="input input-bbookinged" required />
         
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name='email' 
          placeholder="email"
          defaultValue={user?.email}
           className="input input-bbookinged" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text"
          defaultValue={ '$ '+ price}
           className="input input-bbookinged" required />
          
        </div>


       


        <div>
        <input className="btn btn-primary btn-block" type="submit" value='booking confirm' />
        </div>
       
       </div>
      </form>
    </div>
  
            
        
    );
};

export default CheckOut;