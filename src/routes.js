// @flow
import coreRoutes from '@geostreams/core/src/routes';
import hocs from '@geostreams/core/src/utils/hocs';
import GeoStreamingExplore from '@geostreams/geostreaming/src/containers/Explore';
import GeoStreamingSearch from '@geostreams/geostreaming/src/containers/Search';
import GeoStreamingSensorDetail from '@geostreams/geostreaming/src/containers/Sensor/Detail';

// $FlowFixMe
import __old_Search from '@geostreams/gltg__old/app/pages/Search';
// $FlowFixMe
import __old_Analysis from '@geostreams/gltg__old/app/pages/Analysis';


import LandingPage from './containers/LandingPage';
import DataStories from './containers/DataStories';
import Help from './containers/Help';
import GLTGLayout from './containers/Layout';
import GLTGLandingLayout from './containers/LandingPageLayout';
import BMP from './containers/BMP';
import Summary from './containers/Summary';
import Tests from './tests/Tests';
import Partners from './containers/Partners';

const routes = Object.assign(
    coreRoutes,
    {
        '/': { exact: true, component: hocs.withLayout(GLTGLayout, Summary, { hasFooter: true, stickyFooter: true }) },
    }
);

if (process.env.NODE_ENV === 'development') {
    routes['/__new_search'] = { component: hocs.withLayout(GLTGLayout, GeoStreamingSearch) };
    routes['/tests/gltg'] = { component: Tests };
}

export default routes;
