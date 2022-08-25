import { useEffect, useState } from "react";

const UseToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        if (email) {
            fetch(`https://serene-scrubland-02767.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })

            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('JSON_TOKEN', data.token)
                    // console.log('inside token',data)
                    setToken(data.token)
                })
        }
    }, [user])
    return [token]
}
export default UseToken;