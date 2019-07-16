import Link from 'next/link';
import '../../static/styles/sendBtn.scss';

class viewMoreBtn extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <Link href={link}>
        <a className='sendBtn'>SEND</a>
      </Link>
    );
  }
}

export default viewMoreBtn;
