import React, { useState } from 'react';

 const Friend = () => {
    const [friend,setFriend] = useState({})
    const [isLoading,setLoading ] = useState(false);
    const [hasError ,setError   ] = useState(false);
  async  function getFriend () {
      try {
        setLoading(true)
        const res = await fetch('https://www.randomuser.me/api?results=1');
        const data = await res.json()
        setFriend(data.results[0])  
        setLoading(false)
      }catch (err){
        setError(true)
        console.error(err)
      }

    }
    return(
        <div>
        <Button handleFriend = {getFriend}/> 
        <FriendProfile 
        // friend = {friend}
        friendHolder = {{friend   : friend ,
                         hasError : hasError,
                         isLoading : isLoading
                        }}
        />
        </div>
    );
}
 
const Button = (props) => <button onClick={props.handleFriend}>Get a friend</button>;
 
const FriendProfile = ({friendHolder}) => {
    const {friend,isLoading,hasError} = friendHolder;
    return ( 
        <div>
            {isLoading && <p>Loading ...</p>}
            { !hasError && friend.name &&
            <ul>
            <li>First Name : {friend.name.first}</li>
            <li>Last Name : {friend.name.last}</li>
            <li>{`Address : 
            ${friend.location.street.name}  
            ${friend.location.street.number},
            ${friend.location.postcode},
            ${friend.location.city},
            ${friend.location.state},
            ${friend.location.country}
            `}</li>
            <li>email : {friend.email}</li>
            <li>phone number : {friend.phone}</li>
            </ul>
        
            }
            
        </div>
   );
}

export default Friend;