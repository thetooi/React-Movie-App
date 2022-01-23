const SearchBox = ({ handleChange, handleSubmit, fetchSearchApi }) => {
  return (
    <>
      <div className="all__right">
        <form className="footer-email-form " onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search Movies, Tv Series"
            onChange={handleChange}
          />
          <div>
            <button class="footer-email-submit" onClick={fetchSearchApi}>
              Subscribe now
            </button>
          </div>
        </form>
      </div>
      {/* 
      <div className="welcome__info">
        <h2>Welcome.</h2>
        <p>Expore and Discover Millions of Movies,Tv Series.</p>
        <div class="main">
          <form class="input-group">
            <input
              type="text"
              class="form-control shadow-none"
              placeholder="Search Movie and Tv series here..."
            />
            <div class="input-group-append">
              <button class="btn btn-success  shadow-none" type="button">
                <SearchIcon style={{ fontSize: "15px" }} />
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default SearchBox;
