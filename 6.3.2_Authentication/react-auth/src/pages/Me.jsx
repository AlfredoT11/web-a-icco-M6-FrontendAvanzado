import { useEffect, useState } from "react";
import axios from "axios";

const Me = () => {

    const [meData, setMeData] = useState(null);

    const requestMeData = async () => {
        try{
            const response = await axios.get('http://localhost:3000/users/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setMeData(response.data);
            //console.log(meData);
        }catch(error){
            console.log('An error ocurred', error);
        }
    }

    useEffect(() => {
        requestMeData();
    }, []);

    return (
        <>
            <h1>My information</h1>

            <p>
                {JSON.stringify(meData)}
            </p>
        </>
    )

}

export default Me;