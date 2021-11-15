import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    // const history = useHistory();
    console.log(user);
    
    useEffect(() => {
        fetch(`https://limitless-coast-09907.herokuapp.com/booked_service`
            )
            .then(res => res.json())
            .then(data => setOrders(data.orders));
    }, [])
    const handleRemoveOrder = (id)=>{
        const confirm = window.confirm('Are You Sure To Delete?')
        if(confirm){
            const url = `https://limitless-coast-09907.herokuapp.com/booked_service/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Deleted Successfully')
                const remainingUsers =orders.filter(order => order._id !== id);
                setOrders(remainingUsers);
            }
        })
        }
    }

    return (
        <div>
            <h2>Total order Placed: {orders.length} Orders</h2>
            <ol >
                {orders.map(order => <li 
                    key={order._id}
                >Name: {order.name} <br /> Email: {order.email} <button onClick={()=>handleRemoveOrder(order._id)}>Delete Order</button></li>)}
            </ol>
        </div>
    );
};

export default Orders;
