// import fetch from 'isomorphic-fetch';
import '../static/styles/index.scss';

import Layout from '../components/Layout/Layout';
import DownloadBtn from '../components/buttons/whiteBtn';
import ReadMoreBtn from '../components/buttons/transparentBtn';
import LineSeparator from '../components/separator/line';
import BlueBtn from '../components/buttons/blueBtn';

export class index extends React.Component {
  render() {
    const readMoreBtn = {
      marginLeft: '3em'
    };
    const purchaseBtn = {
      width: '140px'
    };
    const blueSeparator1 = {
      height: '2px',
      backgroundColor: '#1f65ff',
      width: '10em',
      marginTop: '.7em'
    };
    const blueSeparator2 = {
      height: '2px',
      backgroundColor: '#1f65ff',
      width: '8em',
      marginTop: '1.5em',
      border: '1px solid #1f65ff',
      borderRadius: '2px'
    };
    const blueSeparator3 = {
      height: '2px',
      backgroundColor: '#1f65ff',
      width: '10em',
      marginTop: '1.4em'
    };
    return (
      <Layout>
        <div className='blueBg'>
          <section className='sec1 wrapper'>
            <div className='pocketApp'>
              <h1>Sail Ahead In Your Career</h1>
              <p>
                This app does everything you could possibly want it to do and
                not only that, beautifully carefully designed and extremely
                intuitive to use.
              </p>
              <div className='buttons'>
                <DownloadBtn name='DOWNLOAD' link='#download' />
                <ReadMoreBtn
                  name='READ MORE'
                  link='#readmore'
                  styled={readMoreBtn}
                />
              </div>
            </div>

            <img
              src='/static/images/app-screen.png'
              alt='Pocket App Screen'
              className='pocketScreen app'
            />
          </section>
        </div>
        <section className='sec2 wrapper'>
          <h2>One App All Wallets</h2>
          <LineSeparator styled={blueSeparator1} />
          <p>
            This app does everything you could possibly want it to do and not
            only that, beautifully carefully designed and extremely intuitive to
            use.
          </p>
        </section>
        <section className='sec3 wrapper'>
          <div>
            <figure>
              <img
                src='/static/images/money-icon.svg'
                alt='Money icon'
                className='money icon'
              />
              <figcaption>Manage Your Money</figcaption>
            </figure>
            <LineSeparator styled={blueSeparator2} />
            <p>
              Now you can manage the whole your finances in one application.
            </p>
            <span className='learnMoreBtn'>
              <BlueBtn name='LEARN MORE' link='#learnmore' />
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
            <LineSeparator styled={blueSeparator2} />
            <p>
              Now you can manage the whole your finances in one application.
            </p>
            <span className='learnMoreBtn'>
              <BlueBtn name='LEARN MORE' link='#learnmore' />
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
            <LineSeparator styled={blueSeparator2} />
            <p>
              Now you can manage the whole your finances in one application.
            </p>
            <span className='learnMoreBtn'>
              <BlueBtn name='LEARN MORE' link='#learnmore' />
            </span>
          </div>
        </section>
        <div className='lightBlueContainer'>
          <section className='sec4 wrapper'>
            <img
              src='/static/images/financial-report.png'
              alt='Financial Report Details'
              className='financialReport app'
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
                <BlueBtn name='READ MORE' link='#readmore' />
              </span>
            </div>
          </section>
        </div>
        <div className='blueContainer'>
          <section className='sec5 wrapper'>
            <h2>What We Achieved</h2>
            <p>
              This app does everything you could possibly want it to do and not
              only that, beautifully carefully designed and extremely intuitive
              to use.
            </p>
          </section>
        </div>
        <section className='sec6 wrapper'>
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
              <BlueBtn name='READ MORE' link='#readmore' />
            </span>
          </div>
          <img
            src='/static/images/expenses-report.png'
            alt='Expenses Report Details'
            className='expensesReport app'
          />
        </section>
        <section className='sec8 wrapper'>
          <h2>What Our User Say</h2>
          <LineSeparator styled={blueSeparator3} />
        </section>
        <div className='blueContainer testimonial' />
        <section className='sec9'>
          <div className='testimonials'>
            <div className='arya'>
              <div className='wrapper'>
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
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur
                </p>
              </div>
            </div>

            <div className='tyrion'>
              <div className='wrapper'>
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
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur
                </p>
              </div>
            </div>

            <div className='khal'>
              <div className='wrapper'>
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
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='sec10'>
          <div className='plan wrapper'>
            <h2>Select Your Plan</h2>
            <LineSeparator styled={blueSeparator3} />
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
              <span className='purchaseBtn'>
                <BlueBtn
                  name='PURCHASE'
                  link='#purchase'
                  styled={purchaseBtn}
                />
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
              <span className='purchaseBtn'>
                <BlueBtn
                  name='PURCHASE'
                  link='#purchase'
                  styled={purchaseBtn}
                />
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
              <span className='purchaseBtn'>
                <BlueBtn
                  name='PURCHASE'
                  link='#purchase'
                  styled={purchaseBtn}
                />
              </span>
            </div>
          </div>
        </section>

        <section className='sec11'>
          <div className='blueContainer'>
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
        </section>

        <section className='sec12'>
          <div className='wrapper latestBlogPosts'>
            <h2>Latest Blog Posts</h2>
            <LineSeparator styled={blueSeparator3} />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className='blogs'>
            <div className='blog1'>
              <figure>
                <img
                  src='/static/images/business-structured.png'
                  alt='Business Structured'
                  className='business'
                />
                <figcaption className='title'>Business structured</figcaption>
              </figure>
              <div>
                <div className='firstBar wrapper'>
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
                <div className='wrapper'>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className='border'>
                  <div className='thirdBar wrapper'>
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
              <div>
                <div className='firstBar wrapper'>
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

                <div className='wrapper'>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>

                <div className='border'>
                  <div className='thirdBar wrapper'>
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
              <figure>
                <img
                  src='/static/images/ux-ui-design.png'
                  alt='UX/UI Design'
                  className='uxUiDesign'
                />
                <figcaption className='title'>UX/UI design for App</figcaption>
              </figure>
              <div>
                <div className='firstBar wrapper'>
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

                <div className='wrapper'>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>

                <div className='border'>
                  <div className='thirdBar wrapper'>
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
          <span className='viewMoreBtn'>
            <BlueBtn name='VIEW MORE' link='#viewmore' />
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
                />
                <span className='submitBtn'>
                  <BlueBtn name='SEND' link='#send' />
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
