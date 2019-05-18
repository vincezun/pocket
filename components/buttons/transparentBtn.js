import Link from 'next/link';
import '../../static/styles/transparentBtn.scss';

class transparent extends React.Component {
  render() {
    return (
      <Link href={this.props.link}>
        <a className='transparentBtn' style={this.props.styled}>
          {this.props.name}
        </a>
      </Link>
    );
  }
}

export default transparent;
