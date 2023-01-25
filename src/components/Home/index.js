import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile-size"
      />
      <h1 className="profile-name">Wade Warren</h1>
      <p>Software Developer UK</p>
    </div>
    <BlogList />
  </div>
)

export default Home
