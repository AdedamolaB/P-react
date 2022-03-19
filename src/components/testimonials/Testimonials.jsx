import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Cassica Rothers",
      title: "Developer Advocate",
      img:
        "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/54196007/original/13151508_10154251751462022_3771276453497949143_n.jpg",
      // icon: "assets/twitter.png",
      desc:
        "He has an amazing work ethic and is incredibly obliging. Thank you for all your efforts!",
    },
    {
      id: 2,
      name: "Albert Oborghesi",
      title: "Facebook advertising expert",
      img:
        "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/2b42321e14a5173130a1f17ea07215ee-1535310628193/942165_601204806556663_842716887_n.jpg",
      // icon: "assets/youtube.png",
      desc:
        "He has an amazing work ethic and goes over and beyond to ensure you are completely satisfied with his work.",
      featured: true,
    },
    {
      id: 3,
      name: "Ahmet Raokartal",
      title: "Web Developer",
      img:
        "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/48abe72ee42d20da68e23ee1be50eee6-1609702901236/c327cfc3-ea3d-436e-8a1d-9b40ed7b9f73.jpg",
      // icon: "assets/linkedin.png",
      desc:
        "Thank you very much. Looking forward to working with you on any other project.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
