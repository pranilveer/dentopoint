import { useState } from 'react'
import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="container">
      <div id="home">
        <Navbar onMenuToggle={() => setMenuOpen((prev) => !prev)} />
        <div id="hometext">
          <p>Expert dentist in New York city</p>
          <p>
            Dental <br />
            Care
          </p>
          <button>Book appointment</button>
        </div>
        <div id="homeimg">
          <img src="./assets/landing.png" alt="" />
          <div id="scrollarrow">
            <div id="arrow">
              <a href="#secondpage">
                <i className="ri-arrow-left-line"></i>
              </a>
            </div>
            <p>Scroll to Experience</p>
          </div>
        </div>
      </div>

      <div id="secondpage">
        <div className="secdiv">
          <div className="doubleimg">
            <div className="roundimgdiv">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className="roundimgdiv">
              <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className="roundimgdiv">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className="roundimgdiv">
              <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className="roundimgdiv">
              <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className="roundimgdiv">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
            </div>
          </div>
          <h1>Crafting Healthy Smiles One Service at a Time</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime praesentium assumenda molestias error, saepe similique sed pariatur optio ab. Ab vitae veniam sapiente odio amet natus, labore totam esse porro iusto deleniti eos quasi fugiat cumque, possimus perferendis quam.</p>
          <button>About Clinik</button>
        </div>
        <div className="secdiv">
          <div className="secimgdiv">
            <img src="./assets/medical.png" alt="" />
          </div>
        </div>
      </div>

      <div id="thirdpage">
        <div id="thirdmain">
          <div className="thirdmindiv">
            <div className="thirdmindivtop">
              <p>Elevating Oral Health <br /> With Personalized <br /> Services</p>
            </div>
            <div className="thirdmindivtop">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit magni facere libero, consectetur earum corporis non, mollitia maxime dolores voluptates est et sunt, aliquid a</p>
              <button>All Services <i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
          <div className="thirdmindiv">
              {[
              { title: ['General', 'dentistry'], items: ['Lorem ipsum dolor sit amet.', 'Lorem, ipsum.', 'Lorem ipsum dolor sit amet consectetur.'] },
              { title: ['Cosmetic', 'dentistry'], items: ['Lorem ipsum dolor sit amet.', 'Lorem, ipsum.', 'Lorem ipsum dolor sit amet consectetur.'] },
              { title: ['Restorative', 'dentistry'], items: ['Lorem ipsum dolor sit amet.', 'Lorem, ipsum.', 'Lorem ipsum dolor sit amet consectetur.'] },
            ].map((card, i) => (
              <div className="thirdcard" key={i}>
                <i className="ri-arrow-right-up-line"></i>
                <h1>{card.title[0]} <br /> {card.title[1]}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium rerum facere dicta voluptatibus, eum in ab doloremque explicabo officia.</p>
                <hr />
                <ul>
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="fourthpage">
        <div className="fourthdivs">
          <h1>Mordern Dentistry With a Personal Touch</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad impedit sed! Aut, exercitationem perferendis asperiores numquam tenetur alias assumenda aperiam consectetur hic odio et harum id, omnis quos delectus!</p>
        </div>
        <div className="fourthdivs">
          <div className="fourthmid">
            <h1>Innovation technology</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in provident veritatis dignissimos odio obcaecati quia totam ipsam labore molestiae. Lorem ipsum dolor sit</p>
          </div>
          <div className="fourthmid"></div>
        </div>
        <div className="fourthdivs">
          <div className="fourthfoot">
            <h1>Qualified staff</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero repudiandae unde nam odio aperiam ducimus esse tempore eius voluptatibus cumque.</p>
          </div>
          <div className="fourthfoot"></div>
          <div className="fourthfoot">
            <h1>Comfortable and coziness</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quo temporibus repellat sapiente minima harum aperiam laborum sed dolor iure?</p>
          </div>
        </div>
      </div>

      <div id="fifthpage">
        <div id="fifthdiv">
          <div className="fifthcontent">
            <p>Happy Smile</p>
            <p>2024</p>
          </div>
          <div className="fifthcontent">
            <div className="fifthmain">
              <h1>Patients Gave Lots of Love</h1>
              <div className="fifthdual">
                {[
                  { name: 'Alice Thompson', role: 'Senior Doctor', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                  { name: 'Emily Devis', role: 'Doctor', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
                ].map((review, i) => (
                  <div className="fifthcard" key={i}>
                    <div className="profile">
                      <div className="profileimg">
                        <img src={review.img} alt="" />
                      </div>
                      <div className="protext">
                        <h3>{review.name}</h3>
                        <p>{review.role}</p>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit nesciunt aperiam dolor velit quis officiis deserunt repellat iure temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quasi! Voluptatem sit assumenda quam ipsa quas soluta aliquam delectus quidem.</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="fifthmain">
              <div id="candidimg">
                <img src="./assets/candid.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="foot">
        <div className="footdiv">
          <div className="footimg">
            <img src="./assets/Dentist.jpg" alt="" />
          </div>
        </div>
        <div className="footdiv">
          <div className="foothead">
            <h1>Book Online</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
          </div>
          <form>
            <div className="row">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" required />
              <label htmlFor="time">Time</label>
              <input type="time" id="time" name="time" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your Message"></textarea>
              <button type="submit">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>

      <footer>
        <p>Copyright &copy; <span><a href="https://www.instagram.com/rick_u_/">Bharadwaja Sahoo</a></span> 2024.</p>
      </footer>

      <MenuBar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}
