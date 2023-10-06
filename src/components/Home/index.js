import {Component} from 'react'
import './index.css'
import {AiFillCaretDown} from 'react-icons/ai'
import {
  FaUniversity,
  FaGreaterThan,
  FaTasks,
  FaFile,
  FaInfo,
  FaEye,
  FaLink,
  FaShare,
} from 'react-icons/fa'
import {BsFillEyeSlashFill} from 'react-icons/bs'

const school = [
  {sub: '11th Class', des: '182+'},
  {sub: '12th Class', des: '178+'},
  {sub: '6th Class', des: '151+'},
  {sub: '7th Class', des: '150+'},
  {sub: '10th Class', des: '150+'},
  {sub: '9th Class', des: '141+'},
  {sub: '8th Class', des: '135+'},
  {sub: '5th Class', des: '87+'},
]

const competitive = [
  {sub: 'SSC CHSL', des: '29+'},
  {sub: 'SSC CGL', des: '15+'},
  {sub: 'UPSC IAS', des: '8+'},
  {sub: 'SBI Clerk', des: '5+'},
  {sub: 'SSC CPO', des: '5+'},
  {sub: 'SSC MTS', des: '5+'},
  {sub: 'SBI PO', des: '3+'},
  {sub: 'RBI Grade B', des: '3+'},
  {sub: 'UPSC CAPF', des: '3+'},
  {sub: 'IBPS Clerk', des: '3+'},
  {sub: 'SSC JE', des: '2+'},
]

const entrance = [
  {sub: 'VITEEE', des: '6+'},
  {sub: 'CUCET', des: '6+'},
  {sub: 'CAT', des: '5+'},
  {sub: 'XAT', des: '4+'},
  {sub: 'MAT', des: '1+'},
]

class Home extends Component {
  state = {
    students: true,
    parents: false,
    pswdhide: false,
    lists: [],
    values: '',
  }

  studentsLogin = () => {
    this.setState({students: true, parents: false})
  }

  parentslogin = () => {
    this.setState({students: false, parents: true})
  }

  passwordHide = () => {
    const {pswdhide} = this.state
    this.setState(prevState => ({pswdhide: !prevState.pswdhide}))
  }

  onClickSchool = () => {
    this.setState({lists: school, values: 'School'})
  }

  onClickEnterance = () => {
    this.setState({lists: entrance, values: 'Enterance'})
  }

  onClickCompetitive = () => {
    this.setState({lists: competitive, values: 'Competitive'})
  }

  onClickTutors = () => {
    this.setState({values: 'Tutors'})
  }

  render() {
    const {students, parents, pswdhide, values, lists} = this.state

    return (
      <>
        <div className="home1 home">
          <div className="cloud">
            <img
              src="https://schoolaura.com/Content/assets/images/logo_school.png"
              alt="logo"
              className="logo"
            />
          </div>
          <ul className="Menuitems options">
            <li>
              <a href>Home</a>
            </li>
            <li>
              <div className="dropdown">
                <a href>
                  Exam Solution <AiFillCaretDown />
                </a>
                <div className="dropdown-content">
                  <a href>
                    1<sup>st</sup>-12<sup>th</sup> Exam
                  </a>
                  <hr />
                  <a href>Competitive Exam</a>
                  <hr />
                  <a href>Entrance Exam</a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a href>
                  Online Study <AiFillCaretDown />
                </a>
                <div className="dropdown-content">
                  <a href>
                    1<sup>st</sup>-12<sup>th</sup> Exam
                  </a>
                  <hr />
                  <a href>Competitive Exam</a>
                  <hr />
                  <a href>Entrance Exam</a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a href>
                  Tutor Solution <AiFillCaretDown />
                </a>
                <div className="dropdown-content">
                  <a href>Find Tutor</a>
                  <hr />
                  <a href>Become Tutor</a>
                </div>
              </div>
            </li>
            <li>
              <a href>Blogs</a>
            </li>
            <li>
              <a href>Contact Us</a>
            </li>
            <button type="button" className="header-btn school">
              <FaUniversity className="icons" /> School Management
            </button>
          </ul>
          <div className="girl-container">
            <img
              src="https://schoolaura.com/Content/new_assets/images/header/header-girl-icon.png"
              alt="girl"
              className="girl"
            />
            <div className="titles">
              <h1 className="head">
                <span>BE A </span>SMART STUDENT
              </h1>
              <p className="para">SchoolAura Is A Smart Education Platform</p>
              <ul className="ul-container">
                <li className="list-container">
                  <h3>
                    ENTERANCE <br />
                    Solution
                  </h3>
                  <button type="button" className="course-btn">
                    Exam
                  </button>
                  <button type="button" className="course-btn">
                    Courses
                  </button>
                  <h5>
                    READ MORE <FaGreaterThan />
                  </h5>
                </li>
                <li className="list-container">
                  <h3>
                    COMPETITIVE <br />
                    Solution
                  </h3>
                  <button type="button" className="course-btn">
                    Exam
                  </button>
                  <button type="button" className="course-btn">
                    Courses
                  </button>
                  <h5>
                    READ MORE <FaGreaterThan />
                  </h5>
                </li>
                <li className="list-container">
                  <h3>
                    KG - 12
                    <sup>
                      TH
                      <sup />
                    </sup>
                    <br />
                    SCHOOL
                  </h3>
                  <button type="button" className="course-btn">
                    Exam
                  </button>
                  <button type="button" className="course-btn">
                    Courses
                  </button>
                  <h5>
                    READ MORE <FaGreaterThan />
                  </h5>
                </li>
                <li className="list-container">
                  <h3>
                    TUTOR <br />
                    Solution
                  </h3>
                  <button type="button" className="course-btn">
                    Find Tutors
                  </button>
                  <button type="button" className="course-btn">
                    Become Tutor
                  </button>
                  <h5>
                    READ MORE <FaGreaterThan />
                  </h5>
                </li>
                <div className="login-container">
                  <img
                    src="https://schoolaura.com/Content/new_assets/images/header/user-img.png"
                    alt="login"
                    className="login-logo"
                  />
                  <div className="login-option">
                    <p
                      onClick={this.studentsLogin}
                      className={`options ${students ? 'highlight' : ''}`}
                    >
                      Student Login
                    </p>
                    <p
                      onClick={this.parentslogin}
                      className={`options ${parents ? 'highlight' : ''}`}
                    >
                      Parents Login
                    </p>
                  </div>
                  <div className="input-container">
                    <label htmlFor="mobile">
                      {students
                        ? 'Mobile Number or Key'
                        : 'Parent Mobile or Email'}
                    </label>
                    <input id="mobile" type="text" />
                  </div>
                  <div className="input-container">
                    <label htmlFor="password">
                      {students ? 'Student' : 'Parent'} Password
                    </label>
                    <input id="mobile" type={pswdhide ? 'text' : 'password'} />
                    <BsFillEyeSlashFill
                      onClick={this.passwordHide}
                      className="eye"
                    />
                  </div>
                  <button type="button" className="login-btn">
                    Login
                  </button>
                  <p className="forgot-pswd">Forgot Password</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-container">
          <div className="banner">
            <ul className="courses">
              <li>- 256 Courses</li>
              <li>- Expert Teachers</li>
              <li>- Online Education</li>
            </ul>
          </div>
          <div>
            <h1>Why Online Study With SchoolAura</h1>
            <p>
              The world is changing for the better. Because of the advancement
              of
              <br />
              technology, geek minds have grown tired of doing more work, and
              carrying
              <br /> books, notebooks and how much to buy books?
              <br />
              <br /> <span className="side-head">Solution:</span> Now you can
              find a simple solution with schoolaura. In these days
              <br /> almost everyone has a Smartphone, Tab or Laptop. So just
              open your device
              <br /> and start your study from anywhere anytime while you are
              travelling, sitting <br />
              in the park, and etc.
              <br />
              <br />
              Now Use your time and gain knowledge in every second and Use your
              device
              <br /> for right things not for waste your time
            </p>
          </div>
        </div>
        <img
          src="https://schoolaura.com/Content/new_assets/images/banner-2/Layer-20.png"
          alt="group"
          className="group"
        />
        <div className="side-head">
          <h1>
            PROVIDE
            <br />
            <span className="orange">BEST EDUCATIONAL</span>
          </h1>
        </div>
        <div className="course-list">
          <ul>
            <li
              className={values === 'School' ? 'active o-button' : 'o-button'}
              onClick={this.onClickSchool}
            >
              School
            </li>
            <li
              className={
                values === 'Competitive' ? 'active o-button' : 'o-button'
              }
              onClick={this.onClickCompetitive}
            >
              Competitive
            </li>
            <li
              className={
                values === 'Enterance' ? 'active o-button' : 'o-button'
              }
              onClick={this.onClickEnterance}
            >
              Enterance
            </li>
            <li
              className={values === 'Tutors' ? 'active o-button' : 'o-button'}
              onClick={this.onClickTutors}
            >
              Tutors
            </li>
          </ul>
          <ul className="lists-c">
            {values === 'Tutors' ? (
              <p className="side-head">Coming Soon</p>
            ) : (
              <>
                {lists.map(each => (
                  <li className="subject-container">
                    <h1 className="N-letter">N</h1>
                    <div className="ver-container">
                      <p className="orange">{each.sub}</p>
                      <p>{each.des}</p>
                    </div>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        <div className="center-head">
          <h1>
            BENEFITS OF SCHOOLAURA
            <br />
            <span className="orange">FOR STUDENTS</span>
          </h1>
        </div>
        <ul className="task-cont">
          <li className="tasks">
            <FaTasks className="task-icon" />
            <h4 className="h45">Task Activities</h4>
            <p>
              Daily assignments and tasks can be easily completed through online
              availability of information. Subject wise homework can be
              submitted online which helps students to finish their tasks
              online.
            </p>
          </li>
          <li className="tasks">
            <FaFile className="task-icon" />
            <h4 className="h45">Exam Results</h4>
            <p>
              Exam and assessment results of each individual student can be
              seen. The report cards will be generated online for each
              individual student.
            </p>
          </li>
          <li className="tasks">
            <FaInfo className="task-icon" />
            <h4 className="h45">Notice Updates</h4>
            <p>
              The necessary announcements and updates will reach to the students
              and parents quickly.
            </p>
          </li>
          <li className="tasks">
            <FaEye className="task-icon" />
            <h4 className="h45">Monitoring</h4>
            <p>
              All the essential academic and administrative tasks can be easily
              monitored, such as students profile, exam results, fee details,
              transportation details etc.
            </p>
          </li>
          <li className="tasks">
            <FaLink className="task-icon" />
            <h4 className="h45">Connectivity</h4>
            <p>
              When all the information is available online, and is shared
              regularly with parents and students transparency will be
              maintained.
            </p>
          </li>
          <li className="tasks">
            <FaShare className="task-icon" />
            <h4 className="h45">Planning & Sharing</h4>
            <p>
              It becomes important nowadays for students to share their thoughts
              and ideas, SchoolAura Smart Education Platform will provide you a
              perfect stage to showcase and share your brilliant ideas.
            </p>
          </li>
        </ul>
        <div className="mob">
          <img
            src="https://schoolaura.com/Content/new_assets/images/school_aura_app.jpg"
            alt="logos"
            className="mob-ph"
          />
          <div>
            <h1>
              Easy to Access with <span className="orange">Mobile APP</span>
            </h1>
            <p className="mob-para">
              If you're looking for easily accessible resources for your
              classroom, then you're in the right place. Online learning with
              the Android app is very easy to access. That's why we've
              hand-curated the School Aura free app and website. Easy to use and
              learn! <br />
              <br />
              To learn online, you need to be reasonably comfortable with Smart
              Mobile Phone, Tab, Laptops, and the internet. The advantage of
              learning online via an android app is that you can pause the
              video/audio whenever you need to take notes or simply absorb what
              has been said. Another fantastic feature of online learning is
              that you can re-listen to different parts as needed, which is
              something you can't do in a live lecture!
            </p>
            <button className="down" type="button">
              Download Now
            </button>
          </div>
        </div>
        <div className="thumpsup">
          <div>
            <h1 className="side-head">
              Benefits of <br />
              <span className="orange">Online Education</span>
            </h1>
            <div className="contain">
              <h7>
                Online Education increases engagement by adding a human element.
                Studying in the comfort of your own home is convenient, but
                there are various other advantages of online study. It's
                especially beneficial for students who aren't as self-sufficient
                or who are used to the traditional educational model of "teacher
                and class."
              </h7>
              <ul>
                <li className="unor">Time and Location Flexibility</li>
                <li className="unor">Find Unlimited Course Category </li>
                <li className="unor">No Need to Carry Books</li>
                <li className="unor">
                  Get Access in any mobile, Tab, Laptop with your credential{' '}
                </li>
                <li className="unor">
                  Use your time when you are traveling, Outing and free time
                </li>
                <li className="unor">Exam Practice before exam</li>
              </ul>
            </div>
          </div>
          <img
            src="https://schoolaura.com/Content/new_assets/images/spreading/spreading.png"
            alt="#"
          />
        </div>
        <div className="seats-container">
          <div>
            <h1>10000+</h1>
            <p className="orange">Total Exams</p>
          </div>
          <div>
            <h1>600+</h1>
            <p className="orange">Courses</p>
          </div>
          <div>
            <h1>3000+</h1>
            <p className="orange">Success Stories</p>
          </div>
          <div>
            <h1>4.5/5</h1>
            <p className="orange">Rating</p>
          </div>
        </div>
        <div className="happy-container">
          <img
            src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1696584135/1_dpwqwk.png"
            alt="happy"
          />
          <div>
            <h1>
              WE
              <br />
              <span className="orange">ARE SPREADING</span>
            </h1>
            <div className="ha1">
              <div className="ha">
                <img
                  src="https://schoolaura.com/Content/new_assets/images/happy-clients/client-1.png"
                  alt="#"
                />
                <div>
                  <h1>108+</h1>
                  <p className="orange">Happy School</p>
                </div>
              </div>
              <div className="ha">
                <img
                  src="https://schoolaura.com/Content/new_assets/images/happy-clients/client-2.png"
                  alt="#"
                />
                <div>
                  <h1>58030+</h1>
                  <p className="orange">Students</p>
                </div>
              </div>
            </div>
            <div className="ha1">
              <div className="ha">
                <img
                  src="https://schoolaura.com/Content/new_assets/images/happy-clients/client-3.png"
                  alt="#"
                />
                <div>
                  <h1>5360+</h1>
                  <p className="orange">Happy Parents</p>
                </div>
              </div>
              <div className="ha">
                <img
                  src="https://schoolaura.com/Content/new_assets/images/happy-clients/client-4.png"
                  alt="#"
                />
                <div>
                  <h1>10+</h1>
                  <p className="orange">Happy Tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1696585218/1_br6xqz.png"
          alt="#"
          className="final"
        />
      </>
    )
  }
}
export default Home
