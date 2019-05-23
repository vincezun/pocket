import Link from 'next/link';
import '../../static/styles/readMoreBtn2.scss';

class readMoreBtn2 extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <Link href={link}>
        <a className='readMoreBtn2'>READ MORE</a>
      </Link>
    );
  }
}

export default readMoreBtn2;
