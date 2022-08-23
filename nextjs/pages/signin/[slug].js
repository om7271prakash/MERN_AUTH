import React, { useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const router = useRouter();

    const { slug } = router.query;

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const phoneHandler = (e) => {
        setPhone(e.target.value);
    }

    return(
        <div>
            {slug === "email" && (
                <div>
                    <input 
                        type="text" 
                        onChange={usernameHandler} 
                        value={username} 
                        placeholder="Username"
                    /><br /><br />
                    <input 
                        type="password" 
                        onChange={passwordHandler} 
                        value={password}
                        placeholder="Password"
                    /><br /><br />
                    <button 
                        onClick={async () => {
                            signIn(
                                'email', 
                                {
                                    redirect: false, 
                                    username, 
                                    password 
                                }
                            )
                            .then(res => {
                                if(res.error){
                                    console.log("response >>>>>>", res);
                                }else{
                                    router.push('/profile/edit');
                                }
                            })
                            .catch(error => {
                                console.log("Error ", error);
                            })
                        }}
                    >
                        Login With Email
                    </button>
                </div>
            )}
            {slug === "whatsapp" && (
                <div>
                    <input 
                        type="number" 
                        onChange={phoneHandler} 
                        value={phone}
                        placeholder="Phone Number"
                    /><br /><br />
                    <button onClick={() => signIn('whatsapp', { phone }) }>
                        Login With Whatsapp
                    </button>
                </div>
            )}
        </div>
    )

}

export default Signin;