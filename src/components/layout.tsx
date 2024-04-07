import React, { PropsWithChildren } from 'react';
import { Navbar } from "@/components/navbar";
import  Footer  from "@/components/footer";
import "../../styles/globals.css"
const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen ">
            <Navbar className="pacifico-regular sticky top-0 z-50 w-full overflow-x-hidden"/>
                {children}
            <Footer className="pacifico-regular"/>
        </div>
);
};

export default Layout;