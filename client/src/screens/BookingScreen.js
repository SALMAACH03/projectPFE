import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../component/Loader';
import Error from '../component/Error';

function BookingScreen() {
  const { roomid } = useParams();
  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post('/api/rooms/getroombyid', {
          roomid
        });
        const data = response.data;
        setRoom(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [roomid]);

  return (
    <div>
            {loading ?(
                <h1><Loader/></h1>
            ):room ? (<div className='m-5'>
                <div className='row justify-content-center mt-5 bs'>
                    <div className='col-md-6'>
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className='bigimg'/>
                    </div>
                    <div className='col-md-6'>
                       <div style={{textAlign:'right'}}>
                       <h1>Booking Details</h1>
                        <hr/>
                        <b>
                            <p>Name : </p>
                            <p>From Date : </p>
                            <p>To Date : </p>
                             <p>Max Count : {room.maxcount}</p>

                        </b>
                       </div>
                       
                            
                        <div style={{textAlign:'right'}}>
                        <b>
                       <h1>Amount</h1>
                            <hr/>
                            <p>Total days</p>
                            <p>Rent per day : {room.rentperday}</p>
                            <p>Total Amount</p>
                       </b>
                        </div>
                        <div style={{float:'right'}}>
                            <button className='btn btn-primary'> Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
               
                
            ):(
              <h1><Error/></h1>
          )
        }
       
      
    </div>
  );
}

export default BookingScreen;