import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../component/Room';
import Loader from '../component/Loader';
import Error from '../component/Error';

function HomeScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/rooms/getallrooms');
        const data = response.data;
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        {loading ? (
          <Loader key='loader' />
        ) : error ? (
          <Error key='error' />
        ) : (
          rooms.map((room) => (
            <div className='col-md-9 mt-3' key={room.id}>
              <Room room={room} key={room.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
