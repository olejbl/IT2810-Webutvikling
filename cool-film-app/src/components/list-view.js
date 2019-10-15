import React from 'react';
class ListView extends React.Component {
  constructor(props) {
  super(props);
this

}

  render() {
      return (
        <div className="shopping-list">
          <ul>
            <li>Instagram</li>
            {this.state.list.map((item, i) => (
        <p className="Contentbox" key={this.state.list[0].type[i].character}>
          <label className="RadioBtnLabl">{this.state.list[0].type[i].character}</label>
          <input className="RadioBtn" name={this.state.list[0].id} type="radio" onClick={()=> this.setCategoryImage(this.state.list[1].type[i].character)}
          ></input>
        </p>
        ))}
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
}

export default ListView;
