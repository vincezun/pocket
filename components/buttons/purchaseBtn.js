import Link from 'next/link';
import '../../static/styles/purchaseBtn.scss';

class purchaseBtn extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <Link href={link}>
        <a className='purchaseBtn'>PURCHASE</a>
      </Link>
    );
  }
}

export default purchaseBtn;
