
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <>
      <Header></Header>
      {children}
      <Footer></Footer>

     
      







   







    </>
     
   
  );
}
