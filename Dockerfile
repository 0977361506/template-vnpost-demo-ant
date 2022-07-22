FROM nginx:1.17-alpine
COPY ./build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]