import Link from 'next/link';

import '../../static/styles/footer.scss';

function Footer() {
  return (
    <div className='darkBlueContainer'>
      <div className='footerShapeBg'>
        <section className='pageWrapper'>
          <div className='companyDesc'>
            <img
              src='/static/images/pocket-logo.svg'
              alt='Pocket Company logo'
              className='companyLogo'
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>

            <ul className='socialLinks'>
              <li>
                <Link href='#facebook'>
                  <a>
                    <img
                      src='/static/images/facebook-logo.svg'
                      alt='Facebook logo'
                      title='follow us on facebook'
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='#twitter'>
                  <a>
                    <img
                      src='/static/images/twitter-logo.svg'
                      alt='Twitter logo'
                      title='follow us on twitter'
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='#dribbble'>
                  <a>
                    <img
                      src='/static/images/dribbble-logo.svg'
                      alt='Dribbble logo'
                      title='follow us on dribbble'
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='#behance'>
                  <a>
                    <img
                      src='/static/images/behance-logo.svg'
                      alt='Behance logo'
                      title='follow us on behance'
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='navLinks'>
            <p className='heading'>Support</p>
            <ul>
              <li>
                <Link href='#faq'>
                  <a>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href='#contactus'>
                  <a>Contact us</a>
                </Link>
              </li>
              <li>
                <Link href='#termservice'>
                  <a>Term Service</a>
                </Link>
              </li>
              <li>
                <Link href='#livechat'>
                  <a>Live Chat</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='navLinks'>
            <p className='heading'>Download</p>
            <ul>
              <li>
                <Link href='#android'>
                  <a>Android(Google Play)</a>
                </Link>
              </li>
              <li>
                <Link href='#apple'>
                  <a>Apple(App Store)</a>
                </Link>
              </li>
              <li>
                <Link href='#chromeos'>
                  <a>ChromeOS(Coming Soon)</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='navLinks'>
            <p className='heading'>Contact us</p>
            <ul className='contactInfo'>
              <li>
                <img
                  src='/static/images/location-icon.svg'
                  alt='Location icon'
                />
                <p className='address'>
                  01 Overille Road Apt.786 California, USA
                </p>
              </li>
              <li>
                <img src='/static/images/mail-icon.svg' alt='Mail icon' />
                <p>uijungle@gmail.com</p>
              </li>
              <li>
                <img src='/static/images/phone-icon.svg' alt='Phone icon' />
                <p>+123 456 789</p>
              </li>
            </ul>
          </div>
          <p className='copyright'>
            © 2019 copyright all right reserved by Abdullah Al Ahad
          </p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
