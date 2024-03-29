

const BookingRow = ({booking , handleDelete}) => {

    const { _id,  date, service , price , img} = booking


    


    return (
        <div>
              {/* row 1 */}
      <tr>
        <th>
        <button onClick={ () => handleDelete(_id) } className="btn btn-sm  btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          
            <div className="avatar">
              <div className="mask rounded  w-24 h-24">

               { img&&
                 <img src={img} alt="Avatar Tailwind CSS Component" />
               }

              </div>
            </div>
           
          
        </td>
        <td>
         { service }
          
          
        </td>
        <td>{date}</td>
        <td>${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </div>
    );
};

export default BookingRow;