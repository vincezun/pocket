import Link from 'next/link';
import '../../static/styles/transparentBtn.scss';

class transparent extends React.Component {
  render() {
    const { link, styled, name } = this.props;
    return (
      <Link href={link}>
        <a className='transparentBtn' style={styled}>
          {name}
        </a>
      </Link>
    );
  }
}

export default transparent;
