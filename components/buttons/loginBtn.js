import Link from 'next/link';
import '../../static/styles/loginBtn.scss';

class loginBtn extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <Link href={link}>
        <a className='loginBtn'>LOGIN</a>
      </Link>
    );
  }
}

export default loginBtn;
