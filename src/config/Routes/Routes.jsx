import Treading from "../../pages/TreadingShows/Treading";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import TvSeries from "../../pages/TvSeries/TvSeries";
import Search from "../../pages/SearchResults/Search";
import SinglePage from "../../components/SingleContentPage/SinglePage";
import HomeNav from "../../components/HomeNav/HomeNav";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="movies/:searhTerm" children={Home} /> */}

        <Route path="/treading" component={Treading} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={TvSeries} />
        <Route path="/search" component={Search} />

        <Route path="/:mediaType/:id" children={<SinglePage />} />
        <Route path="/:mediaType/:id" children={<HomeNav />} />

        <Route path="/movies/page/:page" children={Movies} />
        <Route path="/treading/page/:page" children={Treading} />
        <Route path="/:mediaType/:id" children={<SinglePage />} />

        {/* {/* <Route path="/search/:searhTerm" exact children={Search} /> */}

        <Route path="/movies/:searhTerm/page/:page" exact children={Movies} />

        <Route path="/series/:searhTerm/page/:page" children={TvSeries} />
      </Switch>
    </>
  );
};

export default Routes;
