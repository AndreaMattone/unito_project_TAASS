FROM openjdk:13-alpine
RUN addgroup -S spring && adduser -S spring -G spring
#VOLUME /tmp
EXPOSE 8080
ARG DEPENDENCY=target
ADD ${DEPENDENCY}/*.jar appbootrest1.jar
ENTRYPOINT ["java","-jar","/appbootrest1.jar"]
