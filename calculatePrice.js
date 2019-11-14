//BOC: [basic]
  import React, { Component } from 'react'
  import { connect } from 'react-redux'
//EOC
//BOC: [reducer]
  //
//EOC
//BOC: [component]
  //
//EOC
//BOC: [script]
  //
//EOC
//BOC: [extra]
  //
//EOC

class Screen extends Component {
  static navigationOptions = {
    title: 'Calculation Price',
  }

  constructor(props) {
    super(props)
    const{ state } = this.props.navigation

    this.state = {
      data: [
              {
                "name":"Nasi Ayam",
                "price":5,
                "category":"Food",
              },
              {
                "name":"Nasi Lemak",
                "price":12,
                "category":"Food",
              },
              {
                "name":"Lamb steak",
                "price":17,
                "category":"",
              },
              {
                "name":"Popcorn",
                "price":3,
                "category":"",
              },
              {
                "name":"Mushroom Soup",
                "price":3,
                "category":"Soup",
              },
            ]
    }
  }

  componentWillMount() {
    //
  }

  componentDidMount() {
    //
  }

  componentWillUnmount() {
    //
  }

  _calculate(){
    let data = this.state.data
    let total = null
    for(let i=0; i<data.length;i++){
      if(data[i].category == "" || data[i].category == null){
        total += 0
      }
      else{
        total += data[i].price 
        this.setState({total:total})
      }
    }
  }

  render() {
    return (
      <TContainer>
        <THeader 
          back
          title={'Calculate Price'} 
          navigation={this.props.navigation}
        />
        <TBody padding scrollable>
          <TRow marginBottom>
            <TText>Total Price: {this.state.total}</TText>
          </TRow>
          <TCol>
            <TButton 
              marginBottomSm 
              rounded 
              success 
              title={'Calculate total price'}
              // isLoading={this.state.isLoading}
              onPress={()=> this._calculate()}
            />
          </TCol>
        </TBody>
      </TContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen)
