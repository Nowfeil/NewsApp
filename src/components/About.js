import React from 'react';

const About = () => {
  return (
    <div className="container m-5"><br></br>
      <h2>About Our News App</h2>
      <p>Welcome to our news app! We strive to provide you with the latest and most relevant news from around the world.</p>
      <h3 className='my-5'>Features:</h3>
      <ul>
        <li>View top headlines from various categories such as business, entertainment, health, science, sports, and technology.</li>
        <li>Stay updated with breaking news and trending stories.</li>
        <li>Customize your news feed by selecting your preferred country and category.</li>
        <li>Read full articles by clicking on the news headlines.</li>
        <li>Enjoy a seamless and intuitive user experience.</li>
      </ul>
      <h3 className='my-5'>Our Mission:</h3>
      <p>Our mission is to empower individuals with access to reliable and diverse news sources. We believe in the importance of staying informed and aim to make the news accessible to everyone.</p>
      <h3 className='my-5'>Contact Us:</h3>
      <p>If you have any questions, suggestions, or feedback, please feel free to contact us at <a href="mailto:mohammednowfeiladnan@gmail.com">mohammednowfeiladnan@gmail.com</a>.</p>
    </div>
  );
}

export default About;
