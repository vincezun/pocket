import '../../static/styles/line.scss';

export class line extends React.Component {
  render() {
    return <hr className='line' style={this.props.styled} />;
  }
}

export default line;
