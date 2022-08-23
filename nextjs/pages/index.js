import Login from '../components/Login'
import { useSession } from "next-auth/react"
import jwt from "jsonwebtoken";

const Home = () => {
    const { data: session, status } = useSession();

    console.log("session >> ", session);
    const getToken = async () => {
        const decodedToken = await jwt.verify(session.token, process.env.NEXTAUTH_SECRET);
        console.log(decodedToken);
    }

    if(session){
        getToken()
    }
    return (
        <div>
            <Login />
        </div>
    )
}

export default Home;