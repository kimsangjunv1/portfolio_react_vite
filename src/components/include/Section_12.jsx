import React from "react";

const Section_12 = () => {
  return (
    // <!-- VUE API UNSPLASH : section12-->
    <section style={{ background: "#31826ed3" }} className="section vr4 t_vr">
      <div className="section12_all_cont">
        <img
          className="section12_lama"
          src="src/assets/img/section12_lama.svg"
          alt=""
        />
        <div className="section12_desc_cont">
          <div className="title_wrap">
            <p className="title">
              VUE API
              <br />
              <em>PICTURE</em>
            </p>
            <p className="sub_ttitle">UNSPLASH</p>
          </div>
          <p>
            UNSPLASH API를 통해 VUE를 이용해서 좋아하는 사진을 Swiper와 함께
            구현하였습니다.
          </p>
          <div className="section_rv_button_cont">
            <a href="https://github.com/kimsangjunv1/vue_api">CODE</a>
            <a href="https://vueapi11.netlify.app/unsplash">VIEW</a>
          </div>
        </div>
        <div className="section12_logo_cont">
          <img
            className="sec12_logo"
            src="src/assets/img/section10_logo.png"
            alt=""
          />
          <img
            className="sec12_bg polygon_reverse"
            src="src/assets/img/section12_logo_bg.jpg"
            alt=""
          />
        </div>
        <div style={{ background: "#d94d38d6" }} className="color_bg"></div>

        <img
          className="section12_main_screenshot"
          src="src/assets/img/section12_screenshot_01.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_12;