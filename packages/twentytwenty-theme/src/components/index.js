import { connect, Global, Head, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Footer from "./footer";
import globalStyles from "./styles/global-styles";
import FontFaces from "./styles/font-faces";
import Header from "./header";
import Archive from "./archive";
import Loading from "./loading";
import Post from "./post";
import SearchResults from "./search/search-results";
import SkipLink from "./styles/skip-link";
import MetaTitle from "./page-meta-title";
import PageError from "./page-error";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add global styles for the whole site, like body or a's or font-faces. 
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles(state.theme.colors)} />
      <FontFaces />

      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="bn" />
        <meta name="robots" content="nofollow, noindex"></meta>
        <link rel="canonical" href="https://www.shongshoy.com"></link>
      </Head>
        <Page>
        <script>
        import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

const el = document.createElement('pwa-update');
document.body.appendChild(el);
        </script>


      {/* Accessibility: Provides ability to skip to main content */}
      <SkipLink as="a" href="#main">
        Skip to main content
      </SkipLink>

      <div style={{ minHeight: "calc(100vh - 190px)" }}>
        {/* Add the header of the site. */}
        
        <Header />
       
        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main id="main">
          
          <Switch>
            <Loading when={data.isFetching} />
            <SearchResults when={data.isSearch} />
            <Archive when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
      </div>

      <Footer />
      </Page>
    </>
  );
};

export default connect(Theme);

const Main = styled.main`
  display: block;
  
  `;

  const Page = styled.div` 
  background-color: #dbe9f4;
  margin: auto;
  max-width: 1200px;
  margin: 0 auto


@media screen and (max-width: 1190px) {
  #page {
    width: 97%
  }
  .wide #page {
    width: 100%
  }
  .inner-wrap {
    width: 94%
  }
}

`;



