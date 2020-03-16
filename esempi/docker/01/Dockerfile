FROM alpine AS clone-repo
# clone repo
RUN apk add git
RUN git clone https://github.com/iBOOD/idiotlin.git

FROM gradle:jdk13 AS build-java
# build java application
COPY --from=clone-repo /idiotlin/mastersolution .
RUN ./gradlew distTar

FROM openjdk:13-jdk
# extract binaries and execute it
EXPOSE 8080
COPY --from=build-java /home/gradle/build/distributions/gradle.tar .
RUN tar xvf gradle.tar
ENTRYPOINT [ "/gradle/bin/gradle" ]
