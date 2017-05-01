class Index extends Component {
  constructor () {
    super()
    this.state = {
      likedText: '����',
      unlikedText: '��'
    }
  }

  handleClickOnChange () {
    this.setState({
      likedText: 'ȡ��',
      unlikedText: '����'
    })
  }

  render () {
    return (
      <div>
        <LikeButton
          likedText={this.state.likedText}
          unlikedText={this.state.unlikedText} />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>
            �޸� wordings
          </button>
        </div>
      </div>
    )
  }
}

//props ����ͨ��������Ⱦ�޸ġ����� setState �ᵼ�� Index ������Ⱦ������ LikedButton ����յ��µ� props������������Ⱦ������������ʾ��̬Ҳ��õ����¡�