import React from "react";
import { unstable_getServerSession } from "next-auth/next";
import { nextAuthOptions } from '../api/auth/[...nextauth]';
import { signIn } from "next-auth/react";
import Link from "next/link";

const Index = (props) => {
    console.log("props >>> ", props)
    return(
        <div>
            <button onClick={() => signIn('google') }>
                Login With Google
            </button><br /><br />
            <Link
                href={{
                pathname: '/signin/[slug]',
                query: { slug: 'email' },
                }}
            >
                <button>Login With Email</button>
            </Link><br /><br />
            <Link
                href={{
                pathname: '/signin/[slug]',
                query: { slug: 'whatsapp' },
                }}
            >
                <button>Login With Whatsapp</button>
            </Link>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, nextAuthOptions);
    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {
            session
        }
    }
}

export default Index;