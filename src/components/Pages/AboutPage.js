import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-[10vh] ">
        <div className="w-full px-4 xl:px-0 xl:w-3/4 mx-auto py-4 text-base  md:text-xl uppercase  flex items-center font-mono font-bold text-white drop-shadow-md ">
          <div>About Reach Heaven Church International</div>
        </div>
      </div>
      <div className="w-full px-4 xl:px-0 xl:w-3/4 mx-auto mt-4 text-sm lg:text-base md:flex md:justify-between">
        <div className="w-full">
          <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
            Our History
          </h2>
          <p>
            Reach Heaven Church International was founded in 1995 by Pastor John
            and Mary Smith. The church started as a small Bible study group in
            their home, but quickly grew as more people joined and the need for
            a larger space became evident. In 1998, the church moved into its
            current location, a spacious and modern facility in the heart of the
            city. Over the years, Reach Heaven Church International has become
            known for its dynamic worship services, engaging Bible studies, and
            commitment to serving the community. The church has also established
            a strong presence online, with a robust website and social media
            presence that reaches people all over the world. Today, Reach Heaven
            Church International continues to grow and thrive under the
            leadership of Pastor John Smith and a team of dedicated staff and
            volunteers. We remain committed to our mission of spreading the love
            of God to all people and providing a place where individuals and
            families can grow in their faith and connect with others in the
            community.
          </p>
        </div>

        <div className="w-3/4 ml-4 flex justify-end">
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
              Welcome to Reach Heaven Church International! We are a community
              of believers who gather together to worship Jesus Christ, our Lord
              and Savior. Our mission is to spread the love of God to all
              people, and we believe that everyone is welcome in Reach Heaven
              Church Int., regardless of their background or beliefs. At Reach
              Heaven, we offer a variety of programs and services designed to
              help you grow in your faith and deepen your relationship with God.
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

      <div className="w-full xl:w-3/4 px-4 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 mt-4 gap-4 text-base text-gray-700">
        <div className="w-full text-justify text-base  mx-2 ">
          <h2 className="text-center text-lg font-serif font-semibold text-blue-700 uppercase">
            Vision
          </h2>
          Our vision at Reach Heaven Church International is to be a church that
          impacts the world with the love of Jesus Christ. We believe that God
          has called us to be a light in the darkness and to share His message
          of hope and salvation with everyone we meet.
          <br></br>
          We envision a church where people of all ages, backgrounds, and walks
          of life can come together to worship God, grow in their faith, and
          serve others. We strive to create an environment that is welcoming,
          inclusive, and supportive, where everyone feels valued and loved.
        </div>

        <div className="w-full text-justify  text-base mx-2">
          <h2 className="text-center text-lg font-serif font-semibold text-blue-700 uppercase ">
            Mission
          </h2>
          Our mission at Reach Heaven Church International is to bring people
          into a personal relationship with Jesus Christ, to equip them with the
          tools they need to grow in their faith, and to empower them to share
          His love with the world.<br></br>As a church, we are also committed to
          serving our community and making a positive impact on the world around
          us. We believe that we are called to be the hands and feet of Jesus,
          and we are dedicated to reaching out to those who are hurting,
          marginalized, and in need of love and support.
        </div>

        <div className="w-full text-justify  text-base  mx-2">
          <h2 className="text-center text-lg font-serif font-semibold text-blue-700 uppercase ">
            Core Value
          </h2>
          At Reach Heaven Church International, our core values are the
          foundation of everything we do. These values guide us in our
          relationships with God, with one another, and with the world around
          us. Our core values include<br></br>Love, worship, Discipleship,
          Community, Outreach.<br></br>These core values are at the heart of
          everything we do at Reach Heaven Church International, and we invite
          you to join us as we live them out in our daily lives
        </div>
      </div>

      <div className="w-full px-4 xl:px-0 xl:w-3/4 mx-auto mt-4">
        <h2 className="text-left text-2xl font-serif font-semibold text-blue-700 uppercase border-l-4 pl-4 border-l-yellow-500">
          Leadership
        </h2>

        <div className="w-full bg-gray-900 text-white mx-auto md:flex md:justify-between mt-4 py-2 text-sm lg:text-base text-justify  ">
          <div className=" mx-8 ">
            <p>
              <h3 className="text-yellow-500 font-semibold font-sans text-lg uppercase">
                Message from ps. Vera Due <br></br>
                <span className="text-sm text-gray-400">(Founder)</span>
              </h3>
              Dear beloved friends and fellow believers,<br></br>I am honored
              and humbled to address you today as the founder of Reach Heaven
              Church International. When I started this church, I did so with a
              deep sense of calling and purpose, and a burning desire to create
              a community of faith that would be a beacon of hope and love to
              all who came through our doors.<br></br> Over the years, I have
              watched with great pride as our community has grown and
              flourished, and as we have come together to worship, study God's
              word, and serve our community. We have faced many challenges and
              obstacles along the way, but through it all, we have remained
              steadfast in our commitment to God and to one another.<br></br> As
              we look to the future, I am filled with hope and anticipation for
              what God has in store for us. I believe that we are on the cusp of
              a new season of growth and expansion, and that He has great things
              in store for us as we continue to seek His will and follow His
              leading.<br></br> To all of you who have been a part of this
              journey, I want to express my deepest gratitude and appreciation.
              Your faithfulness, dedication, and love have been an inspiration
              to me and to everyone who has been touched by our ministry. I am
              honored to call you my brothers and sisters in Christ, and I look
              forward to continuing to walk alongside you as we fulfill our
              mission and vision.<br></br> May God bless you abundantly, and may
              His love and grace be evident in every aspect of your life. With
              love and gratitude -
              <span className="text-yellow-500 font-medium italic">
                Ps. Vera Dua
              </span>
            </p>
          </div>

          <div className="">
            <img
              src="./images/founder.jpg"
              alt="Reach Heaven Founder"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 ">
          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img
                src="./images/leadership.jpg"
                alt="Reach heaven leaders"
                className="w-48 h-48 rounded-full"
              />

              <p>Pst. Exercitation incididunt </p>
            </div>
          </div>

          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img
                src="./images/leadership.jpg"
                alt="Reach heaven leaders"
                className="w-48 h-48 rounded-full"
              />

              <p>Pst. Exercitation incididunt </p>
            </div>
          </div>

          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img
                src="./images/leadership.jpg"
                alt="Reach heaven leaders"
                className="w-48 h-48 rounded-full"
              />

              <p>Pst. Exercitation incididunt </p>
            </div>
          </div>

          <div className="w-full mt-2 text-center flex justify-center">
            <div>
              <img
                src="./images/leadership.jpg"
                alt="Reach heaven leaders"
                className="w-48 h-48 rounded-full"
              />

              <p>Pst. Exercitation incididunt </p>
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
