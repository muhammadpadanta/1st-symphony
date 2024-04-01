import React, { PropsWithChildren } from 'react';
import { NavbarMenu } from "@/components/navbar";
import Footer from "@/components/footer";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarMenu />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;