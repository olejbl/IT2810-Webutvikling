import React, {Component} from 'react';
import styled from 'styled-components'
import MovieItem from './MovieItem'
import HoverPopout from './HoverPopout'
import MoviePopoutContent from './MoviePopoutContent'
    var searchvalue = "";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class ListView extends Component {
    render() {
        return (
            <div>
                <Container>
                  {this.props.movies.map((movie, index) =>{
                    var url = window.location.href;
                    var params = url.split('?search=');
                    var searchvalue = params[1];
                    //fjerner + fra parameterne så det matcher movie.title og blir %3A ved : så endrer det tilbake' tar bort # fra store delen også.
                    for (var i = 0; i < searchvalue.length; i++) {
                      searchvalue =  searchvalue.replace("+", " ");
                      searchvalue =  searchvalue.replace("%3A", ":");
                      searchvalue =  searchvalue.replace("#", "");
                    }
                    console.log(searchvalue)
                    if (searchvalue === "") {
                      return  <div key={index}>
                        <HoverPopout
                      popout={
                          <MoviePopoutContent
                              title={movie.title}
                              posterUrl={movie.posterUrl}
                              year={movie.year}
                              rating={movie.rating}
                              plot={movie.plot}
                          />
                      }>
                      <MovieItem
                      title={movie.title}
                      posterUrl={movie.posterUrl}
                      year={movie.year}
                      />
                      </HoverPopout></div>
                    }
                    else if (movie.title.toUpperCase().includes(searchvalue.toUpperCase())){
                      return  <div key={index}>
                        <HoverPopout
                      popout={
                          <MoviePopoutContent
                              title={movie.title}
                              posterUrl={movie.posterUrl}
                              year={movie.year}
                              rating={movie.rating}
                              plot={movie.plot}
                          />
                      }>
                      <MovieItem
                      title={movie.title}
                      posterUrl={movie.posterUrl}
                      year={movie.year}
                      />
                      </HoverPopout></div>}}
                  )
                  }
                </Container>
            </div>
        );
    }
    componentDidUpdate(){
      console.log("update");
    }

}

export default ListView
