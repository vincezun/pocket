import Link from 'next/link';

import Separator from '../separator/line';
import LoginBtn from '../buttons/transparentBtn';
import '../../static/styles/header.scss';

class Header extends React.Component {
  componentDidMount() {
    const hamburger = document.getElementById('hamburger');
    const exit = document.getElementById('exit');
    const menu = document.getElementById('nav');
    const overlay = document.getElementById('overlay');

    var scrollDisabled = false,
      body = document.body,
      topDistance = 300,
      scrollPosition;

    window.addEventListener('scroll', function() {
      var scroll = window.pageYOffset || window.scrollY;

      if (scroll > topDistance) {
        menu.classList.add('scrollActive');
      } else {
        menu.classList.remove('scrollActive');
        menu.classList.remove('noTransition');
      }
    });

    if (hamburger) {
      hamburger.addEventListener(
        'click',
        function() {
          menu.classList.add('active');
          overlay.classList.add('active');

          if (scrollDisabled) {
            return;
          }

          scrollPosition = window.pageYOffset || window.scrollY;
          body.classList.add('scrollDisabled');
          body.style.top = -1 * scrollPosition + 'px';
          scrollDisabled = true;
        },
        false
      );
    }

    if (exit) {
      exit.addEventListener(
        'click',
        function() {
          menu.classList.add('noTransition');
          menu.classList.remove('active');
          overlay.classList.remove('active');

          if (!scrollDisabled) {
            return;
          }

          body.classList.remove('scrollDisabled');
          window.scrollBy(0, scrollPosition);

          scrollDisabled = false;
        },
        false
      );
    }
  }

  render() {
    const loginBtn = {
      margin: '1.8em 1.6em'
    };

    return (
      <section>
        <nav className='nav' id='nav'>
          <Link href='/'>
            <a>
              <img
                src='/static/images/pocket-logo.svg'
                alt='Pocket Company logo'
                className='companyLogo'
              />
            </a>
          </Link>

          <img
            src='/static/images/hamburger-icon.svg'
            alt='Hamburger icon'
            className='hamburger'
            id='hamburger'
          />

          <div className='overlay' id='overlay'>
            <div className='topBar'>
              <img
                src='/static/images/exit-icon.svg'
                alt='Exit icon'
                className='exit'
                id='exit'
              />

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

            <ul className='navigationLinks'>
              <li>
                <Link href='#features'>
                  <a>FEATURES</a>
                </Link>
              </li>
              <li>
                <Link href='#howitworks'>
                  <a>HOW IT WORKS</a>
                </Link>
              </li>
              <li>
                <Link href='#about'>
                  <a>ABOUT</a>
                </Link>
              </li>
              <li>
                <Link href='#testimonial'>
                  <a>TESTIMONIAL</a>
                </Link>
              </li>
              <li>
                <Link href='#contact'>
                  <a>CONTACT</a>
                </Link>
              </li>
              <li>
                <Separator />
              </li>
              <li>
                <LoginBtn name='LOGIN' link='#login' styled={loginBtn} />
              </li>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}

export default Header;
