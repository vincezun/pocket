// import fetch from 'isomorphic-fetch';
import '../static/styles/index.scss';

import Layout from '../components/Layout/Layout';
import DownloadBtn from '../components/buttons/whiteBtn';
import ReadMoreBtn from '../components/buttons/transparentBtn';
import LineSeparator from '../components/separator/line';
import BlueBtn from '../components/buttons/blueBtn';
import NextBtn from '../components/buttons/nextBtn';
import PrevBtn from '../components/buttons/prevBtn';

export class index extends React.Component {
  render() {
    const readMoreBtn = {
      marginLeft: '3em'
    };
    const nextBtn = {
      marginLeft: '1.4em'
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
            <h1>Sail Ahead In Your Career</h1>
            <p>
              This app does everything you could possibly want it to do and not
              only that, beautifully carefully designed and extremely intuitive
              to use.
            </p>
            <div className='buttons'>
              <DownloadBtn name='DOWNLOAD' link='#download' />
              <ReadMoreBtn
                name='READ MORE'
                link='#readmore'
                styled={readMoreBtn}
              />
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
          <div className='appWallets'>
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
          </div>
        </section>

        <div className='lightBlueContainer'>
          <section className='sec4 wrapper'>
            <img
              src='/static/images/financial-report.png'
              alt='Financial Report Details'
              className='financialReport app'
            />
            <h2>Your Financial Report Details</h2>
            <p>
              This application Monitoring all of your income in details. This
              app does everything you could possibly want it to do and not only
              that, beautifully carefully designed and extremely intuitive to
              use.
            </p>
            <span className='readMoreBtn'>
              <BlueBtn name='READ MORE' link='#readmore' />
            </span>
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
          <h2>Your Expenses Report Details</h2>
          <p>
            This application Monitoring all of your income in details. This app
            does everything you could possibly want it to do and not only that,
            beautifully carefully designed and extremely intuitive to use.
          </p>
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
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur
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
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur
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
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur
              </p>
            </div>
          </div>
        </section>

        <div className='nextPrevBtn'>
          <PrevBtn />
          <NextBtn styled={nextBtn} />
        </div>
      </Layout>
    );
  }
}

export default index;
