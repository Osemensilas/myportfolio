import Head from "next/head";

const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Generated by create next app" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="shortcut icon" href="Head_icon.png" type="image/x-icon"></link>
        </Head>
        <main id="main">
            {children}
        </main>
        </>
     );
}
 
export default Layout;