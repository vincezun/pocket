import '../../static/styles/prevBtn.scss';

class prevButton extends React.Component {
  render() {
    return (
      <div className='prevBtn' style={this.props.styled}>
        <img src='/static/images/left-arrow.svg' alt='Left arrow' />
      </div>
    );
  }
}

export default prevButton;
