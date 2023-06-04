import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UseManageUser = () => {

    const {data:users=[],refetch} = useQuery(['users'],async ()=>{
        const res = await fetch('http:localhost:5000/users')
        return res.json();
    })
    return [users,refetch]
};

export default UseManageUser;