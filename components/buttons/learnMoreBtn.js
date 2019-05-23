import Link from 'next/link';
import '../../static/styles/blueBtn.scss';

class learnMoreBtn extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <Link href={link}>
        <a className='blueBtn'>LEARN MORE</a>
      </Link>
    );
  }
}

export default learnMoreBtn;
