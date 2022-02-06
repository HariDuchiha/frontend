# FROM nginx:1.17.1-alpine
# COPY /dist/report /usr/share/nginx/html

FROM nginx:1.17
COPY default.conf /etc/nginx/conf.d/default.conf
COPY dist/report/ /usr/share/nginx/html