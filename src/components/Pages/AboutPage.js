import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";

//import picture
import headpastor from "../../images/founder.jpg";
import pastormicheal from "../../images/psmicheal.jpg";
import pastordavid from "../../images/psdavid.jpg";
import pastorsimon from "../../images/pssimon.jpg";
import pastorboateng from "../../images/psboateng.jpg";
import pastoralex from "../../images/psalex.jpg";

function AboutPage() {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className=" w-full  bg-gradient-to-r from-cyan-500 to-blue-500 h-[10vh] ">
        <div className="w-full px-2 xl:px-0 xl:w-3/4 mx-auto py-4 text-base  md:text-xl uppercase  flex items-center font-sans font-bold text-white ">
          <div>About Reach Heaven Church International</div>
        </div>
      </div>
      <div className="w-full px-2 xl:px-0 xl:w-3/4 mx-auto mt-4 text-sm lg:text-base md:flex md:justify-between">
        <div className="w-full">
          <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
            Our History
          </h2>
          <p>
            Reach Heaven Church International was founded in 1995 by Pastor Vera
            Duah. The church started as a small Bible study group in their home,
            but quickly grew as more people joined and the need for a larger
            space became evident. In 1998, the church moved into its current
            location, a spacious and modern facility in the heart of the city.
            Over the years, Reach Heaven Church International has become known
            for its dynamic worship services, engaging Bible studies, and
            commitment to serving the community. The church has also established
            a strong presence online, with a robust website and social media
            presence that reaches people all over the world. Today, Reach Heaven
            Church International continues to grow and thrive under the
            leadership of Pastor Vera Duah and a team of dedicated staff and
            volunteers. We remain committed to our mission of spreading the love
            of God to all people and providing a place where individuals and
            families can grow in their faith and connect with others in the
            community.
          </p>
        </div>

        <div className="w-3/4 ml-2 flex justify-end">
          <img
            src="./images/RHC-chapel.png"
            className="w-full md:w-3/4 mb-8 rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="w-full mt-4">
        <div className="w-full px-4 xl:px-0 xl:w-3/4 mx-auto mt-4 text-sm lg:text-base md:flex md:justify-between">
          <div className="w-full">
            <img
              src="./images/RCH-inside.png"
              className="w-full md:w-3/4 mb-8 rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full ">
            <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
              About Us
            </h2>
            <p>
              Welcome to Reach Heaven Church International! We are bible
              believing church, and we believe in the holy trinity, ie.God the
              father, God the son and God the Holo spirit. Our mission is to
              spread the love of God to all people, and we believe that everyone
              is welcome in Reach Heaven Church Int., regardless of their
              background or beliefs. At Reach Heaven, we offer a variety of
              programs and services designed to help you grow in your faith and
              deepen your relationship with God.
              <br></br> We have Sunday worship services, Bible study groups,
              youth and children's ministries, and various outreach programs to
              serve our community. Reach Heaven Church Int. is committed to
              providing a warm and welcoming atmosphere for everyone who walks
              through our doors. We believe that the church is not just a
              building, but a community of people who come together to support
              and encourage one another in their faith journeys. Whether you are
              a lifelong Christian or are just starting to explore your faith,
              we invite you to join us in worship and fellowship. Our hope is
              that you will find a home in our church and that your relationship
              with God will be strengthened through your time here. Thank you
              for visiting our website, and we hope to see you soon!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-3/4 px-2 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 mt-4 gap-4 text-base text-gray-700">
        <div className="w-full text-justify text-base  mx-2 bg-gray-100 rounded-2xl p-2 ">
          <h2 className="text-center text-lg font-serif font-semibold text-blue-700 uppercase">
            Vision
          </h2>
          To be a worldwide church that demostrate the love of God and reach
          individuals with the presence of God
        </div>

        <div className="w-full text-justify  text-base mx-2 bg-gray-100 rounded-2xl p-2">
          <h2 className="text-center text-lg font-serif font-semibold text-blue-700 uppercase ">
            Mission
          </h2>
          We are a chrismatic and pentecostal Church that obey the word of God.
          We believe in winning souls through the preaching of the Godpel,
          accompanied by signsnd wonders, empowered by the holy spirit to raise
          God-filled Youth and children in changing this generation and beyond
        </div>
        <div className="w-full text-justify  text-base  mx-2 bg-gray-100 rounded-2xl p-2">
          <h2 className="text-center text-lg font-serif font-semibold text-blue-700 uppercase ">
            Core Value
          </h2>
          Our core values are the foundation of everything we do. These values
          guide us in our relationships with God, with one another, and with the
          world around us. Our core values include<br></br>Love, worship,
          Discipleship, Community, Outreach.<br></br>These core values are at
          the heart of everything we do at Reach Heaven Church International,
          and we invite you to join us as we live them out in our daily lives
        </div>
      </div>

      <div className="w-full px-2 xl:px-0 xl:w-3/4 mx-auto mt-4 leaders">
        <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
          Leadership
        </h2>
        <div className="lg:w-3/4 lg:mx-auto text-center text-lg mt-4 font-serif font-semibold text-blue-700 uppercase">
          Head Pastors
        </div>
        <div className="lg:w-[5rem] lg:mx-auto  border-b-4 pl-4 border-b-yellow-500"></div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8 ">
          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img src={headpastor} alt="Reach heaven leaders" className="" />
              <p>Ps. Vera Duah </p>

              <span className=" text-yellow-500 font-serif font-semibold">
                Head Pastor & Founder
              </span>
            </div>
          </div>

          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img src={pastordavid} alt="Reach heaven leaders" className="" />

              <p>Ps. David Duah</p>

              <span className=" text-yellow-500 font-serif font-semibold">
                Assistant Pastor
              </span>
            </div>
          </div>

          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img
                src={pastormicheal}
                alt="Reach heaven leaders"
                className=""
              />

              <p>Ps. Micheal</p>
              <span className=" text-yellow-500 font-serif font-semibold">
                Resident Pastor
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 lg:mx-auto text-center text-lg mt-4 font-serif font-semibold text-blue-700 uppercase">
          Branch Pastors
        </div>
        <div className="lg:w-[5rem] lg:mx-auto  border-b-4 pl-4 border-b-yellow-500"></div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8 ">
          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img src={pastorsimon} alt="Reach heaven leaders" className="" />

              <p>
                Ps. Simon<br></br>
                <span className="text-lg text-yellow-500 font-serif font-semibold">
                  Asikem Branch
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img
                src={pastorboateng}
                alt="Reach heaven leaders"
                className=""
              />

              <p>
                Ps. Boateng <br></br>
                <span className="text-lg text-yellow-500 font-serif font-semibold">
                  Amanfrom Branch
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img src={pastoralex} alt="Reach heaven leaders" className="" />

              <p>
                Ps. Alex <br></br>
                <span className="text-lg text-yellow-500 font-serif font-semibold">
                  Asiakwa Branch
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default AboutPage;
