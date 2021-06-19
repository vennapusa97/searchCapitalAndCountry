import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectCityId: countryAndCapitalsList[0].id,
  }

  onclickToChangeCapital = event => {
    this.setState({
      selectCityId: event.target.value,
    })
  }

  getCountry = () => {
    const {selectCityId} = this.state

    const activeCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === selectCityId,
    )

    return activeCountry.country
  }

  renderToSelectCity = () => {
    const {selectCityId} = this.state

    return (
      <select
        className="select-capital"
        onChange={this.onclickToChangeCapital}
        value={selectCityId}
      >
        {countryAndCapitalsList.map(eachCapital => (
          <option
            key={eachCapital.id}
            value={eachCapital.id}
            className="option"
          >
            {eachCapital.capitalDisplayText}
          </option>
        ))}
      </select>
    )
  }

  render() {
    const {selectCityId} = this.state
    const country = this.getCountry(selectCityId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1>Countries and Capitals</h1>
          <div className="selection-container">
            {this.renderToSelectCity()}
            <p className="para">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
