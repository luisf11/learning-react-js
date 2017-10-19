import React, { Component } from "react";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }));
  }

  render() {
    const { hits, isLoading } = this.state;
    console.log(hits)

    if (isLoading) {
      return <p>Loadind...</p>;
    }

    return (
      <div>
        <h1>Home</h1>
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {hits.map(hit => (
              <tr key={hit.objectId} >
               <td>
                <p className="text-left">{hit.author}</p>
                </td>
                <td>
                <a href={hit.url} className="text-left">{hit.title}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
