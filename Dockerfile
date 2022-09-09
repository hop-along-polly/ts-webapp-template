FROM node:17-alpine AS app-build

# Build the UI
WORKDIR /usr/src/app/ui
COPY ui .
RUN npx yarn-deduplicate
RUN yarn && yarn build

# Build the Facade API
WORKDIR /usr/src/app/facade
COPY facade .
RUN yarn && yarn build

## Final Container Stage
FROM node:17-alpine

WORKDIR /usr/src/app

COPY --from=app-build /usr/src/app/facade/dist dist
COPY --from=app-build /usr/src/app/ui/build dist/ui
COPY --from=app-build /usr/src/app/facade/config config
COPY --from=app-build /usr/src/app/facade/node_modules node_modules
COPY --from=app-build /usr/src/app/facade/package.json package.json

EXPOSE 8000
ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
