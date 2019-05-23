import Link from 'next/link';

import '../static/styles/index.scss';

import Layout from '../components/Layout/Layout';
import ReadMoreBtn from '../components/buttons/readMoreBtn';
import ReadMoreBtn2 from '../components/buttons/readMoreBtn2';
import LearnMoreBtn from '../components/buttons/learnMoreBtn';
import ViewMoreBtn from '../components/buttons/viewMoreBtn';
import PurchaseBtn from '../components/buttons/purchaseBtn';
import DownloadBtn from '../components/buttons/downloadBtn';
import SendBtn from '../components/buttons/sendBtn';
import BlueLine1 from '../components/separator/blueLine1';
import BlueLine2 from '../components/separator/blueLine2';

export class index extends React.Component {
  render() {
    return (
      <Layout>
        <section className='sec1 '>
          <div className='pocketApp wrapper'>
            <h1>Sail Ahead In Your Career</h1>
            <p>
              This app does everything you could possibly want it to do and not
              only that, beautifully carefully designed and extremely intuitive
              to use.
            </p>
            <div className='buttons'>
              <DownloadBtn link='#download' />
              <ReadMoreBtn2 link='#readmore' />
            </div>
          </div>

          <img
            src='/static/images/app-screen.png'
            alt='Pocket App Screen'
            className='pocketScreen wrapper'
          />
        </section>

        <section className='sec2 wrapper'>
          <h2>One App All Wallets</h2>
          <BlueLine1 />
          <p>
            This app does everything you could possibly want it to do and not
            only that, beautifully carefully designed and extremely intuitive to
            use.
          </p>
        </section>
        <section className='sec3 '>
          <div>
            <figure>
              <img
                src='/static/images/money-icon.svg'
                alt='Money icon'
                className='money icon'
              />
              <figcaption>Manage Your Money</figcaption>
            </figure>
            <BlueLine2 />
            <p>
              Now you can manage the whole your finances in one application.
            </p>
            <span className='learnMoreBtn'>
              <LearnMoreBtn link='#learnmore' />
            </span>
          </div>

          <div>
            <figure>
              <img
                src='/static/images/report-icon.svg'
                alt='Report icon'
                className='report icon'
              />
              <figcaption>Your Financial Report</figcaption>
            </figure>
            <BlueLine2 />
            <p>
              Now you can manage the whole your finances in one application.
            </p>
            <span className='learnMoreBtn'>
              <LearnMoreBtn link='#learnmore' />
            </span>
          </div>

          <div>
            <figure>
              <img
                src='/static/images/secure-icon.svg'
                alt='Secure icon'
                className='secure icon'
              />
              <figcaption>Secure Transaction</figcaption>
            </figure>
            <BlueLine2 />
            <p>
              Now you can manage the whole your finances in one application.
            </p>
            <span className='learnMoreBtn'>
              <LearnMoreBtn link='#learnmore' />
            </span>
          </div>
        </section>
        <div className='lightBlueContainer'>
          <section className='sec4 wrapper'>
            <img
              src='/static/images/financial-report.png'
              alt='Financial Report Details'
              className='financialReport'
            />
            <div className='financial'>
              <h2>Your Financial Report Details</h2>
              <p>
                This application Monitoring all of your income in details. This
                app does everything you could possibly want it to do and not
                only that, beautifully carefully designed and extremely
                intuitive to use.
              </p>
              <span className='readMoreBtn'>
                <ReadMoreBtn link='#readmore' />
              </span>
            </div>
          </section>
        </div>
        <div className='sec5BlueContainer'>
          <section className='sec5 wrapper'>
            <h2>What We Achieved</h2>
            <p>
              This app does everything you could possibly want it to do and not
              only that, beautifully carefully designed and extremely intuitive
              to use.
            </p>
          </section>
        </div>
        <section className='sec6'>
          <div>
            <h3>15k</h3>
            <p>Active User</p>
          </div>
          <div>
            <h3>1M</h3>
            <p>Downloads</p>
          </div>
          <div>
            <h3>50k</h3>
            <p>Positive Reviews</p>
          </div>
        </section>
        <section className='sec7 wrapper'>
          <div className='expenses'>
            <h2>Your Expenses Report Details</h2>
            <p>
              This application Monitoring all of your income in details. This
              app does everything you could possibly want it to do and not only
              that, beautifully carefully designed and extremely intuitive to
              use.
            </p>
            <span className='readMoreBtn'>
              <ReadMoreBtn link='#readmore' />
            </span>
          </div>
          <img
            src='/static/images/expenses-report.png'
            alt='Expenses Report Details'
            className='expensesReport'
          />
        </section>
        <section className='sec8 wrapper'>
          <h2>What Our User Say</h2>
          <BlueLine1 />
        </section>
        <div className='blueContainer testimonial' />
        <section className='sec9'>
          <div className='testimonials'>
            <div className='arya'>
              <div>
                <figure>
                  <img
                    src='/static/images/arya.png'
                    alt='Arya Stark'
                    className='aryaStark'
                  />
                  <figcaption>Arya Stark</figcaption>
                  <p className='position'>Ceo, Company</p>
                </figure>
                <p className='desc'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>
              </div>
            </div>

            <div className='tyrion'>
              <div>
                <figure>
                  <img
                    src='/static/images/tyrion.png'
                    alt='Tyrion Lannister'
                    className='tyrionLannister'
                  />
                  <figcaption>Tyrion Lannister</figcaption>
                  <p className='position'>CEO, Company</p>
                </figure>
                <p className='desc'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae
                </p>
              </div>
            </div>

            <div className='khal'>
              <div>
                <figure>
                  <img
                    src='/static/images/khal.png'
                    alt='Khal Drogo'
                    className='khalDrogo'
                  />
                  <figcaption>Khal Drogo</figcaption>
                  <p className='position'>HR, Company</p>
                </figure>
                <p className='desc'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='sec10'>
          <div className='plan wrapper'>
            <h2>Select Your Plan</h2>
            <BlueLine1 />
            <p>
              This app does everything you could possibly want it to do and not
              only that, beautifully carefully designed and extremely intuitive
              to use.
            </p>
          </div>
          <div className='plans'>
            <div className='basic'>
              <span className='grayShapeContainer'>
                <div className='wrapper'>
                  <h5>BASIC</h5>
                  <h4>$15.00</h4>
                  <p>Per month</p>
                </div>
              </span>
              <ul className='wrapper'>
                <li>Android Developer</li>
                <li>IOS Application</li>
                <li>UX/UI Designs</li>
                <li>WordPress Develop</li>
                <li>PSD to HTML</li>
                <li>Digital Marketing</li>
              </ul>
              <span className='PurchaseBtn'>
                <PurchaseBtn link='#purchase' />
              </span>
            </div>
            <div className='standard'>
              <span className='blueShapeContainer'>
                <div className='wrapper'>
                  <h5>STANDARD</h5>
                  <h4>$49.00</h4>
                  <p>Per month</p>
                </div>
              </span>
              <ul className='wrapper'>
                <li>Android Developer</li>
                <li>IOS Application</li>
                <li>UX/UI Designs</li>
                <li>WordPress Develop</li>
                <li>PSD to HTML</li>
                <li>Digital Marketing</li>
              </ul>
              <span className='PurchaseBtn'>
                <PurchaseBtn link='#purchase' />
              </span>
            </div>
            <div className='premium'>
              <span className='grayShapeContainer'>
                <div className='wrapper'>
                  <h5>PREMIUM</h5>
                  <h4>$120.00</h4>
                  <p>Per month</p>
                </div>
              </span>
              <ul className='wrapper'>
                <li>Android Developer</li>
                <li>IOS Application</li>
                <li>UX/UI Designs</li>
                <li>WordPress Develop</li>
                <li>PSD to HTML</li>
                <li>Digital Marketing</li>
              </ul>
              <span className='PurchaseBtn'>
                <PurchaseBtn link='#purchase' />
              </span>
            </div>
          </div>
        </section>

        <section className='sec11'>
          <div className='blueContainer'>
            <div className='downloadShapeBg'>
              <div className='wrapper'>
                <h5>Download Now</h5>
                <ul>
                  <li>
                    <a href='#appstore'>
                      <img
                        src='/static/images/app-store.png'
                        alt='Download on the App Store'
                        className='appStore'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#googplay'>
                      <img
                        src='/static/images/google-play.png'
                        alt='Get it on Google Play'
                        className='googlePlay'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='sec12'>
          <div className='wrapper latestBlogPosts'>
            <h2>Latest Blog Posts</h2>
            <BlueLine1 />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className='blogs'>
            <div className='blog1'>
              <Link href='#1'>
                <a>
                  <figure>
                    <img
                      src='/static/images/business-structured.png'
                      alt='Business Structured'
                      className='business'
                    />

                    <figcaption className='title'>
                      Business structured
                    </figcaption>
                  </figure>
                </a>
              </Link>

              <div>
                <div className='firstBar'>
                  <div className='authorInfo'>
                    <figure>
                      <img
                        src='/static/images/doe.png'
                        alt='John Doe'
                        className='doe'
                      />
                      <figcaption>John Doe</figcaption>
                    </figure>
                  </div>

                  <div className='time'>
                    <figure>
                      <img
                        src='/static/images/clock-icon.svg'
                        alt='Clock icon'
                        className='clock icon'
                      />
                      <figcaption>3 weeks ago</figcaption>
                    </figure>
                  </div>
                </div>
                <Link href='#1'>
                  <a>
                    <div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </a>
                </Link>
                <div className='border'>
                  <div className='thirdBar '>
                    <div className='likes'>
                      <figure>
                        <img
                          src='/static/images/heart-icon.svg'
                          alt='Heart Icon'
                          className='heart icon'
                        />
                        <figcaption>5 Likes</figcaption>
                      </figure>
                    </div>
                    <div className='comments'>
                      <figure>
                        <img
                          src='/static/images/comments-icon.svg'
                          alt='Comment icon'
                          className='comment icon'
                        />
                        <figcaption>8 Comments</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='blog2'>
              <Link href='#2'>
                <a>
                  <figure>
                    <img
                      src='/static/images/hiring-developer.png'
                      alt='Hiring Developer'
                      className='developer'
                    />
                    <figcaption className='title'>
                      We are hiring developer
                    </figcaption>
                  </figure>
                </a>
              </Link>
              <div>
                <div className='firstBar'>
                  <div className='authorInfo'>
                    <figure>
                      <img
                        src='/static/images/jones.png'
                        alt='Katrina Jones'
                        className='jones'
                      />
                      <figcaption>Katrina Jones</figcaption>
                    </figure>
                  </div>

                  <div className='time'>
                    <figure>
                      <img
                        src='/static/images/clock-icon.svg'
                        alt='Clock icon'
                        className='clock icon'
                      />
                      <figcaption>3 weeks ago</figcaption>
                    </figure>
                  </div>
                </div>
                <Link href='#2'>
                  <a>
                    <div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </a>
                </Link>
                <div className='border'>
                  <div className='thirdBar'>
                    <div className='likes'>
                      <figure>
                        <img
                          src='/static/images/heart-icon.svg'
                          alt='Heart Icon'
                          className='heart icon'
                        />
                        <figcaption>5 Likes</figcaption>
                      </figure>
                    </div>
                    <div className='comments'>
                      <figure>
                        <img
                          src='/static/images/comments-icon.svg'
                          alt='Comment icon'
                          className='commente icon'
                        />
                        <figcaption>8 Comments</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='blog3'>
              <Link href='#3'>
                <a>
                  <figure>
                    <img
                      src='/static/images/ux-ui-design.png'
                      alt='UX/UI Design'
                      className='uxUiDesign'
                    />
                    <figcaption className='title'>
                      UX/UI design for App
                    </figcaption>
                  </figure>
                </a>
              </Link>
              <div>
                <div className='firstBar'>
                  <div className='authorInfo'>
                    <figure>
                      <img
                        src='/static/images/gomes.png'
                        alt='Selina Gomes'
                        className='gomes'
                      />
                      <figcaption>Selina Gomes</figcaption>
                    </figure>
                  </div>

                  <div className='time'>
                    <figure>
                      <img
                        src='/static/images/clock-icon.svg'
                        alt='Clock icon'
                        className='clock icon'
                      />
                      <figcaption>3 weeks ago</figcaption>
                    </figure>
                  </div>
                </div>
                <Link href='#3'>
                  <a>
                    <div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </a>
                </Link>
                <div className='border'>
                  <div className='thirdBar'>
                    <div className='likes'>
                      <figure>
                        <img
                          src='/static/images/heart-icon.svg'
                          alt='Heart Icon'
                          className='heart icon'
                        />
                        <figcaption>5 Likes</figcaption>
                      </figure>
                    </div>
                    <div className='comments'>
                      <figure>
                        <img
                          src='/static/images/comments-icon.svg'
                          alt='Comment icon'
                          className='commente icon'
                        />
                        <figcaption>8 Comments</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className='ViewMoreBtn'>
            <ViewMoreBtn link='#viewmore' />
          </span>
        </section>

        <section className='sec13'>
          <div className='subscribe'>
            <div className='wrapper'>
              <h2>Subscribe to Our Newsletter</h2>
              <div className='oneLine'>
                <input
                  type='text'
                  name='email'
                  id='email'
                  className='email'
                  placeholder='Enter your email address here'
                  autoComplete='off'
                />
                <span className='submitBtn'>
                  <SendBtn link='#send' />
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className='subscribeDarkBlueContainer' />
      </Layout>
    );
  }
}

export default index;
