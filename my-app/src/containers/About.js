import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container col-md-5">
        <h3>สวัสดีครับ</h3>
        <p className="text-justify mt-4 mb-4">
          นี่คือโปรเจ็กแรกในการสร้างเว็บสมัยใหม่ด้วย React JS
          หากมีข้อผิดพลาดประการใด ต้องขออภัยมา ณ ที่นี่ด้วยครับ ขอบคุณครับ
        </p>
        <h4>จาก เฮลตี้ คาเฟ่</h4>
      </div>

      <Footer company="thissurache.online" email="surache2543@gmail.com" />
    </div>
  );
};

export default About;
