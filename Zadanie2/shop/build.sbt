//name := """shop"""
//organization := "com.example"

//version := "1.0-SNAPSHOT"

//lazy val root = (project in file(".")).enablePlugins(PlayScala)

//scalaVersion := "2.13.8"

//libraryDependencies += guice
//libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"

name := "shop"
 
version := "1.0" 
      
lazy val root = (project in file(".")).enablePlugins(PlayScala)

resolvers += Resolver.jcenterRepo

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"
      
resolvers += "Akka Snapshot Repository" at "https://repo.akka.io/snapshots/"
      
scalaVersion := "2.12.8"

libraryDependencies ++= Seq(
  ehcache ,
  ws ,
  specs2 % Test ,
  guice )
libraryDependencies ++= Seq(
  "com.typesafe.play" %% "play-slick" % "4.0.0",
  "com.typesafe.play" %% "play-slick-evolutions" % "4.0.0",
  "com.iheart" %% "ficus" % "1.5.0",
  "com.mohiva" %% "play-silhouette" % "7.0.0",
  "com.mohiva" %% "play-silhouette-password-bcrypt" % "7.0.0",
  "com.mohiva" %% "play-silhouette-persistence" % "7.0.0",
  "com.mohiva" %% "play-silhouette-crypto-jca" % "7.0.0",
  "com.mohiva" %% "play-silhouette-totp" % "7.0.0",
  "net.codingwell" %% "scala-guice" % "5.0.1"
)
libraryDependencies += "org.xerial" % "sqlite-jdbc" % "3.34.0"
libraryDependencies += "com.typesafe.scala-logging" %% "scala-logging" % "3.9.3"

//unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  
