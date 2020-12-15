import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFond = () => {
  return (
    <div>
      <Header />
      <div className="container col-md-8 text-center">
        <h1  className="mt-5 text-danger" style={{fontSize:120}}>404</h1>
        <h2 className="mb-4" style={{fontSize:50}}>Not Fond</h2>
        <h4 className="mb-5">
          ขอภัย ไม่พบหน้าที่คุณค้นหา หน้าเว็บอาจเปลี่ยนหรือไม่มีอยู่อีกต่อไป{" "}
        </h4>
      </div>
      <Footer />
    </div>
  );
};

export default NotFond;
