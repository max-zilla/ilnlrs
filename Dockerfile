FROM node:14 as build

ARG GEODASHBOARD_VERSION=master
ARG GEOSERVER_URL=/geoserver
ARG GEOSTREAMS_URL=/geostreams

ENV GEOSERVER_URL=$GEOSERVER_URL
ENV GEOSTREAMS_URL=$GEOSTREAMS_URL

RUN git clone https://github.com/geostreams/geodashboard.git /tmp/geodashboard
WORKDIR /tmp/geodashboard
RUN git checkout $GEODASHBOARD_VERSION
RUN yarn && yarn link:all

COPY ./ /tmp/ilnlrs/
WORKDIR /tmp/ilnlrs/
RUN rm -rf /tmp/ilnlrs/node_modules
RUN yarn link @geostreams/core @geostreams/core__old @geostreams/geostreaming
RUN yarn
COPY ./node_patches /tmp/ilnlrs/node_modules
RUN yarn build

FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d

COPY --from=build /tmp/ilnlrs/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
