import Link from 'next/link';
import '../../static/styles/blueBtn.scss';

class readMoreBtn extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <Link href={link}>
        <a className='blueBtn'>READ MORE</a>
      </Link>
    );
  }
}

export default readMoreBtn;
