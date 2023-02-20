import React, { useEffect, useState } from 'react';

const useToken = ({ email }) => {
    const { token, setToken } = useState()

    useEffect(() => {

        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToken(data)
            })

    }, [email, setToken])

    return [token]
};

export default useToken;